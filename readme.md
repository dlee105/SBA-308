# Skill-Based Assessment 308

This is a JavaScript script that manipulate data within a instructional setting similar to how many popular tools that teacher and institution uses to handles grading. In this script, data are manipulated using multiple json elements to give an overview of every student grades and assignment.

## How It Works

Given two JavaScript objects as well as one array of object, by running the primary function of this script: **function getLearnerData(course, ag, submissions)**, will result in a json array that will display each students' id, current overall grade, and the grade of each of the assignment that are already due.

There are also several helper functions that act as filtering and manipulating tools that helps simplify the process of the primary function. These includes:

- **function getThisStudentAvg(studentID, submission, assignmentInfo)** - this manipulating function is the primary data extracting function that will loops through the submission argument array and return a list that contains the current student grade and each of their assignment's grade
- **function isLate(submitDate, dueDate)** - this filtering function takes two arguments: a submission date and a due date and will return true if submission date is after the due date. This takes place inside the **getThisStudentAvg** function.
- **const avgFilter = function (date)** - this filtering function takes the date of an assignment and determine whether the corresponding assignment should be added into the result based on its due date.
- **function getStudents(submission)** this simple function helps get the list of unique students and return a list of them to be use for iteration inside the **getThisStudentAvg** function.
