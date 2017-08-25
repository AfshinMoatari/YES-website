<?php

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = strip_tags(trim($_POST["name"]));
        $name = str_replace(array("\r","\n"), array(" "," "), $name);
        $behalf = strip_tags(trim($_POST["behalf"]));
        $behalf = str_replace(array("\r","\n"), array(" "," "), $behalf);
        $message = trim($_POST["message"]);
        $message = str_replace(array("\r","\n"), array(" "," "), $message);
        $phone = trim($_POST["phone"]);
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $timeFrom = trim($_POST["timeFrom"]);
        $timeTo = trim($_POST["timeTo"]);

        $recipient_company = "raid@yescph.co";
        $subject_company = "New Company Contact From $name";
        $email_headers_company = "From: " . $name . "\r\n";
        $email_headers_company .= "Reply-To: ". $email . "\r\n";
        $email_headers_company .= "MIME-Version: 1.0\r\n";
        $email_headers_company .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
        $email_content_company = "<html><body>";
        $email_content_company .= "<h3>Company Contact From " . $name . "</h3>";
        $email_content_company .= "<p>My name is " . "<b>" . $name . "</b>" . "." . "I am writing on behalf of " . "<b>" .  $behalf . "</b>" . "." . " I am contacting you to talk about " . "<b>" . $message . "</b>" . "." . " My phone number is " . "<b>" . $phone . "</b>" . "," . " and my email is " . "<b>" . $email . "</b>" . " ." . " Please contact me between " . "<b>" . $timeFrom . "</b>" . " - " . "<b>" . $timeTo . "</b>" . " to get the conversation started!</p>";
        $email_content_company .= "</body></html>";

        $recipient_client = $email;
        $subject_client = "YESCPH contact request";
        $email_headers_client = "From: " . "Contact" . "\r\n";
        $email_headers_client .= "Reply-To: ". $recipient_company . "\r\n";
        $email_headers_client .= "MIME-Version: 1.0\r\n";
        $email_headers_client .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
        $email_content_client = "<html><body>";
        $email_content_client .= "<h3>Thank you for contacting us " . $name . "." . "</h3>";
        $email_content_client .= "<p>We will contact you soon " . "." . "</body></html>";

        if (mail($recipient_company, $subject_company, $email_content_company, $email_headers_company) && mail($recipient_client, $subject_client, $email_content_client, $email_headers_client)) {
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
