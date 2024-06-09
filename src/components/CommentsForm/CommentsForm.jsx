import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';

import { Button } from "@mui/material";
import { useState } from "react";


const CommentsForm = () => {
    const [comments, setComments] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();





    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("submit works");

        

        dispatch({
            type: 'ADD_COMMENT',
            payload: comments
        });

        
        history.push('/review')
    }


    return (
        <>
            
            <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
            <h2> <b>comments you want to leave?</b></h2>
    </Box>
            <form onSubmit={handleSubmit}>
                <input data-testid="input"
                    type="text"
                    placeholder=""
                    value={comments}
                    onChange={(event) => setComments(event.target.value)}
                />
              <Button variant="outlined" data-testid="next" type="submit">Submit</Button>
            </form>
        </>
    );
}


export default CommentsForm;