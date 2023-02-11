let arrayOfAnswer = [] ;

const isStudent =()=>{
    let answerStudent=prompt("are you student ? (yes/no)");
    if(answerStudent==""){
        answerStudent="invalid";
    };
    // while (!(answerStudent=="yes" || answerStudent=="no")){
    //     alert("invalid string");
    //     answerStudent=prompt("are you student ? (yes/no)");
    // }
    
    return `are you student ?: ${answerStudent}`
};


const learnHtml =()=>{
    let answerLearnHtml=prompt("are you want to learn HTML ? (yes/no)");
    if(answerLearnHtml==""){
        answerLearnHtml="invalid";
    };
    // while (!(answerLearnHtml=="yes" || answerLearnHtml=="no")){
    //     alert("invalid string");
    //     answerLearnHtml=prompt("are you want to learn HTML ? (yes/no)");
    // };
    return `are you want to learn HTML ?: ${answerLearnHtml}` ;
}

const workWithUs=()=>{
    let answerWork=prompt("do you want to work with us ? (yes/no)")
    if(answerWork==""){
        answerWork="invalid"
    }
    // while (!(answerWork=="yes" || answerWork=="no")){
    //     alert("invalid string");
    //     answerWork=prompt("do you want to work with us ? (yes/no)");
    // };
    return `do you want to work with us ?: ${answerWork}` ;
}


let answerStudent=isStudent();
let answerLearnHtml=learnHtml();
let answerWork=workWithUs();

arrayOfAnswer.push(answerStudent,answerLearnHtml,answerWork);
// console.log(arrayOfAnswer);
const printArray=(arr)=>{
for(i=0 ; i< arrayOfAnswer.length ; i++){
    console.log(arrayOfAnswer[i]);
}
}

printArray(arrayOfAnswer);
