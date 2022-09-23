<?php

// Se usó phpmailer packagist y https://mailtrap.io/ para este ejercicio

require("mail.php");

function validate($name, $email, $subject, $message) {
    return !empty($name) && !empty($email) && !empty($subject) && !empty($message);
}

$status = "";
$name = $_POST["name"];
$email = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];
$body = "$name <$email> te envía el siguiente mensaje: <br></br> $message";

if(isset($_POST["form"])) {
    if(validate($name, $email, $subject, $message)) {        
        // Mandar el correo
        sendMail($subject, $body, $email, $name, false);
        $status = "success";
    }else {
        $status = "danger";
    }
};

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contacto</title>
    <link rel="stylesheet" href="./style.css">
    <script src="https://kit.fontawesome.com/1c0d6beca7.js" crossorigin="anonymous" defer></script>
</head>
<body>
    <?php if($status == "danger"): ?>
        <div class="alert danger">
            <span>Surgió un problema</span>
        </div>
    <?php elseif($status == "success"): ?>
        <div class="alert success">
            <span>Mensaje enviado correctamente</span>
        </div>
    <?php endif; ?>
    
    <form action="./" method="POST">

        <h2>CONTÁCTANOS !</h2>

        <div class="input-group">
            <label for="name">Nombre</label>
            <input type="text" name="name" id="name">
        </div>
        <div class="input-group">
            <label for="email">Correo</label>
            <input type="email" name="email" id="email">
        </div>
        <div class="input-group">
            <label for="subject">Asunto</label>
            <input type="text" name="subject" id="subject">
        </div>
        <div class="input-group">
            <label for="message">Mensaje</label>
            <textarea name="message" id="message"></textarea>
        </div>

        <div class="button-container">
            <button name="form" type="submit">Enviar</button>
        </div>

        <div class="contact-info">
            <div class="info">
                <span> Calle 13 # 4 - 35 - Roshar</span>
            </div>
            <div class="info">
                <span>+57 234 566 6778</span>
            </div>
        </div>

    </form>

</body>
</html>