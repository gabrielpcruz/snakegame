let Screen = (() => {
    let screenObject;

    let init = () => {
        screenObject = $("#screen")[0].getContext('2d');
    }

    let screen = () => {
        return screenObject;
    }

    let clearOldPosition = (cordinates) => {
        screenObject.clearRect(
            cordinates.oldCordinateX,
            cordinates.oldCordinateY,
            cordinates.width,
            cordinates.height
        );
    }

    let draw = (
        cordinateX,
        cordinateY,
        width,
        height,
    ) => {
        let screen = Screen.screen();

        screen.beginPath();

        screen.moveTo(
            cordinateX,
            cordinateY
        );

        screen.fillRect(
            cordinateX,
            cordinateY,
            width,
            height
        );

        screen.fill();
    }

    let drawSnake = (cordinates) => {

        let cordinateX = cordinates.cordinateX;
        let cordinateY = cordinates.cordinateY;
        let width = cordinates.width;
        let height = cordinates.height;

        clearOldPosition(cordinates)


        if (Direction.isVerticaly(cordinates.direction)) {
            width = cordinates.height
            height = cordinates.width
        }


        // console.log(cordinates.direction)
        // console.log(cordinates.oldDirection)

        console.log(
            Direction.isSameDirection(cordinates.direction, cordinates.oldDirection)
        )




        draw(
            cordinateX,
            cordinateY,
            width,
            height,
        );



        setTimeout(() => {
            screenObject.clearRect(
                cordinates.oldCordinateX,
                cordinates.oldCordinateY,
                cordinates.width,
                cordinates.height
            );

        }, cordinates.speed - (cordinates.speed * 0.5));
    }

    return {
        init: () => {
            init();
        },
        screen: screen,
        draw: draw,
        drawSnake: drawSnake,
    }
})();

$(() => {
    Screen.init();
})
