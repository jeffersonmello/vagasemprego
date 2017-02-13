<?php
header('Access-Control-Allow-Origin: *');
header('content-type: application/json; charset=utf-8');

ini_set( 'display_errors', true );
error_reporting(E_ALL & ~ E_NOTICE & ~ E_DEPRECATED & E_ERROR | E_PARSE);

include('../class/omegainc.php');
require_once('../model/Anuncios/Anuncios.php');

$db = new Database();
$db->connect();


$anuncios = new Anuncios();

$anuncios = $anuncios->getAnuncios($db);

echo json_encode($anuncios);
?>
