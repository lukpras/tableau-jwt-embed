=========================================EMBEDDING TABLEAU=========================================

===================================================================================================
>>>>INSTALL DEPENDECIES<<<<

-> install node.js di komputer anda
-> install package dependencies dengan menggunakan perintah
--> npm i 
--> pada terminal


===================================================================================================
>>>>SETTING TABLEAU<<<<

-> login Tableau Online menggunakan Admin Server
-> Menuju ke setting server dan menu Connected Apps
-> Buat Connected Apps baru
--> Akan terdapat 3 parameter yaitu
--> SecretID, SecretValue dan Client ID
--> Ketiga value ini akan digunakan dalam membuat JWT (JSON Web Token)
-> Nyalakan (Enable) Connected Apps yang telah dibuat


===================================================================================================
>>>>BUAT EMBED BACKEND DAN FRONTEND<<<<

-> Buat script backend dan frontend untuk embedding
--> Buka folder tb-embed di VSCode
--> Setting generateToken.js (Pembuatan JWT)
---> Didalamnya terdapat beberapa variable yang dapat diubah
-----> secret = SecretValues (dari Connected Apps)
-----> secretId = SecretID (dari Connected Apps)
-----> ClientID = ClientID (dari Connected Apps)
-----> userId = email user yang akan melakukan embed, yang dapat akses visual di Tableau

--> Setting server.js (Setting Backend)
---> Didalamnya terdapat beberapa variable yang dapat diubah
-----> secret = SecretValues (dari Connected Apps)
-----> secretId = SecretID (dari Connected Apps)
-----> ClientID = ClientID (dari Connected Apps)
-----> userId = email user yang akan melakukan embed, yang dapat akses visual di Tableau

--> Setting index.js (Setting Frontend)
---> Anda dapat menambahkan filterisasi dan setting fitur2 pada embedding disini
---> Contoh Setting frontend dan developer playground tableau dapat diakses disini
---> https://developer.salesforce.com/tools/tableau/embedding-playground

--> Setting index.html
---> Didalamnya terdapat beberapa variable yang dapat diubah
---> Anda dapat mengubah parameter
----> src = Link share visualisasi Tableau anda


===================================================================================================
>>>>JALANKAN WEB APPLICATION<<<<

-> jalankan server.js pada terminal dengan menggunakan perintah
--> node server.js

-> jalankan frontend pada terminal dengan menggunakan perintah
--> npm start