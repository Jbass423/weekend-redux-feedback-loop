import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
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
            <h2> <b>support?</b></h2>
    </Box>
            <form onSubmit={ handleSubmit }>
                <input data-testid="input"
                    type="number"
                    placeholder=""
                    value={support}
                    onChange={(event) => setSupport(event.target.value)}
                />
                <button data-testid="next" type="submit">Next</button>
            </form>
        </>
    );

}
export default SupportForm;