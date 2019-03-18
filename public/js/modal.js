document.getElementsByClassName

modal();

function modal() {
    bindModalButtonToModal();
}

function toggleHide(element) {
    element.classList.toggle('hide');
}

function bindModalButtonToModal() {
    const modalButton = document.querySelector('.modal__button');

    modalButton.addEventListener('click', function() {
        const modal = document.querySelector('.modal');
        toggleHide(modal);
    });
}

const exitButton = document.querySelector('.modal__exit');

exitButton.addEventListener('click', function() {
    const modal = document.querySelector('.modal');
    toggleHide(modal);
})