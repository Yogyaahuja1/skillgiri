const ref = new URLSearchParams(window.location.search).get('ref');

function open_page() {
    document.querySelector(".modal").style.display = 'flex';

    // assign referral ID when modal (signup form) is opened
    if (ref) {
        localStorage.setItem('referredId', ref); // optional: persist for later
        const input = document.getElementById("referrerId");
        if (input) {
            input.value = ref;
        }
    }
}

function close_page() {
    document.querySelector(".modal").style.display = 'none';
}
