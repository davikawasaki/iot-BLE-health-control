<?php
	
	class DataDAO {
		
		 public static $instance;

		    public static function getInstance() {
		        if (!isset(self::$instance))
		            self::$instance = new DataDAO();

		        return self::$instance;
		    }

	     public function insertData(DataModel $data){

	     	$sql = Conexao::getInstance()->prepare("INSERT INTO data (id,idSensor,idDevice,value) VALUES (?, ?, ?, ?)");

	     	$p1 = $data->getId();
	     	$p2 = $data->getIdSensor();
	     	$p3 = $data->getIdDevice();
	     	$p4 = $data->getValue();

	     	$sql->execute(array($p1,$p2,$p3,$p4));
	 
		    if ($sql->affected_rows > 0){
		       return true;
		    }
		}
	}
