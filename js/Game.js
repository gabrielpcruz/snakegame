let Game = (() => {
    let game;
    let speed = 500;

    let start = () => {
        $("body").on("keypress", (event) => {
            let key = event.key

            if (key === 'Enter') {
                game = setInterval(() => {
                    Snake.walk();
                    // $("audio#snake_walk")[0].play() maybe later
                }, speed);
            }
        });
    }

    let stop = () => {
        $("body").on("keypress", (event) => {
            let key = event.key

            if (key === '0') {
                clearInterval(game);
            }
        });
    }

    return {
        init: () => {
            start();
            stop();
        }
    }
})();

$(() => {
    Game.init();
})