const numberOfQuestions = +prompt('misollar soninig kiriting!')

function randomNum(min,max){
    return Math.floor(Math.random() * (max-min+1)+min)
}

function randomMath(){
    const num1 = randomNum(1,99)
    const num2 = randomNum(1,99)
    const amal = randomNum(1,4)
    switch (amal){
        case 1: {
            return {text: `${num1} + ${num2} =?`, ans: num1 + num2}
        }
        case 2: {
            return {text: `${num1} - ${num2} =?`, ans: num1 - num2}
        }
        case 3: {
          return {text: `${num1} * ${num2} =?`, ans: num1 * num2}
        }
        case 4: {
          return {text: `${num1} / ${num2} =?`, ans: num1 / num2}
        }
    }
    
}

for(i = 0; i < numberOfQuestions; i++){
    const {text , ans} = randomMath()
    const userInput =+prompt(text +'javobni kiriting')
    if(userInput === ans){
        alert('Siznign javob togri')
        continue
    }

    alert('Sizning javob notogri! togir javob: ' + ans)
}



