<?php
class Anuncios {
  public $result;

  public function getAnuncios($db){
    $result = $db->select('cad_anuncios');
    $result = $db->getResult();

    return $result;
  }
}
?>
