document.getElementsByClassName

// window.addEventListener("DOMContentLoaded", startup);

// function startup() {
//     modal();
// }

// window.onload = function() {
//     prepareEventHandlers();
//     }

// function prepareEventHandlers() {
modal();

function modal() {
    bindModalButtonToModal();
}

function toggleHide(element) {
    element.classList.toggle('hide-modal');
}

function bindModalButtonToModal() {
    const modalButton = document.querySelector('.modal-button');

    modalButton.addEventListener('click', function() {
        const modal = document.querySelector('.modal');
        toggleHide(modal);
    });
}

const exitButton = document.querySelector('.modal-exit');

exitButton.addEventListener('click', function() {
    const modal = document.querySelector('.modal');
    toggleHide(modal);
})
// }