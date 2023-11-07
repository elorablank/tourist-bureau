touris bureau actiivites finder

1) populate the Category dropdown (<select>) with options by
looping over the `categories` array
2) onchange event for when category dropdown is selecetd by user.
When the onchange event takes place, thats when....
3) Populate the Actiivry dropdown with options, by looping
over the `activities` array and finding each acitivty which matches 
Catgeory selected by the user (using if statements)
    - We will need an IF statement to compare the users selected
    category to each activitys ctegory. We will only add the acitivty
    tp the Acitivity ropdown IF its category matches the one 
    which the user is looking for. 
4) Write an onchange event listener which will detect when the user selects 
a specific activirty rom Activity dropdonw. When the onchange event takes place we will
5) Add a bootstrap car desriping the sleected activity on the page within 
the DIV with the IDF "selected-activity". Use innerHTML to add the card to the DIV. 



populateActivities() will be a counter + findAll + reduce, meaning that we will (1) loop over the activities array, (2) use an IF statement to run some code on every currentActivity.category which equals selectedCategory, and (2) we will build a "html" string with a bunch of <option> tags (one for each matching activity).