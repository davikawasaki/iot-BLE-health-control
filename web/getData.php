<?php
	error_reporting(E_ALL);
	ini_set('display_errors', 1);
	require "sql.class.php";
	require "DataModel.php";
	require "DataDAO.php";

	class SendData extends DataDAO {

		
		public function __construct() {


			$data = new DataModel();
			if(empty($_POST)){
				echo json_encode($this->getData(),JSON_PRETTY_PRINT);
			}
			else {
				echo json_encode($this->getDataFilter($_POST),JSON_PRETTY_PRINT);
			}
			//var_dump($this->getDataFilter(array('value' => 80)));
			//var_dump($this->checkDevice('12-34-56-78-9A-BC'));
			//var_dump($this->checkSensor('12-34-56-78-9A-BC'));
		}


	}


	header('Content-Type: application/json');
	$ferrazLindo = new SendData();

?>