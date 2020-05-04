const GameUtils = {
  
  getRandInt(multiplier = 100) {
    return Math.floor(Math.random() * multiplier);
  },
  
  makeNewQuestion() {
    const x = this.getRandInt();
    const y = this.getRandInt();
    const z = this.getRandInt();
    const proposedAnswer = this.getRandInt(3) + (x + y + z);
    return [x, y, z, proposedAnswer];
  }
}

export default GameUtils