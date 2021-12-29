let Direction = (() => {

    const validDirection = [1, 2, 3, 4];

    const UP = 1;

    const DOWN = 2;

    const LEFT = 3;

    const RIGHT = 4;

    let getDirection = (event) => {
        let key = event.key;

        let direction = false;

        switch (key) {
            case 'w':
            case 'W':
                direction = UP;
                break;
            case 's':
            case 'S':
                direction = DOWN;
                break;
            case 'd':
            case 'D':
                direction = RIGHT;
                break;
            case 'a':
            case 'A':
                direction = LEFT;
                break;
        }

        return direction;
    }

    let isAValidDirection = (diraction) => {
        return $.inArray(diraction, validDirection) !== -1;
    }

    let move = (snake) => {
        Screen.draw(snake)
    }

    let isVerticaly = (direction) => {
        return direction === Direction.DOWN || direction === Direction.UP;
    }

    let isHorizontaly = (direction) => {
        return direction === Direction.LEFT || direction === Direction.RIGHT;
    }

    let isSameDirection = (direction, oldDirection) => {
        return (Direction.isVerticaly(direction) && Direction.isVerticaly(oldDirection)) ||
            (Direction.isHorizontaly(direction) && Direction.isHorizontaly(oldDirection));
    }

    return {
        getDirection: getDirection,
        isAValidDirection: isAValidDirection,
        isVerticaly: isVerticaly,
        isHorizontaly: isHorizontaly,
        isSameDirection: isSameDirection,
        move: move,
        UP: UP,
        DOWN: DOWN,
        RIGHT: RIGHT,
        LEFT: LEFT,
    }
})();
