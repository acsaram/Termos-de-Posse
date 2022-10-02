function Sum(a,b){
    return total = a + b;
}

function Subtract(a,b){
    return total = a - b;
}

function Mult(a,b){
    return total = a * b;
}

function Division(a,b){
    return total = a / b;
}

function Operate(a,c,b){
    if (c == "+"){
        return Sum(a,b)
    }
    if (c == "-"){
        return Subtract(a,b)
    }
    if (c == "x"){
        return Mult(a,b)
    }
    if (c == "/"){
        return Division(a,b)
    }
}




