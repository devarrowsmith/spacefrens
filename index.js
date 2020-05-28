console.log('JS is connected.');

//numSpaceFrens will be replaced with an array containing the names of people in space.
const sheet = document.styleSheets[0];
console.log(sheet);
const numSpaceFrens = Math.floor(Math.random()*10);
const frenSpacingDegrees = 360/numSpaceFrens;
let angleAdjust = 0;

const addFren = (axisNumber) => {
  document.getElementById(`spacefrens`).innerHTML += 
    `<div class= "space_fren_axis" id="axis${axisNumber}">
      <img id="spacefren" src="assets/images/SpaceFren.png">
    </div>`;
  angleAdjust += frenSpacingDegrees;
  document.getElementById(`axis${axisNumber}`).style.transform = `rotate(${angleAdjust}deg)`;
  
  document.getElementById(`axis${axisNumber}`).style.webkitAnimation = `spin${axisNumber} 5s linear infinite`;
  document.getElementById(`axis${axisNumber}`).style.mozAnimation = `spin${axisNumber} 5s linear infinite`;
  document.getElementById(`axis${axisNumber}`).style.animation = `spin${axisNumber} 5s linear infinite`;
  

  sheet.insertRule(
    `@-moz-keyframes spin${axisNumber} { 0% { -webkit-transform: rotate(${0+angleAdjust}deg);}; 100% { -webkit-transform: rotate(${360+angleAdjust}deg); } }`, sheet.cssRules.length
  );
  //TODO: non-Mozilla rules aren't working (Chrome). Test after you get the Mozilla version working.

  sheet.insertRule(
    `@-webkit-keyframes spin${axisNumber} { 0% { -webkit-transform: rotate(${0+angleAdjust}deg);} 100% { -webkit-transform:rotate(${360+angleAdjust}deg);} }`, sheet.cssRules.length
  );
  sheet.insertRule(`@keyframes spin${axisNumber} { 100% { -webkit-transform: rotate(${0+angleAdjust}deg); transform:rotate(${360+angleAdjust}deg);}}`, sheet.cssRules.length);
};

for (i = 0; i < numSpaceFrens; i++) {
  addFren(i+1);
};

if (numSpaceFrens === 1) {
  document.getElementById(`info-relay`).innerHTML = `<p>There is currently ${numSpaceFrens} person in space!</p>`;
} else if (numSpaceFrens === 0) {
  document.getElementById(`info-relay`).innerHTML = `<p>There are currently no people in space.</p>`
} else {
  document.getElementById(`info-relay`).innerHTML = `<p>There are currently ${numSpaceFrens} people in space!</p>`
};

console.log(numSpaceFrens);
console.log(frenSpacingDegrees);
