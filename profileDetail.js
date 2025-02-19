let nameInput = document.getElementById("enterProfileName");
nameInput.focus();
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


let introDiv = document.getElementsByClassName("personalCareer")[0];  //추가할 div
let firstInput = document.getElementById("introInput_1");
firstInput.addEventListener("keyup", addEvent);

let introCnt = 1;

function addIntro() {
    introCnt++;

    let newSpan = document.createElement("span");
    let newInput = document.createElement("input");

    newInput.setAttribute("class", "setIntro");
    newInput.setAttribute("id", "introInput_"+introCnt);
    newInput.setAttribute("type", "text");
    newInput.setAttribute("placeholder", "자유롭게 작성해주세요.");

    newSpan.setAttribute("class", "introSpan");
    newSpan.setAttribute("id", "introSpan_"+introCnt);

    let getIntroTargetSpan = document.getElementById("introSpan_"+(introCnt - 1));
    let getIntroTxt = document.getElementById("introInput_"+(introCnt - 1));
    getIntroTargetSpan.innerText = getIntroTxt.value;

    let newBr = document.createElement("br");

    newSpan.appendChild(newInput);  //<span><input></span>
    introDiv.appendChild(newSpan);
    introDiv.appendChild(newBr);

    addEvent();
}

function addEvent() {
    let introClass = document.getElementById("introInput_"+introCnt);
    introClass.focus();
    introClass.addEventListener("keyup", EnterKeyUpHandler);
}

/*
function removeEvent() {
    let introClass = document.querySelectorAll(".setIntro");
    introClass.forEach(Element => {
        Element.removeEventListener("keyup", EnterKeyUpHandler);
    })
}
*/

function EnterKeyUpHandler(event) {
    if(event.keyCode === 13) {
        addIntro();  //input 추가
    }
}