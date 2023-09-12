const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Person = require('./models/person');

const app = express();
const port = process.env.PORT || 3000;
const uri = "mongodb+srv://Xclusive:Akolade1234@restapi.wstlbei.mongodb.net/?retryWrites=true&w=majority";

async function connectToMongoDB() {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected To MongoDB");
    } catch (error) {
        console.log("MongoDB Connection Error: ", error);
        process.exit(1);
    }
}

// Connect to MongoDB
connectToMongoDB();

app.use(bodyParser.json());

// CREATE NEW PERSON
app.post('/api', async (req, res) => {
    try {
        const person = new Person(req.body);
        const savedPerson = await person.save();
        res.json(savedPerson);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// READ OR FETCH DETAILS OF PERSON
app.get('/api/:id', async (req, res) => {
    try {
        const person = await Person.findById(req.params.id);
        if (!person) {
            return res.status(404).json({ error: 'Person Not Found' });
        }
        res.json(person);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// UPDATE OR MODIFY DETAILS OF PERSON
app.put('/api/:id', async (req, res) => {
    try {
        const updatedPerson = await Person.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedPerson) {
            return res.status(404).json({ error: 'Person Not Found' });
        }
        res.json(updatedPerson);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// DELETE PERSON ID/ DATA
app.delete('/api/:id', async (req, res) => {
    try {
        const deletedPerson = await Person.findByIdAndRemove(req.params.id);
        if (!deletedPerson) {
            return res.status(404).json({ error: 'Person Not Found' });
        }
        res.json({ message: 'Person Deleted Successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Run App on Server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
