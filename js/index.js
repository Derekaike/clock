const play = document.querySelector('#play')
const pause = document.querySelector('#pause')
const timerSet = document.querySelector('#timer')
const stop = document.querySelector('#stop')
const soundon = document.querySelector('#soundon')
const soundoff = document.querySelector('#soundoff')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let minutes
let seconds
let timerTimeOut

function playClock(){
    play.classList.add('hide');
    pause.classList.remove('hide')
    timerSet.classList.add('hide')
    stop.classList.remove('hide')

    countdown()
}

function pauseClock(){
    console.log('pause')
    play.classList.remove('hide');
    pause.classList.add('hide')
    stop.classList.add('hide')
    timerSet.classList.remove('hide')
    clearTimeout(timerTimeOut)
}

function stopClock(){
    timerSet.classList.remove('hide')
    stop.classList.add('hide')
    play.classList.remove('hide');
    pause.classList.add('hide')
    clearTimeout(timerTimeOut)
    resetClock()
}

function defineTimer(){
    minutes = prompt('Quantos minutos?')
    minutesDisplay.textContent = String(minutes).padStart(2, "0") || 0
    secondsDisplay.textContent = "00"
}

function muteUnmute(){
    soundon.classList.toggle('hide')
    soundoff.classList.toggle('hide')
}

function resetClock(){
    secondsDisplay.textContent = "00"
    minutesDisplay.textContent = "25"
}

function countdown() {
    timerTimeOut = setTimeout(function(){
        let seconds = Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)

        if( seconds <= 0 ){
            seconds = 60
            if( minutes <= 0 ){
                stopClock()
                return
            } 
            minutesDisplay.textContent = String(minutes - 1).padStart(2, "0")
        }
        
        secondsDisplay.textContent = String(seconds -1).padStart(2, "0")

        countdown()
    }, 1000)
}