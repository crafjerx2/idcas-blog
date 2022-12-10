

fetch('http://localhost:5000/api/users')
.then(res =>  res.json() )
.then(data => console.log(data.users) )
.catch(error => console.log(error) )



