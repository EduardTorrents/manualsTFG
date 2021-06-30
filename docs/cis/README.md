# Manual d’instal·lació del servei CIS

El manual d’instal·lació del servei de ControlCat Inteligent Security és extens, però s’afegeix a la memòria per la seva importància en aquest treball. A continuació es presenta el manual  d’instal·lació del CIS.
## 1. Introducció
### 1.1. Objecte
L’objectiu d’aquest punt és proporcionar les passes a seguir per aconseguir una instal·lació del software del CIS amb tots els components necessaris per aconseguir el funcionament de l’aplicació web. La seva funció és ser la guia a seguir i unificar el procés que garanteix el correcte funcionament del CIS.
### 1.2. Introducció
El CIS és un servei de gestió de càmeres web proporcionat mitjançant software. Actualment el CIS es troba en la versió 2.1. El procés d’instal·lació ha anat variant des del principi del desenvolupament. Aquest manual d’instal·lació de l’entorn, finalitzat a maig de 2021, unifica el procés d’implantació del desenvolupament en un sol document. Aquest manual  s’instal·la en una màquina situada en el núvol de Microsoft Azure per garantir l’accés global i segur.
### 1.3. Software que s’instal·la en el manual
En aquest punt es deixa constància del software i les versions específiques requerides amb les quals s’ha testejat i comprovat el funcionament del CIS en la versió actual 2.1 a maig de 2021. Les versions de software que utilitza el CIS en aquest manual es mostren a continuació:
-	Màquina virtual Ubuntu Server LTS 18.04.
-	Apache 2.4.29.
-	MySQL 14.14 Distrib. 5.7.34.
-	PHP 7.4.18.
-	Node.js 16.1.0.
-	NPM 7.11.2.
-	Composer versió 2.0.14.
-	Laravel 5.8.38.
La configuració del CIS en aquest manual es realitza en les versions exactes exposades en aquest punt. La instal·lació de software en diferents versions podria donar problemes de compatibilitat.

## 2. Definició del CIS

ControlCat Intelligent Security, o CIS, és un servei web de gestió de càmeres IP proveït per l’empresa Som Control i Seguretat, una empresa de videovigilància nascuda a partir de Sintelec. El CIS, tot i ser completament funcional, es troba en constant desenvolupament.

Està programat mitjançant PHP, utilitzant el framework de desenvolupament Laravel. El CIS compta amb una base de dades relacional gestionada amb el sistema gestor de bases de dades MySQL.

S’accedeix a través d’una URL mitjançant el protocol web HTTPS. Utilitza un certificat amb autoritat, anomenat CA, per garantir la connexió segura SSL-TLS. El CIS s’instal·la de manera individual i cada instància CIS té un domini propi amb un servidor autònom. Cada desenvolupament CIS compta amb una plataforma d’accés restringit als usuaris prèviament registrats per un administrador.

Les càmeres que controla el CIS han estat desplegades i configurades anteriorment en els llocs clau de la ciutat, com són entrades i sortides o punts problemàtics.

## 3. Infraestructura
### 3.1. Infraestructura general
La infraestructura és el conjunt de components i tecnologies que suporten el CIS. En el desplegament del CIS s’involucren els següents conceptes. El CIS forma una infraestructura LAMP, Linux, Apache, MySQL i PHP.
Els conceptes involucrats són:
-	Màquina virtual (Linux).
-	Servidor web Apache.
-	MySQL.
-   PHP.
-   IP pública.
-	Domini.
-	DNS.
-	Certificat SSL-TLS.

El CIS requereix un ordinador o màquina amb la funció principal d’executar l’aplicació web. Les màquines virtuals permeten delegar les tasques de manteniment, instal·lació del sistema operatiu de les instal·lacions de CIS a l’empresa de tercers. Eviten la necessitat de comptar amb una zona desmilitaritzada i redueix els costos de hardware i manteniment, La xarxa de la màquina virtual es troba aïllada i té una seguretat òptima.

Per instal·lar el servidor CIS necessitem una màquina que estigui sempre en funcionament. Per aconseguir-ho es troben empreses que subministren aquests serveis. Les empreses subministradores d’infraestructura més conegudes són Microsoft Azure, Amazon Web Services o Oracle, entre d’altres.

És recomanable que la màquina sigui de distribució Linux perquè utilitzen poc espai i el servidor web és més eficient en aquestes distribucions. Linux facilita la instal·lació de servidors gràcies al seu gestor de paquets.

La majoria de proveïdors de màquines ofereixen una IP pública estàtica. La IP pública permet tenir una entrada DNS i establir la connexió de manera segura a través del protocol web HTTPS.

El servidor web és capaç de gestionar l’aplicació i la base de dades.

El gestor de base de dades del CIS permet l’emmagatzematge de la informació necessària per gestionar tota l’aplicació web.

El domini és el nom amb el qual s’identifica l’adreça IP de la màquina virtual. És possible accedir a una pàgina web a través de l’adreça IP, però els dominis en faciliten la lectura. 

