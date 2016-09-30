<?php


	class DataModel {

		private $id;
		private $idSensor;
		private $idDevice;
		private $value;

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
	}