console.log('JS is connected.');

//numSpaceFrens will be replaced with an array containing the names of people in space.
const numSpaceFrens = Math.floor(Math.random()*6);
const frenSpacingDegrees = 360/numSpaceFrens;

const addFren = (axisNumber) => {
  document.getElementById(`spacefrens`).innerHTML += 
    `<div class= "space_fren_axis" id="axis${axisNumber}">
      <img id="spacefren" src="assets/images/SpaceFren.png">
    </div>`;
};
//the variable numSpaceFrens here will be replaced with the length of the array of people in space.
for (i = 0; i < numSpaceFrens; i++) {
  addFren();
};

if (numSpaceFrens === 1) {
  document.getElementById(`info-relay`).innerHTML = `<p>There is currently ${numSpaceFrens} person in space!</p>` 
} else if (numSpaceFrens === 0) {
  document.getElementById(`info-relay`).innerHTML = `<p>There are currently no people in space.</p>`
} else {
  document.getElementById(`info-relay`).innerHTML = `<p>There are currently ${numSpaceFrens} people in space!</p>`
};

console.log(numSpaceFrens);
console.log(frenSpacingDegrees);
