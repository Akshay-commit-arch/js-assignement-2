// let string ="";
//  string = document.querySelector('#input').value;
// console.log(string);
// function searchAnimal(){
   
// }

// function search_animal(){
//     let input = document.querySelector("#searchbar").value;
//     input = input.toLowerCase();
//     let arrayOf = document.querySelectorAll(".item");

//     for(var i=0; i< arrayOf.length;i++ ){
//         if(document.querySelector("#searchbar").value == arrayOf[i]){
//           arrayOf[i].style.display="item";
//         }
//         else{
//             arrayOf[i].style.display="none";
//         }
//     }
// }


function search_animal(){
    let input = document.getElementById("searchbar").value;// value of string inside search 
    input = input.toLowerCase(); // converted into lowercase
    let arrayOf = document.getElementsByClassName("item"); // arrayOf =[li.item, li.item, li.item, li.item, li.item, li.item]
    console.log("arrayResult",arrayOf);

    for(let i=0; i<arrayOf.length; i++ ){
        // if array at [0] which is aloo put in lower case and then check its string for input  
        // if condition if not true then return none
        if(!arrayOf[i].innerHTML.toLowerCase().includes(input)){
        arrayOf[i].style.display="none";
        }
        // else return ye
        else{
            arrayOf[i].style.display="item";
        }
    }
}



// function random(){
//     var arrayName = ["a","b","c","d"];

//     if(!arrayName[0] == "c"){
//       return  (arrayName[0]);
//     }
//     else{
//         return  ("nothing");
//     }
// }
// document.querySelector("#demo").innerHTML=(random());


// include method using array

// var arrayDemo = ["a","b","c","d"];

// alert(arrayDemo.includes("a"));


