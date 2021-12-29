let Game = (() => {
    let game;
    let speed = 1000;
    let gaming = false;
    let points = 0;
    let food = false;

    let gameOver = () => {
        Sound.snakeDie().play()

        setTimeout(() => {
            Sound.gameOver().play();
        },200);

        stop();
    }

    let updateGame = () => {
        $("#points").text(points);
    }

    let snakeEatFood = () => {
        if (!food) {
            food = SnakeFood.food();
        }

        let snake = Snake.snake;

        // console.log(snake)
        // console.log(food)

        if (
            snake.cordinateY === food.cordinateY &&
            snake.cordinateX === food.cordinateX
        ) {
            points = points + 1;

            console.log("===== Antes de Comer ==== ")
            console.log("X: " + snake.cordinateX)
            console.log("Y: " + snake.cordinateY)
            console.log("w: " + snake.width)
            console.log("h: " + snake.height)
            console.log("===== ==== ")

            snake.length = snake.length + 2

            console.log("===== Depois de Comer ==== ")
            console.log("X: " + snake.cordinateX)
            console.log("Y: " + snake.cordinateY)
            console.log("w: " + snake.width)
            console.log("h: " + snake.height)
            console.log("===== ==== ")

            food = false;
        }

    }

    let start = () => {

        gaming = true;
        game = setInterval(() => {

            if (!Snake.died()) {
                // Sound.snakeWalk().play();
                Snake.snake.speed = speed;
                Snake.walk();

                snakeEatFood();
                updateGame();

            } else {
                // gameOver();
            }
        }, speed);
    }

    let watchGame = () => {
        $("body").on("keypress", (event) => {
            let key = event.key

            if (key === '0') {
                stop();
            }

            if (key === 'Enter' && !gaming) {
                start();
            }
        });
    }

    let stop = () => {
        clearInterval(game);
        gaming = false;
    }

    return {
        init: () => {
            watchGame();
        }
    }
})();

$(() => {
    Game.init();
})