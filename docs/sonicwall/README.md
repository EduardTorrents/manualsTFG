# Manual d’instal·lació SonicWall
Aquest capítol del document mostra el procés de configuració del dispositiu tallafoc SonicWall que gestiona la xarxa dels Punts de Seguretat Intel·ligents i els punts de càmeres per el servei Controlcat Intelligent Security, o CIS. La finalitat és aconseguir un manual que serveixi de guia per pròximes instal·lacions d’aquestes xarxes.
## 1. Introducció
### 1.1 Objecte
L’objecte d’aquest document és mostrar el procés de configuració del dispositiu SonicWall que gestiona la xarxa del Punt de Seguretat Intel·ligent (PIS) o els punts de càmeres pel servei Controlcat Intelligent Security (CIS). La finalitat és aconseguir un manual de referència per aconseguir la instal·lació d’aquestes xarxes.
### 1.2 Introducció
El Punt Intel·ligent de Seguretat forma una xarxa Ethernet. Aquesta xarxa necessita accés a Internet per poder comunicar-se amb el CIS. L’accés a Internet es proveeix a través d’una antena WiMax que connecta amb l’estació base, que és la sortida a Internet.

Les antenes WiMax tenen la funció de connectar punts remots fàcilment a través de connexions sense fils, però no disposen de les funcionalitats d’encaminament, control de ports i de xarxa.

Per evitar que sigui un punt vulnerable és necessari un tallafoc. La funció del tallafoc és evitar accessos d’equips no identificats a la xarxa de les càmeres, controlar els ports i crear les xarxes virtuals privades necessàries. El tallafoc es localitza en la xarxa de l’encaminador de sortida a Internet de l’estació base.

En aquest manual es mostra com configurar un dispositiu SonicWall de sèptima generació per protegir els Punts Intel·ligents de Seguretat en l’entorn de lectura de matrícules i videovigilància del CIS. La configuració que es mostra és la que permet el control de la xarxa per aconseguir un entorn que proporcioni la màxima seguretat.
## 2. Definició
SonicWall és una empresa de ciberseguretat que proveeix múltiples solucions. En aquest manual s’involucren els equips que porten el control i la seguretat de la xarxa, anomenats tallafocs.

Aquest manual usa MySonicWall per activar i controlar el dispositiu SonicWall.
A continuació es presenten les principals funcionalitats del tallafoc:
-	Gestió de xarxes.
-	Controls d’accés a Internet.
-	Control de ports.
-	Control de les aplicacions.
-	Serveis de seguretat.
-	Gestió d’usuaris remots.

En aquest manual les funcionalitats que s’utilitzen són les de gestió de xarxes, control d’accés a Internet i control de ports.
## 3. Infraestructura
En aquest punt es mostra la infraestructura que es gestiona en aquest manual.

L’entorn que s’instal·la compleix l’estructura de client-servidor. El CIS es troba en un servidor al núvol que rep les connexions dels clients. Aquests clients són els dispositius com les càmeres i els sensors, situats en el PIS que fa la funció de client proporcionant informació al servidor CIS.

El PIS es localitza en una ubicació remota i requereix encaminament del trànsit de sortida dels dispositius per arribar al CIS. Per augmentar la seguretat tot el trànsit d’entrada al PIS serà bloquejat.

### 3.1. Esquema lògic general
En aquest punt es mostra l’esquema lògic de la solució. El SonicWall controla les xarxes de les càmeres, els sensors i el punt d’accés WiFi. Es troba en l’estació base des d’on es proveeix l’accés a Internet a la xarxa i des d’on es forma una VPN amb l’ajuntament.
 
![img](/assets/img/sw1.png)

Fig. 1. Esquema lògic de les xarxes.

Les IP públiques amb les que es creen les VPN són:
-	Estació base: 95.120.233.88.
-	Ajuntament: 80.79.33.45.
-	CIS: 40.89.147.222.

