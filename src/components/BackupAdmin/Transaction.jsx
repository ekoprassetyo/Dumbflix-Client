import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import {IoCaretDownOutline} from 'react-icons/io5'
import '../../css/transaction.css'
import { Table } from 'react-bootstrap';

function Transaction() {
  return (

    <div className="Transaction">
         <div>
            <h3 style={{marginTop:"100px"}} className="text-light">Incoming Transaction</h3>
         </div>
    <Table striped bordered hover className="table table-dark" style={{}}>
    <thead>
    <tr className="text-danger">
        <th>No</th>
        <th>User</th>         
        <th>Bukti Transfer</th>
        <th>Remaining Active</th>
        <th>Status User</th>
        <th>Status Payment</th>
        <th>Action</th>
       </tr>
    </thead>
    <tbody>
    <tr className="">
        <td>1</td>
        <td>Radif Ganteng</td>
        <td>bca.jpg</td>
        <td>26 / Hari</td>
        <td className="text-success">Active</td>
        <td className="text-success">Approve</td>
        <td>
        <Dropdown className="dropdown">
            <Dropdown.Toggle variant="success" id="dropdown-basic" className="">
            </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item href="#/action-2" className="text-success">Aprroved</Dropdown.Item>
            <Dropdown.Item href="#/action-3" className="text-danger">Cancel</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
        </td>
      </tr>
      <tr>
        <td>2</td>
        <td>Haris Rahman</td>
        <td>bni.jpg</td>
        <td>26 / Hari</td>
        <td className="text-success">Active</td>
        <td className="text-success">Approve</td>
        <td>
        <Dropdown className="dropdown">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
            </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item href="#/action-2" className="text-success">Aprroved</Dropdown.Item>
            <Dropdown.Item href="#/action-3" className="text-danger">Cancel</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
        </td>
      </tr>
      <tr>
        <td>3</td>
        <td>Amin Subagiyo</td>
        <td>permata.jpg</td>
        <td>0 / Hari</td>
        <td className="text-danger">Not Active</td>
        <td className="text-danger">Cancel</td>
        <td>
        <Dropdown className="dropdown">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
            </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item href="#/action-2" className="text-success">Aprroved</Dropdown.Item>
            <Dropdown.Item href="#/action-3" className="text-danger">Cancel</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
        </td>
      </tr>
      <tr>
        <td>4</td>
        <td>Haris Astina</td>
        <td>permata.jpg</td>
        <td>0 / Hari</td>
        <td className="text-danger">Not Active</td>
        <td className="text-warning">Pending</td>
        <td>
        <Dropdown className="dropdown">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
            </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item href="#/action-2" className="text-success">Aprroved</Dropdown.Item>
            <Dropdown.Item href="#/action-3" className="text-danger">Cancel</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
        </td>
      </tr>
      <tr>
        <td>5</td>
        <td>Aziz Oni On</td>
        <td>bi.jpg</td>
        <td>0 / Hari</td>
        <td className="text-danger">Not Active</td>
        <td className="text-warning">Pending</td>
        <td>
        <Dropdown className="dropdown">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
            </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item href="#/action-2" className="text-success">Aprroved</Dropdown.Item>
            <Dropdown.Item href="#/action-3" className="text-danger">Cancel</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
        </td>
      </tr>
      <tr>
        <td>6</td>
        <td>Sugeng No Pants</td>
        <td>bni.jpg</td>
        <td>0 / Hari</td>
        <td className="text-danger">Not Active</td>
        <td className="text-warning">Pending</td>
        <td>
        <Dropdown className="dropdown">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
            </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item href="#/action-2" className="text-success">Aprroved</Dropdown.Item>
            <Dropdown.Item href="#/action-3" className="text-danger">Cancel</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
        </td>
      </tr>
    </tbody>
    </Table>
    </div>

    
//     <Table striped bordered hover variant="dark" className="" style= {{width:"75%", margin:"200px"}}>
//     <thead>
//       <tr className="text-danger">
//         <th>No</th>
//         <th>User</th>
//         <th>Bukti Transfer</th>
//         <th>Remaining Active</th>
//         <th>Status User</th>
//         <th>Status Payment</th>
//         <th>Action</th>
//       </tr>
//     </thead>
//     <tbody>
      
//     </tbody>
//   </Table>
  )
}

export default Transaction