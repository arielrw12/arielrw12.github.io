dropdown();

function dropdown() {
    bindNavButtonToNavList();
}

function toggleMenuHide(element) {
    element.classList.toggle('hide');
}

function bindNavButtonToNavList() {
    const navButton = document.querySelector('.nav-button');

    navButton.addEventListener('click', function() {
        const navList = document.querySelector('.nav-list');
        toggleMenuHide(navList);
    });
}