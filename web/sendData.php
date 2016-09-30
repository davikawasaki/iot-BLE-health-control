<?php
	error_reporting(E_ALL);
	ini_set('display_errors', 1);
	require "sql.class.php";
	require "DataModel.php";
	require "DataDAO.php";

	class SendData extends DataDAO {

		
		public function __construct() {


			$data = new DataModel();

			$bpm = $_REQUEST['bpm'];
			$data->setIdSensor(0);
			$data->setIdDevice($_SERVER['REMOTE_ADDR']);
			$data->setValue($bpm);

			var_dump($this->insertData($data));
			//var_dump($data);
		}


	}
	echo "<pre>";
	$ferrazLindo = new SendData();

?>