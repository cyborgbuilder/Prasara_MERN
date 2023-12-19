import React from 'react'
import PaymentHistory from './PaymentHistory';

function Settings() {
    const isLoggedIn = !!localStorage.getItem('token');
    let isAdmin = false;
    let isOwner = false;
  
    if (isLoggedIn) {
      const token = localStorage.getItem('token');
      try {
        const decodedToken = JSON.parse(atob(token.split('.')[1]));
        isAdmin = decodedToken.isAdmin;
        isOwner = decodedToken.isOwner;
      } catch (error) {
        console.error('Error parsing token:', error);
      }
    }
  return (
    <div>
     
      {isAdmin && <h1> Settings are not permitted</h1>}
      {isOwner && <PaymentHistory />}
    </div>
  )
}

export default Settings