La relació entre el domini i l’adreça IP la fa el servidor DNS, això fa necessari un servidor DNS.
És necessari un certificat de seguretat SSL-TLS per establir connexions segures a través d’HTTPS. El certificat el proveeix una empresa certificadora CA.
### 3.2. Esquema lògic de la infraestructura
En aquest punt es presenta l’esquema lògic de la infraestructura i les xarxes involucrades en el desenvolupament d’aquest manual del CIS.

![img](/assets/img/Fig1.png)

Fig. 1. Esquema lògic de l'entorn del manual del CIS.
## 4. Màquina virtual en Microsoft Azure
En aquest punt es mostra el procés de desplegament de la màquina virtual per posteriorment instal·lar-hi el CIS i que executi l’aplicació web.

Aquest manual mostra el desplegament de la màquina virtual en Microsoft Azure. La condició prèvia per realitzar el seguiment d’aquest punt és tenir un compte a Microsoft Azure.

A continuació s’exposa el procés d’obtenció d’una màquina virtual en Microsoft Azure per instal·lar el CIS.
### 4.1. Creació de la màquina virtual
El primer pas és entrar al portal de Microsoft Azure. Un cop dins veurem la pàgina principal.

Per instanciar una màquina en Microsoft Azure, s’ha d’anar a Crear un recurso, situat en la barra de Servicios de Azure en la pàgina d’inici.

![img](/assets/img/Fig2.png)

Fig. 2. Botó de creació de recursos.

Apareix una llista amb diferents opcions a crear. Seleccionem el tipus de màquina Ubuntu Server 18.04 LTS.

![img](/assets/img/Fig3.png)

Fig. 3. Màquina virtual Ubuntu Server 18.04 LTS.

S’obra la vista de dades de la màquina i permet la configuració de la creació de la màquina virtual.

![img](/assets/img/Fig4.png)

Fig. 4. Creació d’una màquina virtual.

Gran part dels apartats es troben configurats de manera predeterminada. Confirmem que la subscripció és l’adequada. El camp que segueix és Grupo de recursos. Seleccionem Crear nuevo i li diem RG-Nou-CIS. Cliquem Acceptar.
 
![img](/assets/img/Fig5.png)

Fig. 5. Creació d'un nou Grupo de recursos.

En el següent apartat Nombre de màquina virtual. S’escriu el nom VMNouCIS.
Per la regió escollirem (Europe) Centro de Francia i la imatge de la màquina predeterminada Ubuntu Server 18.04 LTS - gen 1.
En l’apartat Tamaño deixem el valor predeterminat Standard_B2s - 2 vcpu, 4 GiB de memoria.
 
![img](/assets/img/Fig6.png)

Fig. 6. Imatge i tamany de la màquina.

En Tipo de autenticación seleccionem Contraseña. El Nombre de usuario és CISadmin i una contrasenya que compleixi els requisits com per exemple, CISadmin1234@ .
 
![img](/assets/img/Fig7.png)

Fig. 7. Apartat Cuenta de administador.

En Reglas de puerto de entrada se selecciona Permitir los puertos seleccionados i es permeten els ports 22 per SSH, 80 per HTTP i 443 per HTTPS.
 
![img](/assets/img/Fig8.png)

Fig. 8. Ports d'entrada de la màquina.

Es selecciona Siguiente: Discos per passar a la configuració dels discs de la màquina.
En l’apartat Opciones de discos, seleccionem SSD estándar i deixem la resta d’opcions predeterminades.
En Discos de datos seleccionem Crear y adjuntar un nuevo disco. Aquest nou disc servirà per emmagatzemar les imatges del CIS.
 
![img](/assets/img/Fig9.png)

Fig. 9. Pestanya de discs de la màquina.

Un cop dins de la creació del disc, deixem els camps Nombre i Tipo de origen predeterminats. Seleccionem Cambiar el tamaño. En SKU de disco se selecciona SSD estándar i mida de 512 GiB. Cliquem Aceptar. Deixem la resta d’apartats amb els valors predeterminats i tornem a clicar Aceptar.
 
![img](/assets/img/Fig10.png)

Fig. 10. Adjudicació del disc adicional.

Seleccionem Siguiente: Redes. Tindrem una vista similar a la següent.
 
![img](/assets/img/Fig11.png)

Fig. 11. Pestanya de Redes.

Podem deixar els apartats Red Virtual i Subred predeterminats.

En IP pública seleccionem Crear nuevo, en Nombre podem deixar el nom predeterminat, per exemple VMNouCIS-IP. En l’apartat SKU seleccionem Estándar, en Asignación, seleccionem Estática i en Preferencia de enrutamiento, seleccionem Internet. Cliquem Aceptar.
 
![img](/assets/img/Fig12.png)

Fig. 12. Modificació de la IP pública.

Deixem la resta de valors predeterminats i cliquem Siguiente: Administración.
 
![img](/assets/img/Fig13.png)

Fig. 13. Pestanya d'administració de la màquina.

