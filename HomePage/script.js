const choices = document.querySelectorAll('.gameIcons');

const randomCompChoice = () => {
    const options = ['rock' , 'paper' , 'scissor'] ;
    const randomIdx =  Math.floor(Math.random()*3) ;
    // console.log(randomIdx);
    return options[randomIdx] ;

}

function showWinner(userWin){
    if(userWin){
        let userScore = localStorage.getItem('userScore')
        userScore = Number(userScore)
        userScore += 1
        localStorage.setItem('userScore' , userScore);
        window.location.href = '../winPage/index.html';
        console.log('user Win and Score is ', userScore);
    }else{
        let computerScore = localStorage.getItem('computerScore')
        computerScore = Number(computerScore) ;
        computerScore += 1
        localStorage.setItem('computerScore' , computerScore);
        window.location.href = '../lossPage/index.html' ;
        console.log('Computer Win and Score is ', computerScore);
    }
}

const playgames = (userChoice) =>{
    localStorage.setItem('userIcon' , userChoice) ;
    // computer choice
    const computerChoice = randomCompChoice() ;
    localStorage.setItem('computerIcon' , computerChoice) ;

    if(computerChoice === userChoice){
        // Draw Condition
        console.log('Game Draw') ;
        window.location.href = '../drawPage/index.html' ;
    }else{
        let userWin = true ;
        if(userChoice === 'rock'){
            // scissor , paper
            userWin = computerChoice === 'paper' ? false : true ;
        }else if(userChoice === 'paper'){
            // scissor , rock
            userWin = computerChoice === 'scissor' ? false : true ;
        }else {
            // rock , paper
            userWin = computerChoice === 'rock' ? false : true ;
        }
        showWinner(userWin) ;
    }

}

choices.forEach((choice) => {
    const choiceId = choice.getAttribute('id');
    choice.addEventListener('click' , () => {
        playgames(choiceId)
    })
})