// https://calculator.swiftutors.com/horizontal-velocity-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const velocityRadio = document.getElementById('velocityRadio');
const distanceTraveledRadio = document.getElementById('distanceTraveledRadio');
const timeTakenRadio = document.getElementById('timeTakenRadio');

let velocity;
let distanceTraveled = v1;
let timeTaken = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

velocityRadio.addEventListener('click', function() {
  variable1.textContent = '(x) Distance Traveled (m)';
  variable2.textContent = '(t) Time Taken (sec)';
  distanceTraveled = v1;
  timeTaken = v2;
  result.textContent = '';
});

distanceTraveledRadio.addEventListener('click', function() {
  variable1.textContent = '(v) Velocity (m/s)';
  variable2.textContent = '(t) Time Taken (sec)';
  velocity = v1;
  timeTaken = v2;
  result.textContent = '';
});

timeTakenRadio.addEventListener('click', function() {
  variable1.textContent = '(v) Velocity (m/s)';
  variable2.textContent = '(x) Distance Traveled (m)';
  velocity = v1;
  distanceTraveled = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(velocityRadio.checked)
    result.textContent = `Velocity = ${computeVelocity().toFixed(2)} m/s`;

  else if(distanceTraveledRadio.checked)
    result.textContent = `Distance Traveled = ${computeDistanceTraveled().toFixed(2)} m`;

  else if(timeTakenRadio.checked)
    result.textContent = `Time Taken = ${computeTimeTaken().toFixed(2)} sec`;
})

// calculation

function computeVelocity() {
  return Number(distanceTraveled.value) / Number(timeTaken.value);
}

function computeDistanceTraveled() {
  return Number(velocity.value) * Number(timeTaken.value);
}

function computeTimeTaken() {
  return Number(distanceTraveled.value) / Number(velocity.value);
}