const closeButton = document.getElementById('boxClose');
const rulesBox = document.getElementById('gameRulesContener');
const computerScore = document.getElementById('computerScore');
const userScore = document.getElementById('userScore');

function playAgain() {
    window.location.href = '../HomePage/index.html';
}

function nextPage() {
    window.location.href = '../congurationPage/index.html';
}

closeButton.addEventListener('click', () => {
    // rulesBox.style.display = 'none' ;
    rulesBox.style.opacity = '0';
    rulesBox.style.transition = 'all 1s';
});

function showRules() {
    rulesBox.style.opacity = '1';
    rulesBox.style.transition = 'all 1s';
    // rulesBox.style.display = 'block' ;
}

// localStorage.clear()

if (localStorage.length == 0) {
    localStorage.setItem('userScore', '0');
    localStorage.setItem('computerScore', '0');
} else {
    computerScore.innerText = localStorage.getItem('computerScore');
    userScore.innerText = localStorage.getItem('userScore');
}

// showing icons with border colours in results page

const pcIcon = document.getElementById('pcPicked');
const pcIconImg = document.querySelector('#pcPicked img');
const userIcon = document.getElementById('userPicked');
const userIconImg = document.querySelector('#userPicked img');

if (localStorage.length == 4) {
    const userImg = localStorage.getItem('userIcon');
    const pcImg = localStorage.getItem('computerIcon');

    console.log(pcIcon);
    console.log(pcIconImg);

    if (userImg === 'rock') {
        console.log('User select ', userImg);
        userIcon.style.borderColor = '#0074B6' ;
        userIconImg.src = '../img/rock.png' ;
        userIconImg.height = '59';
        userIconImg.width = '80';
    }else if(userImg === 'paper'){
        console.log('User select ', userImg);
        userIcon.style.borderColor = '#FFA943' ;
        userIconImg.src = '../img/paper.png' ;
        userIconImg.height = '72';
        userIconImg.width = '72';
    }else{
        console.log('User select ', userImg);
        userIcon.style.borderColor = '#BD00FF' ;
        userIconImg.src = '../img/scissor.png' ;
        userIconImg.height = '54';
        userIconImg.width = '37';
    }

    if (pcImg === 'rock') {
        console.log('PC select ', pcImg);
        pcIcon.style.borderColor = '#0074B6' ;
        pcIconImg.src = '../img/rock.png' ;
        pcIconImg.height = '59';
        pcIconImg.width = '80';
    }else if(pcImg === 'paper'){
        console.log('PC select ', pcImg);
        pcIcon.style.borderColor = '#FFA943';
        pcIconImg.src = '../img/paper.png' ;
        pcIconImg.height = '72';
        pcIconImg.width = '72';
    }else{
        console.log('PC select ', pcImg);
        pcIcon.style.borderColor = '#BD00FF';
        pcIconImg.src = '../img/scissor.png' ;
        pcIconImg.height = '54';
        pcIconImg.width = '37';
    }

    localStorage.removeItem('userIcon');
    localStorage.removeItem('computerIcon');
}

