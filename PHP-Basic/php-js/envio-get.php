<?php 

$variable1 = "variable1";
$variable2 = "variable2";

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
    <form action="./get.php" method="get">
        
        <label for="nombre"></label>
        <input type="text" id="nombre" name="nombre">

        <label for="apellido"></label>
        <input type="text" id="apellido" name="apellido">

        <input type="submit" value="enviar">
    </form>
    <script>
        let uno = "<?= $variable1; ?>";
        let dos = "<?= $variable2; ?>";
        console.log(`En uno tenemos ${uno} y en dos tenemos ${dos}.`);
    </script>
    <script src="./index.js"></script>
</body>
</html>