//console.log("Server file  is running");
//function add(a,b){
//return a+b;
//}
/*var add=(a,b)=>{return a+b;}
var result =add(2,9);
console.log(result);*/
/*function callback()
{
    console.log("This is callback func");   
}
function add(a,b,callback)
{
    var result =a+b;
    callback();
    return result;
    
    
}
console.log(add(3,4,callback));*/
/*
var fs=require('fs');
var os =require('os');
var user =os.userInfo();
console.log(user.username);
fs.appendFile('hello.txt','Hi ' + user.username+'! \n',()=>{
    console.log("file is created")
});
console.log(fs);
*/
/*var _=require('lodash');
var data=[1,2,2,3,4,55,5,5,5];
var filter=_.uniq(data);
console.log(filter);*/

//date:5/6/24
//convert json to js obje
/*const objectToConvert=
{
    name:"Shrutika",
    age:20
};
const json=JSON.stringify(objectToConvert);
console.log(json);
console.log(typeof json);*/
//install npm i express
const express = require('express')
const app = express();
const db=require('./db');

app.get('/', function (req, res) {
  res.send('Welcome to hotel!!how can i help you')
})
/*app.get('/day4',function(req,res){
    res.send('day3 of learning Node Js')

})
app.get('/learn',(req,res)=>
{
    res.send('learning')
})
app.post('/person',(req,res)=>
    {
        res.send('data is saved')
    })*/
app.listen(3000,()=>
{
    console.log("listening on port 3000")
})


//comment added for test purpose
