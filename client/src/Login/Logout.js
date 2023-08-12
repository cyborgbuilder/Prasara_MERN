import React from 'react';
import { Link } from 'react-router-dom';


function Logout() {
    const handleLogout = () => {
      // Clear the token from local storage or your authentication mechanism
      localStorage.removeItem('token');
    };

  return (
    <div>
      <Link to="/" onClick={handleLogout}>
      Logout
    </Link>
    </div>
  )
}

export default Logout
