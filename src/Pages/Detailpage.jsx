import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Components/Nav';
import { Form, Panel, Stack } from 'rsuite';

const Detailpage = () => {
  const { sectionNumber } = useParams();
  const [sectionDetails, setSectionDetails] = useState({});

  useEffect(() => {
    const fetchSectionDetails = async () => {
      try {
        const response = await axios.post('http://localhost:5000/search', {
          section_number: sectionNumber,
        });
        setSectionDetails(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchSectionDetails();
  }, [sectionNumber]);

  return (
    <>
      <Navbar />
      <h3 style={{ textAlign: "center" }}>Details of IPC-Sections</h3>
      <Stack
        justifyContent="center"
        alignItems="center"
        direction="column"
        style={{ height: '100vh' }}
      >
        <Panel
          bordered
          style={{ background: '#fff', width: 800, height: 500 }}
        >
          <Form fluid>
            <Form.Group>
              <Form.ControlLabel>IPC-Section:</Form.ControlLabel><br />
              <p>{sectionDetails.ipcSection}</p>
            </Form.Group>

            <Form.Group>
              <Form.ControlLabel>Description:</Form.ControlLabel><br />
              <p>{sectionDetails.description}</p>
            </Form.Group>

            <Form.Group>
              <Form.ControlLabel>Crime:</Form.ControlLabel><br />
              <p>{sectionDetails.crime}</p>
            </Form.Group>

            <Form.Group>
              <Form.ControlLabel>Punishment:</Form.ControlLabel><br />
              <p>{sectionDetails.punishment}</p>
            </Form.Group>

            <Form.Group>
              <Form.ControlLabel>Bailable/Non Bailable:</Form.ControlLabel><br />
              <p>{sectionDetails.bailable}</p>
            </Form.Group>

            <Form.Group>
              <Form.ControlLabel>Cognizable/Non Cognizable:</Form.ControlLabel><br />
              <p>{sectionDetails.cognizable}</p>
            </Form.Group>

            <Form.Group>
              <Form.ControlLabel>Link:</Form.ControlLabel><br />
              <p>{sectionDetails.link}</p>
            </Form.Group>
          </Form>
        </Panel>
      </Stack>
    </>
  );
};

export default Detailpage;
