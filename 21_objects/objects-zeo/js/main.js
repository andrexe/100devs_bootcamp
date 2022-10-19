//Create a stopwatch object that has four properties and three methods

const stopwatch = {
    ms: 0,
    s: 0,
    m: 0,
    timerId: 0,
    start() {
        if (this.timerId) {
            clearInterval(this.timerId);
        }
        this.timerId = setInterval(() => {
            // console.clear();
            this.ms += 100;
            if (this.ms >= 1000) {
                this.s += 1;
                this.ms = 0;
            }
            if (this.s >= 60) {
                this.m += 1;
                this.s = 0;
            }
            // console.log(`${this.m} :`.padStart(4, '0'), `${this.s} :`.padStart(4, '0'), `${this.ms}`.padEnd(3, '0'))
        }, 100);
    },
    stop() {
        clearInterval(this.timerId);
    },
    reset() {
        console.log('reset');
        [this.ms, this.s, this.m] = [0, 0, 0];
    }
}

const stopwatchDisplay = document.getElementById('display');
stopwatchDisplay.innerText = `${stopwatch.m} : `.padStart(5, '0') + `${stopwatch.s} : `.padStart(5, '0') + `${stopwatch.ms}`.padEnd(3, '0');

let updateId;
const updateDisplay = () => {
    if (updateId) {
        clearInterval(updateId);
    }
    updateId = setInterval(() => {
        stopwatchDisplay.innerText = `${stopwatch.m} : `.padStart(5, '0') + `${stopwatch.s} : `.padStart(5, '0') + `${stopwatch.ms}`.padEnd(3, '0');
        console.log('update display');
    }, 100)
};

const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

startButton.addEventListener('mousedown', () => {
    stopwatch.start();
    updateDisplay();
});
stopButton.addEventListener('mousedown', () => {
    stopwatch.stop();
    clearInterval(updateId);
})
resetButton.addEventListener('mousedown', () => {
    stopwatch.reset();
    stopwatchDisplay.innerText = `${stopwatch.m} : `.padStart(5, '0') + `${stopwatch.s} : `.padStart(5, '0') + `${stopwatch.ms}`.padEnd(3, '0');
})
