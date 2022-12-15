# Procesverslag

Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door _open_ toe te voegen aan een _details_ element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.

## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

### Auteur:

Kim van Aken

#### Je startniveau:

Blauw

#### Je focus:

Responsive

</details>

## Je website

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

### Je opdracht:

De website die ik responsive ga na-maken is [tele2.nl](https://www.tele2.nl/)

#### Screenshot(s) van de eerste pagina (small screen):

De home pagina:
<img src="readme-images\homepage-breakdown-schets.png" width="375px" alt="de mobiele website van tele.nl, een mobiele abonnement website">

#### Screenshot(s) van de tweede pagina (small screen):

De telefoon optie pagina:
<img src="readme-images\screenshot-abonnement-verlengen-pagina-02.png" width="375px" alt="de abbonnement verlengen pagina">

NOTE: Tele2 heeft sinds het maken van deze screenshots hun website een beetje omgegeooid. Toch is grootendeels de layout nog hetzelfde, sommige elementen zijn anders of verplaatst.

</details>

## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 1e werkgroep</summary>

### Bevindingen

Lijst met je bevindingen die in de test naar voren kwamen:

- De alt tekst bij veel images is niet custom ingevuld.
-
-
-

#### Screenreader

- De screenreader had soms geen goede alt tekst bij images.
- Soms leest hij icoontjes en de tekst erachter dubbel voor.
- engelse tekst wordt in het nederlands uitgesproken. is dus soms niet verstaanbaar.
- De website begint met een "spring naar inhoud koppeling (goed)

#### Muis en Toetsenbord

Opvattingen:

- De hover states zijn een beetje traag, je moet lang wachten (voor mijn gevoel in ieder geval)

Oplossingen:

- Transition sneller maken

#### Motoriek (shocks, elastiekjes)

Opvattingen:

- Footer is moeilijk aan te klikken met de trilmotor.
  <img src="readme-images\footer-tele2.jpg" width="475px" alt="footer van tele2 pagina">
  Oplossingen:
- Tekst in de footer groter.

#### Visueel (brillen, contrast, kleurenblind, dark/light).

Darkmode is er wel, maar niet goed toegepast, zie footer:
<img src="readme-images\darkmode-tele2-footer.jpg" width="475px" alt="footer van tele2 pagina, in darkmode">

Oplossingen:

- Grotere knoppen
- darkmode aanpassen als ik een darkmode wil

Peripheral field loss opvattingen:

- Tekst die kleiner dan de buttons is is erg moeilijk te lezen
- hover states zijn soms niet goed te zien

Oplossing:

- tekst groter maken wanneer het te klein is
- Hover states kleur veranderen

Blur/glare bril opvattingen:

- Met deze bril zijn eigenlijk alleen de titels en H2's leesbaar.

Oplossingen:

- grote tekst mode toevoegen ?

Low contrast opvattingen:

- De website heeft goede contrasten, behalve weer in de hover states.
  <img src="readme-images/contrastbril-tele2-website.jpg" width="375px" alt="De tele2 website zichtbaar door de low contrast bril.">

- Hover states weer moeilijk zichtbaar.

Combined Loss diabetic eye disease opvattingen:

  <img src="readme-images/ik-bril-diabetes.jpg" width="375px" alt="Ik die de tele2 website test met de combined loss eyesight bril.">

- Alles duidelijk te zien

Kleurenblind:

- Alleen bij de 4 kleurenknopjes is de laatste niet duidelijk.
- Contrast is allemaal ok

</details>

## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 2e werkgroep</summary>

### de hele pagina:

  <img src="readme-images/homepage-breakdown-schets.png" width="375px" alt="breakdown van de hele pagina">

### dynamisch deel (bijv menu):

  <img src="readme-images/html-schets-hamburgermenu.png" width="375px" alt="breakdown van een dynamisch deel">

</details>

## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1e voortgang</summary>

### Stand van zaken

Ging goed: Het schrijven van de html.
<img src="readme-images/website-preview-1-html.jpg" width="375px" alt="foto van de website">
<img src="readme-images/code-preview-1-html.jpg" width="375px" alt="foto van de code van de website (html)">

Lastig: het beginnen aan de CSS.
<img src="readme-images/code-preview-1-css.jpg" width="375px" alt="foto van de code van de website (css)">

### Agenda voor meeting

samen met je groepje opstellen

| Kim                                            | Julia                                                                                                                        |
| ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Hoe werkt een animatie bij een hamburger menu? | Hoe kan ik gebruikers door een carousel laten slippen d.m.v. Buttons (of in iedergeval met behulp van een klikbaar element)? |
| ...                                            | Hoe kan ik m’n hamburger menu full-screen tonen? (Via JS een class toevoegen of anders?)                                     |
| ...                                            | Met 3 css style sheets; kan ik de variabele kleuren in 1 sheet zetten en die dan in de andere twee sheets gebruiken?         |

| Tim                                                     |
| ------------------------------------------------------- |
| Hoe kan ik een functioneel schaakbord maken             |
| Hoe zorg ik ervoor dat mijn elements responsive blijven |
| Hoe geef ik de gebruiker een lightmode optie.           |

(Ik heb tim even onderaan gezet omdat de tabel te lang werd en het niet meer deed)

### Verslag van meeting

Uitkomsten van de meeting:

- Wij hebben samen met Sanne handmatig de problemen doorlopen, en uiteindelijk opgeslagen in een codepen: https://codepen.io/shooft/pen/xxzjJeW

</details>

## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2e voortgang</summary>

### Stand van zaken

Dit ging goed: Het schrijven van de html.

& dit was lastig: Het opzetten van de css. De selectoren kunnen nog moeilijk gaan.

### Agenda voor meeting

Wij hadden voor deze meeting geen agenda opgesteld.

| Kim                                          | Julia                                                                                                                                      |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| vragen over het hamburgermenu en sidebarmenu | De pijltjes van de carousel staan in het begin buiten beeld, maar daardoor kan ik naar rechts scrollen over m’n pagina. Hoe los ik dit op? |
| ...                                          | Hoe ziet een juiste html structuur voor een tabel eruit? Of waar kan ik dat vinden?                                                        |
| ...                                          | ...                                                                                                                                        |

| Tim                                     |
| --------------------------------------- |
| Had geen vragen doorgegeven van tevoren |

### Verslag van meeting

hier na afloop snel de uitkomsten van de meeting vastleggen

- Ik heb in de les verder gewerkt aan mijn hamburgermenu met de student assistenten :)

