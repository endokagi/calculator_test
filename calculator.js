// function add(a,b){
//     return a+b;
// }

// function minus(a,b){
//     return a-b;
// }

// function divide(a,b){
//     return a/b;
// }

// function multiple(a,b){
//     return a*b;
// }

// const cal = {add,minus,divide,multiple};

function cal(text,a,b){
    if(text === "add"){
        return a+b;
    }else if(text === "minus"){
        return a-b;
    }else if(text === "multi"){
        return a*b;
    }else if(text === "divide"){
        return a/b;
    }else return 'ERROR';
}

module.exports = cal;