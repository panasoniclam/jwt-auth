import React from 'react'
import {Router, Redirect, Route} from "react-router-dom";
class Login extends React.Component{
    constructor(props){
        super(props)
        let loggedIn = true;
        if(token==null){
              loggedIn= false
        }
        this.state ={
            email:'',
            password:'',
            loggedIn:false,
            loggedIn:true
        }
    }
    handleChangeEmail = (e)=>{
        this.setState({
            email:e.target.value
        })
    }
    handleChangePassword =e =>{
        this.setState({
            password:e.target.value
        })
    }
    handleSubmit = e=>{
        e.preventDefault() ;
        // const {email,password} = this.state ;
        // fetch('http://localhost:8080/api/v1/user',{
        //     method:'POST',
        //     headers:{
        //         'Accept':'application/json,text/plan',
        //         'Content-Type':'application/json'
        //     },
        //     body:JSON.stringify({email,password})
        // })
        // .then(response=>response.json())
        // .then(data=>console.log(data))
        // .catch(err=>console.log(err))
        const {email,password}  = this.state ;
        if(this.state.email ==='A' && this.state.password ==="B"){
           localStorage.setItem("token","fsfskfhsdkfhsd")
            this.setState({
                loggedIn:true
            })
        }
    }
      render(){
        //   if(this.state.loggedIn){
        //       return <Redirect to="/admin"/>
        //   }
          return(
              <div>
                   <h1>lognin</h1>
                   <form method="POST" onSubmit={this.handleSubmit}> 
                      <label for="email">email</label>
                      <input type="text" name="email" onChange={this.handleChangeEmail} value={this.state.email}/>
                      <br/>
                      <label for="password"> password</label>
                      <input  type="password" name="password" onChange={this.handleChangePassword} value={this.state.password}/>
                      <br/>
                      <input type="submit" />
                   </form>
              </div>
          )
      }
     
}
export default Login