En la pestanya Administración ho deixem tot predeterminat. Seleccionem Siguiente: Opciones avanzadas.
En la pestanya Opciones avanzadas també ho deixem tot predeterminat. Seleccionem Siguiente: Etiquetas.
En la pestanya Etiquetas escrivim NouCIS en Nombre i seleccionem Máquina Virtual en el Recurso. Aquest pas no és obligatori.
 
![img](/assets/img/Fig14.png)

Fig. 14. Pestanya d'etiquetes de la màquina.

Seleccionem Siguiente: Revisar y crear. Per començar el procés de creació de la màquina cliquem Crear. L’aprovisionament de la màquina tarda uns minuts.
### 4.2. Obtenció de la IP pública de la màquina
Per obtenir la IP pública de la màquina, dins del portal de Microsoft Azure ens dirigim al menú anomenat Máquinas virtuales.
 
![img](/assets/img/Fig15.png)

Fig. 15. Menú Máquinas virtuales.

En el mateix menú de màquines podem obtenir la IP pública que ens permetrà establir la connexió més endavant.
 
![img](/assets/img/Fig16.png)

Fig. 16. Direcció IP pública de la màquina.

### 4.3 Tractament dels ports
#### 4.3.1. Obrir el port 7001 en el Firewall d’Azure
Per poder rebre les imatges en directe del CIS és necessari permetre la connexió de les càmeres en el port 7001, que s’assigna més endavant en aquest manual.
En aquest punt es mostra els passos a seguir per obrir aquest port en una màquina desplegada en Microsoft Azure.

Dins la conta on s’ha desplegat la màquina, hem d’entrar en la configuració del Grupo de seguridad de red al qual pertany la màquina.

Per trobar-lo busquem el recurs on s’ha creat la màquina. Ens dirigim i cliquem les tres ratlles horitzontals de la cantonada esquerra superior i seleccionem Grupos de recursos.
 
![img](/assets/img/Fig17.png)

Fig. 17. Posició Grupos de recursos.

Seleccionem el grup on es troba la màquina. En el cas d’aquest manual és RG-Nou-CIS.
 
![img](/assets/img/Fig18.png)

Fig. 18. Selecció del grup de recursos.

Ens apareixen els components del grup. Seleccionem el Grupo de Seguridad de red.
 
![img](/assets/img/Fig19.png)

Fig. 19. Selecció de VMNouCIS-nsg.

Ens apareix la següent finestra. Per afegir la regla, anem a Reglas de Seguridad de entrada.
 
![img](/assets/img/Fig20.png)

Fig. 20. Apartat Reglas de seguridad de entrada.

Cliquem Agregar. Ens apareix una finestra per configurar la regla.
 
![img](/assets/img/Fig21.png)

Fig. 21. Configuració del port 7001.

En Origen seleccionem IP Addresses. En Intervalos de direcciones IP de origen posem la IP pública de l’estació base, en aquest manual 37.46.155.7. D’aquesta IP és d’on prové el trànsit de les càmeres.

Canviem el nom i cliquem Agregar.
#### 4.3.2. Control de la connexió SSH
Durant el desenvolupament, per augmentar la seguretat, es configura la restricció de les IP origen. La única IP origen a les que Azure permet la connexió és la IP pública de la xarxa des d’on es configura el CIS remotament a través del protocol SSH. D’aquesta manera es limita l’accés de dispositius no autoritzats l servidor del CIS.

Un cop es finalitza el manual i s’obté el CIS correctament configurat, es desactiva la connexió SSH per controlar l’accés a la màquina virtual.

Per configurar la restricció de la IP origen, en la pestanya Reglas de Seguridad de entrada seleccionem la regla amb nom SSH.

En Origen seleccionem IP Addresses, en Intervalos de direcciones IP de origen y CIDR posem la IP pública de la xarxa que fa la connexió SSH amb el servidor.
 
![img](/assets/img/Fig22.png)

Fig. 22. Restriccions de IP origen per el protocol SSH.

### 4.4. Creació de la VPN amb SonicWall
Per establir la comunicació de dades entre el servidor de Microsoft Azure i els dispositius remots que envien la informació, és necessari configurar una xarxa virtual privada anomenada VPN.

En aquest manual la VPN es realitza mitjançant un dispositiu tallafoc SonicWall. Per aconseguir la configuració se segueixen els passos exposats en la guia que es troba a https://www.sonicwall.com/support/knowledge-base/how-can-i-configure-a-vpn-between-a-sonicwall-firewall-and-microsoft-azure/170505320011694/.

## 5. Instal·lació del CIS
En aquest punt es mostra el manual d’instal·lació de l’aplicació web en la màquina virtual creada en el punt tres d’aquest document.
A continuació es mostren les precondicions per seguir aquest punt del manual:

-	Instància de màquina virtual Linux disponible amb IP pública.
-	PuTTY.
-	Port 22 pel protocol SSH obert en el servidor.
-	Tenir un domini registrat en una entitat DNS.

### 5.1. Connexió a la màquina virtual
El primer pas és connectar-se a la màquina virtual desplegada a Microsoft Azure on s’ha d’instal·lar el CIS. Per fer-ho, en un ordinador amb accés a Internet obrim el client PuTTY .
 
