#Alterar
$text = "<h1>PHP es UN LENGUAJE</h1>";
echo $text;
//Hacer un texto en minuscula
echo "<pre>";
echo strtolower($text);
//Hacer un texto en Mayuscula
echo "<pre>";
echo strtoupper($text);
//Convierte el primer elemento en minuscula
echo "<pre>";
echo lcfirst($text);
//Convierte el primer elemento en Mayuscula
echo "<pre>";
echo ucfirst($text);

echo "<br><br>";
#Reemplazar
//reemplazamos cada espacio vacio por un guión(-)
$slug = str_replace(' ', '-', $text);
echo $slug;
echo strtolower($slug);

echo "<br><br>";
#Modificación
//Si tenemos una factura se imprima de la siguiente forma.
$code = 39;
//Vamos a tener 8 espacio con 8 carácteres
echo "<br>";
echo str_pad($code, 8, '#');
echo "<br>";
//Ambos lados, izquierda y derecha
echo str_pad($code, 8, '#', STR_PAD_BOTH);
echo "<br>";
echo str_pad($code, 8, '#', STR_PAD_LEFT);
echo "<br>";
echo str_pad($code, 8, '#', STR_PAD_RIGHT);

echo "<br><br>";
//En nuestra base de datos no se deben de guardar etiquetas.
//Con strip_tags eliminamos cualquier etiqueta html que contega el dato
echo strip_tags($text);

echo "<br><br>";
#ELEMENTOS MONOBYTES Y MULTIBYTES.
$text_uno = "PHP es UN LENGUAJE, año 2020, programación";
$text_dos = "PHP es UN LENGUAJE, año 2020, programación";
echo strtoupper($text_uno);//monobye
echo "<br>";
//Al colocar mb_nombrefuncion con esto formateamos correctamente.
echo mb_strtoupper($text_dos);//multibyte