/*6. Create an HTML page that has 5 buttons: [Javscript, Array methods]
A. Button one: When clicked it creates an array of all the numbers between 0 to 100,
Removes the numbers that are divisible by 3 from the array and prints it in the console
B. Button two: When clicked it creates an array of all the numbers between 0 to 100, Adds
the numbers from 100 to 150 to the array and prints them in the console
C. Button three: When clicked it creates an array of all the numbers between 0 to 100, Adds
3 to each array member and print it in the console
D. Button four: When clicked it creates an array of all the numbers between 0 to 100, Then
prints the members from index 20 to 40 in the console
E. Button five: When clicked it should create an array of all the numbers between 0 to 100,
Shuffle the members of the array using the function provided to you in the hints, prints the
shuffled array in the console, sorts it in descending order and prints in again
Hints:
Function to shuffle an array:
}
Usage:
let arr = [1, 2, 3, 4, 5];
shuffleArray(arr);*/

function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];}
    console.log(array)
    return array;
}


  function arrycreation(s){
    var mylist=[];
    
     for (i=0;i<=s;i++)
         {mylist.push(i);
 }
 return mylist;
}
//b2
function add_to_arry(){
     let added_to_arry=arrycreation(100);
    
     added_to_arry.push(...arrycreation(50).map(num => num + 100));
    console.log(added_to_arry);


}
function isdivideby3( )
{
    let array = arrycreation(100);
    array = array.filter(num => num % 3 !== 0);
    console.log(array);
}
//Button two: When clicked it creates an array of all the numbers between 0 to 100, Adds
//the numbers from 100 to 150 to the array and prints them in the console
function modified3()
{
let list1=arrycreation(100);
list3=list1.map(num=>num+3);
console.log(list3 );
}
function b4()
{
    let list1=arrycreation(100);
    console.log(list1.slice(20,41) )  ;
}
function b5()

 {
    let array = arrycreation(100);
    array = shuffleArray(array);
    console.log('Shuffled Array:', array);
    array.sort((a, b) => b - a);
    console.log('Sorted Array:', array);
  }

    /*let list1=arrycreation(100);
     list1=shuffleArray(list1);
     console.log('shuffle array'+list1);
    list1.reverse();
     console.log('sorted'+list1);*/


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('button1').addEventListener('click',isdivideby3 );
    document.getElementById('button2').addEventListener('click',add_to_arry);
    document.getElementById('button3').addEventListener('click',modified3);
    document.getElementById('button4').addEventListener('click', b4);
    document.getElementById('button5').addEventListener('click', b5);
  });