En la realització d’aquest manual la xarxa LAN del PIS 192.168.16.0 es divideix en les següents VLAN, com es mostren en la figura 10.1:
-	Xarxa de les càmeres en la VLAN 17 amb les IP contingudes en 192.168.17.0.
-	Xarxa dels sensors en la VLAN 18 amb les IP contingudes en 192.168.18.0.
-	Xarxa del punt wifi en la VLAN 19 amb les IP contingudes en 192.168.19.0.
## 4. Instal·lació del dispositiu
### 4.1. Registre del SonicWall a MySonicWall
Dins el nostre compte de mysonicwall.com, MySonicWall | My Workspace | Register Products. És necessari tenir el Serial Number i Authenticator Code que trobarem a la caixa original del tallafoc de SonicWall o en l’etiqueta de darrera del dispositiu.

![img](/assets/img/sw2.png)

Fig. 2. Exemple d'etiqueta SonicWall.

Per dur a terme la configuració d’aquest manual únicament es requereix l’activació del dispositiu a MySonicWall. Les llicències de seguretat que s’activen un cop registrat el dispositiu no són necessàries en la realització d’aquest manual.
### 4.2. Connexions del dispositiu
Per poder accedir al dispositiu agafem un cable de xarxa i el connectem, per un extrem a l’ordinador i per l’altre extrem a la interfície física X0 LAN, que està situada darrere del dispositiu. L’embalatge original de SonicWall incorpora aquest cable de xarxa.
 
![img](/assets/img/sw3.png)

Fig. 3. Panell d'interfícies físiques del dispositiu.

El dispositiu SonicWall, per defecte, forma la xarxa 192.168.168.0 i la seva IP és la 192.168.168.168. L’esquema de la xarxa de la qual es parteix inicialment en la configuració del dispositiu SonicWall es mostra en la següent figura 10.3.
 
![img](/assets/img/sw4.png)

Fig. 4. Xarxa inicial per defecte del tallafoc SonicWall.

### 4.3. Accés al dispositiu
Per accedir a la plataforma de gestió web del dispositiu obrim un navegador i entrem a l’adreça IP 192.168.168.168 en la barra de cerca. S’obre una plana web HTTPS que demana les credencials del dispositiu.

Les credencials inicials de SonicWall per defecte són, el nom d’usuari admin i la contrasenya password.

Tret de l’existència d’una connexió a Internet externa, com podria ser Wi-Fi, l’ordinador portàtil connectat al tallafoc serà incapaç de sortir a Internet en aquest moment.
## 5. Configuració del dispositiu
En aquest punt es mostra la configuració essencial per el funcionament de la xarxa.
### 5.1. Configuració d’interfícies
Aquest punt parteix que s’ha pogut establir la connexió HTTPS amb el dispositiu a través d’un navegador.

En la barra superior seleccionem Network i menú esquerra Interfaces. Apareix la següent pàgina de configuració de la xarxa.

En la següent figura 10.5 es mostra la configuració inicial de les interfícies dels dispositius SonicWall. La xarxa interna X0 LAN i la sortida a Internet per DHCP a X1 WAN.
 
![img](/assets/img/sw5.png)

Fig. 5. Configuració inicial predeterminada de les interfícies.

El primer pas és configurar la xarxa X0 LAN. En aquest manual és la 192.168.16.0. Amb el ratolí ens dirigim sobre la línia, esperem un segon i cliquem en el símbol del llapis que apareix.

Escrivim en l’apartat IP Address 192.168.16.1, desactivem la gestió SSH i SNMP. El SonicWall gestionarà la xarxa com si fos l’encaminador.
 
![img](/assets/img/sw6.png)

Fig. 6. Configuració de la interfície LAN.

Cliquem OK.

El dispositiu reinicia la connexió automàticament. Serà necessari desconnectar el cable de xarxa de l’ordinador portàtil per obtenir una nova IP dins la nova xarxa LAN. Automàticament, per tornar-nos a connectar se’ns redirigeix a la IP en el navegador web.

