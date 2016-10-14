<?php
	
	class DataDAO {
		
		 public static $instance;

		    public static function getInstance() {
		        if (!isset(self::$instance))
		            self::$instance = new DataDAO();

		        return self::$instance;
		    }

	    public function insertData(DataModel $data){

	     	$sql = Conexao::getInstance()->prepare("INSERT INTO data (id,idSensor,idDevice,value,timestamp) VALUES (?, ?, ?, ?, ?)");

	     	$p1 = $data->getId();
	     	$p2 = $data->getIdSensor();
	     	$p3 = $data->getIdDevice();
	     	$p4 = $data->getValue();
	     	$p5 = $data->getTimeStamp();


	     	if($this->checkDevice($p3) && $this->checkSensor($p2)){

				$sql->execute(array($p1,$p2,$p3,$p4,$p5));
		 
			    if ($sql->rowCount() > 0){
			       return true;
			    }

	     	}

	     	return false;
		}

	    public function getData(){
	     	$sql = Conexao::getInstance()->prepare("SELECT * FROM data");
	     	$sql->execute();
		    $result = $sql->fetchAll();
		    return $result;
		}

	    public function getDataFilter($filters){
	    	$stant = array();
	    	$query = 'SELECT * FROM data WHERE ';
	     	foreach($filters as $key=>$value){
	     		$query .= $key . "= :".$key;
	     		$stant[':'.$key] = $value;
	     	}
	     	$sql = Conexao::getInstance()->prepare($query);
	     	$sql->execute($stant);
		    $result = $sql->fetchArray();
		    return $result;
		}

	    public function insertDevice(DevicesModel $data){

	     	$sql = Conexao::getInstance()->prepare("INSERT INTO devices (idDevice,name,mac) VALUES (?, ?, ?)");

	     	$p1 = $data->getIdDevice();
	     	$p2 = $data->getName();
	     	$p3 = $data->getMac();

	     	$sql->execute(array($p1,$p2,$p3));
	 
		    if ($sql->rowCount() > 0){
		       return true;
		    }
		}

	    public function checkDevice($id){
	     	$sql = Conexao::getInstance()->prepare("SELECT * FROM devices WHERE idDevice = :id");
	     	$sql->bindParam(":id",$id);
	     	$sql->execute();
		    return $sql->rowCount();
		}


	    public function getIdDeviceMAC($mac){
	     	$sql = Conexao::getInstance()->prepare("SELECT idDevice FROM devices WHERE mac = :mac");
	     	$sql->bindParam(":mac",$mac);
	     	$sql->execute();
		    return $sql->fetchColumn();
		}

	    public function insertSensor(SensorsModel $data){

	     	$sql = Conexao::getInstance()->prepare("INSERT INTO sensors (idSensor,name) VALUES (?, ?)");

	     	$p1 = $data->getIdSensor();
	     	$p2 = $data->getName();


	     	$sql->execute(array($p1,$p2));
	 
		    if ($sql->rowCount() > 0){
		       return true;
		    }
		}

	    public function checkSensor($id){
	     	$sql = Conexao::getInstance()->prepare("SELECT * FROM sensors WHERE idSensor = :idsensor");
	     	$sql->bindParam(":idsensor",$id);
	     	$sql->execute();
		    return $sql->rowCount();
		}

	}
