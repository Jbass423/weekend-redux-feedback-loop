
import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const AdminPage =() => {

  
    const feedbacks = useSelector(store => store.feedback)
    
    return(
        <>
        <h1>Feedbacks</h1>
        <table>
          <thead>
            <tr>
              <th>Feeling</th>
              <th>Understanding</th>
              <th>Support</th>
              <th>Comments</th>
              <th>Flagged</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {feedbacks.map((feed) => {
              return (
                <tr key={feed.id}>
                  <td>{feed.feeling}</td>
                  <td>{feed.understanding}</td>
                  <td>{feed.support}</td>
                  <td>{feed.comments}</td>
                  <td>{feed.flagged ? 'Yes' : 'No'}</td>
                  <td>{new Date(feed.date).toLocaleDateString()}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    )
}

export default AdminPage