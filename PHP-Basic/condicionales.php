<?php

$variable = true;

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Condicionales</title>
</head>
<body>
    
    <h2>ESTO NO SE DEBE DE HACER</h2>
    <?php if($variable) {
        echo "<b>Esta condicional es verdadera y no se debe de hacer.</b>";
    }else {
        echo "<b>Esta condicional es falsa y no se debe de hacer.</b>";
    }
    ?>

    <h2>ESTO ES ACEPTABLE</h2>
    <?php if($variable) { ?>
        <b>Esta condicional es verdadera y aceptable</b>
    <?php } else { ?>
        <b>Esta condicional es falsa y aceptable</b>
    <?php } ?>

    <h2>ESTA ES LA MEJOR FORMA DE HACER</h2>
    <?php if($variable): ?>
        <b>Esta condicional es verdadera y es recomendada.</b>
    <?php else: ?>
        <b>Esta condicional es falsa y es recomendada.</b>
    <?php endif ?>

</body>
</html>