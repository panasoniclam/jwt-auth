import React from 'react'
import Admin from './components/Admin'
import Login from './components/Login'
import Logout from './components/Logout'
// import Authentication from './helpers/authentication'
import {  Switch } from "react-router-dom";
// const PrivateRoute = ({component:component,...rest})=>{
//     <Route
//          {...rest} render={(props)=>(
//             Authentication('/Admin/') === true 
//              ? <Component {...props}/> : <Redirect to='/singin'/>
//          )}
//     />
// }
class App extends React.Component {
    render() {
        return (
            // <Switch>
            //     <Route exact path="/" component={Login} />
            //     <Route path="/admin" component={Admin} />
            //     <Route path="/logout" component={Logout} />
            // </Switch> 
            <div>
                   <Login/>
            </div>
           
        )
    }
}
export default App