![img](/assets/img/Fig23.png)

Fig. 23. Eina PuTTY.

Dins de la finestra Host Name (or IP address) escrivim la IP de la màquina, obtinguda en el punt anterior. En aquest manual és 40.89.147.222. I deixem el port predeterminat 22 per SSH. Cliquem Open.
 
![img](/assets/img/Fig24.png)

Fig. 24. Connexió amb la màquina virtual.

S’obra una finestra que ens demana les credencials de la màquina.
 
![img](/assets/img/Fig25.png)

Fig. 25. Credencials de l’usuari de la màquina.

Escrivim el nom d’usuari de l’administrador de la màquina CISadmin i polsem Enter.
 
![img](/assets/img/Fig26.png)

Fig. 26. Contrasenya per establir la connexió.

Ens demana la contrasenya. Escrivim CISadmin1234@ i polsem Enter.
 
![img](/assets/img/Fig27.png)

Fig. 27. Connexió satisfactòria a la màquina.

### 5.2. Instal·lació d’Apache
Abans de començar la instal·lació actualitzem el gestor de paquets de Linux apt-get mitjançant l’execució de la línia sudo apt-get update.
 
![img](/assets/img/Fig28.png)

Fig. 28. Execució de la comanda sudo apt-get update.

Per poder instal·lar la versió 7.4 de PHP executem sudo add-apt-repository ppa:ondrej/php i premem Enter.
 
![img](/assets/img/Fig29.png)

Fig. 29. Execució de sudo add-apt-repository ppa:ondrej/php.

Comencem la instal·lació dels paquets d’apache, php, nodejs i el gestor de bases de dades MySQL. Executem la comanda sudo apt install mysql-server git curl wget unzip nodejs npm apache2 vim zip php7.4-common php7.4-cli php7.4-gd php7.4-mysql php7.4-curl php7.4-intl php7.4-mbstring php7.4-bcmath php7.4-imap php7.4-xml php7.4-zip phpmyadmin libapache2-mod-php7.4 php7.4.

En el diàleg de confirmació premem Y i Enter. Ens apareix la següent interfície gràfica.
 
![img](/assets/img/Fig30.png)

Fig. 30. Inici de la configuració de phpMyAdmin.

Deixem la selecció predeterminada d’apache2 i premem Enter.

Després d’instal·lar automàticament els paquets requerits, apareix la següent finestra.
 
![img](/assets/img/Fig31.png)

Fig. 31. Configuració inicial de la base de dades.

Utilitzarem dbconfig-common per configurar la base de dades. Sobre Yes premem Enter.

La següent finestra requereix una contrasenya a phpMyAdmin per registrar-se a la base de dades.
 
![img](/assets/img/Fig32.png)

Fig. 32. Configuració de la contrasenya de la base de dades.

Escrivim la contrasenya, per exemple, CISMyAdmin  i premem Enter.

Un cop acaba la instal·lació de tots els paquets d’apache, i de la base de dades, executem les línies sudo a2enmod rewrite i sudo systemctl restart apache2. La finalitat d’a2enmod és habilitar que el servidor web Apache pugui modificar les URL de l’aplicació web.
 
![img](/assets/img/Fig33.png)

Fig. 33. Execució de comandes per la configuració d'apache.

### 5.3. Creació dels directoris del projecte web
Aquest punt té com a objectiu crear els directoris necessaris per posar en marxa el projecte web. El directori es troba a /var/www/html que és on Apache treballa amb. Per posar en marxa el projecte executem les següents línies.

sudo mkdir -p /var/www/html/controlcat/

sudo mkdir -p /var/www/html/controlcat/public

sudo mkdir -p /var/www/html/controlcat/storage
 
![img](/assets/img/Fig34.png)

Fig. 34. Creació dels directoris del projecte.

mkdir per crear el directori controlcat i dins d’aquest, els directoris public i storage.

### 5.4. Configuració del DNS en Apache
Crearem el fitxer per configurar el servidor DNS amb l’editor de text nano. Executem la comanda sudo nano /etc/apache2/sites-available/controlcat.conf.

Escrivim el següent text.

``` js
<VirtualHost *:80>

ServerAdmin webmaster@your_domain

DocumentRoot /var/www/html/controlcat/public
ServerName your_domain

<Directory />
Options FollowSymLinks
AllowOverride None
</Directory>
<Directory /var/www/html/controlcat>
AllowOverride All
</Directory>

ErrorLog ${APACHE_LOG_DIR}/error.log
CustomLog ${APACHE_LOG_DIR}/access.log combined

</VirtualHost>
```
 
![img](/assets/img/Fig35.png)

Fig. 35. Configuració del DNS en apache.

Per guardar i sortir de l’editor nano, premem Control + X, polsem Y i Enter.

Seguim la instal·lació executant les següents línies.

sudo a2ensite controlcat.conf

sudo systemctl reload apache2
 
![img](/assets/img/Fig36.png)

Fig. 36. Configuració del DNS en apache.

