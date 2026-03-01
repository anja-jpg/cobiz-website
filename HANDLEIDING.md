# COBIZ Website — Handleiding

## 1. Overzicht: wat is wat?

### GitHub (github.com/anja-jpg/cobiz-website)
**Wat:** De "kluis" waar alle broncode van je website in zit.
**Waarvoor:** Elke wijziging aan de code wordt hier opgeslagen. Het is je backup en je versiebeheer. Als er iets misgaat, kun je altijd terug naar een vorige versie.
**Login:** Je GitHub-account (anja-jpg)

### Vercel (vercel.com)
**Wat:** De hosting van je website. Vercel "bouwt" je code om tot een werkende website en zet die online.
**Waarvoor:** Elke keer als er nieuwe code naar GitHub wordt gepusht, maakt Vercel automatisch een nieuwe versie van je website live.
**Login:** Je Vercel-account (gekoppeld aan je GitHub)

### cobiz-website-rgc2.vercel.app
**Wat:** Het tijdelijke Vercel-adres van je website.
**Waarvoor:** Hierop kun je de website bekijken en testen. Dit adres wordt vervangen zodra je cobiz.be koppelt (zie stap hieronder).

### cobiz-website-rgc2.vercel.app/admin
**Wat:** Het admin-paneel waar je de website beheert.
**Login:** Het wachtwoord dat is ingesteld als ADMIN_PASSWORD in Vercel (onder Settings > Environment Variables).

---

## 2. Wat kun je nu al doen in de admin?

| Pagina | Wat kun je er doen? |
|--------|-------------------|
| **Dashboard** | Overzicht van statistieken |
| **Workshops** | Workshop-datums aanmaken, bewerken, verwijderen |
| **Boekingen** | Workshop-boekingen inzien |
| **Groeirapporten** | Groeirapport-bestellingen inzien |
| **Contacten** | Contactformulier-inzendingen inzien |
| **Groei-Check** | Resultaten van de gezondheidscheck inzien |
| **Teksten** | Alle homepage-teksten aanpassen (titels, beschrijvingen, FAQ, testimonials, prijzen, etc.) |
| **Instellingen** | Foto uploaden (werkt zodra Vercel Blob correct is geconfigureerd) |

---

## 3. cobiz.be koppelen aan Vercel

Om je website bereikbaar te maken via cobiz.be:

### Stap 1: Domein toevoegen in Vercel
1. Ga naar **vercel.com** > je project **cobiz-website**
2. Klik op **Settings** > **Domains**
3. Typ `cobiz.be` en klik **Add**
4. Voeg ook `www.cobiz.be` toe

### Stap 2: DNS instellen bij je domeinregistrar
Vercel toont je welke DNS-records je moet instellen. Ga naar het dashboard van je domeinregistrar (waar je cobiz.be hebt gekocht) en stel in:

| Type | Naam | Waarde |
|------|------|--------|
| A | @ | 76.76.21.21 |
| CNAME | www | cname.vercel-dns.com |

*De exacte waarden staan in Vercel nadat je het domein hebt toegevoegd.*

### Stap 3: Wachten
DNS-wijzigingen kunnen tot 24 uur duren. Vercel regelt automatisch een SSL-certificaat (https).

---

## 4. Blogs/Inzichten toevoegen

Op dit moment zijn de blogartikelen (onder /inzichten) hardcoded in de code. Er is 1 artikel gepubliceerd ("Boekhouder, controller, CFO") en 5 concepten.

### Hoe een blog toevoegen (met Claude Code):
1. Open een nieuwe Claude Code sessie
2. Vraag: "Voeg een nieuw blogartikel toe aan /inzichten met de titel '[jouw titel]' en de volgende tekst: [jouw tekst]"
3. Claude maakt het artikel aan, commit de code, en pusht naar GitHub
4. Vercel bouwt automatisch een nieuwe versie

### Toekomst: blogs via de admin
Het is mogelijk om een blog-editor te bouwen in de admin (net zoals de Teksten-pagina). Dit zou inhouden:
- Een `BlogPost` tabel in de database
- Een admin-pagina om artikelen te schrijven/bewerken
- De /inzichten pagina dynamisch maken

