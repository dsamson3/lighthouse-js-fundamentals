function ageCalculator(name, yearOfBirth, currentYear) {
  return name + ' is ' + (currentYear - yearOfBirth) + ' years old.'
}
console.log(ageCalculator("Suzie", 1986, 2018));
console.log(ageCalculator("Jack", 2006, 2018));
console.log(ageCalculator("Ali", 2018, 2018));