a2ensite per habilitar el lloc web, encara que en aquest punt es troba sense contingut.

### 5.5. Configuració del repositori
Continuem la instal·lació del CIS amb la implementació del GIT i instal·lació de l’aplicació.
L’aplicació s’extreu d’un repositori de GIT. S’ha de vincular amb el projecte. Per fer-ho executem:

cd /var/www/html/controlcat/

sudo git init

sudo git remote add origin https://qualitapps.visualstudio.com/_git/ControlCat

sudo git pull origin master
 
![img](/assets/img/Fig37.png)

Fig. 37. Inicialització del GIT.

Un cop executem l’última ordre, ens demana les credencials de l’usuari per extreure la informació. En Username posem el nom d’usuari, gitUser , premem Enter i en la Password posem el token de la contrasenya.

Aquest token de contrasenya caduca en un any si no és utilitzat en aquest període de temps.

### 5.6. Instal·lació de Composer
Seguim el procés instal·lant el gestor de paquets i dependències de PHP anomenat composer. Ens situem al directori /home de l’usuari que fa la instal·lació, en aquest manual l’usuari és CISadmin, per fer-ho executem les següents línies.

cd /home/CISadmin

sudo curl -sS https://getcomposer.org/installer | php
 
![img](/assets/img/Fig38.png)

Fig. 38. Instal·lador del Composer de PHP.

Tot seguit executem les següents línies.
sudo mv composer.phar /usr/local/bin/composer
sudo chmod +x /usr/local/bin/composer
 
![img](/assets/img/Fig39.png)

Fig. 39. Enviem composer al directori composer i es fa executable.

mv per moure el fitxer composer.phar al directori /usr/local/bin/composer.

chmod per fer executable el fitxer composer.

Com s’ha configurat en el punt anterior 5.3 el directori controlcat conté el projecte web. Es troba en /var/www/html/controlcat i compta amb tots els recursos per gestionar l’entorn com el framework de Laravel extrets del repositori de GIT.

Seguim amb la instal·lació de Composer, per instal·lar-lo necessitem canviar els permisos de l’usuari actual amb el qual estem treballant perquè coincideixin amb els requerits per gestionar el projecte. Executem les línies:

sudo usermod -a -G www-data `whoami`

sudo chown -R www-data:www-data /var/www/html

sudo chmod -R 774 /var/www/html
 
![img](/assets/img/Fig40.png)

Fig. 40. Actualització dels permisos del projecte.

chown per canviar el propietari i el grup del directori controlcat a www-data, necessari perquè apache només pot treballar amb els directoris que pertanyen a aquest grup.
chmod per modificar els permisos del projecte web.

Per aplicar el canvi de grup és necessari reiniciar l’usuari, per tant, escrivim logout i tornem a establir la connexió SSH, en el cas d’aquest manual, tornem a obrir la connexió en l’usuari CISadmin amb PuTTY.

Un cop dins de la connexió SSH de nou, ens situem al directori controlcat, per situar-nos utilitzem cd /var/www/html/controlcat i executem les línies:

composer update

composer install
 
![img](/assets/img/Fig41.png)

Fig. 41. Execució de composer install.

Si en aquest punt les comandes composer update i composer install donen error es troba la possibilitat que sigui perquè la versió de PHP és major o igual a 8. Per saber-la executem la comanda php -v. Per solucionar el problema s’ha de seguir el procés d’instal·lació de la versió anterior 7.4. Executem les següents línies.

sudo apt-get update

sudo apt-get install php7.4

sudo apt-get install php7.4-cli php7.4-common php7.4-json php7.4-opcache php7.4-mysql php7.4-mbstring  php7.4-zip php7.4-fpm php7.4-intl php7.4-simplexml

sudo a2dismod php8.0

sudo a2enmod php7.4

sudo service apache2 restart

sudo update-alternatives --set php /usr/bin/php7.4

sudo update-alternatives --set phar /usr/bin/phar7.4

sudo update-alternatives --set phar.phar /usr/bin/phar.phar7.4

Comprovem la versió php -v, si és 7.4.*, tornem a executar les comandes composer update i composer install.
### 5.7. Instal·lació de node.js
Per començar la instal·lació de Node.js, primer confirmem que ens trobem al directori controlcat, per arribar executem la comanda cd /var/www/html/controlcat/. Si ja hi som, executem la comanda curl -fsSL https://deb.nodesource.com/setup_current.x | sudo -E bash -.
 
![img](/assets/img/Fig42.png)

Fig. 42. Script d’obtenció de node.js.

Tot seguit executem sudo apt-get install -y nodejs.
 
![img](/assets/img/Fig43.png)

Fig. 43. Script d'instal·lació de node.js.

Continuem amb l’execució de la línia sudo npm install
 
![img](/assets/img/Fig44.png)

Fig. 44. Script d'instal·lació de npm.

És recomanable, per reparar vulnerabilitats, executar sudo npm audit fix.

### 5.8. Configuració de la BBDD
En la instal·lació de la màquina hem configurat el gestor de bases de dades MySQL en la màquina virtual, a continuació en aquest punt es creen les taules que el CIS requereix per funcionar.

