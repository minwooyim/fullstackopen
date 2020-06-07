const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require('cors')

app.use(cors())
app.use(express.json());

const unknownEndPoint = (req, res) => {
  res.status(404).send({ error: "unknown end point"})
}

app.use(unknownEndPoint)

let persons = [
  {
    name: "Arto Hellas",
    number: "040-123456",
    id: 1,
  },
  {
    name: "Ada Lovelace",
    number: "39-44-5323523",
    id: 2,
  },
  {
    name: "Dan Abramov",
    number: "12-43-234345",
    id: 3,
  },
  {
    name: "Mary Poppendieck",
    number: "39-23-6423122",
    id: 4,
  },
];

app.get("/", (req, res) => {
  res.send(persons);
});

app.get("/api/persons", (req, res) => {
  res.send(persons);
});

app.get("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  const person = persons.find((person) => person.id === id)

  if(person){
    res.json(person)
  } else {
    res.status(404).end()
  }

})

app.get("/info", (req, res) => {
  const personsLength = persons.length
  todays_date = new Date()

  res.send(
    `
      <p>Phonebook has info for ${personsLength} people</p>
      <p>${todays_date}</p>
    `
  )
});

const generateId = () => {
  const maxId = persons.length > 0 ? Math.max(...persons.map(person => person.id)) : 0

  return maxId + 1
}

const checkIfNameExists = (name) => {
  const numberOfSamePersons = persons.filter((person) => person.name === name)
  return numberOfSamePersons.length > 0 ? true : false

}

app.post("/api/persons", (req,res)=> {
  const body = req.body
  
  if(!body.name){
    return res.status(400).json({
      error: "name missing"
    })
  } else if (!body.number){
    return res.status(400).json({
      error: "number missing"
    })
  } else if ( checkIfNameExists(body.name) == true) {
    return res.status(400).json({
      error: "name already exists"
    })
  }

  const newPerson = {
    name: body.name,
    number: body.number,
    id: generateId()
  }
  
  persons = persons.concat(newPerson)

  res.json(newPerson)
})


app.delete("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id)
  const newPersons = persons.filter((person) => person.id !== id)

  res.send(newPersons)

})

const PORT = process.env.PORT || 3001 ;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
