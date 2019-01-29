const config = require('./knex_settings.js');
const knex  = require('knex')(config);
const person = process.argv[2];
console.log("Searching...");

//Selecting famous people by name
 knex('famous_people').select()
.where('first_name', person)
.orWhere('last_name', person)
.then (personsInfo)
.then(() => knex.destroy())
.catch(err => console.log(err.message));


//Output a formatted string with the person's name
function personsInfo(rows){
    rows.forEach(function (row) {
        let order = rows.indexOf(row) + 1;
       console.log(`-${order}: ${row.first_name} ${row.last_name}, born ${formatDate(row.birthdate)} `)
    });
}
//Function to format Date
function formatDate(dateValue){
    let day = dateValue.getDate();
    let month = dateValue.getMonth() + 1;
    let year = dateValue.getFullYear();
    if(day < 10){
        day = `0${day}`;
    }   
    if(month < 10){
         month = `0${month}`;
    }
    return `'${year}-${month}-${day}'`
}