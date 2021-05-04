export const calculateBmi = (height : number , weight : number) => {
    
    if(height <= 0){
        throw new Error('Height should be larger than zero')
    }

    if(weight <= 0){
        throw new Error('Weight should be larger than zero')
    }

    let BMI = weight / (height/100 * height/100)

    if(BMI < 15){
        return 'Very severely underweight'
    }

    else if(BMI >= 15 && BMI < 16){
        return 'Severely underweight'	
    }

    else if(BMI >= 16 && BMI < 18.5){
        return 'Underweight'	
    }

    else if(BMI >= 18.5 && BMI < 25){
        return 'Normal (healthy weight)'	
    }

    else if(BMI >= 25 && BMI < 30){
        return 'Overweight'	
    }

    else if(BMI >= 30 && BMI < 35){
        return 'Obese Class I (Moderately obese)'	
    }

    else if(BMI >= 35 && BMI < 40){
        return 'Obese Class II (Severely obese)'	
    }

    else if(BMI >= 40){
        return 'Obese Class III (Very severely obese)'	
    }

    else{
        throw new Error('Something went wrong')
    }

}

/*interface personalDetails  {
    height : number,
    weight : number
}
/*const parseArguments = (argv : Array<string>) : personalDetails => {
    

    if(argv.length <= 2){
        throw new Error('Not enough arguments')
    }

    if(isNaN(Number(argv[2])) || isNaN(Number(argv[3]))){
        throw new Error('Invalid arguments')
    }

    else{
        return{
            height : Number(argv[2]),
            weight  : Number(argv[3])
        }
    }

    

}

let args = parseArguments(process.argv)

console.log(calculateBmi(args.height , args.weight))*/
