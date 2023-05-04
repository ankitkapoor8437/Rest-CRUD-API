import express from "express";
import { v4 as uuidv4 } from 'uuid';
uuidv4();

const router = express.Router();

let users = [

    {
        firstName: "Ankit",
        lastName: "Kapoor",
        age: 25
    },
    {
        firstName: "Jane",
        lastName: "Doe",
        age: 25
    },
    {
        firstName: "Ankush",
        lastName: "Kaundal",
        age: 25
    },
    {
        "firstName": "Ankush",
        "lastName": "Number2",
        "age": 25,
        "id": "b81ae956-6db8-4399-a013-c2e58faebfed"
    },
    {
        "firstName": "Ankush",
        "lastName": "Number2",
        "age": 25,
        "id": "77a5881b-06e2-45f0-bc36-db1e4ab5e601"
    }

]

router.get('/', (req, res) => {
    console.log(users);
    res.send(users);
});


router.post('/', (req, res) => {
    const user = req.body;
    users.push({ ...user, id: uuidv4() });
    res.send(`User ${user.firstName} added`)
})

router.get('/:id', (req, res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
});

router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;

    const user = users.find((user) => user.id === id)
    if (firstName) {
        user.firstName = firstName;
    }
    if (lastName) {
        user.lastName = lastName;
    }
    if (age) {
        user.age = age;
    }
    res.send("User updated.")
})


router.delete('/:id', (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id != id);

    res.send("User deleted.")
})


export default router;