// import express from 'express';
// import { model } from 'mongoose';
// import pkg from 'body-parser';
// const { json } = pkg;

// const app = express();
// app.use(json());

// // Connect To MongoDB
// mongoose.connect('mongodb+srv://Xclusive:@Akolade12@restapi.wstlbei.mongodb.net/PersonDB?retryWrites=true&w=majority', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });
// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'MongoDB Connection Error'));
// db.once('open', () => {
//   console.log('Connected Successfully');
// });

// // Person Schema and model
// const personSchema = new mongoose.Schema({
//   name: String,
//   age: Number,
// });

// const Person = model('person', personSchema);

// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`Server is Running on Port ${port}`);
// });
