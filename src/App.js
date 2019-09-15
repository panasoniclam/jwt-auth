import React from 'react'
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Login from './component/Login'
import Logout from './component/Logout'
import Admin from './component/Admin'
class App extends React.Component{
    render(){
        return(
           <Router>
               <Switch>
                   <Route exact path="/" component={Login}/>
                   <Route   path="/logout" component={Logout}/>
                   <Route   path="/admin" component={Admin}/>
               </Switch>
           </Router>
           
           
        )
    }
}
export default App