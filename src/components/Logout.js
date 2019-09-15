import React from 'react'
import {Link} from 'react-router-dom'
export default class Logout extends React.Component{
 
      render(){
          return(
              <div>
                    <h1>you have been logged out</h1>
                    <Link to="/">login again</Link>
              </div>
          )
      }
     
}
 