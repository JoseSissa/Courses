<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tipos de inputs</title>
</head>
<body>
    
    <form action="./server.php" method="POST" enctype="multipart/form-data">

        <!-- Arreglos -->
        <label>Personas</label>
        <input type="text" name="personas[]">
        <input type="text" name="personas[]">
        <input type="text" name="personas[]">

        <!-- Arreglos Asociativos -->
        <label>Nombre</label>
        <input type="text" name="persona[nombre]">
        <label>Email</label>
        <input type="email" name="persona[email]">
        <label>Teléfono</label>
        <input type="number" name="persona[edad]">

        <!-- Input de múltiple archivos -->
        <label for="galery">Upload your images.</label>
        <input type="file" multiple name="galery[]" id="galery">

        {{ "hola mundo" }}
        <?php echo "Hola mundo"; ?>
        <?= "Hola mundo" ?>
        <% "Hola mundo" %>

        <input type="submit" value="enviar">

    </form>

</body>
</html>