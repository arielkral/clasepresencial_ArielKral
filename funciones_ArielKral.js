console.log(cualEsMayor(10,20,30))

function cualEsMayor(num1,num2,num3){
    
    if(num1>num2 && num1>num3){
        mayor = num1
    } if(num2>num1 && num2>num3){
        mayor = num2
    } if(num3>num2 && num3>num2){
        mayor = num3
    }
    return mayor
}