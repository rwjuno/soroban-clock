function getout () {
    place1 = smarttools.stringToInt(sorotime.charAt(0))
    place2 = smarttools.stringToInt(sorotime.charAt(1))
    place4 = smarttools.stringToInt(sorotime.charAt(3))
    place5 = smarttools.stringToInt(sorotime.charAt(4))
}
let place5 = 0
let place4 = 0
let place2 = 0
let sorotime = ""
let place1 = 0
let minute = 0
let hour = 0
let runclock = false
while (runclock == false) {
    if (input.buttonIsPressed(Button.A)) {
        hour += 1
        soroban.showNumber(hour)
        basic.pause(500)
    }
    if (input.buttonIsPressed(Button.B)) {
        minute += 1
        soroban.showNumber(minute)
        basic.pause(500)
    }
    if (input.logoIsPressed()) {
        runclock = true
        basic.pause(500)
    }
    timeanddate.set24HourTime(hour, minute, 0)
}
basic.forever(function () {
    sorotime = timeanddate.time(timeanddate.TimeFormat.HHMM24hr)
    getout()
    soroban.showNumber(place1, Align.C1, true)
    soroban.showNumber(place2, Align.C2, false)
    led.plot(2, 2)
    soroban.showNumber(place4, Align.C4, false)
    soroban.showNumber(place5, Align.C5, false)
    basic.pause(1000)
    led.unplot(2, 2)
    basic.pause(1000)
})
