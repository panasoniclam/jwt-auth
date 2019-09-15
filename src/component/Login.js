import React from 'react'
import { Link,Redirect} from 'react-router-dom'
class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email:'',
            password:'',
            loggedIn:false
        }
    }
    handleSubmit =e=>{
        e.preventDefault() ;
        const {email,password} = this.state;
        if(email === 'A' && password =='B') {
            localStorage.setItem("token","lamnn")
            this.setState({
                loggedIn:true
            })
        }
 
    }
    render(){
        const {email,password} = this.state 
         if(this.state.loggedIn){
             return <Redirect to="/admin"/>
         }
        return(
            <div>
                  <h1>login</h1>
                  <form onSubmit={this.handleSubmit} method="POST"><br/>
                      <label for="email">email</label>
                      <input type="text" name="email" value={email} onChange={e=>this.setState({email:e.target.value})}/> <br/>
                      <label for="password">password</label>
                      <input   type="password" name="password" value={password} onChange={e=>this.setState({password:e.target.value})}/><br/>
                      <input type="submit"/>
                  </form>
            </div>
        )
    }
}
export default Login