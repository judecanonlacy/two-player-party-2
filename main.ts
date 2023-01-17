namespace SpriteKind {
    export const bannana = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.player1.changeScoreBy(1)
    scaling.scaleByPixels(myBalloon, 1, ScaleDirection.Uniformly, ScaleAnchor.Bottom)
    myMouse.setImage(assets.image`mouse1-down`)
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    info.player2.changeScoreBy(1)
    myMouse2.setImage(assets.image`mouse2-down`)
    scaling.scaleByPixels(myBalloon2, 1, ScaleDirection.Uniformly, ScaleAnchor.Bottom)
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Released, function () {
    myMouse2.setImage(assets.image`mouse2-up`)
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    myMouse.setImage(assets.image`mouse1-up`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Booth, function (sprite, otherSprite) {
    carnival.onGameOverExpanded(carnival.WinTypes.Multi)
})
let myMouse2: Sprite = null
let myBalloon2: Sprite = null
let myMouse: Sprite = null
let myBalloon: Sprite = null
carnival.startCountdownGame(20, carnival.WinTypes.Lose, effects.smiles)
scene.setBackgroundColor(12)
myBalloon = sprites.create(assets.image`MONKE`, SpriteKind.Player)
myBalloon.setPosition(25, 87)
let bannana = sprites.create(assets.image`bannana`, SpriteKind.bannana)
bannana.setPosition(132, 45)
let myBooth = sprites.create(img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    . 1 . 1 . 1 . 1 . 1 . 1 . 1 . 1 
    . . . . . . . . . . . . . . . . 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Booth)
scaling.scaleByPixels(myBooth, 150, ScaleDirection.Uniformly, ScaleAnchor.Bottom)
myBooth.setPosition(80, 44)
myMouse = sprites.create(assets.image`mouse1-up`, SpriteKind.Mouse)
myMouse.setPosition(26, 111)
simplified.wrap(function () {
    myBalloon2 = sprites.create(img`
        . . . . . . . . . c c c . . . . 
        . . . . . . . . c d d d c . . . 
        . . . . . . . c c d d d d c . . 
        . . . . . c c c c c c d d c . . 
        . . . c c c 4 4 4 4 d c c c c c 
        . . c 4 4 1 4 4 4 4 4 1 c c 4 f 
        . c 4 f 4 4 1 4 4 4 4 d 1 f 4 f 
        f 4 f 4 4 4 1 4 4 4 4 4 1 f 4 f 
        f f 4 2 4 4 1 4 c f 4 4 1 4 4 f 
        f 4 4 4 4 4 1 c 4 f 4 4 1 f f f 
        . f 4 4 4 4 1 4 4 f 4 4 d f . . 
        . . f 4 4 1 4 c c 4 4 d f . . . 
        . . . f d 4 4 4 4 4 4 c f . . . 
        . . . . f f 4 4 4 4 c d b c . . 
        . . . . . . f f f f d d d c . . 
        . . . . . . . . . . c c c . . . 
        `, SpriteKind.Player)
    myBalloon2.setPosition(107, 87)
    myMouse2 = sprites.create(assets.image`mouse2-up`, SpriteKind.Mouse)
    myMouse2.setPosition(110, 112)
})
carnival.addLabelTo("zaboomafu's worst nightmare", carnival.Areas.Mid)
