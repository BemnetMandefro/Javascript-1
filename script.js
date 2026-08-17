const fullName = "Bemnet Mandefro";
const age = 21;
const course = "JavaScript";
const score = 85;
const attendance = 90;

function displayStudentInfo(name, studentAge, studentCourse, studentScore, studentAttendance) {
  return `
Student Information
-------------------
Name: ${name}
Age: ${studentAge}
Course: ${studentCourse}
Score: ${studentScore}
Attendance: ${studentAttendance}%`;
}

const calculateGrade = (studentScore) => {
  if (studentScore >= 90) {
    return "A";
  } else if (studentScore >= 80) {
    return "B";
  } else if (studentScore >= 70) {
    return "C";
  } else if (studentScore >= 60) {
    return "D";
  } else {
    return "F";
  }
};

const getStudentStatus = (studentScore) => {
  if (studentScore >= 90) {
    return "Excellent Performance";
  } else if (studentScore >= 60) {
    return "Passed";
  } else {
    return "Failed";
  }
};

const checkEligibility = (studentScore, studentAttendance) => {
  return studentScore >= 50 && studentAttendance >= 75
    ? "Eligible"
    : "Not Eligible";
};

const eligibility = checkEligibility(score, attendance);
console.log(eligibility);

const rawName = "   Bemnet Mandefro   ";
const cleanedName = rawName.trim().toUpperCase();
const isJavascriptStudent = course.toUpperCase().includes("JAVASCRIPT");
const resultMessage = score >= 60 ? "Pass" : "Fail";

console.log(`Student Name: ${cleanedName}`);
console.log(`JavaScript Student: ${isJavascriptStudent}`);
console.log(`Student Status: ${resultMessage}`);

const academyName = "Nexus Academy";

function demonstrateScope() {
  // Function Scope
  const studentMessage = "Student evaluation is in progress.";
  console.log(`${academyName}: ${studentMessage}`);

  // Loop creates a block scope
  for (let i = 1; i <= 3; i++) {
    // Block Scope — 'stepMessage' and 'i' only exist inside this loop
    const stepMessage = `Processing evaluation step ${i}...`;
    console.log(stepMessage);
  }
}

demonstrateScope();

function generateFinalReport() {
  const profile = displayStudentInfo(fullName, age, course, score, attendance);
  const grade = calculateGrade(score);
  const status = getStudentStatus(score);
  const examEligibility = checkEligibility(score, attendance);

  const finalReport = `
${profile}
Grade: ${grade}
Status: ${status}
Exam Eligibility: ${examEligibility}
-------------------
`;

  return finalReport;
}

console.log(generateFinalReport());