let Sound = (() => {
    let snakeDieSound;
    let snakeWalkSound;
    let gameOverSound;

    let init = () => {
        snakeDieSound = $("audio#snake_die")[0];
        snakeWalkSound = $("audio#snake_walk")[0];
        gameOverSound = $("audio#game_over")[0];
    }

    let snakeDie = () => {
        snakeDieSound.load = false;
        snakeDieSound.currentTime = 1

        return snakeDieSound;
    }

    let gameOver = () => {
        gameOverSound.loop = false;

        return gameOverSound;
    }

    let snakeWalk = () => {
        snakeWalkSound.load = false;
        snakeWalkSound.currentTime = false;

        return snakeWalkSound;
    }

    return {
        init: () => {
          init();
        },
        snakeDie: snakeDie,
        snakeWalk: snakeWalk,
        gameOver: gameOver,
    }
})();

$(() => {
    Sound.init();
})