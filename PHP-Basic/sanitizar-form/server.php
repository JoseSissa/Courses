<?php 
// Para validar las variables que llegan aquí hay dos funciones importantes
// isset define si la variable está seteada, empty valida si la variable está vacía
// echo "<pre>";
// var_dump(($_POST));
// echo "</pre>";

echo "<pre>";
print_r(($_POST));
echo "</pre>";

$nombre = $_POST["nombre"];
$username = $_POST["username"];
$email = $_POST["email"];
$telefono = $_POST["telefono"];

// Convierte todos los caracteres aplicables a entidades HTML
// Permite que no se interprete el código HTML que se pueda ingresar, sino que lo toma como texto plano
$newName = htmlentities($nombre);

// Me aseguro que al ingresar comillas no interfieran con mi codigo
$newUsername = addslashes($username);

// Realiza una búsqueda y sustitución de una expresión regular
$onlywords = preg_replace("/\d/", "", $username);
$onlynumber = preg_replace("/\D/", "", $username);
// Sanitiza un correo, pero la función es extensa, ver doc.
$email = filter_var($email, FILTER_SANITIZE_EMAIL);
$email = filter_var($telefono, FILTER_SANITIZE_NUMBER_INT);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Probando las validaciones</title>

    <p>El nombre es:</p>
    <?= $newName ?>
    <p>El username sin números es:</p>
    <?= $onlywords ?>
    <p>El username sin letras es:</p>
    <?= $onlynumber ?>
    <p>El email es:</p>
    <?= $email ?>


</head>
<body>
    
</body>
</html>





?>