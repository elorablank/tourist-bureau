"use strict"

window.onload = function (_event) {
    //Assign an onchange event handler to the Categories sleect/dropdown box
    const categorySelect = document.getElementById("category")
    categorySelect.onchange = populateActivities

    //Assign an onchange event handler to the Activities sleect/dropdown box
    const activitiesSelect = document.getElementById("activity")
    activitiesSelect.onchange = renderActivityCard

    populateCategories(categories, categorySelect)
}
// counter + reduce
//the selectElement is referring to the categorySelect
function populateCategories(categories, selectElement) {
    //TODO: populate Categories dropdown using innerHTML
    let html = ""
    for (let index = 0; index < categories.length; index += 1) {
        const currentCategory = categories[index]
        html += `<option value="${currentCategory}">${currentCategory}</option>`
    }

    selectElement.innerHTML = html
}

// counter + findAll + reduce
function populateActivities(event) {
    const selectedCategory = event.target.value
    console.log(selectedCategory)
    //what do we do with this categort selected by user?

    let html = ""
    for (let index = 0; index < activities.length; index += 1) {
        const activity = activities[index]
        if (activity.category === selectedCategory) {
            html += `<option value="${activity.id}">${activity.name}</option>`
        }
    }

    const selectElement = document.getElementById("activity")
    selectElement.innerHTML = html
}

// counter + findFirst + reduce
function renderActivityCard(event) {
    const selectedActivityId = event.target.value
    console.log(selectedActivityId)
    let html = ""
    for (let index = 0; index < activities.length; index += 1) {
        const activity = activities[index];
        
        if (activity.id === selectedActivityId) {
            html += `
                <div class="card">
                    <h5 class="card-header">${activity.name}</h5>
                    <div class="card-body">
                        <h5 class="card-title">Where? <em>${activity.location}</em></h5>
                        <p class="card-text">${activity.description}</p>
                        <a href="#" class="btn btn-primary">Buy e-Ticket for \$${activity.price}</a>
                    </div>
                </div>
            `
        }
    }
    const resultDiv = document.getElementById("selected-activity")
    resultDiv.innerHTML = html
 }
