
var milisec = document.getElementById('ms');
var sec = document.getElementById('sec');
var min = document.getElementById('min');
var hr = document.getElementById('hr');

ms = 0;
s = 0;
m = 0;
h = 0;

function timer() {
    sec.innerHTML = s;
    min.innerHTML = m;
    hr.innerHTML = h;
    milisec.innerHTML = ms;
    ms++

    if (ms === 100) {
        s++
        ms = 0;
    }


    if (s === 60) {
        m++;
        s = 0;
    }

    if (m === 60) {
        h++;
        m = 0;
    }

    if (h === 24) {
        h = 0;
    }


    if (s < 10) {
        sec.innerHTML = '0' + s;
    }

    if (m < 10) {
        min.innerHTML = '0' + m;
    }

    if (h < 10) {
        hr.innerHTML = '0' + h;
    }

}
var refrenseInterval;

function startTimer() {
    if (refrenseInterval) {
        stopTimer();
    }
    refrenseInterval = setInterval(timer, 10);
}

function stopTimer() {
    clearInterval(refrenseInterval);
}

function resetTimer() {
    ms = 0;
    s = 0;
    m = 0;
    h = 0;

    milisec.innerHTML = '00';
    sec.innerHTML = '00';
    min.innerHTML = '00';
    hr.innerHTML = '00';
    stopTimer();
}



















