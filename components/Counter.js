import React , {Component} from "react";
import { View, Image, Text } from "react-native";
import Helper from "../Helper";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
        score: 0
    };
  }
  componentDidMount(){
    this.interval = setInterval(() => {
        this.setState({
            score: Helper.getScore()
        })
      }, 100);
  }

  render() {
    return (
      <Text 
        style={{ 
          width: this.props.size*5,
          height: this.props.size*5,
          position: "absolute",
          left: this.props.position[0],
          top: this.props.position[1],
          color: "#ffffff",
          fontWeight: "bold",
          fontSize: 25
        }}>
        Score: {this.state.score}
      </Text>
    )
  }
}

export default Counter;
