let Game = (() => {
    let game;
    let speed = 1000;

    let gameOver = () => {
        Sound.snakeDie().play()

        setTimeout(() => {
            Sound.gameOver().play();
        },200);

        stop();
    }

    let start = () => {
        $("body").on("keypress", (event) => {
            let key = event.key

            if (key === 'Enter') {
                game = setInterval(() => {

                    if (!Snake.died()) {
                        Sound.snakeWalk().play();
                        Snake.snake.speed = speed;
                        Snake.walk();
                    } else {
                        gameOver();
                    }
                }, speed);
            }
        });
    }

    let watchGame = () => {
        $("body").on("keypress", (event) => {
            let key = event.key

            if (key === '0') {
                stop();
            }
        });
    }

    let stop = () => {
        clearInterval(game);
    }

    return {
        init: () => {
            start();
            watchGame();
        }
    }
})();

$(() => {
    Game.init();
})