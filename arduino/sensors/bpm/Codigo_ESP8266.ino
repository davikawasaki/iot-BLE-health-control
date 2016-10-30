// Programa: Versao firmware modulo ESP8266 e
//           mudanca de baud rate
// Autor : FILIPEFLOP (alterações Davi Kawasaki)

#include <SoftwareSerial.h>

//RX pino 2, TX pino 3
SoftwareSerial esp8266(2, 3);
#define DEBUG true

void setup() {
  Serial.begin(19200);
  Serial.println("Configurando ESP8266...");
  delay(1000);
  
  String login_wifi, ssid, senha, cipstart, get_request, cipsend;
  ssid = "xxx";
  senha = "xxx";
  login_wifi = "AT+CWJAP=\"" + ssid + "\",\"" + senha + "\"\r\n";
  cipstart = "AT+CIPSTART=\"TCP\",\"healthcontrol.luiseduardoluz.com\",8080\r\n";
  get_request = "GET /sendData.php?bpm=666&sensor=1 HTTP/1.1\r\nHost: healthcontrol.luiseduardoluz.com\r\n\r\n";
  int tamanho_get = get_request.length() - 3;
  cipsend = "AT+CIPSEND=";
  cipsend += tamanho_get;
  cipsend += "\r\n";
  
  // Configure na linha abaixo a velocidade inicial do
  // modulo ESP8266
  esp8266.begin(19200);
  delay(2000);
  // Reseta o módulo
  sendData("AT+RST\r\n", 2000, DEBUG);
  delay(10000);
  Serial.println("\n\nVersao de firmware");
  delay(1000);
  sendData("AT+GMR\r\n", 2000, DEBUG); // rst
  // Configure na linha abaixo a velocidade desejada para a
  // comunicacao do modulo ESP8266 (9600, 19200, 38400, etc)
  sendData("AT+CIOBAUD=19200\r\n", 2000, DEBUG);
  //Serial.println("\n\nConectando na rede Wi-Fi:");
  //delay(3000);
  // sendData(login_wifi, 2000, DEBUG);
  // sendData("AT+CWMODE=1\r\n", 1000, DEBUG);
  // Mostra o endereco IP
  Serial.println("\n\nEndereco IP:");
  delay(3000);
  sendData("AT+CIFSR\r\n", 1000, DEBUG);
  delay(3000);
  Serial.println("\n\nCipstart:");
  sendData(cipstart, 1000, DEBUG);
  delay(3000);
  Serial.println("\n\nCipsend:");
  sendData(cipsend, 1000, DEBUG);
  delay(3000);
  Serial.println("\n\nGet Request:");
  sendData(get_request, 2000, DEBUG);
  delay(3000);
  Serial.println("\n\n** Final **");

}

void loop() {}

String sendData(String command, const int timeout, boolean debug) {
  // Envio dos comandos AT para o modulo
  String response = "";
  esp8266.print(command);
  long int time = millis();
  while ( (time + timeout) > millis())
  {
    while (esp8266.available())
    {
      // The esp has data so display its output to the serial window
      char c = esp8266.read(); // read the next character.
      response += c;
    }
  }
  if (debug)
  {
    Serial.print(response);
  }
  return response;
}
