<?php 

echo "<pre>";
// print_r($_POST);
print_r($_FILES);
echo "</pre>";


echo "<pre>";
// print_r($_POST);
var_dump($_FILES);
echo "</pre>";

// Tomamos el nombre del archivo
$basename = $_FILES["imagen"]["name"];
// Tomamos su ruta temporal donde se guarda el archivo
$imagePath = $_FILES["imagen"]["tmp_name"];
// Creamos la ruta donde se guardará el archivo junto con el nombre
$pathUpdate = "./images/$basename";
// Usamos la función para mover de la ruta temporal a la ruta que se subirá el archivo.
move_uploaded_file($imagePath, $pathUpdate);

echo $basename;


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <img src="<?= $pathUpdate ?>" alt="<?= $basename ?>">
</body>
</html>