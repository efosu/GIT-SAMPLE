const alertButton = document.querySelector<HTMLButtonElement>('#alert-button');

function alertUser() {
    alert("Please save your work before leaving.");
}

alertButton?.addEventListener('click', alertUser);