Seguim amb la configuració de la interfície de sortida a Internet, X1 WAN.

Escrivim en l’apartat IP Address 192.168.15.200, seleccionem mode Static i desactivem la gestió SSH i SNMP.
 
![img](/assets/img/sw7.png)

Fig. 7. Configuració de la interfície WAN.

En IP Address posem la IP pública de l’encaminador. Com a Default Gateway posem la primera IP, 192.168.15.1. En DNS Server 1 i 2 posem els servidors de Google, 8.8.8.8 i 8.8.4.4.
### 5.2. Configuració de les VPN
La primera VPN necessària és la que es forma entre el SonicWall i el servidor núvol CIS a Microsoft Azure. En aquest punt es mostra la configuració perquè funcioni la part del SonicWall.

Ens dirigim a Network | IPSec VPN | Rules and Settings i seleccionem Add.
 
![img](/assets/img/sw8.png)

Fig. 8. Pestanya General de la VPN al CIS.

En la pestanya de Proposals. Seleccionem els valors:
IKE (Phase 1) Proposal:
-	Exchange - IKEv2 Mode.
-	DH Group - 2.
-	Encryption - AES-256.
-	Authentication - SHA1.
-	Life Time - 28800.

IKE (Phase 2) Proposal:
-	Protocol - ESP.
-	Encryption - 3DES.
-	Authentication - SHA1.
-	Life Time - 27000.
 
![img](/assets/img/sw9.png)

Fig. 9. Pestanya Proposals de la VPN al CIS.

En la pestanya Advanced. Seleccionem Enable Keep Alive i Do not send trigger Packet during IKE SA negotiation.
 
![img](/assets/img/sw10.png)

Fig. 10. Pestanya Advanced de la creació de la VPN al CIS.

El procés de creació de la VPN pot trigar entre cinc i set minuts.

Per portar un major control de les xarxes dels Punts Intel·ligents de Seguretat es crea una segona VPN entre l’ajuntament i l’estació base per agrupar les xarxes. La finalitat és que els PIS formin part dels ajuntaments.

A continuació es mostra el procés a seguir per aconseguir la VPN entre el dispositiu SonicWall de l’estació base i l’ajuntament.

Necessitem les dues IP públiques principals de les xarxes que formen la xarxa virtual privada.

Les VPN es configuren en els dos dispositius SonicWall que es volen agrupar en la xarxa privada.

Naveguem a Network, IPSec VPN i Rules and Settings. Cliquem Add.

En Policy Type seleccionem Tunnel Interface.
 
![img](/assets/img/sw11.png)

Fig. 11. Pestanya General de la configuració de VPN a l’ajuntament.

En Authentication Method deixem el valor predeterminat IKE Using Preshared Secret.
Escrivim un nom en l’apartat Name.

En IPsec Primary Gateway Name or Address, escrvim l’adreça IP pública de l’ajuntament.

En Shared Secret inventem una clau que compartiran els dispositius tallafocs. Ha de ser la mateixa en els dos dispositius.

En Local IKE ID i Peer IKE ID escullim Firewall Identifier, l’identificador és el número de sèrie del tallafocs i conté dotze dígits . Aquest número de sèrie es pot trobar en la pestanya Home o a MySonicWall.

En la segona pestanya anomenada Proposals deixem els valors predeterminats. En aquesta pestanya els valors han de ser idèntics en els dos tallafocs.
 
![img](/assets/img/sw12.png)

Fig. 12. Pestanya Proposals de la configuració de VPN.

En la pestanya Advanced també es deixen els valors predeterminats.
 
![img](/assets/img/sw13.png)

Fig. 13. Pestanya Advanced de la configuració VPN.