</details>

## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 8e werkgroep</summary>

### Bevindingen

Aaminah ging mijn website testen!

Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):

- Sommige kleine teksten zijn moeilijk te lezen
- De hover-states zijn niet duidelijk genoeg, en ze gaan te sloom. Dit is makkelijk aan te passen.
- De screen reader leest de tekens voor lijstjes ook voor
- Sommige objecten die bij Tele2 een iamge zijn zijn bij mij tekst, wat mijn website beter bruikbaar maakt met een screenreader.

#### Screenreader

Bevindingen:

- de screenreader praat in het engels maar de website is nederlands :(
- hij leest de checkmarks en opsommingstekens ook voor bij lijstjes
- alt tekst doet het goed

Oplossingen:

- Document taal in nederlands zetten bovenin html
- lang="en" toevoegen bij Engelse woorden in een span

#### Motoriek (shocks, elastiekjes)

Vibratie motor / parkinson opvattingen:

- Knopjes groot genoeg
- Linkjes in footer te klein voor parkinson

  <img src="readme-images/aaminah-met-mijn-site-trilmotor.jpg" width="375px" alt="Aaminah die de trilmotor gebruikt tijdens het testen van mijn prototype.">

Afleiding (ballon)

- Website werkt goed :)

#### Muis toetsenbord en kleurtjes

Muis:

- Hover state gaat te langzaam en heeft weinig contrast (overgenomen van originele website)

Toetsenbord:

- slaat de leestekst over (probleem)

  <img src="readme-images/aaminah-mijn-website-tab-gebruiken.jpg" width="375px" alt="Aaminah die het toetsenbord gebruik test op mijn prototype.">

Dark - lightmode:

- Heb ik niet.

#### Visueel (brillen, contrast, kleurenblind, dark/light).

peripheral field loss opvattingen:

- kleine tekst van de voorwaarden bij section 1 is moeilijk te lezen
- hover states zie jij bijna niet bij zwarte button links
- contrast goed leesbaar
- hover kleur links zijn ok, kan duidelijker
- draaiknopjes hebben nog geen hover

Oplossing:

- Knopje voor kleine font groter te maken
- Hover states kleur veranderen

Blur/glare bril opvattingen:

- tekst niet te lezen eerste lijst
- ziet alleen titels

Low contrast opvattingen:

- Alles goed te zien
- Alleen hover states zijn moeilijker te zien

Hemifield loss bril opvattingen:

