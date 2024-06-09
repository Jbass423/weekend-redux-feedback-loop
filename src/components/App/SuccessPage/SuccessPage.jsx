import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";

import { Button } from "@mui/material";

const SuccessPage = () => {
   const history = useHistory()
   const dispatch = useDispatch()

   const handleReset = () => {

      dispatch({ type: 'RESET_FEELING' });
      dispatch({ type: 'RESET_UNDERSTANDING' });
      dispatch({ type: 'RESET_SUPPORT' });
      dispatch({ type: 'RESET_COMMENTS' });
      history.push("/");

   }

   return (
      <>
         <h1> <b> Thank you and Congrats your submisson has been sent</b> </h1>
         <h2> <b>click the button to take another </b> </h2>

         <Button variant="outlined" data-testid="next" onClick={handleReset} > Restart </Button>
      </>
   )
}

export default SuccessPage