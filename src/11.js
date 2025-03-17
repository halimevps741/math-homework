// Importing necessary libraries
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Connecting to MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/math-homework', { useNewUrlParser: true, useUnifiedTopology: true });

// Setting up body parser for JSON data
app.use(bodyParser.json());

// Defining the schema for our homework documents
const HomeworkSchema = new mongoose.Schema({
  studentName: String,
  homeworkAssignment: String,
  dueDate: Date,
  completed: Boolean,
});

// Creating a model using the schema
const Homework = mongoose.model('Homework', HomeworkSchema);

// Defining a route for submitting homework
app.post('/submit-homework', (req, res) => {
  // Extracting the student's name and homework assignment from the request body
  const studentName = req.body.studentName;
  const homeworkAssignment = req.body.homeworkAssignment;

  // Creating a new instance of the Homework model with the extracted data
  const newHomework = new Homework({
    studentName,
    homeworkAssignment,
  });

  // Saving the new homework to the database
  newHomework.save()
    .then(() => {
      res.status(201).json({ message: 'Homework submitted successfully' });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: 'Error submitting homework' });
    });
});

// Defining a route for retrieving all homework assignments
app.get('/homework', (req, res) => {
  // Retrieving all documents from the Homework collection
  Homework.find()
    .then((homeworks) => {
      res.status(200).json({ homeworks });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: 'Error retrieving homework' });
    });
});

// Defining a route for marking a specific homework assignment as completed
app.patch('/homework/:id', (req, res) => {
  // Extracting the ID of the homework assignment to be marked as complete from the URL parameters
  const id = req.params.id;

  // Finding the homework assignment document in the database by its ID
  Homework.findById(id)
    .then((homework) => {
      // If the homework assignment was found, update its "completed" field to true and save it to the database
      if (homework) {
        homework.completed = true;
        homework.save()
          .then(() => {
            res.status(200).json({ message: 'Homework marked as complete' });
          })
          .catch((error) => {
            console.log(error);
            res.status(500).json({ error: 'Error marking homework as complete' });
          });
      } else {
        // If the homework assignment was not found, return an error message
        res.status(404).json({ error: 'Homework not found' });
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: 'Error marking homework as complete' });
    });
});

// Defining a route for retrieving all completed homework assignments
app.get('/completed-homework', (req, res) => {
  // Retrieving all documents from the Homework collection where "completed" is true
  Homework.find({ completed: true })
    .then((homeworks) => {
      res.status(200).json({ homeworks });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: 'Error retrieving completed homework' });
    });
});

// Starting the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
