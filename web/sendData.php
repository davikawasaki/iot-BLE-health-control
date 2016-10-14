<?php
	date_default_timezone_set('America/Sao_Paulo');
	error_reporting(E_ALL);
	ini_set('display_errors', 1);
	require "sql.class.php";
	require "DataModel.php";
	require "DataDAO.php";

	class SendData extends DataDAO {

		
		public function __construct() {


			$data = new DataModel();


			$bpm = $_REQUEST['bpm'];
			$idSensor = $_REQUEST['sensor'];
			$ip = $_SERVER['REMOTE_ADDR'];
			$mac = $this->getIdDeviceMAC($ip);

			$data->setId(null);		
			$data->setIdSensor($idSensor);
			$data->setIdDevice($mac);
			$data->setValue($bpm);
			$data->setTimeStamp(date('Y-m-d H:i:s'));
			if($this->insertData($data)){
				die($data->getJsonData());
			}
			//var_dump($data);
		}


	}
	header('Content-Type: application/json');
	$ferrazLindo = new SendData();

?>