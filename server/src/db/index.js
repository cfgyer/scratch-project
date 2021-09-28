import 'dotenv/config';

const { Pool } = require('pg');



// try to move this to env so you don't need to set connection 
// string explicitly with Pool constructor
// const PG_URI = 'postgres://fuvjyliw:h96bROlbK-Ins_2_0dAlzoMG8vah3V9K@kashin.db.elephantsql.com/fuvjyliw';


const pool = new Pool({
  // connectionString: process.env.PG_URI
  // to refernece env you need to import env package
  connectionString: 'postgres://fuvjyliw:h96bROlbK-Ins_2_0dAlzoMG8vah3V9K@kashin.db.elephantsql.com/fuvjyliw'
});

// add notes about db schema

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  },
};