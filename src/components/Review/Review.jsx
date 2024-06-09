import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Box from '@mui/material/Box';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import { useDispatch } from "react-redux";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Button } from "@mui/material";
import axios from "axios";

const Review = () => {
    const feeling = useSelector(store => store.feeling);
    const understanding = useSelector(store => store.understanding);
    const support = useSelector(store => store.support);
    const comments = useSelector(store => store.comments);

    const history = useHistory();
    const dispatch = useDispatch();

    const handleChange = (event) => {
        event.preventDefault()

        dispatch({
            type: "CHANGE_COMMENT"
        })

        history.push('/comments')


    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const feedbackData = {
            feeling: feeling[0],
            understanding: understanding[0],
            support: support[0],
            comments: comments[0],
            date: new Date().toISOString(),
            flagged: false
        };


        axios.post('/api/feedback', feedbackData)
            .then((response) => {
                console.log("Feedback submitted:", response.data);


                history.push("/success");
            })
            .catch((error) => {
                console.log('Error in Axios POST request:', error);
            });
    };


    return (
        <>
            <h2>Review</h2>
            <ul>
            <Box
      height={200}
      width={200}
      my={4}
      display="flex"
      alignItems="center"
      gap={4}
      p={2}
      sx={{ border: '2px solid grey' }}
    >
        {feeling.map((feel) => (
                    <li key={feel.id}>Feeling: {feel}</li>
                ))}
    </Box>
               
            </ul>

            <ul>
            <Box
      height={200}
      width={200}
      my={4}
      display="flex"
      alignItems="center"
      gap={4}
      p={2}
      sx={{ border: '2px solid grey' }}
    >
         {understanding.map((under) => (
                    <li key={under.id}>Understanding: {under}</li>
                ))}
    </Box>

                
            </ul>

            <ul>
            <Box
      height={200}
      width={200}
      my={4}
      display="flex"
      alignItems="center"
      gap={4}
      p={2}
      sx={{ border: '2px solid grey' }}
    >
       {support.map((sup) => (
                    <li key={sup.id}>Support: {sup}</li>
                ))}
    </Box>
              
            </ul>

            <ul>
            <Box
      height={200}
      width={200}
      my={4}
      display="flex"
      alignItems="center"
      gap={4}
      p={2}
      sx={{ border: '2px solid grey' }}
    >
          {comments.map((comm) => (
                    <li key={comm.id}>Comment: {comm} <Button variant="outlined" onClick={handleChange}> Change  <ChangeCircleIcon/> </Button> </li>

                ))}
    </Box>
            
            </ul>

            <Button variant="outlined" data-testid="next" onClick={handleSubmit}>Submit <ArrowUpwardIcon/></Button>
        </>
    );
}

export default Review;

