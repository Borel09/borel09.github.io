const form = document.getElementById('my_form');
const firstName = document.getElementById('fname1');
const lastName = document.getElementById('lname1');

form.addEventListener('submit', function handleSubmit(event) {
    event.preventDefault();

    // 👇️ Send data to the server here

    // 👇️ Reset the form here
    form.reset();
});