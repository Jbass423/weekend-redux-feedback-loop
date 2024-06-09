import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button } from "@mui/material";
import { useState } from "react";


const SupportForm = () => {
    const [support, setSupport] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();



    const handleSubmit = (event) => {
        event.preventDefault();



        event.preventDefault()
        console.log("submit works");


        dispatch({
            type: 'ADD_SUPPORT',
            payload: support
        });


        history.push('/comments')

    }


    return (
        <>

            <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
                <h2> <b>Support?</b></h2>
            </Box>
            <form onSubmit={handleSubmit}>
                <input data-testid="input"
                    type="text"
                    placeholder=""
                    value={support}
                    onChange={(event) => setSupport(event.target.value)}
                />
                <Button variant="outlined" data-testid="next" type="submit"><ArrowForwardIcon/></Button>
            </form>
        </>
    );

}
export default SupportForm;