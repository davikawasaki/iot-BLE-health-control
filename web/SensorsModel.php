<?php


	class SensorsModel {

		private $idSensor;
		private $name;


		public function getIdSensor(){
			return $this->idSensor;
		}

		public function setIdSensor($idSensor){
			$this->idSensor = $idSensor;
		}

		public function getName(){
			return $this->name;
		}

		public function setName($name){
			$this->name = $name;
		}

	}