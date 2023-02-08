let arrayOfAnswer = [] ;

const isStudent =()=>{
    let answerStudent=prompt("are you student ? (yes/no)");
    
    while (!(answerStudent=="yes" || answerStudent=="no")){
        alert("invalid string");
        answerStudent=prompt("are you student ? (yes/no)");
    }
    
    return `are you student ?: ${answerStudent}`
};


const learnHtml =()=>{
    let answerLearnHtml=prompt("are you want to learn HTML ? (yes/no)");
    while (!(answerLearnHtml=="yes" || answerLearnHtml=="no")){
        alert("invalid string");
        answerLearnHtml=prompt("are you want to learn HTML ? (yes/no)");
    };
    return `are you want to learn HTML ?: ${answerLearnHtml}` ;
}

const workWithUs=()=>{
    let answerWork=prompt("do you want to work with us ? (yes/no)")
    while (!(answerWork=="yes" || answerWork=="no")){
        alert("invalid string");
        answerWork=prompt("do you want to work with us ? (yes/no)");
    };
    return `do you want to work with us ?: ${answerWork}` ;
}

let answerStudent=isStudent();
let answerLearnHtml=learnHtml();
let answerWork=workWithUs();

arrayOfAnswer.push(answerStudent,answerLearnHtml,answerWork);
console.log(arrayOfAnswer);

for(i=0 ; i< arrayOfAnswer.length ; i++){
    console.log(arrayOfAnswer[i]);
}

