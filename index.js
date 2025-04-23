//1
function checkLogin() {
    let loginTrial = 0;
    const totalTrials = 3;

    while (loginTrial < totalTrials) {
        loginTrial++;

        console.log(`Login attempt ${loginTrial} failed`)
    }

    if (loginTrial === totalTrials) {
        console.log("Account locked")
    }
}

checkLogin()



//2

function votingProcess(votes) {

    let i = 0
    do {
        console.log(`vote processed: ${votes[i]}`)
        i++;
    }

    while (i < votes.length)
}

votingProcess(["yes", "yes", "no", "no", "refrain"])




//3
function daysOfWeek(arrayOfNumbers) {
    arrayOfNumbers.forEach(days => {
        switch (days) {
            case 1:
                console.log("Monday");
                break;
            case 2:
                console.log("Tuesday");
                break;
            case 3:
                console.log("wednesday");
                break;
            case 4:
                console.log("Thursday");
                break;
            case 5:
                console.log("Friday")
                break;
            case 6:
                console.log("Saturday");
                break;
            case 7:
                console.log("Sunday");
                break;
            default:
                console.log("Not available")
                break;
        }
    });
}


let arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8]
daysOfWeek(arrayOfNumbers)




//4
function arrayOfPassword(passwords) {
    for (let i = 0; i < passwords.length; i++) {

        if (passwords[i].length >= 8) {
            console.log("Password is Strong");
        } else {
            console.log("Password is weak");
        }
    }
}

let passwords = ["hellobi", "@akirachix2011"]
arrayOfPassword(passwords)




//5
function typesOfGreetings(greetings) {
    greetings.forEach(greeting => {
        switch (greeting) {
            case "en":
                console.log("Hello");
                break;
            case "fr":
                console.log("Bonjour");
                break;
            case "sw":
                console.log("Habari");
                break;
            default:
                console.log("Unknown language");
                break;
        }
    });
}

let greetings=["en", "fr", "sw", "selam"]
typesOfGreetings(greetings)


//6
function arrayOfTempratures(datas) {
    for (let i = 0; i < datas.length; i++) {
        if (datas[i] > 30) {
            console.log("High heat alert!")
        } else if (datas[i] < 15) {
            console.log("Cold alert!")
        }
        else {
            console.log("Normal conditions")
        }
    }
}

datas = [40, 28, 10, 20]
arrayOfTempratures(datas)





//7


function registration (userNames){
    
    while(userNames.length>0){
        let user =userNames.shift()
        console.log(`registering user is: ${user}`)
    }

console.log("Registration queue is now empty")
}
let userNames = ["Mahder", "Hagos", "John", "Abel"]
registration(userNames)




//8

function testRetake(studentResults) {
    studentResults.forEach(studentResult=>{
        let attempt=1;
        let score=studentResult.score;
        if (score >= 50) {
            console.log(`${studentResult.name} has already passed the test`)
        }else{
            do {
                console.log(`student name : ${studentResult.name} , attempt ${attempt}: ${score}`)
                score+= 10;
                attempt++;
            }
        
            while (score < 50);
            console.log(`${studentResult.name}, your score is ${score} now. So you have passed.`)
        };
    
    });
};
let studentResults= [{"name":"Tirsit","score":24},{"name":"Fana","score":5},{"name":"Arsema","score":56},{"name":"Semhal","score":2}];
testRetake(studentResults);






