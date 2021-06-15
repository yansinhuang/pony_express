import React , {Component} from "react";
import { View, Image } from "react-native";
import groundImage from "../assets/ground.png";
import Constants from "../Constants"
import LoopAnimation from 'react-native-LoopAnimation'

class Ground extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
    this.style = { 
        overflow: "hidden",
          width: Constants.MAX_WIDTH + Constants.GROUND.WIDTH,
          height: '100%',
          position: "absolute",
          left: this.props.position[0] * this.props.size,
          top: this.props.position[1] * this.props.size
    }
  }

  render() {
    return (
      <View 
        style={{
          flex:1,
          backgroundColor:"#dfbf9f"}}>
        <LoopAnimation source={groundImage} duration={2500}/>
      </View>
    )
  }
}

export default Ground;
