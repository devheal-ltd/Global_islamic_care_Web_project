document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_gvfogkj', 'template_rpisvzf', this, 'tq0bATqDSTPoBMRCc')
        .then(function(response) {
            document.getElementById('response').innerText = 'Thank you for your feedback!';
            document.getElementById('contactForm').reset();
        }, function(error) {
            document.getElementById('response').innerText = 'Sorry, there was an error. Please try again later.';
        });
});
