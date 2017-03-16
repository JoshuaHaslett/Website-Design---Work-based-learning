<?php
//recipiant
if($_POST["sub"])
$to = 'haslett.j.l@gmail.com';

//subject
$subject = "whatevs";

//message
$message = "this is the message"

//headers
$headers = "From: Josh <josh.com>\r\n";
$headers .= "Reply-to: josh.com\r\n";

//send
mail($to, $subject, $message, $headers);
?>