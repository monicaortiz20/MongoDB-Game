// getEntries()
//createEntry()
const entry = require('../models/entry')

const getEntries = async (req, res) => {
    let entries;
    if(req.query.email){  //si me pasas un mail, mándame todo de ese mail
        entries = await entry.getEntriesByEmail(req.query.email); //getEntriesByEmail está dentro de models/entry.js
    }
    else {  // si no, mandame todo 
        entries = await entry.getAllEntries();
    }

    res.status(200).json(entries); //pero siempre me devuelve algo: []] con entries encontradas
}


//Crear entry por email 
const createEntry = async(req, res) => {
    const newEntry = req.body; // {title, content, email, category} los datos llegan en este formato y orden
    const response = await entry.createEntry(newEntry)
    res.status(201).json({
        "items_created":response,
        data: newEntry
    })
}

module.exports = {
    getEntries,
    createEntry
    //deleteEntry - DELETE
    //updateEntry - PUT
}