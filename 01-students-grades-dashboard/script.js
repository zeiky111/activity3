// Starter data
const students = [
  { name: "Anna", grade: 92 },
  { name: "Ben", grade: 78 },
  { name: "Clara", grade: 88 },
  { name: "David", grade: 84 },
  { name: "Ella" } // no grade, should use default
];

// Start coding here...

// Display all student names in uppercase
const upperCaseNames = students.map(student => student.name.toUpperCase());
document.getElementById("uppercase-names").innerHTML = upperCaseNames.join(", ");

// Filter and display students with grade ≥ 85
const topStudents = students.filter(student => (student.grade ?? 0) >= 85);
document.getElementById("top-students").innerHTML = topStudents
  .map(student => `${student.name} (${student.grade})`)
  .join("<br>");

//Calculate average grade using reduce()
const totalGrades = students.reduce((sum, student) => sum + (student.grade ?? 0), 0);
const averageGrade = totalGrades / students.length;
document.getElementById("average-grade").innerText = averageGrade.toFixed(2);

//Function using destructuring and default grade = 0
function displayStudent({ name, grade = 0 }) {
  return `Student: ${name}, Grade: ${grade}`;
}