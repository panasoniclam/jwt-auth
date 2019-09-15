import React from 'react'
import { Link,Redirect} from 'react-router-dom'
class Admin extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            loggedIn:true
        }
           
      
    }
     componentWillMount = ()=>{
         const token = localStorage.getItem("token") 
        if(token==null){
            this.setState({
                loggedIn:false
            })
        }
     }
    render(){
        if(this.state.loggedIn ==false){
            return <Redirect to="/"/>
        }
        return(
              <div>
            <h2>t his is page admin</h2>
            <Link to="/logout">logout</Link>
        </div>
        )
      
}
}
export default Admin