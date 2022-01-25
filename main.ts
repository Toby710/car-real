function right () {
    _1802 = _1802 + 5
    pins.servoWritePin(AnalogPin.P16, _1802)
    _180 = _180 - 5
    pins.servoWritePin(AnalogPin.P14, _1802)
}
radio.onReceivedNumber(function (receivedNumber) {
    udlr = receivedNumber
    if (receivedNumber == 0) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        run()
    } else if (receivedNumber == 1) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        right()
    } else if (receivedNumber == 2) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        left()
    }
})
function run () {
	
}
function left () {
    _1802 = _1802 - 5
    pins.servoWritePin(AnalogPin.P16, _1802)
    _180 = _180 + 5
    pins.servoWritePin(AnalogPin.P14, _1802)
}
let udlr = 0
let _1802 = 0
let _180 = 0
radio.setGroup(1)
basic.forever(function () {
	
})
