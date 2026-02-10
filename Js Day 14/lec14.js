function handlechange(event) {
    document.getElementById("output").textContent = "change event";
    console.log("change event");
    console.log(event);
}

document.getElementById("myInput").addEventListener("change", (event) => {
    //here event is the synthetic event wich comes under addeventlister's callback function. it will print 
    //the event object which stores all information about the form tag.
    console.log(event.target.value);
    //event.target will print the targeted element and event.target.value will print the user input value.
    document.getElementById("output").textContent = event.target.value;
});