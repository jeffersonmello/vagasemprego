<?php
class Cidades {
  public $result;

  function getAll($db){
    $result = $db->select('cad_cidades');
    $result = $db->getResult();

    return $result;
  }
}

?>
