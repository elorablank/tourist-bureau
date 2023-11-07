"use strict"

const colors = ["red", "orange", "yellow", "green", "blue", "purple"]

//WHILE LOOP
// const initial = 0
// const step = 1
// const final = colors.length - 1

// let currentIndex = initial
// while (currentIndex <= final) {
//     console.log(`Color number ${currentIndex} is ${colors[currentIndex]}!`)
//     currentIndex += step
// }


//FOR LOOP
//          DEFINING                   CHECKING              CHANGING
// for (let index = 0; index < colors.length; index += 1) {
//     console.log(`Color number ${index} is ${colors[index]}!`)
// }
//must define the main varibale within the for loop for optimization and practiicality reasons 
//can define multiple variable inside the loop in that first spot (berfore first ;)


//made this using lgihtbuld "surround with for-loop" & colors[index]
for (let index = 0; index < colors.length; index += 1) {
    const currentColor = colors[index]

    console.log(`Color number ${index} is ${currentColor}!`)
}
//the lightbulb gave us a new variable- currentColor (originally element - we renamed it)
//it originally gave us index ++ and not index += 1, but you don't want to use it cause its A LIAR

// x = x + 1 <does 2 things: addition & assignment
// x += 1 <does 2 things: addition & assignment
// ++x <does 2 things: additon & assingment
// x++ <does 3 things: addition & return the OLD value & assignment

console.log("When does this console.log run???")

window.onload = function (_event) {
    const categorySelect = document.getElementById("category")
    categorySelect.onchange = populateActivities
    
    const activitySelect = document.getElementById("activity")
    activitySelect.onchange = renderActivityCard
    
    populateCategories(categories, categorySelect)
}

// counter + reduce
function populateCategories (categories, selectElement) {
    let html = ""
    for (let index = 0; index < categories.length; index += 1) {
        const currentCategory = categories[index]
        html += `<option value="${currentCategory}">${currentCategory}</option>`
    }

    selectElement.innerHTML = html
}

// counter + findAll + reduce
function populateActivities (event) {
    const selectedCategory = event.target.value
    console.log(selectedCategory)
    // What do we do with this category selected by the user now that we have it?
    
}

// counter + findFirst + reduce
function renderActivityCard (event) {}