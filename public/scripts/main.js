import Modal from "./modal.js";

const modal = Modal()

const modalTitle = document.querySelector('.modal h2');
const modalDescription = document.querySelector('.modal p');
const modalButton = document.querySelector('.modal button.red'); //delete

const checkButtons = document.querySelectorAll('.actions .check');

checkButtons.forEach(button => {
    button.addEventListener("click", handleClick);
})


const deleteButton = document.querySelectorAll(".actions .delete");

deleteButton.forEach(button => {
    button.addEventListener("click", (event) => handleClick(event, false));
})

function handleClick(event, check = true) {
    event.preventDefault();
    const text = check ? "Marcar como lido" : "Excluir";
    const slug = check ? "check" : "delete";
    const roomId = document.getElementById('room-id').dataset.id;
    const questionId = event.target.dataset.id;

    const form = document.querySelector('.modal form');
    form.setAttribute('action', `/question/${roomId}/${questionId}/${slug}`);

    modalTitle.innerHTML = `${text} esta pergunta`
    modalDescription.innerHTML = `Tem certeza que você deseja ${text.toLocaleLowerCase()} esta pergunta?`;
    modalButton.innerHTML = `Sim, ${text.toLocaleLowerCase()}`
    check ? modalButton.classList.remove("red") : modalButton.classList.add('red')
    modal.open();
}

// copy code room

const button_copy = document.querySelector('.copy'); // container

button_copy.addEventListener("click", () => {
    const id_room = document.querySelector('.copy .id-room') // input

    id_room.select;
    id_room.setSelectionRange(0, 10);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();

    const warning = document.querySelector('.link-copied');

    warning.classList.add('active');

    setTimeout(() => {
        warning.classList.remove('active');
    }, 5000);

    warning.addEventListener('click', () => warning.classList.remove('active'));
})

//dark 

function dark() {
    let body = document.querySelector('body');

    if (body.classList == '') {

        body.classList.add('dark');

        if (body.classList == 'dark') {
            let logo = document.querySelector('img.logo');
            logo.src = '/img/logo-dark.svg';
        }
        

    } else if (body.classList == 'dark') {

        body.classList.remove('dark');

        if (body.classList == '') {
            let logo = document.querySelector('img.logo');
            logo.src = '/img/logo.svg';
        }
    }
}

let active_dark = document.querySelector('.button-dark i');

active_dark.addEventListener('click', () => {
    

    if (active_dark.classList == 'far fa-moon') {

        active_dark.classList.replace('fa-moon', 'fa-sun')

    } else if (active_dark.classList == 'far fa-sun') {
        
        active_dark.classList.replace('fa-sun', 'fa-moon')
    }
    
    dark();
})