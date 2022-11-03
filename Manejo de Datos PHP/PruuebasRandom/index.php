<?php
$vehiculos = "[{\"placa\":\"Hdp223\",\"valor_comercial\":\"23.000.000\",\"prenda\":\"No\",\"deuda\":\"\",\"id\":\"0\"},{\"placa\":\"Hdp223\",\"valor_comercial\":\"23.000.000\",\"prenda\":\"No\",\"deuda\":\"\",\"id\":\"0\"},{\"placa\":\"Hdp223\",\"valor_comercial\":\"23.000.000\",\"prenda\":\"No\",\"deuda\":\"\",\"id\":\"0\"}]";
    
foreach (json_decode($vehiculos) as $vehiculo) {
    echo "runt_dueno".$vehiculo;
    echo "runt_placa".$placa;
};

