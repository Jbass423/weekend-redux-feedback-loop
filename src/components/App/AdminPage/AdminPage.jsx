
import React from "react";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from "axios";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const AdminPage =() => {

  
    const feedbacks = useSelector(store => store.feedback)
    const history = useHistory()
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        axios({
            method: "DELETE",
            url: `/api/feedback/${id}`
        })
        .then((response)=>{
            console.log("response in delete axios", response);
          
            dispatch({ type: 'DELETE_FEEDBACK', payload: id })

      })
      .catch((error)=>{
        console.error("it failed in delete", error)
      })
    }

    const sendHome = (event)=> { 
        event.preventDefault()
        

        history.push("/")
    }
    
    return(
        <>
 <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>FEEINGS</TableCell>
            <TableCell align="right">UNDERSTANDING</TableCell>
            <TableCell align="right">SUPPORT</TableCell>
            <TableCell align="right">COMMENTS</TableCell>
            <TableCell align="right">FLAGGED</TableCell>
             <TableCell align="right">DATE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {feedbacks.map((feed) => (
            <TableRow
              key={feed.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                
              </TableCell>
              <TableCell >{feed.feeling}</TableCell>
              <TableCell >{feed.understanding}</TableCell>
              <TableCell >{feed.support}</TableCell>
              <TableCell >{feed.comments}</TableCell>
              <TableCell >{feed.flagged ? 'Yes' : 'No'}</TableCell>
              <TableCell >{new Date(feed.date).toLocaleDateString()}</TableCell>
              <Button variant="outlined" onClick={() => handleDelete(feed.id)}>Delete</Button>
                                        </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  

       
        <Button onClick={sendHome} variant="outlined">HOME</Button>
      </>
    )
}

export default AdminPage