input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("B C5 G E C C5 C5 A ", 120), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("D C F E G F A F ", 95), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    music.play(music.stringPlayable("C5 G B A C5 B A G ", 189), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C - E - C - D F ", 99), music.PlaybackMode.UntilDone)
})