- Alles goed te zien

Combined Loss diabetic eye disease opvattingen:

- Alles duidelijk te zien

Kleurenblind:

- knopje xiaomi is grijs bij groene kleurenblindheid, dus lijkt disabled
- de rest van de kleurenblind modus geen probleem

</details>

## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3e voortgang</summary>

### Stand van zaken

Dit ging goed:
Dit was lastig:

Ik ben helaas vergeten screenshots te maken van mijn website :(

### Agenda voor meeting

samen met je groepje opstellen

| Kim                                                    | Tim                                            | Julia                 |
| ------------------------------------------------------ | ---------------------------------------------- | --------------------- |
| hamburgermenu animatie werkt niet                      | Had een compliceerde vraag over het schaakspel | geen vragen deze week |
| ik wil de detail en summary een uitklap animatie geven | (niet van tevoren doorgegeven)                 |                       |

### Verslag van meeting

Uitkomsten van de meeting:

- De uitklapanimatie die ik wilde maken voor mijn detail en summary was teveel javascript gedoe, dus Sanne heeft dat mij afgewezen om te doen.
- de javascript zat niet goed aan mijn html gekoppeld (het zat bovenin de pagina) daarom deed mijn animatie het niet. Daar heeft Tim mij bij geholpen.
- Tim had nog een gecompliceerde vragen over de move pool van schaken die ik niet zou weten hoe ik die opnieuw moet noteren... :)

</details>

## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

### Je uitkomst - karakteristiek screenshots:

  <img src="readme-images/website-final-smallpage.png" width="375px" alt="uitkomst opdracht 1 klein scherm">
  <img src="readme-images/website-final-state-2.jpg" width="375px" alt="uitkomst opdracht 1 middel">
  <img src="readme-images/website-final-state-fullscreen.jpg" width="375px" alt="uitkomst opdracht 1 groot fullscreen scherm">
  <img src="readme-images/sidebar-final.png" width="375px" alt="uitkomst opdracht 1 groot fullscreen scherm">

### Dit ging goed/Heb ik geleerd:

De CSS selectoren beter te gebruiken. Ik heb het idee dat ik deze nu veel beter snap en bijna precies weet welke ik moet gebruiken om te selecteren wat ik wil hebben.
Ik heb ook mijn HTML verbeterd en kloppender gemaakt.

Verder is de mobile version van pagina 1 helemaal gelukt en daar ben ik wel trots op.

  <img src="readme-images/website-final-smallpage.png" width="375px" alt="uitkomst opdracht 1 klein scherm">

### Dit was lastig/Is niet gelukt:

Het responsive maken van mijn website. Ik heb een begin gemaakt bij de eerste section, de nav en bij de knoppen, maar ik heb nog niet alels uit kunnen werken.
Ik heb ook pagina 2 niet af kunnen maken door slechte planning, en omdat het sidemenu veel langer duurde om te maken dan ik eerst dacht. Ik heb wel de HTML van pagina 1, maar nog geen css.

  <img src="readme-images/html-pagina-2-final.jpg" width="375px" alt="html pagina 2">
</details>

## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

Ik ben deze lijst vergeten bij te houden tijdens mijn werk, maar al mijn bronnen staan ook in mijn css en html. Dit heb ik wel bijgehouden elke keer dat ik iets had gebruikt of opgezocht.
Deze heb ik ook in de lijst hier ingevoegd. :)
Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg).

1. Hamburger navigation HTML + Javascript: https://codepen.io/shooft/pen/xxzjJeW (van Sanne)
2. Hamburger menu CSS + Javascript: https://codepen.io/shooft/pen/dymRMBZ (van Sanne)
3. Javascript defer: Van Tim
4. Gradient css generator voor de paarse tekst: https://cssgradient.io/
5. Hoe je een checkmark bij een list gebruikt: https://stackoverflow.com/questions/34141950/how-to-use-tick-checkmark-symbol-instead-of-bullets-in-unordered-list
6. Gele driehoek maken (onderkan van section 4): http://apps.eky.hk/css-triangle-generator/
7. Verder had ik nog voor de summary knop in mijn footer een codepen van Sanne gebruikt (rooie draaiende knop) maar ik kan de link niet terug vinden :( .

Tim heeft mij verder ook veel geholpen, dus die is ook bron, ik heb notities gemaakt in de css wat dingen waren wanneer ik het niet snapte. Hij heeft mij bevoorbeeld geholpen met het verschuiven van de nav bij de mediaquerie.

</details>
