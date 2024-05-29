from flask import Flask, request, jsonify
from flask_cors import CORS
from openai import OpenAI
import re
import pandas as pd

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})

OPENAI_API_KEY = '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'
api_key = OPENAI_API_KEY
client = OpenAI(api_key=api_key)

def extract_sections(text):
    # Regular expression to match section numbers like "Section 123"
    pattern = r"\d+"
    matches = re.findall(pattern, text)
    return matches

def generate_answer(user_input):
    prompt = f"Provide the IPC sections applicable to the crime described below. {user_input}. Include only the section numbers"

    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": prompt},
        ],
    )
    return response.choices[0].message.content

def search_section_number(file_path, section_number):
    # Read the Excel file into a DataFrame
    df = pd.read_excel(file_path)
    
    # Filter rows based on the section number
    result = df[df['IPC-Section'] == section_number]

    # Return the filtered rows as a dictionary
    return result.to_dict('records')

@app.route('/predict', methods=['POST'])
def handle_prediction():
    data = request.get_json()
    user_input = data.get('text', '')
    result = generate_answer(user_input)
    print(result)
    result_main = list(extract_sections(result))  # Convert set to list
    return jsonify(result_main)

@app.route('/search', methods=['POST'])
def handle_search():
    data = request.get_json()
    file_path = 'FF1.xlsx'
    section_number = data.get('section_number', '')
    result = search_section_number(file_path, section_number)
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)