Dit kan in een volgende sessie gebouwd worden.

---

## 5. Toekomstige updates doen

### Optie A: Via Claude Code (aanbevolen voor grotere wijzigingen)
1. Start een nieuwe Claude Code sessie
2. Beschrijf wat je wilt veranderen
3. Claude past de code aan, test de build, en pusht naar GitHub
4. Vercel deploy automatisch

### Optie B: Teksten aanpassen via de admin
1. Ga naar cobiz.be/admin > Teksten
2. Klik op de sectie die je wilt wijzigen
3. Pas de tekst aan en klik Opslaan
4. De wijziging is direct zichtbaar

### Optie C: Kleine code-wijzigingen via GitHub
1. Ga naar github.com/anja-jpg/cobiz-website
2. Navigeer naar het bestand dat je wilt wijzigen
3. Klik op het potlood-icoon om te bewerken
4. Sla op (commit) — Vercel bouwt automatisch

---

## 6. Openstaande punten

### Prioriteit hoog
| Punt | Status | Toelichting |
|------|--------|-------------|
| **cobiz.be koppelen** | Te doen | DNS instellen bij je domeinregistrar (zie stap 3) |
| **Foto-upload (Vercel Blob)** | Bijna klaar | Vercel Blob store is aangemaakt. Controleer of BLOB_READ_WRITE_TOKEN in je Vercel env vars staat |

### Prioriteit middel
| Punt | Status | Toelichting |
|------|--------|-------------|
| **E-mail notificaties** | Nog niet gebouwd | Contactformulier, boekingen en groeirapporten slaan op in de database, maar sturen nog geen e-mails. Kan met Resend, Mailgun of SendGrid |
| **Betaalintegratie (Mollie)** | Nog niet gebouwd | Workshop-boekingen en groeirapport-bestellingen hebben nog geen echte betaallink. Mollie-integratie is voorbereid in de code |
| **Blog-editor in admin** | Nog niet gebouwd | Artikelen kunnen nu alleen via code worden toegevoegd |

### Prioriteit laag
| Punt | Status | Toelichting |
|------|--------|-------------|
| **Teksten andere pagina's** | Nog niet gebouwd | Alleen de homepage-teksten zijn bewerkbaar via admin. Diensten, Over Ons, etc. kunnen later worden toegevoegd |
| **E-mail marketing** | Nog niet gebouwd | Mailchimp/ConvertKit integratie voor nurturing sequences na gezondheidscheck |

---

## 7. Aanbevolen werkwijze

### Voor tekstaanpassingen
Gebruik de **admin** (cobiz.be/admin > Teksten). Geen technische kennis nodig.

### Voor nieuwe features of grotere wijzigingen
Start een **Claude Code sessie** en beschrijf wat je nodig hebt. Voorbeelden:
- "Bouw een blog-editor in de admin"
- "Voeg Mollie-betaling toe aan de workshop-boeking"
- "Maak de Over Ons pagina ook bewerkbaar via de admin"
- "Voeg een nieuw testimonial toe"

### Voor noodgevallen
Als de website down is:
1. Check **vercel.com** > Deployments — staat de laatste deployment op groen?
2. Check **github.com** > is er recent iets gepusht dat een fout kan veroorzaken?
3. In Vercel kun je altijd teruggaan naar een vorige deployment (klik op de 3 puntjes > Promote to Production)

---

## 8. Technische gegevens (voor referentie)

| Item | Waarde |
|------|--------|
| Framework | Next.js 16 |
| Hosting | Vercel |
| Database | PostgreSQL (Neon, eu-central-1) |
| Bestandsopslag | Vercel Blob |
| Code repository | github.com/anja-jpg/cobiz-website |
| Admin URL | /admin (wachtwoord via ADMIN_PASSWORD env var) |
| E-mail bedrijf | info@cobiz.be |
| Telefoon | +32 475 54 49 52 |
