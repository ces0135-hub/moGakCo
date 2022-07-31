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

//얘는 왜 있는 코드인지 모르겠는데 enterIntro라는 클래스는 존재하지도 않고
//얘때문에 아래 있는 코드들도 동작 안해서 얘부터 일단 지움

function createSpan() {
    let newSpan = document.createElement('span');
}

function createInput() {
    document.createElement('input');
}





function addIntro() {
    let introCnt = 2;

    let newIntroSpan = document.createElement('span');  //input 감싸는 span
    newIntroSpan.setAttribute('id', 'introSpan_' + introCnt);
    

    let introInput = document.createElement('input');  //입력받는 input 창
    introInput.setAttribute('id', 'introInput_' + introCnt);
    introInput.setAttribute('class', 'setIntro');
    
    newIntroSpan.appendChild(introInput);  //<span><input id="introInput_introCnt"></span>
    let introTxt = document.getElementById('introInput_' + introCnt).value;  //input 창에 입력한 텍스트

    newIntroSpan.innerText = introTxt;  //입력한 테스트 span 안에 추가
    document.getElementById('introInput_' + introCnt).style.display = "none";  //입력 후 input 창 없애기

    let introContainer = document.getElementsByClassName('personalIntro');  //최상위 div
    introContainer.appendChild(newIntroSpan);
    introCnt++;
}



//input 창에서 enter를 누르면 addIntro() 호출
//기존 코드는 클래스명이 setIntro인 모든 elements를 받아오는 HTMLCollection이었음. 해당 콜렉션의 0번 인덱스가 원하는 element.
let introInputForEvent = document.getElementsByClassName('setIntro')[0];
introInputForEvent.addEventListener('keyup', function(event) {
    if(event.keyCode === 13) {
        alert('enter');
        addIntro();
    }
})
