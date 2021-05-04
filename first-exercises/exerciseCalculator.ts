interface trainingResults  {

    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: string,
    target: number,
    average: number

}

/*const parseArgv = (argv : Array<string>) : Array<number> => {
    
    if(argv.length <= 2){
        throw new Error('Not enough arguments');
    }

    let arr : Array<number> = [];

    for(let i = 2; i < argv.length; i++){

        if(isNaN(Number(argv[i]))){
            throw new Error('Arguments need to be numbers');
        }

        arr = arr.concat(Number(argv[i]));

    }

    return arr;
}; */

export const calculateExercises = (trains : Array<number>, dailyTarget : number) : trainingResults => {

    const numberOfDays : number = trains.length;
    
    if(numberOfDays <= 0){
        throw new Error('Training array should have a lenght larger than zero.');
    }

    let trainingDays = 0;
    let sum = 0;
    let rating : number;
    let ratingDescription : string;

    for(let i=0; i < trains.length; i++){

        sum = sum + trains[i];

        if(trains[i] > 0){
            trainingDays = trainingDays + 1;
        }
    }

    const average : number = sum / numberOfDays;

    if(average < dailyTarget){
        rating = 1;
        ratingDescription = 'You can do better.';
    }

    else if(average >= dailyTarget && average < 2*dailyTarget){
        rating = 2;
        ratingDescription = 'You are on target.';
    }

    else if(average >= 2*dailyTarget ){
        rating = 3;
        ratingDescription = 'You are exceeded the target.';
    }

    else{
        throw new Error('Something went wrong.');
    }


    return{
        periodLength: numberOfDays,
        trainingDays: trainingDays,
        success: average >= dailyTarget ? true : false,
        rating: rating,
        ratingDescription: ratingDescription,
        target: dailyTarget,
        average: average 
    };
    

}; 

/*let arguments : Array<number> = parseArgv(process.argv);

console.log(calculateExercises(arguments.slice(1) , arguments[0]));*/

