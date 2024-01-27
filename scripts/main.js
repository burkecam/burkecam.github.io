const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/louis.png") {
    myImage.setAttribute("src", "images/campus-update-2.png");
  } else {
    myImage.setAttribute("src", "images/louis.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h2");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `User ${myName} is viewing`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `User ${storedName} is viewing`;
}

myButton.onclick = () => {
  setUserName();
};