En aquest moment la configuració de la VPN per la part del tallafoc de l’estació base està establerta. Per finalitzar la comunicació és necessari configurar la política de VPN en el dispositiu SonicWall de l’ajuntament canviant la IP pública en l’apartat IPSec Primary Gateway, per la de l’estació base i intercanviant els identificadors dels tallafocs de posició.
La xarxa virtual privada que es forma amb aquesta VPN entre els dispositius SonicWall és simbòlica, només agrupa les xarxes lògicament. El trànsit entre aquestes dues xarxes no està permès. Per permetre el trànsit, s’han de crear les regles d’encaminament.
### 5.3. Configuració de les zones
Per diferenciar i aïllar els dispositius del PIS, es creen una sèrie de zones, per delimitar el PIS.
En l’apartat Object, Zones, Add Zone. Es crea una zona de càmeres. Per totes les zones desactivem Allow Interface Trust i desactivem l’autogeneració de regles.
A la següent figura es mostra la configuració de la zona de les càmeres.
 
![img](/assets/img/sw14.png)

Fig. 14. Creació de la zona CameresIP.

Creem la zona dels sensors, com es mostra en la següent figura, amb el nom Sensors i tipus de seguretat Trusted.
 
![img](/assets/img/sw15.png)

Fig. 15. Creació de la zona Sensors.

Configuració de la zona pública per el punt d’accés WiFi. La zona s’anomena Public_WIFI i té el tipus de seguretat Public.
 
![img](/assets/img/sw16.png)

Fig. 16. Creació de la zona Public_WIFI.

### 5.4. Creació de les VLAN
En el punt anterior s’ha configurat una zona per cada VLAN. Després de la creació de les zones procedim amb la creació de les VLAN del tallafoc.
Les càmeres es troben en la xarxa 192.168.17.0 que constitueix la VLAN 17.
Els sensors es troben en la xarxa 192.168.18.0 que constitueix la VLAN 18.
El punt Wi-Fi es troba en la xarxa 192.168.19.0 que constitueix la VLAN 19.
A Network, Interfaces, anem a Add Interface, Virtual Interface.
 
![img](/assets/img/sw17.png)

Fig. 17. Pestanya de creació de VLAN.

Configuració de la VLAN de les càmeres.
 
![img](/assets/img/sw18.png)

Fig. 18. Creació de la VLAN 17.

Creació de la VLAN dels sensors.
 
![img](/assets/img/sw19.png)

Fig. 19. Creació de la VLAN 18.
 
![img](/assets/img/sw20.png)

Fig. 20. Creació de la VLAN 19.

La xarxa LAN del PIS es troba segmentada com es mostra en la següent figura 10.21.
 
![img](/assets/img/sw21.png)

Fig. 21. Configuració de les tres VLAN.

Procedim amb la gestió de l’adreçament de paquets en els següents punts.
### 5.5. Creació d’adreces i serveis
En SonicWall per gestionar els dispositius és important definir objectes. Existeixen diferents tipus d’objectes, però en aquest punt es configuren els objectes de tipus adreces i serveis.

Per gestionar l’adreçament de paquets es defineixen els següents objectes.
#### 5.5.1. Adreces
En aquest punt es creen els grups d’adreces necessaris per el PIS. Per tenir un major control d’accés i augmentar la seguretat del punt.
En Object | Addreses, Add. Apareix la següent finestra.
 
![img](/assets/img/sw22.png)

Fig. 22. Finestra de creació d'objectes.

En Name escrivim el nom CameraEntorn1, escollim la zona creada en el punt anterior sota el nom CameresIP, seleccionem Host i escrivim la IP 192.168.17.51 de la càmera d’entorn.
 
![img](/assets/img/sw23.png)

Fig. 23. Creació de l'objecte de la càmera d'entorn.

Repetim el mateix procés per definir l’adreça de la càmera ALPR dins del SonicWall. En Name escrivim el nom CameraALPR1, escollim la zona creada en el punt anterior sota el nom CameresIP, seleccionem Host i escrivim la IP 192.168.17.151 de la càmera ALPR.
 
![img](/assets/img/sw24.png)

