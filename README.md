# uge39
tirsdags opgaven er lavet og ligger i tirsdagsmappen
der mangler nogle få opgaver som fx. 4-C) opgaven

onsdagsopgaven
ligger i onsdagsopgavemappen den er fordelt i 3 mapper navngivet efter de 3 opgavedele

opgaven med error handelig har en lidt speciel error handeler på som ikke er blevet inplimenteret til fulde.

torsdags
alle opgaver op til at den skulle lægges op på travis er lavet, der var nogle problemer jeg ikke kunne fixe så det må jeg spørge en lære om i næste uge.

fredagsopgaven:

JavaScript, DOM, AJAX, CORS and SVG

Explain about the Object Model, and why it’s (very) relevant for modern Web-development:

object modeling minder om at programmere object orienteret og når vi arbejder med javascript og java kan vi arbejde med objecter som minder meget om hinanden på tværs af platforme

Explain (using an example of your own choice) about JavaScript events, and Event Bubbling

Hvis vi tager udgangspunkt i opgaven med firkløveren og forstiller os en version der er en smule simplere:
hver kløver blad har et id og alle bladene tilsammen har et overliggende fælles id.

Hvis jeg har sat en .onclick på et af bladene og trykker på det blad,
kan jeg sætte en event handeler på mit overliggende id.
Denne eventhandeler der ligger på det overliggende fælles id kan gribe det pågældende event forde det er boblet op fra det blad der er blevet trykket på. 


Elaborate on how JSON or XML supports communication between subsystems, even when the subsystems are implemented on diﬀerent platforms.

selvom 2 systemer der køre på hver deres platform ikke kan kommunikere sammen fordi de måske snakker 2 forskellige sprog kan JSON bruges til at sende data frem og til mellem de 2 platforme fordi de begge kan læse JSON.

Explain the topic AJAX and how it has changed the way modern web-applications are created

ved hjælp at AJAX kan vi lave dynamiske hjemmesider der kan hente data fra en server uden at skulle reloade hele siden.
uden AJAX ville vi skulle have hele siden brugeren kigger på send fra serveren med ny data men fordi vi dynamisk kan hente den data vi har brug for behøver vi ikke sende hele siden igen for at opdatere noget af indholdet på siden

Explain the Same Origin Policy (for AJAX), and different ways to work around it

Når jeg med AJAX sender et database kald sker det nogle gange fra en anden origin end den min applikation har. f.eks. hvis jeg bruger en 3 parts javascript kode i min applikation. 
I dette tilfælde kan det være kaldet bliver nægtet da de 2 applikationer ikke har samme origin
...Det var ikke den bedste forklaring jeg mangler lidt forståelse på emnet men der er lidt mange opgaver så det når jeg ikke lige i denne omgang desvære.


