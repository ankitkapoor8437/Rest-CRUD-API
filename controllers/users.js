import { v4 as uuid } from 'uuid';

let users = [{
    "firstName": "Kapoor",
    "lastName": "Updateddd",
    "age": 25,
    "id": "ac57bf0e-675c-4c60-81b2-9e9d8b1a66f2"
}];

export const getUsers = (req, res) => {
    console.log(`Users in the database: ${users}`);

    res.send(users);
}

export const createUser = (req, res) => {
    const user = req.body;

    users.push({ ...user, id: uuid() });

    console.log(`User [${user.username}] added to the database.`);
};

export const getUser = (req, res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
}

export const updateUser = (req, res) => {
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
}

export const deleteUser = (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id != id);

    res.send("User deleted.")
}