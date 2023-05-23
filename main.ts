input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(0, 9))
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Alaa")
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # # # .
        . # . . #
        . # # # .
        . # . . #
        . # # # #
        `)
})
