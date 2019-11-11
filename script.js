let userPoints = 40;
let grantPoints = 10;
let runGame = true;
let playWin = 0;

let playPrompt = prompt("Do you wanna play?");
console.log(playPrompt);
playPrompt = playPrompt.toLowerCase();

if (playPrompt === "yes") {
  namePrompt = prompt("Please enter your name");
  while (userPoints > 0) {
    userPoints -= Math.floor(Math.random() * 2) + 1;
    grantPoints -= Math.floor(Math.random() * 2) + 1;
    console.log(`${namePrompt} has ${userPoints} health left.`);
    console.log(`Grant the Mighty Chicken has ${grantPoints} health left.`);
    if (grantPoints <= 0) {
      playWin += 1;
      grantPoints = 10;
      console.log("Grant lost this game!");
      if (playWin === 3) {
        console.log(namePrompt + " has won!!!");
        break;
      }
    }
    if (userPoints <= 0) {
      console.log("Grant has won!!!!");
      break;
    }
  }
} else if (playPrompt === "no" || playPrompt !== "") {
  console.log("Come back soon!");
}
