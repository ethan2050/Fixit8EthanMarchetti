/*I was unable to fit the labels on the screen.availHeight When I typed in the labels it caused the Jumbotron and the Dropdown to disappear from the screen. As such, I commented out my explanations below.*/
Jumbotron1.onclick = function() {
    NSB.MsgBox("The shape of a dog’s face suggests its longevity: A long face means a longer life.");
};
/* Label: Changed the header, button, and "value" of the jumbotron. Created a messagebox containing the fun dog fact.*/
petsDropdown.onclick = function(s) {
    if (typeof(s) == "object") {
        return;
    }
    alert("Your favorite pet is a " + petsDropdown.selection);
};  
/* Label: Changed the items to pet types, changed the value, and changed the appearance to "warning" On selection, the user is told what thier favorit pet is.*/