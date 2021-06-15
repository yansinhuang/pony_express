import { Dimensions } from 'react-native';

export default Constants = {
    MAX_WIDTH: Dimensions.get("screen").width,
    MAX_HEIGHT: Dimensions.get("screen").height,
    GRID_SIZE: 15,
    CELL_SIZE: 40,
    GROUND: {WIDTH: 400, HEIGHT: 289, ROWS: 6, FRAMES: 100},
    MAIL: {WIDTH: 540, HEIGHT: 33, FRAMES: 15, FRAMES_MOVE: 100},
    OBSTACLE: {
        FRAMES_MOVE: 100,
        BUCKET:{WIDTH:82, HEIGHT:54},
        STONE: {WIDTH:105, HEIGHT:86},
        TREE: {WIDTH:93, HEIGHT:80}
    }
}

Constants.PLAYER = {X: Constants.MAX_WIDTH/4, Y: (Constants.MAX_HEIGHT/Constants.GROUND.ROWS)+(Constants.MAX_HEIGHT/24)};