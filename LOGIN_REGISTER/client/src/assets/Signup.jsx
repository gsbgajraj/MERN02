import React from 'react';

function Signup(){
return(
    <>
       <h2 style={{ textAlign: 'center', color: '#333' }}>Sign Up</h2>
                <label htmlFor="username" style={{ display: 'block', margin: '10px 0 5px', color: '#555' }}>Username</label>
                <input type="text" id="username" name="username" required style={{ width: '100%', padding: '8px', marginBottom: '10px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px' }} />

                <label htmlFor="email" style={{ display: 'block', margin: '10px 0 5px', color: '#555' }}>Email</label>
                <input type="email" id="email" name="email" required style={{ width: '100%', padding: '8px', marginBottom: '10px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px' }} />

                <label htmlFor="password" style={{ display: 'block', margin: '10px 0 5px', color: '#555' }}>Password</label>
                <input type="password" id="password" name="password" required style={{ width: '100%', padding: '8px', marginBottom: '10px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px' }} />

                <button type="submit" style={{ backgroundColor: '#4caf50', color: '#fff', padding: '10px', border: 'none', borderRadius: '4px', cursor: 'pointer', width: '100%' }}>Sign Up</button>
    </>
  );
};

export default Signup;