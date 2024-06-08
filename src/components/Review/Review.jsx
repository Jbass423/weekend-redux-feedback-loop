import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import axios from "axios";

const Review = () => {
    const feelings = useSelector(store => store.feeling);
    const understanding = useSelector(store => store.understanding);
    const support = useSelector(store => store.support);
    const comments = useSelector(store => store.comments);

    const history = useHistory();
    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault()

        axios.post('/api/feedback', {
            feelings,
            understanding,
            support,
            comments
        })
        .then((response)=>{
            console.log("checking payload", response.data)
        })
        .catch((error)=>{
            console.log('error in axios post jsx', error )
        })

        dispatch({ type: 'RESET_FEELING' })
        dispatch({ type: 'RESET_UNDERSTANDING' })
        dispatch({ type: 'RESET_SUPPORT' })
        dispatch({ type: 'RESET_COMMENTS' })

        history.push("/");

    }

    return (
        <>
           <h2>Reviews</h2>
            <ul>
                {feelings.map((feel) => (
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

