let Snake = (() => {
    let snake = {
        length: 1,
        oldCordinateY: 1,
        oldCordinateX: 0,
        cordinateY: 1,
        cordinateX: 0,
        direction: Direction.RIGHT
    };

    let setDirection = (direction) => {
        if (Direction.isAValidDirection(direction)) {
            snake.direction = direction;
        }
    }

    let updatePosition = () => {
        snake.oldCordinateX = snake.cordinateX;
        snake.oldCordinateY = snake.cordinateY;

        if (snake.direction === Direction.RIGHT) {
            snake.cordinateX = (snake.cordinateX + 1)
        }

        if (snake.direction === Direction.LEFT) {
            snake.cordinateX = (snake.cordinateX - 1)
        }

        if (snake.direction === Direction.UP) {
            snake.cordinateY = (snake.cordinateY - 1)
        }

        if (snake.direction === Direction.DOWN) {
            snake.cordinateY = (snake.cordinateY + 1)
        }
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
        snake: snake
    }
})();

$(() => {
    Snake.init();
})