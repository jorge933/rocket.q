let button_copy = document.querySelector(".copy");
let warning = document.querySelector('.link-copied');

button_copy.addEventListener("click", () => {
    document.querySelector(".copy span").select;
    document.execCommand("copy");
    warning.classList.add('active');

    setTimeout(() => {
        warning.classList.remove('active');
     }, 5002);
})

warning.addEventListener('click', () => {
    warning.classList.remove('active');
})