Fig. 24. Creació de l'objecte de la càmera ALPR.

Creem també la xarxa en la que es troben les càmeres.
 
![img](/assets/img/sw25.png)

Fig. 25. Creació de l'objecte de la xarxa càmeres.

Els sensors es divideixen en una mateixa xarxa, ja que les necessitats de direccionalment són les mateixes per tots els sensors. L’enviament de dades a la IP del broker MQTT i no requereixen de transit d’entrada al PIS.
 
![img](/assets/img/sw26.png)

Fig. 26. Creació de l’objecte de la xarxa dels sensors.

Creació de l’objecte de la xarxa de la zona WIFI.
 
![img](/assets/img/sw27.png)

Fig. 27. Creació de l’objecte de la xarxa WIFI.
 
Creació de l’objecte de la IP pública del CIS.
 
![img](/assets/img/sw28.png)

Fig. 28. Creació de l'objecte de la IP pública del CIS.

L’objecte amb la IP pública del CIS servirà per dirigir el trànsit de dades generat per les càmeres i els sensors només al CIS.
Creació de l’objecte de la xarxa de Microsoft Azure.
 
![img](/assets/img/sw29.png)

Fig. 29. Creació de l'objecte de la xarxa privada del CIS.

#### 5.5.2. Serveis
En aquest apartat de serveis es creen els serveis i els grups de serveis necessaris per la comunicació entre el PIS i el CIS.
Ens dirigim a Object | Services | Service Groups | Add. Afegim els serveis HTTP i HTTPS per la comunicació de les càmeres.
 
![img](/assets/img/sw30.png)

Fig. 30. Creació del grup de serveis pels ports de les càmeres.

Cliquem Save.

Per la creació del servei MQTT, ens dirigim a Service Objects. cliquem Add.

Creem el servei en el port 8883 per la comunicació segura del protocol MQTT.
 
![img](/assets/img/sw31.png)

Fig. 31. Creació del servei MQTT.

Cliquem Save.

Ja tenim creats els serveis necessaris per la comunicació de dades de les càmeres i els sensors del PIS.
### 5.6. Creació de les regles d’accés
Les càmeres i els sensors del PIS només requereixen accés de sortida cap al servidor, no hi ha trànsit d’entrada.
En Policy | Access Rules es defineixen les regles d’accés entre les diferents zones. Si les regles es creen manualment s’obté un major control de la xarxa. Actualment es troben buides.
 
![img](/assets/img/sw32.png)

Fig. 32. Pàgina d'administració d'Access Rules.

#### 5.6.1 Configuració de les càmeres
La VLAN de les càmeres denega tot el transit entrant. Només es permet la sortida del trànsit a la VPN del servidor situat a una xarxa de Microsoft Azure.
Configurem la regla de denegació de tot el trànsit entrant a la zona de les càmeres.
 
![img](/assets/img/sw33.png)

Fig. 33. Access Rule per denegar el trànsit d’entrada a les càmeres.

Creem la mateixa regla per denegar el trànsit d’entrada a les càmeres en la versió IPv6.

Per permetre el trànsit de sortida del PIS en direcció al servidor CIS procedim amb la creació d’una nova regla. Cliquem Add Rule.
En Service seleccionem el grup de serveis HTTP i HTTP. Les càmeres només envien informació a través dels ports 80 HTTP i 443 HTTPS.
La resta de camps a configurar es mostren en la següent figura 34.
 
![img](/assets/img/sw34.png)

Fig. 34. Access Rule per permetre el trànsit de sortida de les càmeres a la VPN.
#### 5.6.2. Configuració dels sensors.
Els sensors són semblants a les càmeres, el trànsit que necessiten va dirigit al broker situat en el CIS. El servei MQTT a través d’encriptació SSL-TLS es troba en el port 8883.
Primer es denega el trànsit cap als sensors.
 
![img](/assets/img/sw35.png)

Fig. 35. Access Rule per denegar el trànsit de sortida de la zona Sensors.

