import React , {Component} from "react";
import { View, Image } from "react-native";
import Constants from "../Constants";
import Helper from "../Helper";

class Obstacle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFrameIndexMove: 0,
      left: this.randomBetween(Constants.MAX_WIDTH, Constants.MAX_WIDTH*2),
      top: (Constants.MAX_HEIGHT/24)+this.randomBetween(0, Constants.GROUND.ROWS-1)*(Constants.MAX_HEIGHT/Constants.GROUND.ROWS)
    };
  }
  componentDidMount(){
    this.intervalMove = setInterval(() => {
        let playerPositon = Helper.getPlayerPosition();
        if (this.state.currentFrameIndexMove == Constants.OBSTACLE.FRAMES_MOVE*2) {
          this.setState({
            currentFrameIndexMove: 0,
            left: this.randomBetween(Constants.MAX_WIDTH, Constants.MAX_WIDTH*2),
            top: (Constants.MAX_HEIGHT/24)+this.randomBetween(0, Constants.GROUND.ROWS-1)*(Constants.MAX_HEIGHT/Constants.GROUND.ROWS)
          })
        } else {
          this.setState({currentFrameIndexMove: this.state.currentFrameIndexMove+1});
        }  

        if(this.closeTo(playerPositon, [this.state.left-(Constants.GROUND.WIDTH/Constants.OBSTACLE.FRAMES_MOVE)*this.state.currentFrameIndexMove, this.state.top])) {
            Helper.deductScore();
            this.setState({
                currentFrameIndexMove: 0,
                left: this.randomBetween(Constants.MAX_WIDTH, Constants.MAX_WIDTH*2),
                top: (Constants.MAX_HEIGHT/24)+this.randomBetween(0, Constants.GROUND.ROWS-1)*(Constants.MAX_HEIGHT/Constants.GROUND.ROWS)
            })
        }
      }, 20);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  randomBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  closeTo = (pos1, pos2) => {
    let distance = Math.sqrt((pos1[0]-pos2[0])**2 + (pos1[1]-pos2[1])**2);
    if (distance <= Constants.CELL_SIZE) {
        return true;
    }
  }

  render() {
    return (
      <View 
        style={{ 
          width: this.props.width,
          height: this.props.height,
          position: "absolute",
          left: this.state.left,
          top: this.state.top,
          transform: [ { translateX: -(Constants.GROUND.WIDTH/Constants.OBSTACLE.FRAMES_MOVE)*this.state.currentFrameIndexMove } ]
        }}>
        <Image
          style={{
            width: this.props.width,
            height: this.props.height,
          }}
          resizeMode="stretch"
          source={this.props.image} 
        />
      </View>
    )
  }
}

export default Obstacle;

