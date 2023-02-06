
let title=""
var inputName= prompt("enter your name");

var inputgender= prompt("enter your gender");
// male or female
switch (inputgender){
    case "male" :
        title="Mr";
        break
    case "female":
        title="Ms";
        break
    default:
        title=""
        alert ("enter your gender correctly (male or female) ");
        inputgender= prompt("enter your gender");

}
/* if (inputgender !="male"){
    alert ("enter your gender correctly (male or female) ");
    inputgender= prompt("enter your gender");
    
}else if(inputgender != "female") {
    alert ("enter your gender correctly (male or female) ");
    inputgender= prompt("enter your gender");
}; */


var inputAge=prompt("enter your age")
// need while loop
while(inputAge <= 0 ){          
    alert("enter your age agine")
    inputAge=prompt("enter your age")
};

var confirmMessage = confirm("confirem welcome message"); 

if (confirmMessage){
    alert (`hello ${title} ${inputName}`);
}
