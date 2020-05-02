import React, { useState } from 'react';

import ContentSection from '../organisms/ContentSection';

import { connect } from 'react-redux';
import { setUser } from '../../store/actions';

function LoginPage(props) {

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    fetch('http://localhost:3000/users')
      .then(response => response.json())
      .then((data) => {
        let allUsers = data;
        allUsers.forEach(user => {
          if(user.username === username && user.password === password) {
            this.props.setUser(user);

            // Then push user to store
          }
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <main className="page">
      <ContentSection title="Login">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form__item">
            <input type="text" value={username} placeholder="Username" onChange={(event) => setUserName(event.target.value)} />
          </div>
          <div className="form__item">
            <input type="password" value={password} placeholder="Password" onChange={(event) => setPassword(event.target.value) } />
          </div>
          <div className="form__item">
            <button type="submit" className="button button--hollow">Log in</button>
          </div>
        </form>
      </ContentSection>
    </main>
  )
}

const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setUser(user))
});

export default connect(
  mapDispatchToProps
)(LoginPage)