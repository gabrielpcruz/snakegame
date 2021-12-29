let Screen = (() => {
    let screenObject;

    let init = () => {
        screenObject = $("#screen")[0].getContext('2d');
    }

    let screen = () => {
        return screenObject;
    }

    let draw = (cordinates) => {
        let screen = Screen.screen();
        screen.beginPath();

        // Walk to sides
        let width = 2;
        let height = 2;

        let direction = cordinates.direction;

        if (Direction.isVerticaly(direction)) {
            width = 2;
            height = 2;
        }

        if (cordinates.direction !== cordinates.oldDirection) {
            clearOldPosition(cordinates, width, height)
        }

        screen.moveTo(cordinates.oldCordinateX, cordinates.oldCordinateY);
        screen.fillRect(cordinates.cordinateX, cordinates.cordinateY, width, height);

        setTimeout(() => {
            screen.clearRect(cordinates.oldCordinateX, cordinates.oldCordinateY, height, width);
        }, cordinates.speed - (cordinates.speed * 0.5));

        screen.fill();
    }


    let clearOldPosition = (cordinates, width, height) => {
        screen.clearRect(cordinates.oldCordinateX, cordinates.oldCordinateY, width, height);
    }

    return {
        init: () => {
            init();
        },
        screen: screen,
        draw: draw,
    }
})();

$(() => {
    Screen.init();
})
