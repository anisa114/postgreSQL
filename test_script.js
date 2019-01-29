const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({//Constructing a new object
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});
//Connecting DB
client.connect((err) => {
    if (err) {
        return console.error("Connection Error", err);
    }
});
const firstNameQuery = `SELECT * FROM famous_people 
WHERE first_name ILIKE $1::text OR last_name ILIKE $1::text`

function getFamousPersonByName(name, callback){
    client.query(firstNameQuery,[name], callback)
}

function close( ) {
    client.end( );
}

    // getFamousPersonByName('Paul');
module.exports= {
    getFamousPersonByName: getFamousPersonByName,
    close: close
}


