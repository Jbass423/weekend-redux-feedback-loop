import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import axios from "axios";

import { useHistory } from 'react-router-dom';
import { useState } from "react";

const FeelingForm = ()=>{
    const [newFeeling, setNewFeeling] = useState("")

    const history = useHistory();

    const dispatch = useDispatch()

    const handleSubmit =(event)=>{
        event.preventDefault()
        console.log("submit works");

       
            dispatch({ type: 'ADD_FEELING', payload: newFeeling});
           
            history.push('/understanding');
    
        
    }
   
    return(
        <>
        <h2> <b>How are you feeling today </b> </h2>

        <p>Feeling?</p>

    
        <form onSubmit={handleSubmit}>
        <input data-testid="input"
            
            type="text"
            placeholder=""
            value={newFeeling}
            onChange={(event)=> setNewFeeling(event.target.value)}
            />
            
            
            <button data-testid="next" type="submit"> Next </button>
            
            


            </form>
        </>
    )
}
export default FeelingForm