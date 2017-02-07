<?php
header('Access-Control-Allow-Origin: *');
header('content-type: application/json; charset=utf-8');


include('../class/omegainc.php');
require_once('../model/Vagas/Vagas.php');

$key              = null;
$guidcidade       = null;

$key              = $_POST['crpt'];
$guidcidade       = $_POST['guidcidade'];

$data             = date("Y-m-d");

$db = new Database();
$db->connect();

$vagas = new Vagas();

$vagas = $vagas->getVagasByCity($db, $guidcidade, $data);

echo json_encode($vagas);


?>
