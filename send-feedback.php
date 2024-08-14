<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $comments = $_POST['comments'];
    $to = "globalic2024@gmail.com";
    $subject = "New Feedback from Website";
    $headers = "From: noreply@example.com";

    if (mail($to, $subject, $comments, $headers)) {
        echo "Thank you for your feedback!";
    } else {
        echo "Sorry, there was an error sending your feedback. Please try again.";
    }
}
?>
