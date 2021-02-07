let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 10) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 70)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 30)
        music.playTone(262, music.beat(BeatFraction.Whole))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        strip.show()
        basic.pause(500)
        strip.clear()
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.White))
        strip.show()
    }
})
