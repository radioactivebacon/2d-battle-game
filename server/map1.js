module.exports = function(gameServerInstance) {
    var platformColor = gameServerInstance.getRandomColor();
    return [
        new PhysicsEntity({
            name: "floor",
            color: platformColor,
            useGravity: false,
            isKinematic: true,
            rendererType: "Rectangle",
            x: -500,
            y: 330,
            w: 1000,
            h: 10,
            game: gameServerInstance
        }),
        new PhysicsEntity({
            name: "ceiling",
            color: platformColor,
            useGravity: false,
            isKinematic: true,
            rendererType: "Rectangle",
            x: -500,
            y: -340,
            w: 1000,
            h: 10,
            game: gameServerInstance
        }),
        new PhysicsEntity({
            name: "leftWall",
            color: platformColor,
            useGravity: false,
            isKinematic: true,
            rendererType: "Rectangle",
            x: -510,
            y: -340,
            w: 10,
            h: 680,
            game: gameServerInstance
        }),
        new PhysicsEntity({
            name: "rightWall",
            color: platformColor,
            useGravity: false,
            isKinematic: true,
            rendererType: "Rectangle",
            x: 500,
            y: -340,
            w: 10,
            h: 680,
            game: gameServerInstance
        }),
        new PhysicsEntity({
            name: "platform1",
            color: platformColor,
            useGravity: false,
            isKinematic: true,
            rendererType: "Rectangle",
            x: -400,
            y: 250,
            w: 300,
            h: 10,
            game: gameServerInstance
        }),
        new PhysicsEntity({
            name: "platform2",
            color: platformColor,
            useGravity: false,
            isKinematic: true,
            rendererType: "Rectangle",
            x: 100,
            y: 250,
            w: 300,
            h: 10,
            game: gameServerInstance
        }),
        new PhysicsEntity({
            name: "platform3",
            color: platformColor,
            useGravity: false,
            isKinematic: true,
            rendererType: "Rectangle",
            x: -150,
            y: 150,
            w: 300,
            h: 10,
            game: gameServerInstance
        }),
        new PhysicsEntity({
            name: "platform1",
            color: platformColor,
            useGravity: false,
            isKinematic: true,
            rendererType: "Rectangle",
            x: -400,
            y: 50,
            w: 300,
            h: 10,
            game: gameServerInstance
        }),
        new PhysicsEntity({
            name: "platform4",
            color: platformColor,
            useGravity: false,
            isKinematic: true,
            rendererType: "Rectangle",
            x: 100,
            y: 50,
            w: 300,
            h: 10,
            game: gameServerInstance
        }),
        new PhysicsEntity({
            name: "platform5",
            color: platformColor,
            useGravity: false,
            isKinematic: true,
            rendererType: "Rectangle",
            x: -150,
            y: -50,
            w: 300,
            h: 10,
            game: gameServerInstance
        }),
        new PhysicsEntity({
            name: "platform6",
            color: platformColor,
            useGravity: false,
            isKinematic: true,
            rendererType: "Rectangle",
            x: -400,
            y: -150,
            w: 300,
            h: 10,
            game: gameServerInstance
        }),
        new PhysicsEntity({
            name: "platform7",
            color: platformColor,
            useGravity: false,
            isKinematic: true,
            rendererType: "Rectangle",
            x: 100,
            y: -150,
            w: 300,
            h: 10,
            game: gameServerInstance
        }),
        new PhysicsEntity({
            name: "platform8",
            color: platformColor,
            useGravity: false,
            isKinematic: true,
            rendererType: "Rectangle",
            x: -150,
            y: -250,
            w: 300,
            h: 10,
            game: gameServerInstance
        }),
    ];
}