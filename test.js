let ages =[29,30,79,10,12]
let resault = ages.filter(filteredAge)

function filteredAge (age){
    return (age<18)
}
console.log(resault)

//take input from user
var prompt = require('prompt-sync')();

/*var n = prompt(`What's your age`);
if(n<18){
    console.log('you got 20% discount')
}else{
    console.log('you got 25%')
}
*/
//callback
function callBack(){
    console.log('addition compleated')
}

function mainFunc(a,b,callBack){
    var point = a+b;
    console.log('ans is:'+point);
    callBack();
}

mainFunc(12,59,callBack)
 
//append file
const fs = require('fs')
const os = require('os')

let user = os.userInfo()
console.log(user.username)
 

/*fs.appendFile('texting.txt', 'data to append \n', (err) => {
    if (err) throw err;
    console.log('The "data to append" was appended to file!');
  }); */

  //JSON to OBJECT
  const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
const jsonObject = JSON.parse(jsonString); // Convert JSON string to object
console.log(jsonObject.age ); 

//JSON Stringifies
const objectToConvert = { name: "Alice", age: 25 };
const jsonStringified = JSON.stringify(objectToConvert); // Convert object to JSON string
console.log(jsonStringified); // Output: {"name": "Alice", "age":25}

