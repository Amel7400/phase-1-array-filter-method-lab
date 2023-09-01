// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']

function findMatching(driver, name ){
const matchingName = driver.filter(drivers=> drivers.toLowerCase() === name.toLowerCase())
return matchingName
}
console.log(findMatching(drivers, 'Bobby'))

function fuzzyMatch(driver, letters){
const firstLetters = driver.filter(drivers => drivers.startsWith(letters))
return firstLetters; 
}
console.log(fuzzyMatch(drivers, "Sa"))

const drivings = [
  {
    name: 'Bobby',
    hometown: 'Pittsburgh' },
  {
    name: 'Sammy',
    hometown: 'New York' } ,
  {
    name: 'Sally',
    hometown: 'Cleveland' },
  {
    name: 'Annette',
    hometown: 'Los Angeles' },
  {
    name: 'Bobby',
    hometown: 'Tampa Bay' }
];
function matchName(driver, naming){
const nameMatching = driver.filter(drivings => drivings.name === naming)
return nameMatching
}
console.log(matchName(drivings, "Bobby"))
