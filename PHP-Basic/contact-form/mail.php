<?php 

use PHPMailer\PHPMailer\PHPMailer;

require("./vendor/autoload.php");

function sendMail($subject, $body, $email, $name, $isHtml = false) {
    // Configuración inicial de nuestro servidor de correos
    $phpmailer = new PHPMailer();
    $phpmailer->isSMTP();
    $phpmailer->Host = 'smtp.mailtrap.io';
    $phpmailer->SMTPAuth = true;
    $phpmailer->Port = 2525;
    $phpmailer->Username = '70f681054cb84e';
    $phpmailer->Password = 'a05dd745cc4f8c';
    // Añadiendo destinatarios
    $phpmailer->addAddress($email, $name);
    $phpmailer->setFrom('contact@miempresa.com', 'Mi Empresa');
    
    $phpmailer->isHTML($isHtml);                                  //Set email format to HTML
    $phpmailer->Subject = $subject;
    $phpmailer->Body    = $body;

    $phpmailer->send();

};

?>