const temperature = Math.floor(Math.random() * 31) - 5;
if (temperature >= -5 && temperature <= 10) {
  console.log('The weather is cold');
} else {
  console.log('The weather is moderate');
}

//Exercise2

const favoriteFoods = ['pizza', 'hamburger', 'ice cream', 'chocolate'];
function randomFood() {
  const randomIndex = Math.floor(Math.random() * favoriteFoods.length);
  return favoriteFoods[randomIndex];
}
const chosenFood = randomFood();
console.log('Random food is:', chosenFood);

//Exercise3

function crystalGazer(numChildren, partnerName, location, jobTitle) {
  console.log(
    `You will be a ${jobTitle} in ${location} and married to ${partnerName}`,
  );
}
crystalGazer(2, 'Wifey', 'Vienna', 'developer');

//Exercise3
/* function ageCalculator(birtYear, currentYear) {
  const age1 = currentYear - birthYear;
  const age2 = age1 - 1;
  return `You are either ${age1} or ${age2}`;
}

const birthYear = 1995;
const currentYear = 2024;
console.log(ageCalculator(birthYear, currentYear)); */

//Exercise4
function ageCalculator(birthYear) {
  const currentYear = new Date().getFullYear();

  const age1 = currentYear - birthYear;
  const age2 = age1 - 1;
  return `You are either ${age1} or ${age2}`;
}
const birthYear = 1995;
console.log(ageCalculator(birthYear));

//Exercise6

function degreesToRadians(degrees) {
  const radians = degrees * (Math.PI / 180);

  return radians;
}

const degrees = 90;
const radians = degreesToRadians(degrees);
console.log(radians);

//Exercise7
function calculateBox(width, height, depth) {
  const area = width * height;

  const volume = width * height * depth;

  return {
    area: area,
    volume: volume,
  };
}

const width = 7;
const height = 2;
const depth = 5;
const result = calculateBox(width, height, depth);

console.log('The area of the box is:', result.area);
console.log('The volume of the box is:', result.volume);
