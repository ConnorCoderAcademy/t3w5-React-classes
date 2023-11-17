const {Media} = require("./Media.js")

class VideoGame extends Media{
    constructor() {
        super();
    }
}

let someVideoGame = new VideoGame();
console.log(someVideoGame.name);
console.log(Media.count);