Creem la mateixa regla amb el trànsit IP en la versió IPv6.

Seguim amb la configuració de la regla de sortida del trànsit des de la xarxa dels sensors fins la IP pública del CIS a través de la VPN, per servei MQTT en port 8883 creat anteriorment.

![img](/assets/img/sw36.png)

Fig. 36. Access Rule per permetre el trànsit de sortida de la zona Sensors.

#### 5.6.3. Configuració del punt d’accés Wi-Fi
Per aconseguir la configuració del punt d’accés WiFi, a diferència de les altres zones del PIS, el punt d’accés WiFi requereix de trànsit a totes les destinacions d’Internet per poder proveir els recursos.

Permetre tot el trànsit de Public_WIFI a WAN.
 
![img](/assets/img/sw37.png)

Fig. 37. Access Rule per permetre el trànsit de sortida a Internet des de la zona WIFI.

Afegim una regle per permetre les connexions de LAN a Public_WIFI.
 
![img](/assets/img/sw38.png)

Fig. 38. Access Rule per permetre el trànsit de la LAN a la zona WIFI.

Per evitar possibles vulnerabilitats i millorar la gestió de la xarxa, totes les regles creades en aquest punt també han de ser creades per el mode d’adreçament Ipv6.
Per defecte el tallafoc denega tot el trànsit que no es troba definit en les regles d’accés.

En aquest punt es compta amb les regles d’accés principals per el funcionament del PIS.
### 5.7. Creació de les regles d’encaminament
En aquest punt es configura el tallafoc per encaminar el trànsit de la xarxa. SonicWall permet la funció de configurar l’encaminament de la xarxa, d’aquesta manera s’assegura que tots el trànsit és gestionat per el tallafoc.
#### 5.7.1. Routing de les càmeres IP
Les càmeres només requereixen saber encaminar de sortida si el trànsit es dirigeix cap a la xarxa del servidor localitzat al núvol de Microsoft Azure a través de la VPN.
 
![img](/assets/img/sw39.png)

Fig. 39. Creació de l’encaminament de les càmeres per la VPN del CIS.
#### 5.7.2. Routing dels sensors
Igual que les càmeres, el trànsit dels sensors requereixen encaminament cap a la xarxa del servidor a través de la VPN. Creem la següent regla. Si té com a la xarxa d’Azure, per la interfície VPN i amb origen la xarxa dels sensors, que surti per la VPN establerta.
 
![img](/assets/img/sw40.png)

Fig. 40. Creació de l’encaminament dels sensors per la VPN del CIS.
#### 5.7.3. Routing de l’AP WIFI
Configurem la regla de Routing per encaminar, cap a la sortida d’Internet, el trànsit que prové de la interfície del punt d’accés WIFI VLAN 19.
 
![img](/assets/img/sw41.png)

Fig. 41. Creació de l’encaminament de la VLAN WIFI a Internet.

En aquest punt s’han creat les regles d’encaminament que permeten el funcionament bàsic de la xarxa del PIS.
## 6. Accés a la xarxa remotament
En aquest punt s’exposa el procediment d’accés als dispositius del PIS de manera remota. Aquest procediment es duu a terme si és necessari poder accedir remotament a la xarxa del PIS.

La solució que es proposa en aquest manual conté els següents passos.
-	Creació d’una regla d’accés a la xarxa LAN a través de la zona WAN només per la IP pública des d’on s’accedeix remotament.
-	Creació d’una regla de Routing per permetre el trànsit d’entrada a la VLAN requerida.
-	Creació d’una regla NAT per traduir la IP privada d’origen a una IP permesa en la xarxa del PIS, que coincideixi en el rang de la zona destí.

SonicWall també permet la connexió a través de SSL VPN per aconseguir una connexió remota segura. A través d’una connexió VPN encriptada es proporciona al dispositiu remot una IP dins de la xarxa LAN que permet comunicar-se internament.
