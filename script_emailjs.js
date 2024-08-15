document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // ফর্মটি সাবমিট হওয়া থামানো

    var comments = document.getElementById("comments").value;

    // EmailJS এর মাধ্যমে ইমেল পাঠানোর কোড
    emailjs.send("service_gvfogkj", "template_rpisvzf", {
        comments: comments
    }).then(function(response) {
        document.getElementById("response").innerText = "Thank you for your feedback!";
    }, function(error) {
        document.getElementById("response").innerText = "Sorry, there was an error sending your feedback. Please try again.";
    });
});
