let Snake = (() => {
    let snake = {
        length: 4,
        width: 4,
        height: 2,
        oldCordinateY: 2,
        oldCordinateX: 2,
        cordinateY: 2,
        cordinateX: 2,
        direction: Direction.RIGHT,
        oldDirection: Direction.RIGHT,
        speed: 0
    };

    let setDirection = (direction) => {
        if (
            Direction.isAValidDirection(direction) &&
            !Direction.isSameDirection(direction, snake.direction)
        ) {
            snake.oldDirection = snake.direction;
            snake.direction = direction;
        }
    }

    let updatePosition = () => {
        snake.oldCordinateX = snake.cordinateX;
        snake.oldCordinateY = snake.cordinateY;

        if (snake.direction === Direction.RIGHT) {
            snake.cordinateX = (snake.cordinateX + 2)
        }

        if (snake.direction === Direction.LEFT) {
            snake.cordinateX = (snake.cordinateX - 2)
        }

        if (snake.direction === Direction.UP) {
            snake.cordinateY = (snake.cordinateY - 2)
        }

        if (snake.direction === Direction.DOWN) {
            snake.cordinateY = (snake.cordinateY + 2)
        }
    }

    let died = () => {
        return snake.cordinateX <= 1 || snake.cordinateY <= 0 || snake.cordinateX >= 147 || snake.cordinateY >= 147;
    }

    let walk = () => {
        updatePosition();
        Direction.move(snake);
    }

    let watch = () => {
        $("body").on("keypress", (event) => {
            let direction = Direction.getDirection(event);

            setDirection(direction);
        });
    }

    return {
        init: () => {
            watch();
        },

        updatePosition: updatePosition,
        walk: walk,
        died: died,
        snake: snake
    }
})();

$(() => {
    Snake.init();
})