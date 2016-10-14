<?php


	class DevicesModel {

		private $idDevice;
		private $name;
		private $mac;

		public function getIdDevice(){
			return $this->idDevice;
		}

		public function setIdDevice($idDevice){
			$this->idDevice = $idDevice;
		}

		public function getName(){
			return $this->name;
		}

		public function setName($name){
			$this->name = $name;
		}

		public function setMac($mac){
			$this->mac = $mac;
		}

		public function getMac(){
			return $this->mac;
		}


	}