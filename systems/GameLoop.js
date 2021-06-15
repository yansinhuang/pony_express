import Constants from "../Constants";
import React, { useState, useEffect, Component } from 'react';
import Helper from "../Helper";

function GameLoop (entities, { events, dispatch, time }) {
  const player = entities.player;

  
  if (events.length) {
    events.forEach((e) => {
      switch (e.type) {
        case "move-up":
          //console.log("move-up");
          player.position[1] -= (Constants.MAX_HEIGHT/6);
          Helper.setPlayerPosition(player.position);
          //console.log(Helper.getMailPositon(), "MAIL");
          //console.log(Helper.getPlayerPosition(), "PLAYER");
          return;
        case "move-down":
          //console.log("move-down");
          player.position[1] += (Constants.MAX_HEIGHT/6);
          Helper.setPlayerPosition(player.position);
          //console.log(Helper.getMailPositon(), "MAIL");
          //console.log(Helper.getPlayerPosition(), "PLAYER");
          return;
      }
    });
  } 

  return entities;
};

export default GameLoop;
