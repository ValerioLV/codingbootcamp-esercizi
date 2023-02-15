const  MongoClient = require('mongodb').MongoClient;
let url = "mongodb+srv://valeriozzo:SussyDatab@cluster0.xdjw2cu.mongodb.net/test";

// MongoClient.connect(url)
//     .then((db) =>{
//         school = db;
//         collection = school.db('school');
//         console.log('database connesso');
//     })
//     .catch((err) => {
//         console.log(err);
//     })

//     MongoClient.connect(url, function(err, db) {
//         if (err) throw err;
//         let dbase = db.db("school");
//         dbase.createCollection("students", function(err, res) {
//             if (err) throw err;
//             console.log("Collection 1 creata");
//             db.close();
//         });
//     });

//     MongoClient.connect(url, function(err, db) {
//         if (err) throw err;
//         let dbase = db.db("school");
//         dbase.createCollection("courses", function(err, res) {
//             if (err) throw err;
//             console.log("Collection 2 creata");
//             db.close();
//         });
//     });

MongoClient.connect(url , (err, db) =>{
    if (err) throw err;
    let dbase = db.db("school");

    let studentsObj = [
        {nome: "pippo", cognome: "franco", matricola: "5849", corsi: "calculus, ingegneria, scienze politiche", esami: "calculus"},
        {nome: "tizia", cognome: "caia", matricola: "2230", corsi: "calculus, psichiatria, letteratura", esami: "scienze sociali, letteratura"},
        {nome: "caio", cognome: "tale", matricola: "6996", corsi: "biologia, anatomia, chimica", esami: "chimica"}
    ]

    let coursesObj = [
        {nome: "calculus", materia: "algebra", docente: "Annamaria Cipriani"},
        {nome: "ingegneria", materia: "ingegneria", docente: "Bob aggiustatutto"},
        {nome: "scienze politiche", materia: "scienze politiche", docente: "Ben Shapiro"},
        {nome: "psichiatria", materia: "psichiatria", docente: "Jordan Peterson"},
    ]

    // dbase.collection('students').insertMany(studentsObj, (err, res) =>{

    //     if (err) throw err;
    //     console.log(`Numero di record inseriti: ${res.insertedCount}`)
    // })

    // dbase.collection('courses').insertMany(coursesObj, (err, res) =>{

    //     if (err) throw err;
    //     console.log(`Numero di record inseriti: ${res.insertedCount}`)
    //     db.close();
    // })
})

MongoClient.connect(url, (err, db) =>{
    if (err) throw err;
    let dbase = db.db("school");
    dbase.collection('courses').findOne({}, (err, res) =>{
        if (err) throw err;
        console.log(res.nome)
        db.close();
    })
})

// MongoClient.connect(url, (err, db) => {
//     if (err) throw err;
//     let dbase = db.db("school");

//     let query = {matricola:'5849'}
//     dbase.collection('students').deleteMany(query, (err, obj) => {
//         if (err) {throw err;
//         console.log(`${obj.result} records cancellati` )
//         db.close()};
//     })
// })

MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    let dbase = db.db("school");

    let query = {nome:'pippo'}
    let newValue = {$set: {cognome: "ciccio", matricola:"0420"}}
    dbase.collection('students').updateOne(query, newValue ,(err, res) => {
        if (err) throw err;
        console.log(`record(s) aggiornati` )
        db.close();
    })
})