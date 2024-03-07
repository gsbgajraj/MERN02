const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");

// Create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'Rtu@1888'
  });

try{
  connection.query('show tables',(err,result)=>{
    if (err) throw err;
    console.log(result);
  })
}
catch(err){
    console.log(err)
}

const getRandomUser= () => {
    return {
      id: faker.string.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
  }
