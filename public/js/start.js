const ref = new URLSearchParams(window.location.search).get('ref');

function open_signup() {
    document.querySelector(".signup-modal").style.display = 'flex';

    // assign referral ID when modal (signup form) is opened
    if (ref) {
        localStorage.setItem('referredId', ref); // optional: persist for later
        const input = document.getElementById("referrerId");
        if (input) {
            input.value = ref;
        }
    }
}

function close_signup() {
    document.querySelector(".signup-modal").style.display = 'none';
}


function open_login() {
  document.querySelector(".login-modal").style.display = 'flex';
}

function close_login(id) {
    document.querySelector(".login-modal").style.display = 'none';
}