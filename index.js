var readlineSync=require("readline-sync");
var chalk=require('chalk');

console.clear();
console.log(chalk.bgMagenta("------KAUN BANEGA CROREPATI lite-------"));

var name=readlineSync.question(chalk.yellowBright("\nSo, What's your name: "));
var score=0;
var count=0;

console.log(chalk.yellow("\nWelcome to the game,",name,"\nLet's begin with..."));
console.log(chalk.black.bgGreenBright.bold("\nLEVEL 1"))


//function to add questions
function play(question,options,answer){
  console.log(chalk.cyanBright(question));

  var userAns=readlineSync.keyInSelect(options,"Select your options to lock: ");

  if(options[userAns]===answer){
      console.log(chalk.green("\nSahi jawab...."));
      score+=1;
    console.log(chalk.black.bgYellowBright.bold("AAPKA SCORE HOTA HAI:"),chalk.yellowBright.bold(score))

      if(score>=4 && score<6){
        console.log(chalk.black.bgYellowBright.bold("\nWelcome to LEVEL 2..."))
      }
      else if(score>=6 && score<8){
        console.log(chalk.black.bgYellowBright.bold("\nWelcome to LEVEL 3..."))
      }
      
      // else if(score>8 && score<10){
      //   console.log("\nWelcome to LEVEL 4...")
      // }
      else if(score===10){
        console.log(chalk.black.bgYellowBright.bold("\nYou have won the game...") )       
      }
  }
  else{
    console.log(chalk.red("\nAfsos,Galat jawab"));
    console.log(chalk.black.bgYellowBright.bold("AAPKA SCORE HOTA HAI:"),chalk.yellowBright.bold(score))

  }
  count+=1;
  

}

optionSet1=["Tuljapur","Shivneri","Raigad"];
optionSet2=["1650","1690","1630"];
optionSet3=["Joey","Chandler","Pheobe"];
optionSet4=["1","3","2"];
optionSet5=["Pune","Hyderabad","Bengaluru"];
optionSet6=["5","0","3"];
optionSet7=["Ramnath Kovind","Pranab Mukherjee","Joe Biden"];
optionSet8=["26","28","29"];
optionSet9=["AvalonMeta","Edyoda","NeoGCamp"];
optionSet10=["Baahubali 1","Dangal","Baahubali 2"];

//question 1
play("\nWhere was Shivaji Maharaj born?: ",optionSet1,"Shivneri");
//question 2
play("\nIn which year Shivaji Maharaj born?: ",optionSet2,"1630");
//question 3
play('\nWho in the series "FRIENDS" uses the pick-up line "How you doing...?: "',optionSet3,"Joey");
//question 4
play("\nHow many divorce did Ross had in 'FRIENDS'?: ",optionSet4,"3");
//question 5
play('\nWhich is the "IT capital" of India?: ',optionSet5,"Bengaluru");
//question 6
play("\nHow many IPL trophies have RCB won?: ",optionSet6,"0");
//question 7
play("\nWho is the President of India?: ",optionSet7,"Ramnath Kovind");
//question 8
play("\nHow many states are there in India?: ",optionSet8,"28");
//question 9
play("\nWho is conducting the free BOOT DEVELOPMENT camp?: ",optionSet9,"NeoGCamp");
//question 10
play("\nWhich is the highest grossing movie of India?: ",optionSet10,"Baahubali 2");


if(count<10){
        console.log(chalk.black.bgYellowBright.bold("\nBetter luck next time...") )       
    
  }


