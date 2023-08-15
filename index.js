const express = require('express')
const app = express()
const connection = require('./knexfile')['development']
const db = require('knex')(connection)

app.use(express.json());

//TABLA USUARIO
//consulta todo lo que hay en la table "users" de la base de datos
app.get('/users', (req, res) => {
    db('users').then((users)=>{
        res.json(users)
    })
})

//consulta informacion por Id de la tabla users
app.get('/users/:id', (req, res) => {
    const {id} = req.params
    db('users')
        .where({user_id: id})
        .then((users) => {
            res.json(users)
        })
})

// insertar o crear inforamcion en la tabla users
app.post('/users', (req, res) => {
    const toCreate = req.body
    db('users').insert(toCreate)
        .then((users) => {
            res.json(users)
        })
})

// cambia un registro de la tabla users
app.put('/users/:id', (req, res) => {
    const {id} = req.params
    const toEdit = req.body
    db('users')
        .where({user_id: id})
        .update(toEdit)
        .then((users) => {
            res.json(users)
        })
})

app.delete('/users/:id', (req, res) => {
    const {id} = req.params
    db('users')
        .where({user_id: id})
        .del()
        .then((users) => {
            res.json(users)
        })
})


//TABLA HABILIDADES
//consulta todo lo que hay en la table "habilidades" de la base de datos
app.get('/habilidades', (req, res) => {
    db('habilidades').then((habilidades)=>{
        res.json(habilidades)
    })
})

//consulta informacion por Id de la tabla habilidades
app.get('/habilidades/:id', (req, res) => {
    const {id} = req.params
    db('habilidades')
        .where({id_habilidad: id})
        .then((habilidades) => {
            res.json(habilidades)
        })
})

// insertar o crear inforamcion en la tabla habilidades
app.post('/habilidades', (req, res) => {
    const toCreate = req.body
    db('habilidades').insert(toCreate)
        .then((habilidades) => {
            res.json(habilidades)
        })
})

// cambia un registro de la tabla habilidades
app.put('/habilidades/:id', (req, res) => {
    const {id} = req.params
    const toEdit = req.body
    db('habilidades')
        .where({id_habilidad: id})
        .update(toEdit)
        .then((habilidades) => {
            res.json(habilidades)
        })
})

app.delete('/habilidades/:id', (req, res) => {
    const {id} = req.params
    db('habilidades')
        .where({id_habilidad: id})
        .del()
        .then((habilidades) => {
            res.json(habilidades)
        })
})


//TABLA COMPANY
//consulta todo lo que hay en la table "company" de la base de datos
app.get('/company', (req, res) => {
    db('company').then((habilidades)=>{
        res.json(habilidades)
    })
})

//match
app.get('/company/match', (req, res) => {
    db('company').then((habilidades)=>{
       let match = res.json(habilidades.search_ability)
       console.log(`${match}`)
    })
})


//consulta informacion por Id de la tabla company
app.get('/company/:id', (req, res) => {
    const {id} = req.params
    db('company')
        .where({id_company: id})
        .then((company) => {
            res.json(company)
        })
})

// insertar o crear inforamcion en la tabla company
app.post('/company', (req, res) => {
    const toCreate = req.body
    db('company').insert(toCreate)
        .then((company) => {
            res.json(company)
        })
})

// cambia un registro de la tabla company
app.put('/company/:id', (req, res) => {
    const {id} = req.params
    const toEdit = req.body
    db('company')
        .where({id_company: id})
        .update(toEdit)
        .then((company) => {
            res.json(company)
        })
})

app.delete('/company/:id', (req, res) => {
    const {id} = req.params
    db('company')
        .where({id_company: id})
        .del()
        .then((company) => {
            res.json(company)
        })
})

const port = 3000;
app.listen(port, ()=> {
    console.log(`Esta escuchando en el puerto: ${port}`)
})