<?php
class Vagas{
  public $result;

  public function getVagasByCity($db, $guidcidade, $data){
    $result = $db->sql("SELECT * FROM cad_vagas WHERE guid_cidade = $guidcidade AND (data like '%$data%') ");
    $result = $db->getResult();

    return $result;
  }
}
?>
