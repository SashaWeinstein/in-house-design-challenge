import React from 'react';
import './style.scss'

class App extends React.Component{

  constructor() {
    super();
    this.state = {
      user_forgot : false
    }

  }

  disableButtons(){
    this.state.user_forgot = !this.state.user_forgot
    this.forceUpdate()
  }

  notBuiltYet(){
    window.alert('sorry, that feature is not built yet')
  }

  render() {
    if (!this.state.user_forgot){
      var reset_password_text = "I forgot my password :("
    } else{
      var reset_password_text = "I reset my password ready to login :)"
    }
    return (
        <div>
          <form>
            <h2>Login</h2>
            <div>
              <label>Username</label>
              <input type='text'/>
            </div>
            <div>
              <label>Password</label>
              <input type='password'/>
            </div>
            <div>
              <button onClick={this.notBuiltYet} className="login_button" disabled={this.state.user_forgot}>Login</button>
            </div>
            <br/>
          </form>
          <form>
            <h2>Create New Account</h2>
            <div>
              <label>New Username</label>
              <input type='text'/>
            </div>
            <div>
              <label>New Password</label>
              <input type='password'/>
            </div>
            <div>
              <button onClick={this.notBuiltYet} className="create_button" disabled={this.state.user_forgot}>Create Account</button>
            </div>
          </form>
          <br/>
          <div>
            <button className="forgot_button" onClick={() => this.disableButtons()}>{reset_password_text}</button>
          </div>
        </div>
    );
  }
}

export default App;
