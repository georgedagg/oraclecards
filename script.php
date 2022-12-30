<?php

if(isset($_POST['submit'])){

    $submitted_email = $_POST['email'];
    $to_email = "dagg.george@gmail.com";
    $card1 = $_POST['card1'];
    $card2 = $_POST['card2'];
    $card3 = $_POST['card3'];
    $subject = "Your Reading!";
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
                    margin: 0 auto;
                    height: 25rem;
                    width: 17rem;
                }

                #email-card1{
                    background-image: url($card1);
                    background-size: contain;
                }

                #email-card2{
                    background-image: url($card2);
                    background-size: contain;
                }

                #email-card3{
                    background-image: url($card3);
                    background-size: contain;
                }

                .card-description-container{
                    width: 50%;
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
                        <div class=\"card-image\" id=\"email-card1\"></div>
                    </div>
                    <div class=\"card-description-container\">
                        <div class=\"card-description\">
                            <h2>Sample Heading</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem voluptates quod illo mollitia iusto odio porro et maiores, modi sapiente incidunt odit reprehenderit non harum enim deserunt ex dolore fugit!</p>
                        </div>
                    </div>
                </div>
                <div class=\"flex-container-email\">
                    <div class=\"card-image-container\">
                        <div class=\"card-image\" id=\"email-card2\"></div>
                    </div>
                    <div class=\"card-description-container\">
                        <div class=\"card-description\">
                            <h2>Sample Heading</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem voluptates quod illo mollitia iusto odio porro et maiores, modi sapiente incidunt odit reprehenderit non harum enim deserunt ex dolore fugit!</p>
                        </div>
                    </div>
                </div>
                <div class=\"flex-container-email\">
                    <div class=\"card-image-container\">
                        <div class=\"card-image\" id=\"email-card3\"></div>
                    </div>
                    <div class=\"card-description-container\">
                        <div class=\"card-description\">
                            <h2>Sample Heading</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem voluptates quod illo mollitia iusto odio porro et maiores, modi sapiente incidunt odit reprehenderit non harum enim deserunt ex dolore fugit!</p>
                        </div>
                    </div>
                </div>
            </div>
            <footer></footer>
        </body>
        </html>

    ";
    
    $headers = "MIME-Version: 1.0" . "\r\n"; 
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From:sofia@elementalempressmedicine.com";
     
    if (mail($submitted_email, $subject, $body, $headers))
     
    {
        echo "<h3 style='text-align: center; color: #151b34; font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif; font-weight: bold;'>Success! You will now receive a daily Elemental Reading to your inbox.</h3>";
    }
     
    else
     
    {
        echo "<h3 style='text-align: center; color: #151b34; font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif; font-weight: bold;'>Oops, something went wrong. Please try again.</h3>";
    }

}

?>