<?php

if(isset($_POST['submit'])){

    $submitted_email = $_POST['email'];
    $to_email = "dagg.george@gmail.com";
    $subject = "New Subscriber!";
    $body = "$submitted_email has just subscribed to a daily Elemental Reading.";
    
    $headers = "MIME-Version: 1.0" . "\r\n"; 
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From:sofia@elementalempressmedicine.com";
     
    if (mail($to_email, $subject, $body, $headers))
     
    {
        echo "<h3 style='text-align: center; color: #151b34; font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif; font-weight: bold;'>Success! You will now receive a daily Elemental Reading to your inbox.</h3>";
    }
     
    else
     
    {
        echo "<h3 style='text-align: center; color: #151b34; font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif; font-weight: bold;'>Oops, something went wrong. Please try again.</h3>";
    }

}

?>