import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import axios from "axios";

const Review = () => {
    const feeling = useSelector(store => store.feeling);
    const understanding = useSelector(store => store.understanding);
    const support = useSelector(store => store.support);
    const comments = useSelector(store => store.comments);

    const history = useHistory();
    const dispatch = useDispatch()


    const handleSubmit = (event) => {
        event.preventDefault()

        const feedbackData = {
            feeling: feeling[0],  
            understanding: understanding[0],
            support: support[0],
            comments: comments[0],
            date: new Date().toISOString(),  // Current date in ISO format
            flagged: false  // Default to false
        };


        axios.post('/api/feedback', feedbackData)
        .then((response) => {
            console.log("Feedback submitted:", response.data);
            // Clear the state after successful submission
            dispatch({ type: 'RESET_FEELING' });
            dispatch({ type: 'RESET_UNDERSTANDING' });
            dispatch({ type: 'RESET_SUPPORT' });
            dispatch({ type: 'RESET_COMMENTS' });
            history.push("/");
        })
        .catch((error) => {
            console.log('Error in Axios POST request:', error);
        });
};


    return (
        <>
            <h2>Reviews</h2>
            <ul>
                {feeling.map((feel) => (
                    <li key={feel.id}>Feeling: {feel}</li>
                ))}
            </ul>

            <ul>
                {understanding.map((under) => (
                    <li key={under.id}>Understanding: {under}</li>
                ))}
            </ul>

            <ul>
                {support.map((sup) => (
                    <li key={sup.id}>Support: {sup}</li>
                ))}
            </ul>

            <ul>
                {comments.map((comm) => (
                    <li key={comm.id}>Comment: {comm}</li>
                ))}
            </ul>

            <button data-testid="next" onClick={handleSubmit}>Reset</button>
        </>
    );
}

export default Review;

