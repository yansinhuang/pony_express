import React , {Component} from "react";
import { View, Image } from "react-native";
import mailImage from "../assets/mail.png";
import Constants from "../Constants";
import Helper from "../Helper";
class Mail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFrameIndex: 0,
      currentFrameIndexMove: 0,
      left: this.randomBetween(Constants.MAX_WIDTH, Constants.MAX_WIDTH*2),
      top: (Constants.MAX_HEIGHT/24)+this.randomBetween(0, Constants.GROUND.ROWS-1)*(Constants.MAX_HEIGHT/Constants.GROUND.ROWS)
    };
  }
  componentDidMount(){
    this.interval = setInterval(() => {
      if (this.state.currentFrameIndex == Constants.MAIL.FRAMES-1) {
        this.setState({currentFrameIndex: 0})
      } else {
        this.setState({currentFrameIndex: this.state.currentFrameIndex+1})
      }   
    }, 100);
    this.intervalMove = setInterval(() => {
        let playerPositon = Helper.getPlayerPosition();
        if (this.state.currentFrameIndexMove == Constants.MAIL.FRAMES_MOVE*2) {
          this.setState({
            currentFrameIndexMove: 0,
            left: this.randomBetween(Constants.MAX_WIDTH, Constants.MAX_WIDTH*2),
            top: (Constants.MAX_HEIGHT/24)+this.randomBetween(0, Constants.GROUND.ROWS-1)*(Constants.MAX_HEIGHT/Constants.GROUND.ROWS)
          })
        } else {
          this.setState({currentFrameIndexMove: this.state.currentFrameIndexMove+1});
        }  
        Helper.setMailPositon([this.state.left-(Constants.GROUND.WIDTH/Constants.MAIL.FRAMES_MOVE)*this.state.currentFrameIndexMove, this.state.top]);
        if(this.closeTo(playerPositon, [this.state.left-(Constants.GROUND.WIDTH/Constants.MAIL.FRAMES_MOVE)*this.state.currentFrameIndexMove, this.state.top])) {
            Helper.addScore();
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
    clearInterval(this.intervalMove);
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
          overflow: "hidden",
          width: Constants.MAIL.WIDTH/Constants.MAIL.FRAMES,
          height: Constants.MAIL.HEIGHT,
          position: "absolute",
          left: this.state.left,
          top: this.state.top,
          transform: [ { translateX: -(Constants.GROUND.WIDTH/Constants.MAIL.FRAMES_MOVE)*this.state.currentFrameIndexMove } ]
        }}>
        <Image
          style={{
            width: Constants.MAIL.WIDTH,
            height: Constants.MAIL.HEIGHT,

            transform: [ { translateX: -(Constants.MAIL.WIDTH/Constants.MAIL.FRAMES)*this.state.currentFrameIndex } ]
          }}
          resizeMode="stretch"
          source={mailImage} 
        />
      </View>
    )
  }
}

export default Mail;

