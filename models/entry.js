const { Pool } = require('pg');
const pool = new Pool({
    host: 'localhost', 
    user: 'monica',
    database: 'demo',
    password: '123456'
  })



//Estos métodos hablan directamente con la BBDD con las queries que hemos creado 
// GET
const getEntriesByEmail = async (email) => {
    let client,result;
    try{
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(`
                SELECT e.title,e.content,e.date,e.category,a.name,a.surname,a.image
                FROM entries AS e
                INNER JOIN authors AS a
                ON e.id_author=a.id_author
                WHERE a.email=$1
                ORDER BY e.title;`,[email])
        result = data.rows
    }catch(err){
        console.log(err);
        throw err;
    }finally{
        client.release();    
    }
    return result
}

// GET
const getAllEntries = async () => {
    let client,result;
    try{
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(`SELECT * FROM entries;`)
        result = data.rows
    }catch(err){
        console.log(err);
        throw err;
    }finally{
        client.release();    
    }
    return result
}

// CREATE
const createEntry = async (entry) => {
    const {title,content,email,category} = entry;
    let client,result;
    client = await pool.connect(); // Espera a abrir conexion
    try{
        const data = await client.query(`INSERT INTO entries(title,content,id_author,category) 
                                    VALUES ($1,$2,
                                    (SELECT id_author FROM authors WHERE email=$3),$4)`
                                    ,[title,content,email,category])
        result = data.rowCount
    }catch(err){
        console.log(err);
        throw err;
    }finally{
        client.release();    
    }
    return result
}

// DELETE 
//UPDATE

const entries = {
    getEntriesByEmail,
    getAllEntries,
    createEntry,
    //deleteEntry
    //updateEntry
}

module.exports = entries;


// Pruebas
/*
    getEntriesByEmail("birja@thebridgeschool.es")
    .then(data=>console.log(data))
*/


// getAllEntries()
// .then(data=>console.log(data))


/*
let newEntry = {
    title:"Nos gustan las tortillas",
    content:"En la MArquina las tortillas vuelan antes de las 12 por culpa de The Bridge",
    email:"albertu@thebridgeschool.es",
    category:"gastronomía"}

createEntry(newEntry)
.then(data=>console.log(data))

*/





