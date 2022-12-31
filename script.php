<?php

if(isset($_POST['submit'])){

    $submitted_email = $_POST['email'];
    $card1Graphic = $_POST['card1Graphic'];
    $card2Graphic = $_POST['card2Graphic'];
    $card3Graphic = $_POST['card3Graphic'];
    $card1Text = $_POST['card1Text'];
    $card2Text = $_POST['card2Text'];
    $card3Text = $_POST['card3Text'];
    $subject = "Your Elemental Reading!";
    $body = "

            <!DOCTYPE html>
        <html>
        <head>
            <meta charset = \"UTF-8\">
            <title>My Reading</title>
            <style>
                body{
                    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
                }

                h1{
                    color: #65742f;
                }

                header{
                    margin: 5rem auto;
                    text-align: center;
                }

                footer{
                    margin: 5rem auto;
                }

                .email-wrapper{
                    width: 75%;
                    margin: 5rem auto;
                }

                .flex-container-email{
                    margin: 5rem auto;
                }

                .card-image{
                    text-align: center;
                }

                .card-description-container{
                    margin: 3rem auto;
                }

                .card-description{
                    text-align: center;
                }

            </style>
        </head>
        <body>
            <header>
                <h1>Your Elemental Reading</h1>
            </header>
            <div class=\"email-wrapper\">
                <div class=\"flex-container-email\">
                    <div class=\"card-image-container\">
                        <div class=\"card-image\" id=\"email-card1\">
                            <img src=$card1Graphic height=\"400px\" width=\"275px\">
                        </div>
                    </div>
                    <div class=\"card-description-container\">
                        <div class=\"card-description\">
                        $card1Text
                        </div>
                    </div>
                </div>
                <div class=\"flex-container-email\">
                    <div class=\"card-image-container\">
                        <div class=\"card-image\" id=\"email-card2\">
                            <img src=$card2Graphic height=\"400px\" width=\"275px\">
                        </div>
                    </div>
                    <div class=\"card-description-container\">
                        <div class=\"card-description\">
                        $card2Text
                        </div>
                    </div>
                </div>
                <div class=\"flex-container-email\">
                    <div class=\"card-image-container\">
                        <div class=\"card-image\" id=\"email-card3\">
                            <img src=$card3Graphic height=\"400px\" width=\"275px\">
                        </div>
                    </div>
                    <div class=\"card-description-container\">
                        <div class=\"card-description\">
                        $card3Text
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <p style=\"text-align:center;\">Discover more at <a href=\"https://www.elementalempressmedicine.com/\">Elemental Empress Medicine</a>.</p>
            </footer>
        </body>
        </html>

    ";
    
    $headers = "MIME-Version: 1.0" . "\r\n"; 
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From:heal@elementalempressmedicine.com";
    $to_email = "heal@elementalempressmedicine.com";
    $subject2 = "Someone just got an Elemental Reading!";
    $body2 = "$submitted_email just emailed themselves their reading.";
     
    if (mail($submitted_email, $subject, $body, $headers))
     
    {
        mail($to_email, $subject2, $body2, $headers);
        echo "<h3 style='text-align: center; color: #151b34; font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif; font-weight: bold;'>Success! Check your inbox for your reading.</h3>";
    }
     
    else
     
    {
        echo "<h3 style='text-align: center; color: #151b34; font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif; font-weight: bold;'>Oops, something went wrong. Please try again.</h3>";
    }

}

?>