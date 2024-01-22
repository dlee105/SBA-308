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
  for (obj of submission) {
    if (!students.includes(obj["learner_id"])) {
      students.push(obj["learner_id"]);
    }
  }
  return students;
}

const avgFilter = function (date) {
  date = date.split("-");
  if (parseInt(date[0]) > 2023) {
    // if year is greater than 2023
    return true;
  } else if (parseInt(date[1]) > 3 && parseInt(date[0]) == 2023) {
    // if month is greater than march 2023
    return true;
  }
  return false;
};

function getThisStudentAvg(studentID, submission, assignmentInfo) {
  let tempID = studentID;
  let totalPoint = [];
  let pointsPossible = [];
  for (obj of submission) {
    if (obj["learner_id"] === studentID) {
      for (asg of assignmentInfo) {
        if (obj["assignment_id"] === asg["id"] && !avgFilter(asg["due_at"])) {
          //console.log(obj["submission"]["score"], asg["points_possible"]);
          if (!isLate(obj["submission"]["submitted_at"], asg["due_at"])) {
            // CHECK IF LATE PENALTY IS REQUIRED
            totalPoint.push(obj["submission"]["score"]);
          } else {
            totalPoint.push(obj["submission"]["score"] * 0.9);
          }
          pointsPossible.push(asg["points_possible"]);
          //sub.push(obj["submission"]["score"] / asg["points_possible"]);
        }
      }
    }
  }
  console.log(studentID, totalPoint, pointsPossible);
  return (
    // uses reduce to calculate sum of student's scores and possible scores
    totalPoint.reduce((acc, curr) => acc + curr, 0) /
    pointsPossible.reduce((acc, curr) => acc + curr, 0)
  );
}

//const calcSum = json.reduce((acc, curr) => acc + parseInt(curr["age"]), 0);

function getLearnerData(course, ag, submissions) {
  let result = [];
  let students = getStudents(submissions); // array of each studentID;
  let tempObj = {};
  for (id of students) {
    //let tempObj = {};

    tempObj["id"] = id;
    tempObj["avg"] = getThisStudentAvg(id, submissions, ag["assignments"]);
    console.log(id, tempObj);
  }
}

//==============================================================//
//getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

//console.log(isLate("2023-03-07", "2023-02-27"));
let a = getThisStudentAvg(
  125,
  LearnerSubmissions,
  AssignmentGroup["assignments"]
);
let b = getThisStudentAvg(
  132,
  LearnerSubmissions,
  AssignmentGroup["assignments"]
);

console.log(a, b);
