let total = 50;
let currentBet = 0;

document.getElementById('total').innerText = `Total: ${total}`;

// activate buttons
document.getElementById('bet1').addEventListener('click', function () {
    currentBet += 1;
    document.getElementById('winLose').innerText = `Current Bet: ${currentBet}`;
});
document.getElementById('bet10').addEventListener('click', function () {
    currentBet += 10;
    document.getElementById('winLose').innerText = `Current Bet: ${currentBet}`;
});

// Lever actions
document.getElementById('lever').addEventListener('click', function () {
    if (currentBet === 0) {
        alert("Place a bet first!");
        return;
    }
    if (currentBet > total) {
        alert("You lose. Please refresh the page.");
        return;
    }
    spinReels(currentBet); //source: chatgpt
});

function spinReels(bet) {
    let reels = document.querySelectorAll('.reel div');
    let results = [];

    for (let i = 0; i < reels.length; i++) {
        let images = reels[i].querySelectorAll('img').length;
        let stopAt = Math.floor(Math.random() * images);

        // animations source: chatgpt & CodeJos(https://www.youtube.com/watch?v=boI2B4Gpp34&t=713s) & mdn
        reels[i].style.transition = 'none';
        reels[i].offsetHeight;
        reels[i].style.transition = 'transform 2s ease-out';
        reels[i].style.transform = `translateY(-${stopAt * 75}px)`;

        results.push(stopAt);
    }

    // After spin ends reset bets, source: chatgpt & CodeJos(https://www.youtube.com/watch?v=boI2B4Gpp34&t=713s)
    setTimeout(function () {
        let win = (results[0] === results[1] && results[1] === results[2]);
        if (win) {
            total += bet * 2;
            document.getElementById('winLose').innerText = `You won! +${bet * 2}`;
        } else {
            total -= bet;
            document.getElementById('winLose').innerText = `You lost! -${bet}`;
        }
        document.getElementById('total').innerText = `Total: ${total}`;
        currentBet = 0; // reset bet after spin
    }, 2000);
}
