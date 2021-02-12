// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}

// 2. RAW TEXT STRINGS

// story we are randomly editing
let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
// random name array
let insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
// random location array
let insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
// random action array
let insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

// create event listener for clicking the button
randomize.addEventListener('click', result);

// function runs due to event listener
function result() {
    // create newStory variable so we don't overwrite storyText in the future
    let newStory = storyText;
    // randomly selects name
    let xItem = randomValueFromArray(insertX);
    // randomly selects location
    let yItem = randomValueFromArray(insertY);
    // randomly selects action
    let zItem = randomValueFromArray(insertZ);
    // replaces filler with random name
    newStory = newStory.replace(':insertx:', xItem);
    // replaces filler with random location
    newStory = newStory.replace(':inserty:', yItem);
    // replaces filler with random action
    newStory = newStory.replace(':insertz:', zItem);
    // name filler appears twice; must replace twice
    newStory = newStory.replace(':insertx:', xItem);

    // if there is a name entered
    if(customName.value !== '') {
        let name = customName.value;
        // replace Bob with entered name
        newStory = newStory.replace('Bob', name);
    }

    // if uk is selected
    if(document.getElementById("uk").checked) {
        // convert pounds to stones
        let weight = Math.round(300 / 14) + ' stone';
        // convert fahrenheit to centigrade
        let temperature =  Math.round((94 - 32) * 5 / 9) + ' centigrade';
        // replace pounds with stones
        newStory = newStory.replace('300 pounds', weight);
        // replace fahrenheit with centigrade
        newStory = newStory.replace('94 fahrenheit', temperature);
    }

    // set textContent to modified story
    story.textContent = newStory;
    story.style.visibility = 'visible';
}