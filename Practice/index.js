const studentData = [
    {
      name: "John",
      marks: [85, 90, 78, 92],
      grade: "A"
    },
    {
      name: "Alice",
      marks: [76, 88, 91, 82],
      grade: "B"
    },
    {
      name: "Bob",
      marks: [92, 89, 84, 78],
      grade: "A"
    },
  ];
 
//   const johnData = studentData[0];
//   console.log(johnData);

//   const aliceData = studentData[1];
//   console.log(aliceData);
  const student = [
    {
      name: "shahid",
      marks: [90, 80, 85, 75],
      grade: "B"
    }
  ];
  studentData.push(student);
//   console.log(studentData);
//   console.log(typeof studentData);

 studentData.shift();
  console.log(studentData);