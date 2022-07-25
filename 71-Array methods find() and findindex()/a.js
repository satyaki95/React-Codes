  // find (callback, value) return the value of the first element that pass the certain condition

  let numbers =[5,55,14,5,78];

  const evenNumber = (value, index, array) =>{
    if(value%2===0)
    return value;
  }
  let firstEvenNumberIndex= numbers.findIndex(evenNumber);
  console.log(firstEvenNumberIndex);

  // or

  let firstEvenNumber = numbers.find(x => x%2===0);

  console.log(firstEvenNumber);



  const students = [
    {
        id: 101,
        gpa: 2.5
    },
    {
        id: 102,
        gpa: 2.2
    },
    {
        id: 103,
        gpa: 2.4
    },
    {
        id: 104,
        gpa: 2.8
    },
    {
        id: 105,
        gpa: 3.5
    },
    {
        id: 106,
        gpa: 3.0
    }
  ]

  console.log(students.find(x => x.gpa<2.5));