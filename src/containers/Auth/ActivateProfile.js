import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom'; // Import withRouter from react-router-dom
import axios from 'axios';

const ActivateProfile = ({ match, history }) => {
  useEffect(() => {
    const { id } = match.params; // Access the "id" parameter from the route
    console.log({id});

    // Make the API call to activate the profile
    // Assuming you have axios installed and properly imported
    axios
      .post('http://localhost:8090/api/auth/activateProfile', { id })
      .then(response => {
        // Handle the data received from the API
        console.log('User Data:', response.data);
        history.replace('/login'); // Navigate to the "/login" route on success
      })
      .catch(err => {
        console.error('Error:', err);
        history.replace('/auth'); // Navigate to the "/auth" route on error
      });
  }, [match.params, history]);

  return <div>User Detail Component</div>;
};

export default withRouter(ActivateProfile); // Bind the component to the route using withRouter
