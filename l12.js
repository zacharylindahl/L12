const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const courseInput = document.getElementById('course');
const sectionInput = document.getElementById('section');
const roleInput = document.getElementById('role');

document.getElementById('submitBtn').addEventListener('click', function(event) {
    event.preventDefault(); 
    const person = {
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        course: courseInput.value,
        section: sectionInput.value,
        role: roleInput.value
    };
    console.log(JSON.stringify(person));
});
