let score = JSON.parse(localStorage.getItem('score')) || { wins: 0, losses: 0, tie: 0 };
updateScore();

function playGame(move) {
  const computerMove = pickComputerMove();
  let result = '';

  if (move === 'Scissor') {
    if (computerMove === 'Rock') {
      result = 'You lose';
    } else if (computerMove === 'Paper') {
      result = 'You win';
    } else {
      result = 'Tie';
    }
  } else if (move === 'Paper') {
    if (computerMove === 'Rock') {
      result = 'You win';
    } else if (computerMove === 'Paper') {
      result = 'Tie';
    } else {
      result = 'You lose';
    }
  } else if (move === 'Rock') {
    if (computerMove === 'Rock') {
      result = 'Tie';
    } else if (computerMove === 'Paper') {
      result = 'You lose';
    } else {
      result = 'You win';
    }
  }

  if (result === 'You win') {
    score.wins += 1;
  } else if (result === 'You lose') {
    score.losses += 1;
  } else {
    score.tie += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));
  document.querySelector('.js-para1').innerHTML = `${result}`;
  document.querySelector('.js-para2').innerHTML = `You <img src="Images/${move}.png" class="icon"> Computer <img src="Images/${computerMove}.png" class="icon">`;
  updateScore();
}

function updateScore() {
  document.querySelector('.js-para').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Tie: ${score.tie}`;
}

function resetScore() {
  score = { wins: 0, losses: 0, tie: 0 };
  localStorage.removeItem('score');
  updateScore();
}

function pickComputerMove() {
  const random = Math.random();
  if (random < 1 / 3) {
    return 'Rock';
  } else if (random < 2 / 3) {
    return 'Paper';
  } else {
    return 'Scissor';
  }
}