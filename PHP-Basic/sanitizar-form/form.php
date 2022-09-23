<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tipos de inputs</title>
</head>
<body>
    
    <form action="./server.php" method="POST">

        <label for="nombre">Nombre</label>
        <input type="text" name="nombre" id="nombre">
        
        <label for="username">Username</label>
        <input type="text" name="username" id="username">

        <label for="email">Email</label>
        <input type="text" name="email" id="email">

        <label for="telefono">Telefono</label>
        <input type="text" name="telefono" id="telefono">

        <input type="submit" value="enviar">

    </form>

</body>
</html>