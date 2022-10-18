<?php 

class Validate {
    public static function email($value) {
        return (bool) filter_var($value, FILTER_VALIDATE_EMAIL)
    }
}