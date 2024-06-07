import { useDispatch } from "react-redux";
import axios from "axios";
import { useHistory } from 'react-router-dom';
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
            <h2>Any comments you want to leave?</h2>
            <form onSubmit={handleSubmit}>
                <input data-testid="input"
                    type="text"
                    placeholder=""
                    value={comments}
                    onChange={(event) => setComments(event.target.value)}
                />
                <button data-testid="next" type="submit">Submit</button>
            </form>
        </>
    );
}


export default CommentsForm;