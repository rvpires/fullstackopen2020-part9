/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import express from 'express';
import {calculateBmi} from './bmiCalculator';
import { calculateExercises } from './exerciseCalculator'
const app = express();


app.use(express.json());

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});


app.get('/bmi' , (req, res) => {

    const query = req.query;

    if(Object.keys(query).includes('height') && Object.keys(query).includes('weight')){
       const bmi = calculateBmi(Number(query.height) , Number(query.weight));
       res.send({
           weight : query.weight,
           height : query.height,
           bmi : bmi
       });
    }

    else{
        res.send({
            error: "malformatted parameters"
        });
    }
});

app.post('/exercises' , (req , res) => {

    const body : any = req.body;

    if(!Object.keys(body).includes('daily_exercises') || !Object.keys(body).includes('target')){
        res.send( { error: "parameters missing" });  
        return;       
    }

    for(let i = 0 ; i < body.daily_exercises.length; i++){

        if(isNaN(Number(body.daily_exercises[i]))){
            res.send( { error: "invalid parameters" });         
            return;
        }
    }

    if(isNaN(Number(body.target))){
        res.send( { error: "invalid parameters" });         
        return;
    }

    const exerciseSummary = calculateExercises(body.daily_exercises , body.target)
    res.send(exerciseSummary);

});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});