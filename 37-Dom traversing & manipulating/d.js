// downwards - QuerySelector or QuerySelectorAll

const studentsList = document.querySelector(".students-list");
const studentA = document.querySelector(".student-a");



const studentList = document.querySelector(".students-list");
const studEntA = studentList.querySelector(".student-a");


// downwards - childrens

const studentsList1 = document.querySelector(".students-list");
const studentA1 = studentsList1.children[0];



// Upwards - ParentElement

const studentsList2 = document.querySelector("li");
const studentlist = studentsList2.parentElement;



// side - nextElementSibling, PreviousElementSibling


const studentsList3 = document.querySelector("li");
const studentB = studentsList3.nextElementSibling;
const studentC = studentB.nextElementSibling;



const studentC1 = document.querySelectorAll("li")[2];
const studentB2 = studentC1.previousElementSibling;



// Sideways - ParentElement + children + index

const studentA2 = document.querySelector("li");
const studentlist1 = studentA2.parentElement;
const studentC2 = studentlist1.children[2];