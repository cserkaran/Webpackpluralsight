let login = (username,password) =>
{
    if(username !== 'admin' || password !== 'admin'){
        console.log('incorrect login');
    }else{
        console.log('logged in');
    }
};

// login('admin','admin');
export {login}