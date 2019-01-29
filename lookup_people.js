const person = process.argv[2];
const testDb = require('./test_script');//test_script.js
console.log("Searching...");


testDb.getFamousPersonByName(person, function(err, results ){
    if(err){
        console.log("Error");
    }
    else {
        let length = results.rows.length;
        console.log(`Found ${length} person(s) by name '${person}':`)
        results.rows.forEach(function (row) {
            let order = results.rows.indexOf(row) + 1;
            console.log(`-${order}: ${row.first_name} ${row.last_name}, born ${formatDate(row.birthdate)} `) 
        });
    }
    testDb.close();
});

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