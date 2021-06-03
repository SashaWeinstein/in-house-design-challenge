import React from 'react';
import './style_old.scss'

function App() {

  // constructor(props){
  //   this.state = {
  //     loggedIn: true,
  //
  // }
  // disableButtons(){
  //
  // }

  return (
    <div>
      <form>
        <h2>Login</h2>
        <div>
          <label>Username</label>
          <input type='text'></input>
        </div>
        <div>
          <label>Password</label>
          <input type='password'></input>
        </div>
        <div>
          <button className="login_button">Login</button>
        </div>
        <br/>
      </form>
      <form>
        <h2>Create New Account</h2>
        <div>
          <label>New Username</label>
          <input type='text'></input>
        </div>
        <div>
          <label>New Password</label>
          <input type='password'></input>
        </div>
        <div>
          <button className="create_button">Create Account</button>
        </div>
      </form>
      <br/>
      <Button onClick={() => this.props.disable_buttons() }>I Forgot my password</Button>

    </div>
  );
}

export default App;
