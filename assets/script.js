// logging topics array values in the console manually
var topics = "HTML, CSS, Git, JavaScript";
console.log(topics);

var topic = "HTML";

if (topic === 'HTML') {
  console.log("Let's study HTML!");
} else if (topic === 'CSS') {
  console.log("Let's study CSS!");
} else if (topic === 'Git') {
  console.log("Let's study Git!");
} else if (topic === 'JavaScript') {
  console.log("Let's study JavaScript!");
} else {
  console.log('Please try again!');
}

// logging topics array values in the console using conditional logic
var topicsArray = ["HTML", "CSS", "Git", "JavaScript"];
for (i=0; i<topicsArray.length; i++) {
  console.log(topicsArray[i]);
}

// logging shapes array values in the console manually
var shapes= ["triangle", "square", "pentagon", "circle"];
console.log(shapes[0]);

// logging shapes array values in the console using conditional logic
for (var x=0; x < shapes.length; x++) {
  console.log(shapes[x]);
}