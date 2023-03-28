let string ="";// blank string for input

let buttons = document.querySelectorAll('.button');// array of buttons in variable let buttons

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{  
        if(e.target.innerHTML == "="){
            string = eval(string);
            document.querySelector("input").value= string;
        }

         else if(e.target.innerHTML == "C"){
            string = ""; 
            document.querySelector("input").value= string;
        }
        else if(e.target.innerHTML == "DE"){
        // string = document.querySelectorAll(".input")[0].value;
            // string.slice(1,buttons.length);  
         input.value =     
        }
        else{
         console.log(e.target);
        string=string+e.target.innerHTML; // 
        document.querySelector("input").value= string;
    }
    })
})

// created an array from button then loop it using for each loop (created a arrowfunction)
