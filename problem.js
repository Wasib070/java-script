function BMI(weight,height){
    let BMI=weight/(height**2);
    return BMI;
}
result =BMI(100,10);
console.log("BMI result is :",result);