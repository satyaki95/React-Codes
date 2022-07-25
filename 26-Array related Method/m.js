var names =["al","bl","cl","dl"];
console.log(names);

// shift opposite of pop

names.shift();
console.log(names);

//unshift opposite of push

names.unshift("kl");
console.log(names);

// splice add element spacific position

names.splice(2,0,"ll","vl");
console.log(names);

// splice add and remove element spacific position

names.splice(2,2,"xl","zl");
console.log(names);

// splice remove element start from 1 index

names.splice(1,2);
console.log(names);

// slice

var newArray= names.slice(1);
console.log(newArray);


var sortName =names.sort();
names.reverse();
console.log(sortName);

// number sorting

var number =[30,20,40,90,60,70,80,50];
number.sort(function(a,b){
    return a-b;
});
console.log(number);

// reverse sorting

var number =[30,20,40,90,60,70,80,50];
number.sort(function(a,b){
    return b-a;
});
console.log(number);