function ex1(){
    let elementsP = document.querySelectorAll('p');

    elementsP.forEach(p => p.style.backgroundColor = '#ff0000');
    console.log(elementsP);
}

function ex2(){
    let elementList = document.querySelector('#optionsList');
    console.log(elementList);

    let div = document.querySelector('.container');
    console.log(div);

    if(div.hasChildNodes)
    {
        console.log(div.childNodes);
    }
}

function ex3(){
    let elementP = document.querySelector('#testParagraph');
    //в задании написано что testParagraph это класс но это id
    elementP.textContent = "This is a paragraph";
    console.log(elementP);
}

function ex4(){
    let elementHeader = document.querySelector('.main-header');
    let elementHeaderChildren = elementHeader.children;
    console.log(elementHeaderChildren);

    for(let i of elementHeaderChildren)
    {
        i.classList.add('nav-item');
    }
}

function ex5(){
    let titles = document.querySelectorAll('.section-title');
    console.log(titles);

    for(let i of titles)
    {
        i.classList.remove('section-title');
    }
}

function startAll()
{
    ex1();
    ex2();
    ex3();
    ex4();
    ex5();
}

startAll();