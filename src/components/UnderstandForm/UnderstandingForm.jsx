import { useDispatch } from "react-redux";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";


const UnderstandingForm = ()=>{
   
     const [getUnderstanding, setUnderstanding]= useState('')

     const history = useHistory()
     
     const dispatch= useDispatch()

     const handleSubmit =(event)=>{
        event.preventDefault()

       
            dispatch({
                type: 'ADD_UNDERSTANDING',
                payload: getUnderstanding
            })
            setUnderstanding("")
            history.push('/support')
            
        

     }
     return(
        <>
        <p>Understanding?</p>

    
<form onSubmit={handleSubmit}>
<input data-testid="input"
    
    type="text"
    placeholder=""
    value={getUnderstanding}
    onChange={(event)=> setUnderstanding(event.target.value)}
    />

    <button data-testid="next" type="submit"> Next </button>


    </form>
        </>
     )
}

export default UnderstandingForm