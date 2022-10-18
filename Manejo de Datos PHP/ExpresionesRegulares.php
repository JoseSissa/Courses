<?php 

#EXPRESIONES REGULARES
/*
/:  CONTENEDOR
^: INICIO
$: FINAL
-: RANGO
[]: PATRÓN 
{}: CONDICIÓN
*/

$password = '12345';
$password1 = '123456a';
$password2 = '123456';
//Iniciamos con un contenedo // luego iniciamos con  ^ y que solo permita un patrón del 0 al 9 [0-9] 
//la condicion en llaves y que tenga como minimo 6 elementos y máximo 9 caracteres {6,9}
echo preg_match('/^[0-9]{6,9}$/', $password);
//Resultado 0
echo "<br>";
var_dump(preg_match('/^[0-9]{6,9}$/', $password1));
//Resultado int(0)
echo "<br>";
var_dump((bool)preg_match('/^[0-9]{6,9}$/', $password2));
//Resultado bool(true)

?>