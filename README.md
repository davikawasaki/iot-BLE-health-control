# IoT BLE Health Control Project - Heart beats control with Arduino and Ionic app

Heart beat transmission through IoT bluetooth low energy with heart beat sensor, displaying data in a hybrid app and storing values in a PHP/Apache server.

The goal was collect and display the heart beat of an user with a health band, starting a small health data mining.

# MEMBERS

KAWASAKI, Davi - Computer Engineering Student (UTFPR-CP)

ITO, Eric - Computer Engineering Student (UTFPR-CP)

MARTINS, Flávio - Computer Engineering Student (UTFPR-CP)

LUZ, Luis Eduardo - Computer Engineering Student (UTFPR-CP)

# IDE & LANGUAGES USED

1) Arduino IDE 1.6.8 [https://github.com/arduino/Arduino/tree/1.6.8]

2) Ionic Framework 2 (Front-end w/ Angular 2) [https://ionicframework.com/docs/]

3) NodeJS v7.0.0 [https://nodejs.org/en/]

4) PHP 5.6/MySQL/Apache server (Back-end) [http://healthcontrol.luiseduardoluz.com/]

# LIBRARIES & MODULES USED

1) Angular 2 Libraries [Compiler, Compiler CLI, Core, Forms, HTTP, Platform Browser, Storage]

2) Ionic 2 Dependencies [App Scripts, Typescript 2.0.3]

3) Cordova Plugins [Bluetooth Serial, Ionic Keyboard, Splashscreen, Whitelist]

4) Heart Beat Sensor [https://github.com/WorldFamousElectronics/PulseSensor_Amped_Arduino]

5) Bluetooth Serial Module HC-05 [http://www.robotshop.com/media/files/pdf/rb-ite-12-bluetooth_hc05.pdf]

6) ESP-8266 Wi-Fi Module [ABANDONED]

# HOW TO USE

The project is divided in three parts: hardware configuration files (inside /arduino folder), server HTTP/database files (inside /database & web folders) and mobile application development files (inside /ionic/healthcontrol folder).

# TESTING THE HEART BEAT SENSOR

To test a simple BPM data with Bluetooth module, follow these steps:

1) Open the 'bpm_bluetooth.ino' code;

2) Compile the code to an Arduino board (preferably Arduino Nano) with the hearth beat sensor and bluetooth module connected (verify the sensor and bluetooth documentations for the hardware connections);

3) Pair the bluetooth module with an bluetooth phone app that collects bluetooth data;

4) Test the data collection.

# CONFIGURING SERVER FILES

In this case, we need to previously configure an Apache server with PHP support and a MySQL database to store all incoming data (Google these configurations). Afterwards, with all PHP files binded with proper database connections, we ultimately need to set IP or proxy permissions to allow requests, as long as test HTTP connections with the developed mobile application.

# CONFIGURING & TESTING THE MOBILE APPLICATION

To configure and test the mobile application, follow these main steps (development proccess isn't covered):

1) Open the ionic health control folder;

2) Connect your Android phone and run ionic run android --device in terminal (Ubuntu/Windows) - Mac will need to configure properly XCode Tools with an owned iPhone, and then run the command;

3) Allow bluetooth in your phone and pair with the HC-05 module - you will may need to insert PIN 1234;

4) Starting collecting data, getting BPM history in the hamburguer left menu.

5) If any NPM errors show, you may not have configured properly the application dependencies, the Android SDK, XCode Tools or even the package.json can present conflicts. If you get stuck, go to Ionic Framework V2 Forum for help: https://forum.ionicframework.com/c/ionic-2

# CONTACT & FEEDBACKS

KAWASAKI, Davi // davishinjik [at] gmail.com
