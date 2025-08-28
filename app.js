// This file contains the JavaScript code for the job application. 
// It handles user interactions, form submissions, and any dynamic behavior required by the application.

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('job-application-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        console.log('Form submitted:', data);
        alert('Application submitted successfully!');
        
    });
});
