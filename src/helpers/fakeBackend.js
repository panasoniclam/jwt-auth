 const configureFakeBackend = ()=>{
    let user = [{
        id:1,
        username:'test',
        password:'test',
        firstname:'Test',
        lastname:'User'
    }];
    let readFetch = window.fetch;
    window.fetch = (url,opts)=>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{

                //authenticate
                if(url.endsWith('/users/authenticate') && opts.method =='POST'){
                    //get paramater from login request
                    let params = JSON.parse(opts.body);
                    //find if any user matches login credentials
                    let filteredUser = user.filter(user=>{
                        return user.username === params.username && user.password == params.password ;

                    })

                    if(filteredUser.length){
                        //if login dtails are valid return user details and fake jwt token
                        let user = filteredUser[0] ;
                        let responseJson  = {
                            id:user.id,
                            username:user.username,
                            firstname:user.firstname,
                            lastname:user.lastname,
                            token:'fake-jwt-token'
                        };
                        resolve({ok:true,text:()=>Promise.resolve(JSON.stringify(responseJson))})
                    }else{
                        reject('username or password is incorrect');
                    }
                    return ;
                }

                //get user
                if(url.endsWith('/users') && opts.method === 'GET'){
                    //check for fake auth token in header and return users if valid , this security is implemented server side in a real apllication
                    if(opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token'){
                        resolve({ok:true,text:()=> Promise.resolve(JSON.stringify(user))}) ;
                    }else{
                        reject('Unauthoriesd')
                    }
                    return ;
                }

                //pass throungh any request not handle above
                readFetch(url,opts).then(response=>resolve(response))

            },500)
        })
    }
}