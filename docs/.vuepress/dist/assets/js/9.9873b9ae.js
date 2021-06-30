(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{366:function(e,a,s){"use strict";s.r(a);var i=s(44),r=Object(i.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"manual-d-instal·lacio-sonicwall"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#manual-d-instal·lacio-sonicwall"}},[e._v("#")]),e._v(" Manual d’instal·lació SonicWall")]),e._v(" "),s("p",[e._v("Aquest capítol del document mostra el procés de configuració del dispositiu tallafoc SonicWall que gestiona la xarxa dels Punts de Seguretat Intel·ligents i els punts de càmeres per el servei Controlcat Intelligent Security, o CIS. La finalitat és aconseguir un manual que serveixi de guia per pròximes instal·lacions d’aquestes xarxes.")]),e._v(" "),s("h2",{attrs:{id:"_1-introduccio"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-introduccio"}},[e._v("#")]),e._v(" 1. Introducció")]),e._v(" "),s("h3",{attrs:{id:"_1-1-objecte"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-objecte"}},[e._v("#")]),e._v(" 1.1 Objecte")]),e._v(" "),s("p",[e._v("L’objecte d’aquest document és mostrar el procés de configuració del dispositiu SonicWall que gestiona la xarxa del Punt de Seguretat Intel·ligent (PIS) o els punts de càmeres pel servei Controlcat Intelligent Security (CIS). La finalitat és aconseguir un manual de referència per aconseguir la instal·lació d’aquestes xarxes.")]),e._v(" "),s("h3",{attrs:{id:"_1-2-introduccio"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-introduccio"}},[e._v("#")]),e._v(" 1.2 Introducció")]),e._v(" "),s("p",[e._v("El Punt Intel·ligent de Seguretat forma una xarxa Ethernet. Aquesta xarxa necessita accés a Internet per poder comunicar-se amb el CIS. L’accés a Internet es proveeix a través d’una antena WiMax que connecta amb l’estació base, que és la sortida a Internet.")]),e._v(" "),s("p",[e._v("Les antenes WiMax tenen la funció de connectar punts remots fàcilment a través de connexions sense fils, però no disposen de les funcionalitats d’encaminament, control de ports i de xarxa.")]),e._v(" "),s("p",[e._v("Per evitar que sigui un punt vulnerable és necessari un tallafoc. La funció del tallafoc és evitar accessos d’equips no identificats a la xarxa de les càmeres, controlar els ports i crear les xarxes virtuals privades necessàries. El tallafoc es localitza en la xarxa de l’encaminador de sortida a Internet de l’estació base.")]),e._v(" "),s("p",[e._v("En aquest manual es mostra com configurar un dispositiu SonicWall de sèptima generació per protegir els Punts Intel·ligents de Seguretat en l’entorn de lectura de matrícules i videovigilància del CIS. La configuració que es mostra és la que permet el control de la xarxa per aconseguir un entorn que proporcioni la màxima seguretat.")]),e._v(" "),s("h2",{attrs:{id:"_2-definicio"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-definicio"}},[e._v("#")]),e._v(" 2. Definició")]),e._v(" "),s("p",[e._v("SonicWall és una empresa de ciberseguretat que proveeix múltiples solucions. En aquest manual s’involucren els equips que porten el control i la seguretat de la xarxa, anomenats tallafocs.")]),e._v(" "),s("p",[e._v("Aquest manual usa MySonicWall per activar i controlar el dispositiu SonicWall.\nA continuació es presenten les principals funcionalitats del tallafoc:")]),e._v(" "),s("ul",[s("li",[e._v("Gestió de xarxes.")]),e._v(" "),s("li",[e._v("Controls d’accés a Internet.")]),e._v(" "),s("li",[e._v("Control de ports.")]),e._v(" "),s("li",[e._v("Control de les aplicacions.")]),e._v(" "),s("li",[e._v("Serveis de seguretat.")]),e._v(" "),s("li",[e._v("Gestió d’usuaris remots.")])]),e._v(" "),s("p",[e._v("En aquest manual les funcionalitats que s’utilitzen són les de gestió de xarxes, control d’accés a Internet i control de ports.")]),e._v(" "),s("h2",{attrs:{id:"_3-infraestructura"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-infraestructura"}},[e._v("#")]),e._v(" 3. Infraestructura")]),e._v(" "),s("p",[e._v("En aquest punt es mostra la infraestructura que es gestiona en aquest manual.")]),e._v(" "),s("p",[e._v("L’entorn que s’instal·la compleix l’estructura de client-servidor. El CIS es troba en un servidor al núvol que rep les connexions dels clients. Aquests clients són els dispositius com les càmeres i els sensors, situats en el PIS que fa la funció de client proporcionant informació al servidor CIS.")]),e._v(" "),s("p",[e._v("El PIS es localitza en una ubicació remota i requereix encaminament del trànsit de sortida dels dispositius per arribar al CIS. Per augmentar la seguretat tot el trànsit d’entrada al PIS serà bloquejat.")]),e._v(" "),s("h3",{attrs:{id:"_3-1-esquema-logic-general"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-esquema-logic-general"}},[e._v("#")]),e._v(" 3.1. Esquema lògic general")]),e._v(" "),s("p",[e._v("En aquest punt es mostra l’esquema lògic de la solució. El SonicWall controla les xarxes de les càmeres, els sensors i el punt d’accés WiFi. Es troba en l’estació base des d’on es proveeix l’accés a Internet a la xarxa i des d’on es forma una VPN amb l’ajuntament.")]),e._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/sw1.png",alt:"img"}})]),e._v(" "),s("p",[e._v("Fig. 1. Esquema lògic de les xarxes.")]),e._v(" "),s("p",[e._v("Les IP públiques amb les que es creen les VPN són:")]),e._v(" "),s("ul",[s("li",[e._v("Estació base: 95.120.233.88.")]),e._v(" "),s("li",[e._v("Ajuntament: 80.79.33.45.")]),e._v(" "),s("li",[e._v("CIS: 40.89.147.222.")])]),e._v(" "),s("p",[e._v("En la realització d’aquest manual la xarxa LAN del PIS 192.168.16.0 es divideix en les següents VLAN, com es mostren en la figura 10.1:")]),e._v(" "),s("ul",[s("li",[e._v("Xarxa de les càmeres en la VLAN 17 amb les IP contingudes en 192.168.17.0.")]),e._v(" "),s("li",[e._v("Xarxa dels sensors en la VLAN 18 amb les IP contingudes en 192.168.18.0.")]),e._v(" "),s("li",[e._v("Xarxa del punt wifi en la VLAN 19 amb les IP contingudes en 192.168.19.0.")])]),e._v(" "),s("h2",{attrs:{id:"_4-instal·lacio-del-dispositiu"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-instal·lacio-del-dispositiu"}},[e._v("#")]),e._v(" 4. Instal·lació del dispositiu")]),e._v(" "),s("h3",{attrs:{id:"_4-1-registre-del-sonicwall-a-mysonicwall"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-registre-del-sonicwall-a-mysonicwall"}},[e._v("#")]),e._v(" 4.1. Registre del SonicWall a MySonicWall")]),e._v(" "),s("p",[e._v("Dins el nostre compte de mysonicwall.com, MySonicWall | My Workspace | Register Products. És necessari tenir el Serial Number i Authenticator Code que trobarem a la caixa original del tallafoc de SonicWall o en l’etiqueta de darrera del dispositiu.")]),e._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/sw2.png",alt:"img"}})]),e._v(" "),s("p",[e._v("Fig. 2. Exemple d'etiqueta SonicWall.")]),e._v(" "),s("p",[e._v("Per dur a terme la configuració d’aquest manual únicament es requereix l’activació del dispositiu a MySonicWall. Les llicències de seguretat que s’activen un cop registrat el dispositiu no són necessàries en la realització d’aquest manual.")]),e._v(" "),s("h3",{attrs:{id:"_4-2-connexions-del-dispositiu"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-connexions-del-dispositiu"}},[e._v("#")]),e._v(" 4.2. Connexions del dispositiu")]),e._v(" "),s("p",[e._v("Per poder accedir al dispositiu agafem un cable de xarxa i el connectem, per un extrem a l’ordinador i per l’altre extrem a la interfície física X0 LAN, que està situada darrere del dispositiu. L’embalatge original de SonicWall incorpora aquest cable de xarxa.")]),e._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/sw3.png",alt:"img"}})]),e._v(" "),s("p",[e._v("Fig. 3. Panell d'interfícies físiques del dispositiu.")]),e._v(" "),s("p",[e._v("El dispositiu SonicWall, per defecte, forma la xarxa 192.168.168.0 i la seva IP és la 192.168.168.168. L’esquema de la xarxa de la qual es parteix inicialment en la configuració del dispositiu SonicWall es mostra en la següent figura 10.3.")]),e._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/sw4.png",alt:"img"}})]),e._v(" "),s("p",[e._v("Fig. 4. Xarxa inicial per defecte del tallafoc SonicWall.")]),e._v(" "),s("h3",{attrs:{id:"_4-3-acces-al-dispositiu"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-acces-al-dispositiu"}},[e._v("#")]),e._v(" 4.3. Accés al dispositiu")]),e._v(" "),s("p",[e._v("Per accedir a la plataforma de gestió web del dispositiu obrim un navegador i entrem a l’adreça IP 192.168.168.168 en la barra de cerca. S’obre una plana web HTTPS que demana les credencials del dispositiu.")]),e._v(" "),s("p",[e._v("Les credencials inicials de SonicWall per defecte són, el nom d’usuari admin i la contrasenya password.")]),e._v(" "),s("p",[e._v("Tret de l’existència d’una connexió a Internet externa, com podria ser Wi-Fi, l’ordinador portàtil connectat al tallafoc serà incapaç de sortir a Internet en aquest moment.")]),e._v(" "),s("h2",{attrs:{id:"_5-configuracio-del-dispositiu"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-configuracio-del-dispositiu"}},[e._v("#")]),e._v(" 5. Configuració del dispositiu")]),e._v(" "),s("p",[e._v("En aquest punt es mostra la configuració essencial per el funcionament de la xarxa.")]),e._v(" "),s("h3",{attrs:{id:"_5-1-configuracio-d-interficies"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-configuracio-d-interficies"}},[e._v("#")]),e._v(" 5.1. Configuració d’interfícies")]),e._v(" "),s("p",[e._v("Aquest punt parteix que s’ha pogut establir la connexió HTTPS amb el dispositiu a través d’un navegador.")]),e._v(" "),s("p",[e._v("En la barra superior seleccionem Network i menú esquerra Interfaces. Apareix la següent pàgina de configuració de la xarxa.")]),e._v(" "),s("p",[e._v("En la següent figura 10.5 es mostra la configuració inicial de les interfícies dels dispositius SonicWall. La xarxa interna X0 LAN i la sortida a Internet per DHCP a X1 WAN.")]),e._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/sw5.png",alt:"img"}})]),e._v(" "),s("p",[e._v("Fig. 5. Configuració inicial predeterminada de les interfícies.")]),e._v(" "),s("p",[e._v("El primer pas és configurar la xarxa X0 LAN. En aquest manual és la 192.168.16.0. Amb el ratolí ens dirigim sobre la línia, esperem un segon i cliquem en el símbol del llapis que apareix.")]),e._v(" "),s("p",[e._v("Escrivim en l’apartat IP Address 192.168.16.1, desactivem la gestió SSH i SNMP. El SonicWall gestionarà la xarxa com si fos l’encaminador.")]),e._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/sw6.png",alt:"img"}})]),e._v(" "),s("p",[e._v("Fig. 6. Configuració de la interfície LAN.")]),e._v(" "),s("p",[e._v("Cliquem OK.")]),e._v(" "),s("p",[e._v("El dispositiu reinicia la connexió automàticament. Serà necessari desconnectar el cable de xarxa de l’ordinador portàtil per obtenir una nova IP dins la nova xarxa LAN. Automàticament, per tornar-nos a connectar se’ns redirigeix a la IP en el navegador web.")]),e._v(" "),s("p",[e._v("Seguim amb la configuració de la interfície de sortida a Internet, X1 WAN.")]),e._v(" "),s("p",[e._v("Escrivim en l’apartat IP Address 192.168.15.200, seleccionem mode Static i desactivem la gestió SSH i SNMP.")]),e._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/sw7.png",alt:"img"}})]),e._v(" "),s("p",[e._v("Fig. 7. Configuració de la interfície WAN.")]),e._v(" "),s("p",[e._v("En IP Address posem la IP pública de l’encaminador. Com a Default Gateway posem la primera IP, 192.168.15.1. En DNS Server 1 i 2 posem els servidors de Google, 8.8.8.8 i 8.8.4.4.")]),e._v(" "),s("h3",{attrs:{id:"_5-2-configuracio-de-les-vpn"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-configuracio-de-les-vpn"}},[e._v("#")]),e._v(" 5.2. Configuració de les VPN")]),e._v(" "),s("p",[e._v("La primera VPN necessària és la que es forma entre el SonicWall i el servidor núvol CIS a Microsoft Azure. En aquest punt es mostra la configuració perquè funcioni la part del SonicWall.")]),e._v(" "),s("p",[e._v("Ens dirigim a Network | IPSec VPN | Rules and Settings i seleccionem Add.")]),e._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/sw8.png",alt:"img"}})]),e._v(" "),s("p",[e._v("Fig. 8. Pestanya General de la VPN al CIS.")]),e._v(" "),s("p",[e._v("En la pestanya de Proposals. Seleccionem els valors:\nIKE (Phase 1) Proposal:")]),e._v(" "),s("ul",[s("li",[e._v("Exchange - IKEv2 Mode.")]),e._v(" "),s("li",[e._v("DH Group - 2.")]),e._v(" "),s("li",[e._v("Encryption - AES-256.")]),e._v(" "),s("li",[e._v("Authentication - SHA1.")]),e._v(" "),s("li",[e._v("Life Time - 28800.")])]),e._v(" "),s("p",[e._v("IKE (Phase 2) Proposal:")]),e._v(" "),s("ul",[s("li",[e._v("Protocol - ESP.")]),e._v(" "),s("li",[e._v("Encryption - 3DES.")]),e._v(" "),s("li",[e._v("Authentication - SHA1.")]),e._v(" "),s("li",[e._v("Life Time - 27000.")])]),e._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/sw9.png",alt:"img"}})]),e._v(" "),s("p",[e._v("Fig. 9. Pestanya Proposals de la VPN al CIS.")]),e._v(" "),s("p",[e._v("En la pestanya Advanced. Seleccionem Enable Keep Alive i Do not send trigger Packet during IKE SA negotiation.")]),e._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/sw10.png",alt:"img"}})]),e._v(" "),s("p",[e._v("Fig. 10. Pestanya Advanced de la creació de la VPN al CIS.")]),e._v(" "),s("p",[e._v("El procés de creació de la VPN pot trigar entre cinc i set minuts.")]),e._v(" "),s("p",[e._v("Per portar un major control de les xarxes dels Punts Intel·ligents de Seguretat es crea una segona VPN entre l’ajuntament i l’estació base per agrupar les xarxes. La finalitat és que els PIS formin part dels ajuntaments.")]),e._v(" "),s("p",[e._v("A continuació es mostra el procés a seguir per aconseguir la VPN entre el dispositiu SonicWall de l’estació base i l’ajuntament.")]),e._v(" "),s("p",[e._v("Necessitem les dues IP públiques principals de les xarxes que formen la xarxa virtual privada.")]),e._v(" "),s("p",[e._v("Les VPN es configuren en els dos dispositius SonicWall que es volen agrupar en la xarxa privada.")]),e._v(" "),s("p",[e._v("Naveguem a Network, IPSec VPN i Rules and Settings. Cliquem Add.")]),e._v(" "),s("p",[e._v("En Policy Type seleccionem Tunnel Interface.")]),e._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/sw11.png",alt:"img"}})]),e._v(" "),s("p",[e._v("Fig. 11. Pestanya General de la configuració de VPN a l’ajuntament.")]),e._v(" "),s("p",[e._v("En Authentication Method deixem el valor predeterminat IKE Using Preshared Secret.\nEscrivim un nom en l’apartat Name.")]),e._v(" "),s("p",[e._v("En IPsec Primary Gateway Name or Address, escrvim l’adreça IP pública de l’ajuntament.")]),e._v(" "),s("p",[e._v("En Shared Secret inventem una clau que compartiran els dispositius tallafocs. Ha de ser la mateixa en els dos dispositius.")]),e._v(" "),s("p",[e._v("En Local IKE ID i Peer IKE ID escullim Firewall Identifier, l’identificador és el número de sèrie del tallafocs i conté dotze dígits . Aquest número de sèrie es pot trobar en la pestanya Home o a MySonicWall.")]),e._v(" "),s("p",[e._v("En la segona pestanya anomenada Proposals deixem els valors predeterminats. En aquesta pestanya els valors han de ser idèntics en els dos tallafocs.")]),e._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/sw12.png",alt:"img"}})]),e._v(" "),s("p",[e._v("Fig. 12. Pestanya Proposals de la configuració de VPN.")]),e._v(" "),s("p",[e._v("En la pestanya Advanced també es deixen els valors predeterminats.")]),e._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/sw13.png",alt:"img"}})]),e._v(" "),s("p",[e._v("Fig. 13. Pestanya Advanced de la configuració VPN.")]),e._v(" "),s("p",[e._v("En aquest moment la configuració de la VPN per la part del tallafoc de l’estació base està establerta. Per finalitzar la comunicació és necessari configurar la política de VPN en el dispositiu SonicWall de l’ajuntament canviant la IP pública en l’apartat IPSec Primary Gateway, per la de l’estació base i intercanviant els identificadors dels tallafocs de posició.\nLa xarxa virtual privada que es forma amb aquesta VPN entre els dispositius SonicWall és simbòlica, només agrupa les xarxes lògicament. El trànsit entre aquestes dues xarxes no està permès. Per permetre el trànsit, s’han de crear les regles d’encaminament.")]),e._v(" "),s("h3",{attrs:{id:"_5-3-configuracio-de-les-zones"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-configuracio-de-les-zones"}},[e._v("#")]),e._v(" 5.3. Configuració de les zones")]),e._v(" "),s("p",[e._v("Per diferenciar i aïllar els dispositius del PIS, es creen una sèrie de zones, per delimitar el PIS.\nEn l’apartat Object, Zones, Add Zone. Es crea una zona de càmeres. Per totes les zones desactivem Allow Interface Trust i desactivem l’autogeneració de regles.\nA la següent figura es mostra la configuració de la zona de les càmeres.")]),e._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/sw14.png",alt:"img"}})]),e._v(" "),s("p",[e._v("Fig. 14. Creació de la zona CameresIP.")]),e._v(" "),s("p",[e._v("Creem la zona dels sensors, com es mostra en la següent figura, amb el nom Sensors i tipus de seguretat Trusted.")]),e._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/sw15.png",alt:"img"}})]),e._v(" "),s("p",[e._v("Fig. 15. Creació de la zona Sensors.")]),e._v(" "),s("p",[e._v("Configuració de la zona pública per el punt d’accés WiFi. La zona s’anomena Public_WIFI i té el tipus de seguretat Public.")]),e._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/sw16.png",alt:"img"}})]),e._v(" "),s("p",[e._v("Fig. 16. Creació de la zona Public_WIFI.")]),e._v(" "),s("h3",{attrs:{id:"_5-4-creacio-de-les-vlan"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-creacio-de-les-vlan"}},[e._v("#")]),e._v(" 5.4. Creació de les VLAN")]),e._v(" "),s("p",[e._v("En el punt anterior s’ha configurat una zona per cada VLAN. Després de la creació de les zones procedim amb la creació de les VLAN del tallafoc.\nLes càmeres es troben en la xarxa 192.168.17.0 que constitueix la VLAN 17.\nEls sensors es troben en la xarxa 192.168.18.0 que constitueix la VLAN 18.\nEl punt Wi-Fi es troba en la xarxa 192.168.19.0 que constitueix la VLAN 19.\nA Network, Interfaces, anem a Add Interface, Virtual Interface.")]),e._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/sw17.png",alt:"img"}})]),e._v(" "),s("p",[e._v("Fig. 17. Pestanya de creació de VLAN.")]),e._v(" "),s("p",[e._v("Configuració de la VLAN de les càmeres.")]),e._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/sw18.png",alt:"img"}})]),e._v(" "),s("p",[e._v("Fig. 18. Creació de la VLAN 17.")]),e._v(" "),s("p",[e._v("Creació de la VLAN dels sensors.")]),e._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/sw19.png",alt:"img"}})]),e._v(" "),s("p",[e._v("Fig. 19. Creació de la VLAN 18.")]),e._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/sw20.png",alt:"img"}})]),e._v(" "),s("p",[e._v("Fig. 20. Creació de la VLAN 19.")]),e._v(" "),s("p",[e._v("La xarxa LAN del PIS es troba segmentada com es mostra en la següent figura 10.21.")]),e._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/sw21.png",alt:"img"}})]),e._v(" "),s("p",[e._v("Fig. 21. Configuració de les tres VLAN.")]),e._v(" "),s("p",[e._v("Procedim amb la gestió de l’adreçament de paquets en els següents punts.")]),e._v(" "),s("h3",{attrs:{id:"_5-5-creacio-d-adreces-i-serveis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-5-creacio-d-adreces-i-serveis"}},[e._v("#")]),e._v(" 5.5. Creació d’adreces i serveis")]),e._v(" "),s("p",[e._v("En SonicWall per gestionar els dispositius és important definir objectes. Existeixen diferents tipus d’objectes, però en aquest punt es configuren els objectes de tipus adreces i serveis.")]),e._v(" "),s("p",[e._v("Per gestionar l’adreçament de paquets es defineixen els següents objectes.")]),e._v(" "),s("h4",{attrs:{id:"_5-5-1-adreces"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-5-1-adreces"}},[e._v("#")]),e._v(" 5.5.1. Adreces")]),e._v(" "),s("p",[e._v("En aquest punt es creen els grups d’adreces necessaris per el PIS. Per tenir un major control d’accés i augmentar la seguretat del punt.\nEn Object | Addreses, Add. Apareix la següent finestra.")]),e._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/sw22.png",alt:"img"}})]),e._v(" "),s("p",[e._v("Fig. 22. Finestra de creació d'objectes.")]),e._v(" "),s("p",[e._v("En Name escrivim el nom CameraEntorn1, escollim la zona creada en el punt anterior sota el nom CameresIP, seleccionem Host i escrivim la IP 192.168.17.51 de la càmera d’entorn.")]),e._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/sw23.png",alt:"img"}})]),e._v(" "),s("p",[e._v("Fig. 23. Creació de l'objecte de la càmera d'entorn.")]),e._v(" "),s("p",[e._v("Repetim el mateix procés per definir l’adreça de la càmera ALPR dins del SonicWall. En Name escrivim el nom CameraALPR1, escollim la zona creada en el punt anterior sota el nom CameresIP, seleccionem Host i escrivim la IP 192.168.17.151 de la càmera ALPR.")]),e._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/sw24.png",alt:"img"}})]),e._v(" "),s("p",[e._v("Fig. 24. Creació de l'objecte de la càmera ALPR.")]),e._v(" "),s("p",[e._v("Creem també la xarxa en la que es troben les càmeres.")]),e._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/sw25.png",alt:"img"}})]),e._v(" "),s("p",[e._v("Fig. 25. Creació de l'objecte de la xarxa càmeres.")]),e._v(" "),s("p",[e._v("Els sensors es divideixen en una mateixa xarxa, ja que les necessitats de direccionalment són les mateixes per tots els sensors. L’enviament de dades a la IP del broker MQTT i no requereixen de transit d’entrada al PIS.")]),e._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/sw26.png",alt:"img"}})]),e._v(" "),s("p",[e._v("Fig. 26. Creació de l’objecte de la xarxa dels sensors.")]),e._v(" "),s("p",[e._v("Creació de l’objecte de la xarxa de la zona WIFI.")]),e._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/sw27.png",alt:"img"}})]),e._v(" "),s("p",[e._v("Fig. 27. Creació de l’objecte de la xarxa WIFI.\n \nCreació de l’objecte de la IP pública del CIS.")]),e._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/sw28.png",alt:"img"}})]),e._v(" "),s("p",[e._v("Fig. 28. Creació de l'objecte de la IP pública del CIS.")]),e._v(" "),s("p",[e._v("L’objecte amb la IP pública del CIS servirà per dirigir el trànsit de dades generat per les càmeres i els sensors només al CIS.\nCreació de l’objecte de la xarxa de Microsoft Azure.")]),e._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/sw29.png",alt:"img"}})]),e._v(" "),s("p",[e._v("Fig. 29. Creació de l'objecte de la xarxa privada del CIS.")]),e._v(" "),s("h4",{attrs:{id:"_5-5-2-serveis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-5-2-serveis"}},[e._v("#")]),e._v(" 5.5.2. Serveis")]),e._v(" "),s("p",[e._v("En aquest apartat de serveis es creen els serveis i els grups de serveis necessaris per la comunicació entre el PIS i el CIS.\nEns dirigim a Object | Services | Service Groups | Add. Afegim els serveis HTTP i HTTPS per la comunicació de les càmeres.")]),e._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/sw30.png",alt:"img"}})]),e._v(" "),s("p",[e._v("Fig. 30. Creació del grup de serveis pels ports de les càmeres.")]),e._v(" "),s("p",[e._v("Cliquem Save.")]),e._v(" "),s("p",[e._v("Per la creació del servei MQTT, ens dirigim a Service Objects. cliquem Add.")]),e._v(" "),s("p",[e._v("Creem el servei en el port 8883 per la comunicació segura del protocol MQTT.")]),e._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/sw31.png",alt:"img"}})]),e._v(" "),s("p",[e._v("Fig. 31. Creació del servei MQTT.")]),e._v(" "),s("p",[e._v("Cliquem Save.")]),e._v(" "),s("p",[e._v("Ja tenim creats els serveis necessaris per la comunicació de dades de les càmeres i els sensors del PIS.")]),e._v(" "),s("h3",{attrs:{id:"_5-6-creacio-de-les-regles-d-acces"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-6-creacio-de-les-regles-d-acces"}},[e._v("#")]),e._v(" 5.6. Creació de les regles d’accés")]),e._v(" "),s("p",[e._v("Les càmeres i els sensors del PIS només requereixen accés de sortida cap al servidor, no hi ha trànsit d’entrada.\nEn Policy | Access Rules es defineixen les regles d’accés entre les diferents zones. Si les regles es creen manualment s’obté un major control de la xarxa. Actualment es troben buides.")]),e._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/sw32.png",alt:"img"}})]),e._v(" "),s("p",[e._v("Fig. 32. Pàgina d'administració d'Access Rules.")]),e._v(" "),s("h4",{attrs:{id:"_5-6-1-configuracio-de-les-cameres"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-6-1-configuracio-de-les-cameres"}},[e._v("#")]),e._v(" 5.6.1 Configuració de les càmeres")]),e._v(" "),s("p",[e._v("La VLAN de les càmeres denega tot el transit entrant. Només es permet la sortida del trànsit a la VPN del servidor situat a una xarxa de Microsoft Azure.\nConfigurem la regla de denegació de tot el trànsit entrant a la zona de les càmeres.")]),e._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/sw33.png",alt:"img"}})]),e._v(" "),s("p",[e._v("Fig. 33. Access Rule per denegar el trànsit d’entrada a les càmeres.")]),e._v(" "),s("p",[e._v("Creem la mateixa regla per denegar el trànsit d’entrada a les càmeres en la versió IPv6.")]),e._v(" "),s("p",[e._v("Per permetre el trànsit de sortida del PIS en direcció al servidor CIS procedim amb la creació d’una nova regla. Cliquem Add Rule.\nEn Service seleccionem el grup de serveis HTTP i HTTP. Les càmeres només envien informació a través dels ports 80 HTTP i 443 HTTPS.\nLa resta de camps a configurar es mostren en la següent figura 34.")]),e._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/sw34.png",alt:"img"}})]),e._v(" "),s("p",[e._v("Fig. 34. Access Rule per permetre el trànsit de sortida de les càmeres a la VPN.")]),e._v(" "),s("h4",{attrs:{id:"_5-6-2-configuracio-dels-sensors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-6-2-configuracio-dels-sensors"}},[e._v("#")]),e._v(" 5.6.2. Configuració dels sensors.")]),e._v(" "),s("p",[e._v("Els sensors són semblants a les càmeres, el trànsit que necessiten va dirigit al broker situat en el CIS. El servei MQTT a través d’encriptació SSL-TLS es troba en el port 8883.\nPrimer es denega el trànsit cap als sensors.")]),e._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/sw35.png",alt:"img"}})]),e._v(" "),s("p",[e._v("Fig. 35. Access Rule per denegar el trànsit de sortida de la zona Sensors.")]),e._v(" "),s("p",[e._v("Creem la mateixa regla amb el trànsit IP en la versió IPv6.")]),e._v(" "),s("p",[e._v("Seguim amb la configuració de la regla de sortida del trànsit des de la xarxa dels sensors fins la IP pública del CIS a través de la VPN, per servei MQTT en port 8883 creat anteriorment.")]),e._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/sw36.png",alt:"img"}})]),e._v(" "),s("p",[e._v("Fig. 36. Access Rule per permetre el trànsit de sortida de la zona Sensors.")]),e._v(" "),s("h4",{attrs:{id:"_5-6-3-configuracio-del-punt-d-acces-wi-fi"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-6-3-configuracio-del-punt-d-acces-wi-fi"}},[e._v("#")]),e._v(" 5.6.3. Configuració del punt d’accés Wi-Fi")]),e._v(" "),s("p",[e._v("Per aconseguir la configuració del punt d’accés WiFi, a diferència de les altres zones del PIS, el punt d’accés WiFi requereix de trànsit a totes les destinacions d’Internet per poder proveir els recursos.")]),e._v(" "),s("p",[e._v("Permetre tot el trànsit de Public_WIFI a WAN.")]),e._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/sw37.png",alt:"img"}})]),e._v(" "),s("p",[e._v("Fig. 37. Access Rule per permetre el trànsit de sortida a Internet des de la zona WIFI.")]),e._v(" "),s("p",[e._v("Afegim una regle per permetre les connexions de LAN a Public_WIFI.")]),e._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/sw38.png",alt:"img"}})]),e._v(" "),s("p",[e._v("Fig. 38. Access Rule per permetre el trànsit de la LAN a la zona WIFI.")]),e._v(" "),s("p",[e._v("Per evitar possibles vulnerabilitats i millorar la gestió de la xarxa, totes les regles creades en aquest punt també han de ser creades per el mode d’adreçament Ipv6.\nPer defecte el tallafoc denega tot el trànsit que no es troba definit en les regles d’accés.")]),e._v(" "),s("p",[e._v("En aquest punt es compta amb les regles d’accés principals per el funcionament del PIS.")]),e._v(" "),s("h3",{attrs:{id:"_5-7-creacio-de-les-regles-d-encaminament"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-7-creacio-de-les-regles-d-encaminament"}},[e._v("#")]),e._v(" 5.7. Creació de les regles d’encaminament")]),e._v(" "),s("p",[e._v("En aquest punt es configura el tallafoc per encaminar el trànsit de la xarxa. SonicWall permet la funció de configurar l’encaminament de la xarxa, d’aquesta manera s’assegura que tots el trànsit és gestionat per el tallafoc.")]),e._v(" "),s("h4",{attrs:{id:"_5-7-1-routing-de-les-cameres-ip"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-7-1-routing-de-les-cameres-ip"}},[e._v("#")]),e._v(" 5.7.1. Routing de les càmeres IP")]),e._v(" "),s("p",[e._v("Les càmeres només requereixen saber encaminar de sortida si el trànsit es dirigeix cap a la xarxa del servidor localitzat al núvol de Microsoft Azure a través de la VPN.")]),e._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/sw39.png",alt:"img"}})]),e._v(" "),s("p",[e._v("Fig. 39. Creació de l’encaminament de les càmeres per la VPN del CIS.")]),e._v(" "),s("h4",{attrs:{id:"_5-7-2-routing-dels-sensors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-7-2-routing-dels-sensors"}},[e._v("#")]),e._v(" 5.7.2. Routing dels sensors")]),e._v(" "),s("p",[e._v("Igual que les càmeres, el trànsit dels sensors requereixen encaminament cap a la xarxa del servidor a través de la VPN. Creem la següent regla. Si té com a la xarxa d’Azure, per la interfície VPN i amb origen la xarxa dels sensors, que surti per la VPN establerta.")]),e._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/sw40.png",alt:"img"}})]),e._v(" "),s("p",[e._v("Fig. 40. Creació de l’encaminament dels sensors per la VPN del CIS.")]),e._v(" "),s("h4",{attrs:{id:"_5-7-3-routing-de-l-ap-wifi"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-7-3-routing-de-l-ap-wifi"}},[e._v("#")]),e._v(" 5.7.3. Routing de l’AP WIFI")]),e._v(" "),s("p",[e._v("Configurem la regla de Routing per encaminar, cap a la sortida d’Internet, el trànsit que prové de la interfície del punt d’accés WIFI VLAN 19.")]),e._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/sw41.png",alt:"img"}})]),e._v(" "),s("p",[e._v("Fig. 41. Creació de l’encaminament de la VLAN WIFI a Internet.")]),e._v(" "),s("p",[e._v("En aquest punt s’han creat les regles d’encaminament que permeten el funcionament bàsic de la xarxa del PIS.")]),e._v(" "),s("h2",{attrs:{id:"_6-acces-a-la-xarxa-remotament"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-acces-a-la-xarxa-remotament"}},[e._v("#")]),e._v(" 6. Accés a la xarxa remotament")]),e._v(" "),s("p",[e._v("En aquest punt s’exposa el procediment d’accés als dispositius del PIS de manera remota. Aquest procediment es duu a terme si és necessari poder accedir remotament a la xarxa del PIS.")]),e._v(" "),s("p",[e._v("La solució que es proposa en aquest manual conté els següents passos.")]),e._v(" "),s("ul",[s("li",[e._v("Creació d’una regla d’accés a la xarxa LAN a través de la zona WAN només per la IP pública des d’on s’accedeix remotament.")]),e._v(" "),s("li",[e._v("Creació d’una regla de Routing per permetre el trànsit d’entrada a la VLAN requerida.")]),e._v(" "),s("li",[e._v("Creació d’una regla NAT per traduir la IP privada d’origen a una IP permesa en la xarxa del PIS, que coincideixi en el rang de la zona destí.")])]),e._v(" "),s("p",[e._v("SonicWall també permet la connexió a través de SSL VPN per aconseguir una connexió remota segura. A través d’una connexió VPN encriptada es proporciona al dispositiu remot una IP dins de la xarxa LAN que permet comunicar-se internament.")])])}),[],!1,null,null,null);a.default=r.exports}}]);