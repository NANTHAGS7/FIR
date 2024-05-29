import React from 'react';


import '../assets/Al.css'
class Table extends React.Component {
  render() {
    

    return (
        <table>
        <thead>
          <tr>
            <th>Case</th>
            <th>Section</th>
            <th>Penalty</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Theft</strong></td>
            <a href=''><td>IPC Section 379</td></a>
            <td>Imprisonment for up to 3 years, or fine, or both.</td>
          </tr>
          <tr>
            <td><strong> Robbery</strong></td>
            <a href=''><td>IPC Section 392</td></a>
            <td>Imprisonment for up to 7 years, and fine</td>
          </tr>
          <tr>
            <td><strong>Murder</strong></td>
            <a href=''><td>IPC Section 376</td></a>
            <td>Minimum 10 years imprisonment, extendable to life imprisonment, and fine</td>
          </tr>
          <tr>
            <td><strong>Kidnapping</strong></td>
            <a href=''><td>IPC Section 363</td></a>
            <td> Imprisonment for up to 7 years, and fine</td>
          </tr>					
          <tr>
            <td><strong>Dacoity</strong></td>
            <a href=''><td> IPC Section 395</td></a>
            <td>Imprisonment for life or rigorous imprisonment for up to 10 years, and fine </td>
          </tr>
          <tr>
            <td><strong>Cyber Crime Hacking</strong></td>
            <a href=''><td> IPC Section 66</td></a>
            <td>Imprisonment for up to 3 years, or fine up to 2 lakh rupees, or both</td>
          </tr>
          <tr>
            <td><strong>Domestic Violence</strong></td>
            <a href=''><td>IPC Section 498A</td></a>
            <td>Imprisonment for up to 3 years, and fine</td>
          </tr>
          <tr>
            <td><strong>Corruption</strong></td>
            <a href=''><td> IPC Section 7 and Prevention of Corruption Act</td></a>
            <td> Varies based on the nature and extent of corruption imprisonment up to 7 years</td>
          </tr>
          <tr>
            <td><strong>Rape</strong></td>
            <a href=''><td>IPC Section 376</td></a>
            <td>Minimum 10 years imprisonment, extendable to life imprisonment, and fine</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Table;
