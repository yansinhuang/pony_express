import { StatusBar } from 'expo-status-bar';
import React, { Component, useRef, useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { GameEngine } from "react-native-game-engine";
import Constants from "./Constants";
import Player from "./components/player";
import Mail from "./components/mail";
import Ground from "./components/ground";
import Counter from "./components/Counter";
import GameLoop from "./systems/GameLoop";
import GestureRecognizer from 'react-native-swipe-gestures';
import Obstacle from './components/Obstacle';
import bucketImage from "./assets/bucket.png";
import stoneImage from "./assets/stone.png";
import treeImage from "./assets/tree.png";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

class App extends Component {
  constructor(props) {
    super(props);
    this.engine = null;
  }
  
  onSwipeUp(gestureState) {
    this.setState({myText: 'You swiped up!'});
  }

  onSwipeDown(gestureState) {
    this.setState({myText: 'You swiped down!'});
  }

  randomBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  render () {
    return(
      <GameEngine
        ref={(ref) => { this.engine = ref;}}
        style={styles.container}
        entities={{
          // 添加Ball 2/2
          ground: {
            position:[0,0],
            body: Ground,
            size: Constants.CELL_SIZE,
            renderer: Ground
          },
          mail_1: {
            //position: [this.randomBetween(Constants.MAX_WIDTH, Constants.MAX_WIDTH*2),(Constants.MAX_HEIGHT/24)+this.randomBetween(0, Constants.GROUND.ROWS-1)*(Constants.MAX_HEIGHT/Constants.GROUND.ROWS)],
            position: [Constants.MAX_WIDTH,400],
            size: Constants.CELL_SIZE,
            body: Mail,
            renderer: Mail,
          },
          mail_2: {
            //position: [Constants.MAX_WIDTH,400],
            position: [Constants.MAX_WIDTH,400],
            size: Constants.CELL_SIZE,
            body: Mail,
            renderer: Mail,
          },
          mail_3: {
            position: [Constants.MAX_WIDTH,400],
            size: Constants.CELL_SIZE,
            body: Mail,
            renderer: Mail,

          },
          bucket: {
            position: [Constants.MAX_WIDTH,400],
            size: Constants.CELL_SIZE,
            width: Constants.OBSTACLE.BUCKET.WIDTH,
            height: Constants.OBSTACLE.BUCKET.HEIGHT,
            image: bucketImage,
            body: Obstacle,
            renderer: Obstacle,

          },
          stone: {
            position: [Constants.MAX_WIDTH,400],
            size: Constants.CELL_SIZE,
            width: Constants.OBSTACLE.STONE.WIDTH,
            height: Constants.OBSTACLE.STONE.HEIGHT,
            image: stoneImage,
            body: Obstacle,
            renderer: Obstacle,

          },
          tree: {
            position: [Constants.MAX_WIDTH,400],
            size: Constants.CELL_SIZE,
            width: Constants.OBSTACLE.TREE.WIDTH,
            height: Constants.OBSTACLE.TREE.HEIGHT,
            image: treeImage,
            body: Obstacle,
            renderer: Obstacle,

          },
          counter: {
            position: [30,30],
            size: Constants.CELL_SIZE,
            body: Counter,
            renderer: Counter
          },
          player: {
            position: [Constants.PLAYER.X, Constants.PLAYER.Y],
            size: Constants.CELL_SIZE,
            body: Player,
            renderer: Player,
          }
        }}
        systems={[GameLoop]}
        >
        <StatusBar hidden={true} />
        <GestureRecognizer
          onSwipeUp={(state) => this.engine.dispatch({ type: "move-up" })}
          onSwipeDown={(state) => this.engine.dispatch({ type: "move-down" })}
          config={{
            velocityThreshold: 0.3,
            directionalOffsetThreshold: 80,
          }}
          style={{
            flex: 1,
          }}>
        </GestureRecognizer>
      </ GameEngine>
    )
  };
}

export default App;
