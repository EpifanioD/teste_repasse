const express = require('express');
const { v4: uuid } = require('uuid');
const bcrypt = require('bcrypt');

const app = express();

app.listen(3333);

app.use(express.json());

const users = [];

app.get("/users", (resquest, response) => {
    response.json(users);
});

app.post("/users", async (request, response) => {
    try {
        const { name, email, password } = request.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        const userAlreadyExists = users.some(
            (user) => user.email === email
        );

        if (userAlreadyExists) {
            return response.status(400).json({ error: "User already exists!" });
        }
        users.push({
            id: uuid(),
            name,
            email,
            password: hashedPassword
        });

        return response.status(201).json(users);

    } catch (error) {
        resquest.status(500).send();
    }
});

app.post('/login', async (request, response) => {

    const { email, password } = request.body;

    const user = users.find(user => user.email = email);

    console.log(user);
    if (user == null) {
        return response.status(400).json({ message: 'Cannot Found User!' })
    }
    try {
        if (await bcrypt.compare(password, user.password)) {
            response.send('Success!');
        } else {
            response.send('Not Allowed');
        }
    } catch {
        response.status(500).send();
    }
});