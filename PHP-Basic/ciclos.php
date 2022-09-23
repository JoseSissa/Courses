<?php 

$usuarios = ["User1", "User2", "User3", "User4"];
$var = count($usuarios);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ciclos</title>
</head>
<body>

    <ul>
        <h2>Ciclo for normal</h2>
        <?php for ($i=0; $i < 10; $i++): ?>
            <li><?= $i+1; ?></li>
        <?php endfor; ?>

        <h2>Ciclo While</h2>
        <?php while($var != 0): ?>
            <li><?= $usuarios[$var-1]; $var--;?></li>
        <?php endwhile; ?>

        <h2>Ciclo foreach</h2>
        <?php foreach ($usuarios as $user): ?>
            <li><?= $user ?></li>
        <?php endforeach; ?>
    </ul>
    
</body>
</html>