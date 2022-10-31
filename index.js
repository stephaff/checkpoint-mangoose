const Connection = require('./database/Database')

const Person = require('./model/personModel')

Connection()

// ajouter une personne

let person = new Person()

// person.nom = 'affali',
// person.age = 35,
// person.favoriteFoods = ['riz', 'foutou']

// person.save().then(person =>
//         console.log(person)
//     )

let listPersonne = [
    {
        nom : 'affali',
        age : 35,
        favoriteFoods : ['riz', 'foutou'] 
    },
    {
        nom : 'steph',
        age : 6,
        favoriteFoods : ['pizza', 'sauce arachide'] 
    },
    {
        nom : 'moussa',
        age : 18,
        favoriteFoods : ['attieke', 'alloco'] 
    }
]

// ajouter plusieurs personnes

// Person.create(listPersonne)

// recupérer toutes les personnes

// Person.find({}).then(person => console.log(person))

//récupérer une personne qui aime "alloco"

// Person.findOne({ favoriteFoods : "alloco"}).then(person => console.log(person))

// récupération par _id

// Person.findById({ _id : '635fb6dd7ca00a0b20491a2a'}).then(person => console.log(person))

//supprimer une personne

// Person.findOneAndRemove({ _id : '635fb6dd7ca00a0b20491a2a' }).then(person => console.log(person))

//mise à jour

// Person.findOneAndUpdate({ nom : 'affali' }, { age : 2}).then(person => console.log(person))
