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


let introDiv = document.getElementsByClassName("personalIntro")[0];  //추가할 div
let firstInput = document.getElementById("firstInput");
firstInput.addEventListener("keyup", addEvent);

function addIntro() {
    let newSpan = document.createElement("span");
    let newInput = document.createElement("input");
    newInput.setAttribute("class", "setIntro");

    let newBr = document.createElement("br");
    
    newSpan.appendChild(newInput);  //<span><input></span>
    introDiv.appendChild(newSpan);
    introDiv.appendChild(newBr);
    alert(newInput.value);
}


function addEvent() {
    let introClass = document.querySelectorAll(".setIntro");  //Node List

    introClass.forEach(Element => {
        Element.addEventListener("keyup", EnterKeyUpHandler);  //새로운 input 추가 완료
    })
    //removeEvent();  //지금까지 존재하는 input에 할당된 eventListener 삭제
}

function removeEvent() {
    let introClass = document.querySelectorAll(".setIntro");
    introClass.forEach(Element => {
        Element.removeEventListener("keyup", EnterKeyUpHandler);
    })
}

function EnterKeyUpHandler(event) {
    if(event.keyCode === 13) {
        addIntro();  //input 추가
    }
}