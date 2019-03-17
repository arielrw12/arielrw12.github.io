document.getElementsByClassName

collapsibleOne();
collapsibleTwo();
collapsibleThree();
collapsibleFour();

function collapsibleOne() {
    bindProjectButtonToCollapsibleOne();
}

function collapsibleTwo() {
    bindProjectButtonToCollapsibleTwo();
}

function collapsibleThree() {
    bindProjectButtonToCollapsibleThree();
}

function collapsibleFour() {
    bindProjectButtonToCollapsibleFour();
}

function toggleHide(element) {
    element.classList.toggle('hide');
}

function bindProjectButtonToCollapsibleOne() {
    const projectButton = document.querySelector('.project__button-1');

    projectButton.addEventListener('click', function() {
        const collapsible = document.querySelector('.project__collapsible-1');
        toggleHide(collapsible);
    });
}

function bindProjectButtonToCollapsibleTwo() {
    const projectButton = document.querySelector('.project__button-2');

    projectButton.addEventListener('click', function() {
        const collapsible = document.querySelector('.project__collapsible-2');
        toggleHide(collapsible);
    });
}

function bindProjectButtonToCollapsibleThree() {
    const projectButton = document.querySelector('.project__button-3');

    projectButton.addEventListener('click', function() {
        const collapsible = document.querySelector('.project__collapsible-3');
        toggleHide(collapsible);
    });
}

function bindProjectButtonToCollapsibleFour() {
    const projectButton = document.querySelector('.project__button-4');

    projectButton.addEventListener('click', function() {
        const collapsible = document.querySelector('.project__collapsible-4');
        toggleHide(collapsible);
    });
}