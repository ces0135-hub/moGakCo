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


let introDiv = document.getElementsByClassName("personalIntro")[0];
let firstInputTag = document.getElementById("firstInput");
firstInputTag.addEventListener("keyup", function(event) {
    if(event.keyCode === 13) {
        getLen();
    }
})

inputCnt = 1;

function addInput() {
    let newSpan = document.createElement("span");  //<span></span>
    let newInput = document.createElement("input");  //<input>

    newInput.setAttribute("class", "setIntro");
    //newInput.setAttribute("id", "intro_"+inputCnt);
    newInput.setAttribute("type", "text");

    newSpan.innerText = "FUCK";

    newSpan.appendChild(newInput);  //<span><input></span>

    let newBr = document.createElement("br"); //<br>
    

    introDiv.appendChild(newSpan);
    introDiv.appendChild(newBr);

    getLen();
    //inputCnt++;
}


function getLen() {
    let getIntroLen = document.querySelectorAll(".setIntro");
    /*getIntroLen.forEach(Element => {
        Element.addEventListener("keyup", function(event) {
            if(event.keyCode === 13) {
                addInput();
            }
        })
        Element.removeEventListener("keyup", arguments.callee);
    })*/
    addEvent(getIntroLen);
}

function addEvent(nodeList) {
    nodeList.forEach(Element => {
        Element.addEventListener("keyup", function(event) {
            if(event.keyCode === 13) {
                addInput();
            }
        })
        //Element.style.display = "none";
    })
}