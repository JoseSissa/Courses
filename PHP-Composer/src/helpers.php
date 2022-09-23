<!-- Nos ayuda a reutilizar la funciones repetitivas en el sistema,
de tal forma que la podemos llamar desde cualquier parte/archivo 
haciendo uso de este ayudante/helper, más o menos como el useContext de React -->

<?php 

// var_dump(function_exists('upper'));

if (!function_exists('upper')) {
    function upper($text) {

        return Text\Format::upperText($text);
        
    };
}

if (!function_exists(('lower'))) {
    function lower($text) {

        return Text\Format::lowerText($text);
    
    };
}