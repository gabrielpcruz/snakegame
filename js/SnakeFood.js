let SnakeFood = (() => {

    let food = () => {
        let x = SnakeMath.getNumberMultipleOf2();
        let y = SnakeMath.getNumberMultipleOf2();

        let foodCordinates = {
            cordinateX: x,
            cordinateY: y,
            width: 2,
            height: 2
        };

        Screen.draw(
            foodCordinates.cordinateX,
            foodCordinates.cordinateY,
            foodCordinates.width,
            foodCordinates.height,
        );

        return foodCordinates;
    }

    return {
        init: () => {
        },
        food:food
    }
})();

$(() => {
    SnakeFood.init();
})