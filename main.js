"use strict";
const alertButton = document.querySelector('#alert-button');
function alertUser() {
    alert("Please save your work before leaving.");
}
alertButton === null || alertButton === void 0 ? void 0 : alertButton.addEventListener('click', alertUser);
