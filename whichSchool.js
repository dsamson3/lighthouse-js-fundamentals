
function whichSchool(age)  {
schools = ['Elementary School', 'Secondary School', 'Lighthouse Labs']
  if (age < 13) {
    return(schools[0]);
  } else if(age >= 13 && age <= 18) {
     return(schools[1]);
  } else {
    return(schools[2]);
  }
}


console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));
console.log("I am 8. Which school should I go to?");
console.log(whichSchool(8));
console.log("I am 14. Which school should I go to?");
console.log(whichSchool(14));