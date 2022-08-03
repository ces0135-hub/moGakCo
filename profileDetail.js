let nameInput = document.getElementById("enterProfileName");
nameInput.addEventListener("keyup", function(event) {
    if(event.keyCode === 13) {
        addName();
    }
})

function addName() {
    let namePar = nameInput.value;
    document.getElementById('enteredName').innerText = namePar;
    nameInput.style.display = "none";
}

let emailInput = document.getElementById("enterEmail");
emailInput.addEventListener("keyup", function(event) {
    if(event.keyCode === 13) {
        addEmail();
    }
})

function addEmail() {
    let emailPar = emailInput.value;
    document.getElementById('enteredEmail').innerText = emailPar;
    emailInput.style.display = "none";
}

let gitInput = document.getElementById("enterGit");
gitInput.addEventListener("keyup", function(event) {
    if(event.keyCode === 13) {
        addGit();
    }
})

function addGit() {
    let gitPar = gitInput.value;
    document.getElementById('enteredGit').innerText = gitPar;
    gitInput.style.display = "none";
}


function enterDetect(event) {
  if(event.keyCode === 13) {
    addInput();
  }
}

function introEvent() {
    let intros = document.querySelectorAll(".setIntro");
    intros.forEach(element => {
        element.removeEventListener("keyup", enterDetect)
        element.addEventListener("keyup", enterDetect);
    });
}
introEvent();


const introDiv = document.querySelector(".personalIntro")
function addInput() {
    let newInput = document.createElement("input");
    newInput.setAttribute("class", "setIntro");

    introDiv.appendChild(newInput);
    introEvent();
}
