import React from "react";
import { CDBTable, CDBTableHeader, CDBTableBody, CDBContainer } from "cdbreact";
const Table = () => {
  return (
    <div
      className="container"
      style={{ display: "flex", justifyContent: "center" }}>
    
      
      <CDBTable>
        <CDBTableHeader>
          <tr>
            <th>Subject Code</th>
            <th>Subject</th>
            <th>Marks Obtained</th>
            <th>Maximum Marks</th>
          </tr>
        </CDBTableHeader>
        <CDBTableBody>
          <tr>
            <td>1</td>
            <td>Name</td>
            <td>Name</td>
            <td>Name</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Name</td>
            <td>Name</td>
            <td>Name</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Name</td>
            <td>Name</td>
            <td>Name</td>
          </tr>
        </CDBTableBody>
      </CDBTable>
    </div>
  );
};

export default Table;
