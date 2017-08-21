<?php

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = strip_tags(trim($_POST["name"]));
        $name = str_replace(array("\r","\n"), array(" "," "), $name);
        $behalf = strip_tags(trim($_POST["behalf"]));
        $message = trim($_POST["message"]);
        $phone = trim($_POST["phone"]);
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $time = trim($_POST["time"]);

        if (empty($name) or empty($behalf) or empty($message) or empty($phone) or empty($time) or !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            http_response_code(400);
            echo "Oops! There was a problem with your submission. Please complete the form and try again.";
            exit;
        }
        $recipient = "afshin.moatari@gmail.com";
        $subject = "New Company Cntact From $name";
        $email_content = "Name: $name\n";
        $email_content .= "Email: $email\n\n";
        $email_content .= "Message:\n$message\n";
        $email_content .= "Time:\n$time\n";
        $email_content .= "Phone:\n$phone\n";
        $email_headers = "From: $name <$email>";
        if (mail($recipient, $subject, $email_content, $email_headers)) {
            http_response_code(200);
            echo "Thank You! Your message has been sent.";
        } else {
            http_response_code(500);
            echo "Oops! Something went wrong and we couldn't send your message.";
        }
    } else {
        http_response_code(403);
        echo "There was a problem with your submission, please try again.";
    }
