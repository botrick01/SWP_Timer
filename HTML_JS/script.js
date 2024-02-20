const startTimer = () => {
    let seconds = document.getElementById('time').value;
    if (seconds === '') {
        alert("Please enter a number of seconds");
        return;
    }
    let countdown = setInterval(() => {
        seconds--;
        document.getElementById('timer').innerHTML = seconds;
        if (seconds <= 0) {
            clearInterval(countdown);
            document.getElementById('timer').innerHTML = "Time's up!";
        }
    }, 1000);
}
document.getElementById('start').onclick = startTimer;