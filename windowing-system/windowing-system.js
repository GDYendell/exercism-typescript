// @ts-check

/**
 * Class to store a height and width
 *
 * @param {number} width Width of size
 * @param {number} height Height of size
 */
export function Size(width = 80, height = 60) {
    this.width = width;
    this.height = height;
}

/**
 * Resize the size
 *
 * @param {number} width Width of size
 * @param {number} height Height of size
 */
Size.prototype.resize = function (width, height) {
    this.width = width;
    this.height = height;
};

/**
 * A class to store a 2D position in x and y
 *
 * @param {number} x X coordinate of position
 * @param {number} y Y coordinate of position
 */
export function Position(x = 0, y = 0) {
    this.x = x;
    this.y = y;
}

/**
 * Move the position
 *
 * @param {number} x New X coordinate of position
 * @param {number} y New Y coordinate of position
 */
Position.prototype.move = function (x, y) {
    this.x = x;
    this.y = y;
};

/**
 * A class representing a window within a screen
 */
export class ProgramWindow {
    constructor() {
        this.screenSize = new Size(800, 600);
        this.size = new Size();
        this.position = new Position();
    }

    /**
     * Resize the window, limiting it to the screenSize
     *
     * The minimum width and height is 1.
     *
     * @param {Size} size New size of window
     */
    resize(size) {
        let maxWidth = this.screenSize.width - this.position.x;
        let maxHeight = this.screenSize.height - this.position.y;

        this.size.width = Math.min(Math.max(1, size.width), maxWidth);
        this.size.height = Math.min(Math.max(1, size.height), maxHeight);
    }

    /**
     * Move the window, restricting it to the screenSize
     *
     * The minimum x and y is 0.
     *
     * @param {Position} position New position of window
     */
    move(position) {
        let maxX = this.screenSize.width - this.size.width;
        let maxY = this.screenSize.height - this.size.height;

        this.position.x = Math.min(Math.max(0, position.x), maxX);
        this.position.y = Math.min(Math.max(0, position.y), maxY);
    }
}


/**
 * Change window position and size to that of given ProgramWindow
 *
 * @param {ProgramWindow} window PositionWindow to change size and position of
 */
export function changeWindow(window) {
    window.position.move(100, 150);
    window.size.resize(400, 300);

    return window;
}