Per la configuració de la base de dades que es durà a terme en aquest punt és necessària la instal·lació de l’eina MySQL Workbench.
#### 5.8.1. Instal·lació de MySQL Workbench
Ens descarreguem l’instal·lador des de la pàgina oficial de MySQL i l’executem.
 
![img](/assets/img/Fig45.png)

Fig. 45. Setup de MySQL Workbench.

Premem Next, Next i Install, si en aquest punt l’instal·lador pot demanar permisos, els acceptarem. Premem Finish.
 
#### 5.8.2. Afegir usuari administrador de la BBDD
Afegim un nou usuari amb permisos d’administrador que ens permetrà accedir a la base de dades per configurar-la. Aquest usuari serà usat més endavant per Laravel de manera interna per gestionar l’aplicació.
Executem les següents línies.
sudo mysql
 
![img](/assets/img/Fig46.png)

Fig. 46. Consola de MySQL.

CREATE USER ‘CISadminBBDD’@’%’ IDENTIFIED BY ‘password’;
GRANT ALL PRIVILEGES ON *.* TO ‘CISadminBBDD’@’%’;
FLUSH PRIVILEGES;
En aquest manual es crea l’usuari amb nom CISadminBBDD i se li atorguen privilegis.
#### 5.8.3. Connexió a la base de dades remota
Per seguir aquest punt és necessari comptar amb el programa MySQL Workbench instal·lat en el dispositiu físic.
Obrim l’entorn de gestió de BBDD. Per establir la connexió amb la BBDD del servidor, seleccionem el símbol de ‘+’.
 
![img](/assets/img/Fig47.png)

Fig. 47. Afegir connexió a BBDD MySQL.

Ens apareix la següent pestanya de configuració de connexió.
 
![img](/assets/img/Fig48.png)

Fig. 48. Finestra de creació de connexió MySQL.

En l’apartat Connection Name escrivim el nom de la connexió que volem crear, per exemple ManualCIS.
En Connection Method seleccionem Standard TCP/IP over SSH.
 
![img](/assets/img/Fig49.png)

Fig. 49. Nom i mètode de la connexió.

Omplim les credencials de la màquina, en SSH Hostname posem la IP pública, 40.89.147.222, o el domini de la màquina softwarecis.controlcat.cat, i al final el port 22. En SSH Username posem el nom d’usuari, en aquest cas CISadmin. El Hostname i Server Port són 127.0.0.1 i 3306. En aquest manual el Username de la BBDD és CISadmin.
 
![img](/assets/img/Fig50.png)

Fig. 50. Configuració de les credencials.

Quan finalitzem d’introduir les contrasenyes, cliquem OK. La connexió ens apareix sota MySQL Connections, la seleccionem per entrar a la vista de les BBDD en la màquina.
 
![img](/assets/img/Fig51.png)

Fig. 51. Accés a la connexió MySQL establerta.

#### 5.8.4. Desplegament de taules en la BBDD
El CIS requereix una sèrie de taules en funcionament per emmagatzemar la informació necessària per fer funcionar el lloc web i gestionar les dades que arriben dels diferents punts de càmeres.
Per seguir aquest punt serà necessari comptar amb els fitxers que contenen les dades que omplen les taules de la base de dades.
Ens situem dins de la connexió establerta en el punt anterior. Ens dirigim a la pestanya Server, seleccionem Data Import.
 
![img](/assets/img/Fig52.png)

Fig. 52. Accés a la funció Data Import.

Ens trobem en la pestanya de Data Import.
 
![img](/assets/img/Fig53.png)

Fig. 53. Vista de les funcions de Data Import.

En la secció Import Options, seleccionem el segon punt Import from Self-Contained File.
Abans de començar a importar les dades necessitem crear l’esquema, premem el botó New...
 
![img](/assets/img/Fig54.png)

Fig. 54. Botó New en Data Import.

En la pestanya que ens apareix escrivim Live, que és el nom que el CIS té configurat en el fitxer .env en l’apartat DB_Database.
Quan tinguem l’esquema creat necessitem importar les taules necessàries a la nova BBDD Live a través del buscador de fitxers. Premem els tres punts marcats en la següent figura 8.55.
 
![img](/assets/img/Fig55.png)

Fig. 55. Selecció dels fitxers a importar.

Un cop haguem configurat aquests dos punts cliquem Start Import.
 
![img](/assets/img/Fig56.png)

Fig. 56. Posició del botó Start Import.

Comença la importació i apareix la nova BBDD en Schemas. Per veure-la, ens dirigim al requadre Schemas, cliquem el botó dret del ratolí i seleccionem Refresh All.
 
![img](/assets/img/Fig57.png)

Fig. 57. Resultat del procés d'importació.

Si despleguem aquesta base de dades, veiem que dins de Live s’han creat totes les taules de manera correcta.
#### 5.8.5. Introducció de les dades en la BBDD
Ara seguim el procés d’introducció de les dades d’aquestes taules. Per fer-ho és necessari seguir l’ordre natural de les taules. Aquest ordre és rols, users, configuraciones, paises, configurations tipoavisos, tipolistas.

