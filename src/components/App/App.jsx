import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import FeelingForm from '../FeelingForm/FeelingForm';
import UnderstandingForm from '../UnderstandForm/UnderstandingForm';
import SupportForm from '../SupportForm/SupportForm';
import CommentsForm from '../CommentsForm/CommentsForm';
import Review from '../Review/Review';
import SuccessPage from './SuccessPage/SuccessPage';
import { HashRouter as Router, Route } from "react-router-dom"
import './App.css';




function App() {
  const dispatch= useDispatch()

  useEffect(()=>{
    fetchFeedback()
  },[])

  const fetchFeedback=()=>{
    axios({
      method: 'GET',
      url: '/'
    })
    .then((response)=>{
      dispatch({
        type: 'GET_FEEDBACK',
        payload: response.data
      })
    })
    .catch((error)=>{
      console.log("failed in Get jsx", error)
    })
  }

  return (
    <Router>
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Route exact path="/">
      <FeelingForm/>
      </Route>

      <Route exact path="/understanding">
      <UnderstandingForm />
      </Route>
      <Route exact path="/support">
        <SupportForm/>
      </Route>
      <Route exact path="/comments">
        <CommentsForm/>
      </Route>
      <Route exact path="/review">
        <Review/>
      </Route>
      <Route exact path="/success">
        <SuccessPage />
      </Route>

    </div>
    </Router>
  );
}

export default App;
