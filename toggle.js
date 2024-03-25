const heading = document.getElementById("myHeading");
const toggleColourButton = document.getElementById("toggleColourButton");

toggleColourButton.addEventListener("click", toggleColourClicked);

function toggleColourClicked() {
    let buttonText = toggleColourButton.textContent;

    if(buttonText === "red") {
        heading.classList.remove("red")
        heading.classList.add("green")
        toggleColourButton.textContent = "green";
    }else if(buttonText === "green"){
        heading.classList.remove("green")
        heading.classList.add("blue")
        toggleColourButton.textContent = "blue";
    }else if(buttonText === "blue") {
        heading.classList.remove("blue")
        heading.classList.add("red")
        toggleColourButton.textContent = "red";

    }

}