Comencem per la taula rols. Per afegir les dades des d’un fitxer CSV cliquem la taula amb el botó dret i seleccionem Table Data Import Wizard.
 
![img](/assets/img/Fig58.png)

Fig. 58. Table Data Import Wizard.

Ens apareix una finestra on podem escollir un fitxer CSV o JSON per importar les dades. En el cas de rols tenim un fitxer CSV. Cliquem Browse... i seleccionem de dins dels fitxers de l’ordinador local el fitxer per importar els rols. Un cop el tinguem seleccionat premem Next.
 
![img](/assets/img/Fig59.png)

Fig. 59. Important fitxer CSV.

En les següents pestanyes deixem els valors predeterminats i seleccionem Next tres vegades. Quan acabi la tasca seleccionem Next per última vegada. Es mostren la quantitat de línies que s’han afegit a MySQL i per finalitzar premem Finish.

Per importar la taula users, com és un fitxer SQL utilitzem l’eina Data Import. Ens dirigim a Server, Data Import. En l’apartat Import from Self-Contained File seleccionem el fitxer SQL que conté els usuaris a introduir. Com ja tenim la taula Live creada, la seleccionem dins l’apartat Default Target Schema. Cliquem Start Import.

Repetim el procés exposat en aquest punt per completar la introducció de les dades de les taules 
### 5.9. Configuració de l’aplicació web amb Laravel
L’aplicació web es configura mitjançant un fitxer anomenat .env. Aquest fitxer 
Copiem el fitxer .env.example en el nou fitxer .env. En el fitxer d’exemple trobem les pautes del que el fitxer .env ha de configurar per Laravel. Executem la següent línia per crear el fitxer.

sudo cp .env.example .env
 
![img](/assets/img/Fig60.png)

Fig. 60. Creació del fitxer de configuració .env.

Editem el fitxer de configuració creat anteriorment amb la comanda sudo nano .env. Aquest fitxer ha de tenir la configuració del nostre desenvolupament.
 
![img](/assets/img/Fig61.png)

Fig. 61. Execució de l'editor nano.

En aquest punt ja tenim l’aplicació clonada mitjançant GIT i acabem de crear el fitxer .env. Abans de configurar aquest fitxer executem la següent línia per crear la clau localitzada en el fitxer .env sota el nom APP_KEY.

sudo php artisan key:generate
 
![img](/assets/img/Fig62.png)

Fig. 62. Execució de php artisan key:generate.

Per vincular el CIS amb el disc públic executem la següent línia.
sudo php artisan storage:link
 
![img](/assets/img/Fig63.png)

Fig. 63. Instal·lació Laravel, execució de php artisan storage:link.
 
![img](/assets/img/Fig64.png)

Fig. 64. Fitxer .env.

Les cinc primeres línies del fitxer .env configuren l’aplicació web, són les que comencen amb el prefix APP. La configuració que estableixen aquestes línies és:
-	Nom de l’aplicació CIS - Controlcat Intelligent Security
-	Entorn de producció
-	Clau d’encriptació
-	Mode debug desactivat
-	Adreça URL de l’aplicació

Les línies amb el prefix DB configuren la BBDD. La configuració que s’estableix és:
-	Nom de la BBDD: Live
-	Host: 127.0.0.1
-	Port: 3306
-	Usuari CISadmin
-	Contrasenya de l’usuari

### 5.10. Preparació de la navegació encriptada SSL
Per augmentar el nivell de seguretat del lloc web, és necessari oferir la navegació a través del protocol HTTPS, per això és necessari comptar amb la IP pública, un domini i un certificat TLS proveït per una entitat certificadora.

En aquest manual s’utilitza Certbot, que utilitza l’entitat certificadora Let’s Encrypt.

Les passes per posar en marxa les connexions SSL es mostren a continuació.

sudo add-apt-repository ppa:certbot/certbot
 
![img](/assets/img/Fig65.png)

Fig. 65. Addició del repositori.

sudo apt install python-certbot-apache
 
![img](/assets/img/Fig66.png)

Fig. 66. Instal·lació de certbot.

sudo systemctl reload apache2
 
![img](/assets/img/Fig67.png)

Fig. 67. Reinici d'apache.

sudo certbot –apache -d softwarecis.controlcat.cat

En l’última línia l’entitat certificadora Let’s Encrypt ens demana de posar una adreça de correu, que és opcional. Tot seguit, quan ens surtin els diàlegs haurem de prémer, d’una en una les tecles A, Enter, N, Enter i finalment, el número 2 i Enter.
 
![img](/assets/img/Fig68.png)

Fig. 68. Configuració certbot.
### 5.11. Configuració del disc d’imatges
Aquest punt del manual pretén mostrar les passes a seguir per configurar el disc d’emmagatzematge de les imatges que s’envien al CIS.

