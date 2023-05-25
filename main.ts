input.calibrateCompass()
basic.forever(function () {
    if (input.compassHeading() < 90 || input.compassHeading() > 270) {
        basic.showArrow(ArrowNames.North)
    } else {
        basic.showArrow(ArrowNames.South)
    }
})
