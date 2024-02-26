const myName = "wIlL SMiTh";
let toLowerCaseName = myName.toLowerCase()
console.log(toLowerCaseName)
let toUpperCaseName = myName.toUpperCase()
console.log(toUpperCaseName)
const tcn = myName;
const titleCaseName = tcn.split(' ')
   .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
   .join(' ');
console.log(titleCaseName);
