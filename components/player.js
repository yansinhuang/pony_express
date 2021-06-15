import React , {Component} from "react";
import { View, Image } from "react-native";
import playerImage from "../assets/player.png";

class Player extends Component {
  constructor(props) {
    super(props);
    this.IMAGE_WIDTH = 1176;
    this.IMAGE_HEIGHT = 59;
    this.FRAMES_NUM = 17;
    this.state = {
      currentFrameIndex: 0
    };
  }
  componentDidMount(){
    this.interval = setInterval(() => {
      if (this.state.currentFrameIndex == 16) {
        this.setState({currentFrameIndex: 0})
      } else {
        this.setState({currentFrameIndex: this.state.currentFrameIndex+1})
      }   
    }, 100);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <View 
        style={{ 
          overflow: "hidden",
          width: this.props.size*1.5,
          height: this.props.size*1.5,
          position: "absolute",
          left: this.props.position[0],
          top: this.props.position[1]
        }}>
        <Image
          style={{
            width: this.IMAGE_WIDTH,
            height: this.IMAGE_HEIGHT,
            //backgroundColor: "red",
            transform: [ { translateX: -(this.IMAGE_WIDTH/this.FRAMES_NUM)*this.state.currentFrameIndex } ]
          }}
          resizeMode="stretch"
          source={playerImage} 
        />
      </View>
    )
  }
}

export default Player;
