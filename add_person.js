const config = require('./knex_settings.js');
const knex  = require('knex')(config);
const first_name = process.argv[2];
// console.log("This is the first name", first_name);
const last_name = process.argv[3];
// console.log("This is the last name", last_name);
const birthdate= process.argv[4];
// console.log("This is the birthdate", birthdate);


//Insert values into the database

 knex('famous_people')
.returning('*')
.insert({first_name: first_name, last_name: last_name, birthdate: birthdate })
.then(console.log)
.then(() => knex.destroy())
.catch(err => console.log(err.message));
