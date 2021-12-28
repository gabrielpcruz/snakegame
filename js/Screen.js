let Screen = (() => {

    let screen = () => {
        return $("#screen")[0].getContext('2d');
    }

    let draw = (cordinates) => {
        let screen = Screen.screen();
        screen.beginPath();

        screen.clearRect(cordinates.oldCordinateX, cordinates.oldCordinateY, 2, 2);
        screen.moveTo(cordinates.oldCordinateX, cordinates.oldCordinateY);
        screen.fillRect(cordinates.cordinateX, cordinates.cordinateY, 2, 2);

        screen.fill();
    }

    return {
        screen: screen,
        draw: draw,
    }
})();
