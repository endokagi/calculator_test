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