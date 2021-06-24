export default function Modal() {
    const modalWrapper = document.querySelector('.modal-wrapper')
    let cancelButton = document.querySelector('button.cancel');

    cancelButton.addEventListener("click", () => close())

    function open() {
        modalWrapper.classList.add('active')
    }

    function close() {
        modalWrapper.classList.remove('active')
    }

    return { open, close }
}