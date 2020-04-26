import React, { useState } from 'react';

import ContentSection from '../organisms/ContentSection';

function LoginPage(props) {

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit() {
    
  }

  return (
    <main className="page">
      <ContentSection title="Login">
        <form className="form" onSubmit={handleSubmit()}>
          <div className="form__item">
            <input type="text" value={username} placeholder="Username" onChange={(event) => setUserName(event.target.value)} />
          </div>
          <div className="form__item">
            <input type="password" value={password} placeholder="Password" onChange={(event) => setPassword(event.target.value) } />
          </div>
        </form>
      </ContentSection>
    </main>
  )
}

export default LoginPage;