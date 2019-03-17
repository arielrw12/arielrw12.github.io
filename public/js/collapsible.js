document.getElementsByClassName

collapsible();

function collapsible() {
    bindProjectButtonToCollapsible();
}

function toggleHide(element) {
    element.classList.toggle('hide');
}

function bindProjectButtonToCollapsible() {
    const projectButton = document.querySelector('.project__button');

    projectButton.addEventListener('click', function() {
        const collapsible = document.querySelector('.project__collapsible');
        toggleHide(collapsible);
    });
}