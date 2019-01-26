document.writeln("Hello!")
document.getElementById("button1").onclick = changeText;

window.alert("WoW");
console.log("Ho");

document.write("</br></br>" + (2**10));

var arr = ["b", "a", "c"];
arr.sort();
document.write("</br>In JavaScript it is easier to print all array elements: " + arr + "</br>");
if(arr instanceof Array){
    for (x in arr){
        document.writeln(arr[x]);
    }
}

var list = "<ul>";
for(i = 0; i < arr.length; i++){
    list += "<li>" + arr[i] + "</li>";
}
list += "</ul>";
document.write(list);

arr.push("d");

arr[arr.length] = "e";

document.write("</br>" + arr + "</br>");
document.write("</br> Is the variable arr an array? " + Array.isArray(arr) + "</br>");
document.write("</br> Is the variable arr an array? " + (arr instanceof Array) + "</br>");

arr.pop();
document.write("</br> The method pop() removes the last element of an array and thus our array becomes like this: " + arr);
arr.shift();
document.write("</br> The method shift() removes the first element of an array and thus our array becomes like this: " + arr);
arr.unshift("a");
document.write("</br> The method unshift() adds new element at the beginning of the array and thus our array becomes like this: " + arr);
delete arr[2];
document.write("</br> When we use the keyword delete we delete the specified element in an array and the specified position becomes empty, i.e. undefined. Thus our array becomes like this: " + arr);
arr.splice(2,1,"c","d","e");
document.write("</br> The function splice() adds one or more elements on a specified position. This function specifies also how many elements should be removed. If we use arr.splice(2,1,\"c\",\"d\,\"e\") our array becomes like this: " + arr);
var arr2 = ["f", "g"];
arr = arr.concat(arr2);
document.write("</br>Let's concatenate two arrays using concat(): " + arr);
var arr3 = arr.slice(2);
document.write("</br>Let's slice an array using slice(): " + arr3);
var arr4 = arr.slice(2,4);
document.write("</br>Let's slice again: " + arr4);
document.write("</br>Let's reverse our array: " + arr.reverse());
var person = {
    firstName:"Al", 
    lastName:"Bundy", 
    age:40,
    fullName: function() {
        return this.firstName + " " + this.lastName; 
    }
};

document.write("</br>" + typeof person);
document.write("</br>The type of the variable \"arr\" is: " + typeof arr);
var str = "String";
document.write("</br>The type of the variable \"str\" is: " + typeof str);
var num = 4.543;
document.write("</br>The type of the variable \"num\" is: " + typeof num);
var p;
document.write("</br>The type of the variable \"p\" is: " + typeof p);

document.write("</br>The type of null is: " + typeof null + "???");
document.write("</br> null === undefined? " +  (null === undefined));
document.write("</br> null == undefined? " +  (null == undefined));
document.write("</br> The type of changeText() is: " +  typeof changeText);
document.write("</br>" + multipy(2, "as"));
document.write("</br> The water is boiling at " + convertCelsiusToFahrenheit(100) + " degrees Farenheit.");
document.write("</br>Your first name is " + person.firstName + ". And your last name is " + person.lastName + ".");
document.write("</br>Your full name is " + person.fullName() + ".");
document.write("</br></br>Your \ffu\tll \nname \vis");
var str2 = "Search method will find this word in the sentence";
document.write("</br>The position of the word \"word\" in the variable \"str2\" is: " + str2.search("word"));
var n = 123.43;
document.write("</br>" + n.toFixed(10));
document.write("</br>" + n.toPrecision(4));
var n1 = "3234.54";
var n2 = parseInt(n1);
var n3 = parseFloat(n1);
document.write("</br>" + n2);
document.write("</br>" + n3);
document.write("</br>" + Number.MAX_VALUE);
document.write("</br>" + Number.MIN_VALUE);
document.write("</br>" + Number.MAX_SAFE_INTEGER);
document.write("</br>" + Number.MIN_SAFE_INTEGER);

function changeText(){
    document.getElementById("demo").innerHTML = "Hello JavaScript!";
}

function multipy(p1, p2){
    return p1 * p2;
}

function convertCelsiusToFahrenheit(par){
    return par * 9/5 + 32;
}

function displayDate(){
    var d = new Date();
    document.getElementById("timeButton").innerHTML = d.getHours() + ":" + d.getMinutes();
}

function changeBackgroundColor(){
    document.getElementById("div1").style.backgroundColor = getRandomColor();
}

function changeTextColor(){
    document.getElementById("div1").style.color = getRandomColor();
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}






