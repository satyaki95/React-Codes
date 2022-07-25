


var names = new Array();
names[0]="Satyaki";
names[1]="Anis";
names[2]="Lima";
names[3]="Rinku";
names[4]="Tikku";

console.log(names);
console.log(names.length);

// for(var i=0;i<5;i++){
//     console.log(names[i]);
// }

var nam = ["satyaki","Ali","bla","Chiku"];
nam.push("Sapna");
console.log(nam);
console.log(nam.length);

nam.pop();

console.log(nam);
console.log(nam.length);



var nam2=names.concat(nam);

console.log(nam2);
console.log(nam2.length);