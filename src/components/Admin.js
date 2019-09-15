import React from 'react'
import {Link} from 'react-router-dom'
 

class Admin extends React.Component{
   constructor(props){
         super(props)
         const token = localStorage.getItem("token")
         let loggedIn = true;
         if(token==null){
               loggedIn= false
         }
         this.state = {
               loggedIn
         }
   }
      render(){
            if(this.state.loggedIn ===false){
                  return <Redirect to="/"/>
            }
          return(
              <div>
                    <h1>admin</h1>
                    <Link to="/logout">logout</Link>
              </div>
          )
      }
     
}
export default Admin