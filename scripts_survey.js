document.getElementById('survey-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const feedback = document.getElementById('feedback');
    feedback.textContent = "Thank you for submitting the survey!";
    feedback.style.color = "#28a745";
    feedback.style.animation = "fadeIn 1s ease, bounce 1s ease 0.5s";
});
