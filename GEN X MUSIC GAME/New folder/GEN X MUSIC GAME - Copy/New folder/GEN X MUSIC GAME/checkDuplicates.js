const fs = require("fs");
const questions = require("./questions.js");

const seen = new Set();

const cleanedQuestions = questions.filter(q => {
  if (seen.has(q.question)) {
    return false;
  }
  seen.add(q.question);
  return true;
});

const output = 
`const questions = ${JSON.stringify(cleanedQuestions, null, 2)};

module.exports = questions;
`;

fs.writeFileSync("questions-cleaned.js", output);

console.log("Original questions:", questions.length);
console.log("Cleaned questions:", cleanedQuestions.length);
console.log("Removed:", questions.length - cleanedQuestions.length);