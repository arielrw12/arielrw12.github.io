document.getElementsByClassName

dropdown();

function dropdown() {
    bindNavButtonToNavList();
}

function toggleHide(element) {
    element.classList.toggle('hide');
}

function bindNavButtonToNavList() {
    const navButton = document.querySelector('.nav-button');

    navButton.addEventListener('click', function() {
        const navList = document.querySelector('.nav-list');
        toggleHide(navList);
    });
}