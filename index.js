// Instructions
// You will create a script that gathers data, processes it,
// and then outputs a consistent result as described by a specification.
// This is a very typical situation in industry,
// and this particular scenario has been modified from a
// real application. The data you will use is provided below.

// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript",
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50,
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150,
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500,
    },
  ],
};

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47,
    },
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150,
    },
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400,
    },
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39,
    },
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140,
    },
  },
];

function isLate(submitDate, dueDate) {
  //return true if late
  let sd = submitDate.split("-");
  let dd = dueDate.split("-");
  //   console.log(sd, dd);
  //   console.log(sd.length);
  for (let i = 0; i < sd.length; i++) {
    // console.log(parseInt(sd[i]), parseInt(dd[i]));
    if (parseInt(sd[i]) > parseInt(dd[i])) {
      return true;
    }
  }
  return false;
}

function getStudents(submission) {
  let students = [];
  for (obj of submissions) {
    if (!students.includes(obj[learner_id])) {
      students.push(obj[learner_id]);
    }
  }
  return students;
}

function getThisStudentAvg(studentID, submission, assignmentInfo) {
  let tempID = studentID;
  for (obj of submission) {
    let studentGrade = 0;
    let totalGrade = 0;
  }
}

function getLearnerData(course, ag, submissions) {
  let result = [];
  let students = getStudents(submissions); // array of each studentID;

  for (id of students) {
    let tempObj = {};
    tempObj["id"] = id;
    tempObj["avg"] = getThisStudentAvg(id, ag["assignment"], submissions);
  }
}

//==============================================================//
getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
console.log(isLate("2023-03-07", "2023-02-27"));