El procés d’instal·lació d’un disc en una màquina és independent a la capacitat del disc. En aquest manual el disc d’emmagatzematge que es configura és de 4 GiB.
Per començar és necessari localitzar el disc executant les paraules clau sudo fdisk -l. Aquesta ordre permet comprovar l’existència del disc.
 
![img](/assets/img/Fig69.png)

Fig. 69. Comprovació de la identificació del disc.

El disc es troba a /dev/sdc . Per tant, escrivim la línia sudo fdisk /dev/sdc.
 
![img](/assets/img/Fig70.png)

Fig. 70. Accés a la configuració del disc.

Demana que posem caràcters. Premem la lletra n i Enter. Els següents valors els deixem per defecte polsant Enter quatre vegades. Finalment confirmem els canvis introduint la lletra w i prement Enter.
 
![img](/assets/img/Fig71.png)

Fig. 71. Paràmetres de configuració del disc.

S’ha creat la partició /dev/sdc1. Formatem el disc en format .ext4 amb la comanda sudo mkfs.ext4 /dev/sdc1.
 
![img](/assets/img/Fig72.png)

Fig. 72. Ordre de format de disc.

Continuem amb el muntatge del disc en el directori. Creem el directori CISImatges dins del directori principal /. Executant sudo mkdir -p /CISImatges.
 
![img](/assets/img/Fig73.png)

Fig. 73. Creació del directori CISImatges.

Muntem el disc amb la comanda sudo mount /dev/sdc1 /CISImatges.
 
![img](/assets/img/Fig74.png)

Fig. 74. Muntatge del disc.

Finalment canviem el propietari i el grup del directori perquè l’aplicació d’apache hi pugui accedir. Executem sudo chown -R www-data:www-data /CISImatges.
 
![img](/assets/img/Fig75.png)

Fig. 75. Canvi de propietari del directori CISImatges.

Finalment, perquè el muntatge del disc en el directori sigui definitiu afegim en el fitxer fstab, situat a /etc, el directori on es realitza el muntatge del disc amb la UUID proveïda. Executem les següents línies.

sudo blkid /dev/sdc1
 
![img](/assets/img/Fig76.png)

Fig. 76. Identificació de l'UUID del disc d'imatges.

sudo nano /etc/fstab

Afegim la següent línia en el fitxer fstab.

UUID=5226926b-0f14-48ac-adc5-4339c17d01a6    /CISImatges   ext4   defaults   0 0
 
![img](/assets/img/Fig77.png)

Fig. 77. Addició de la línia en el fitxer fstab.

blkid serveix per descobrir la UUID del disc per poder identificar-lo. La UUID i el directori del muntatge varia en funció de les necessitats de cada instal·lació.

Finalment per confirmar el canvi de configuració en el disc executem la següent línia.

sudo systemctl daemon-reload
## 6. Configuració final de la base de dades
Per finalitzar la configuració de la base de dades s’executen una sèrie de comandes. Es mostren a continuació en aquest punt.

### 6.1. Actualització final de la BBDD
Executem cd /var/www/html/controlcat. Actualitzem el composer amb la instrucció composer update.
 
![img](/assets/img/Fig78.png)

Fig. 78. Execució de l'ordre composer update.

Executem les següents línies.

sudo php artisan optimize:clear
 
![img](/assets/img/Fig79.png)

Fig. 79. Instal·lació Laravel, execució de php artisan optimize.

sudo php artisan config:clear
 
![img](/assets/img/Fig80.png)

Fig. 80. Instal·lació Laravel, execució de php artisan config.

sudo php artisan cache:clear
 
![img](/assets/img/Fig81.png)

Fig. 81. Instal·lació Laravel, execució de php artisan cache.

sudo php artisan view:clear
 
![img](/assets/img/Fig82.png)

Fig. 82.Instal·lació Laravel, execució de php artisan view.

sudo php artisan route:clear
 
![img](/assets/img/Fig83.png)

Fig. 83. Instal·lació Laravel, execució de php artisan route.


Tornem a canviar el propietari i grup dels fitxers i directoris del projecte a www-data.
sudo chown -R www-data:www-data /var/www/html/controlcat
 
![img](/assets/img/Fig84.png)

Fig. 84. Canvi de propietari i grup del projecte html.

Canviem els permisos d’escriptura pel propietari i el grup del fitxer amb l’execució de la següent línia.

sudo chmod -R 774 /var/www/html/controlcat/vendor

Executem sudo php artisan migrate per afegir possibles implementacions pendents de nous desenvolupaments.
 
![img](/assets/img/Fig85.png)

Fig. 85. Execució de php artisan migrate.

Per afegir qualsevol nou valor en alguna de les taules de la base de dades executem la següent línia.
sudo php artisan db:seed
 
![img](/assets/img/Fig86.png)

Fig. 86. Execució dels seeders.

Els Seeders, són fitxers amb dades addicionals per la base de dades, requereixen les taules a les quals fan referència. En cas que les taules no s’hagin generat de manera correcta, no serà possible executar els Seeders.

sudo service apache2 restart

Amb aquest reinici final del servei Apache, l’aplicació web es troba en funcionament. 
