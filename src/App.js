import React from 'react'
class App extends React.Component{
    handle = ()=>{
        // window.open('https://www.google.com.vn','lamnn','width=500','height=600')
        fetch(
            'http://localhost:3000/api/v1/test'
        ,{
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, cors, *same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
        })
        .then(response => response.json())
.then(data => {
  console.log(data) // Prints result from `response.json()` in getRequest
})
.catch(error => console.error(error))
    }
    render(){
        
        return(
            <div>
                  
                <h1>{this.props.test}</h1>
                 <button onClick={this.handle}>aa</button>
            </div>
        )
    }
}
export default App