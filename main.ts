input.onButtonPressed(Button.A, function () {
    basic.showString("BOBOCLAT")
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        # . . . #
        . # # # .
        . . . . .
        `)
})
