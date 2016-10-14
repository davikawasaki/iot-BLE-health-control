<?php

	
	class DataModel {

		private $id;
		private $idSensor;
		private $idDevice;
		private $value;
		private $timestamp;

		public function getId(){
			return $this->id;
		}

		public function setId($id){
			$this->id = $id;
		}

		public function getIdSensor(){
			return $this->idSensor;
		}

		public function setIdSensor($idSensor){
			$this->idSensor = $idSensor;
		}

		public function getIdDevice(){
			return $this->idDevice;
		}

		public function setIdDevice($idDevice){
			$this->idDevice = $idDevice;
		}

		public function getValue(){
			return $this->value;
		}

		public function setValue($value){
			$this->value = $value;
		}

		public function setTimeStamp($time){
			$this->timestamp = $time;
		}

		public function getTimeStamp(){
			return $this->timestamp;
		}

		public function getJsonData(){
			return json_encode( array(
							//"id"	=> $this->id,
							"idSensor" => $this->idSensor,
							"idDevice" => $this->idDevice,
							"value"	=> $this->value,
							"timestamp" => $this->timestamp
						), JSON_PRETTY_PRINT);
		}
	}