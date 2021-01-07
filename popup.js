var totalGrade  = 0;  
var currGradeT = 0;  
var displayGrade = 0;  
var stringIn = " "; 
var count = 0;  

function calculate() {  

    var a = parseFloat(document.getElementById("grade_in").value);  
    var b = parseFloat(document.getElementById("grade_per").value);  

    if(typeof a != 'number') { 
        document.querySelector("#update").innerHTML = "Input for grade was not a number try again";  
        clearText();
    } 
    if(typeof b != 'number') { 
        document.querySelector("#update").innerHTML = "Input for grade percentage was not a number";  
        clearText();
    }

    if((0< b && b <101)) { 

        //console.log(clicks);
        b = b/100;   
        totalGrade +=b;  
        currG = a * b;   
        currGradeT+=currG;  
        displayGrade = currGradeT/ totalGrade; 
        stringIn +=  a +"x"+b + " "; 
        document.querySelector("#result").innerHTML = "Your current grade is " + displayGrade + "%";    
        document.querySelector("#grade_val").innerHTML = "The total grades are" + stringIn + " ";   
        clearText();
        

    } else  {  

        document.querySelector("#update").innerHTML = "bad input";  
        clearText();
    }    

}  

function clearText() { 

    document.getElementById("grade_in").value = ' '; 
    document.getElementById("grade_per").value = ' ';

} 

function clearVals() {   

    clearText(); 
    totalGrade  = 0;  
    currGradeT = 0;  
    displayGrade = 0; 
    stringIn = " ";   
    document.getElementById("grade_val").value = ' '; 
    count++; 


}
