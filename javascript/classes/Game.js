"use strict";

class Game {
  constructor(canvas, gameOverPage) {
    this.canvas = canvas;
    this.gameOverPage = gameOverPage;
    this.isGameOver = false;
  }

  gameControls() {
    document.addEventListener("keydown", (event) => {
      console.log(event);
    });
  }

  gameloop() {
    console.log(this.isGameOver);
    // this.updated();
    // this.clear();
    // this.draw();
    if (!!this.isGameOver) {
      this.gameOverPage();
    } else {
      requestAnimationFrame(this.gameloop.bind(this));
    }
  }

  start() {
    console.log("Game started");
    this.gameControls();
    this.gameloop()
  }
}
