// Explanation of subsequent console logs in this file
console.log("Here are the topics we learned in our first web app dev:");


/*
This section is a practice of creating a variable string and logging that variable in the console manually.

// logging topics array values in the console manually
var topics = "HTML, CSS, Git, JavaScript";
console.log(topics);

// Ask for user input to define topic to be studied
var topic = prompt("Enter HTML, CSS, Git, or JavaScript");

// Conditional console.log according to the input from topic in user prompt
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
*/


// logging topics array values in the console using conditional logic
var topicsArray = ["HTML", "CSS", "Git", "JavaScript"];
for (var i=0; i<topicsArray.length; i++) {
  console.log(topicsArray[i]);
}


/*
This section is a practice of creating an array and using a for loops to log its elements in the console.

// logging shapes array values in the console manually
var shapes= ["triangle", "square", "pentagon", "circle"];
console.log(shapes[0]);

// logging shapes array values in the console using conditional logic
for (var x=0; x < shapes.length; x++) {
  console.log(shapes[x]);
}

*/


// Adding this question to the console.log
console.log('Which topic should we study first?');


/*
Adding two functions below to perform the same console logging as was performed above manually and in for loops
*/

// adding function listTopics that lists the topics using a for loop
function listTopics() {
  for (var x1 = 0; x1 < topicsArray.length; x1++) {
    console.log(topicsArray[x1]);
  }
}

// Adding function selectTopic to log the topics in the console
var topic = prompt("Enter HTML, CSS, Git, or JavaScript");
function selectTopic() {
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
}


/* 
This section is practice calling the function listTopics.

// calling function listTopics
listTopics();

*/


// calling function selectTopic
selectTopic();