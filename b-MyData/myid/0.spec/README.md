# myID — Personal Documents Wallet · Spec

> Mixture of Google Wallet + Samsung Pass + EU Digital Identity Wallet (EUDI) + personal-documents DB + due-diligence pack for an European person.

## Vision

A **declarative, data-driven personal wallet** that aggregates every document a European person collects across their life — from high-school diplomas to passports, EHIC, driver's licences (car/motorcycle/boat/aviation), bank IBANs, mortgages, credit reports, tax returns, police clearance certificates, sanctions/PEP screenings, and digital identity tokens — and presents them as scannable wallet cards.

The same dataset doubles as a **due-diligence pack**: KYC bundle, AML attestations, source-of-funds, source-of-wealth, beneficial-ownership disclosure, and pre-employment background-check artefacts.

## Audience

- **Self**: a personal "where is everything" view (home server, family safe).
- **Counterparties**: lawyers, banks, immigration officers, employers, real-estate agents — selectively share verifiable bundles.
- **Future**: EUDI-wallet integration (eIDAS 2.0) for selective disclosure.

## Architecture

| Layer            | Tech                                                                               |
|------------------|------------------------------------------------------------------------------------|
| Build engine     | `_engine.sh` (front/) — `data_wrap`, `esbuild`, `sass`, `sw_register`, `esbuild_sw` |
| Data             | `src/data/mock.json` → wrapped to `data-mock.json.js` (`globalThis.PORTAL_DATA["mock"]`) |
| Entry            | Vanilla TS (esbuild iife) + ITCSS SCSS                                             |
| Routing          | Hash-based (`#/wallet/<category>`)                                                 |
| Service worker   | Precache + network-first (BUILD_HASH-versioned)                                    |
| Analytics        | Matomo Tag Manager + Umami (config injected in HTML)                               |
| Port             | 8031                                                                               |

## Categories (12)

| ID                | Label                       | Examples                                                                                              |
|-------------------|-----------------------------|-------------------------------------------------------------------------------------------------------|
| `identity`        | Identity & Citizenship      | EU passports, DNI, Personalausweis, CNI (FR), CC (PT), CIE (IT), birth/marriage certificates          |
| `education`       | Education & Diplomas        | Bachillerato, BSc, MSc, PhD, MBA, AWS/CFA/PMP, DELE/CPE/Goethe                                        |
| `driving`         | Driving & Mobility          | EU driver's licence, IDP (Vienna 1968), boat (PER/ICC), pilot (EASA PPL)                              |
| `professional`    | Career & Credentials        | CV, employment contracts, professional registrations (COIT), references                               |
| `financial`       | Banking & Credit            | Multi-bank IBANs, credit cards, mortgage, brokerage, ASNEF/SCHUFA/Experian credit reports, IRPF, M720 |
| `property`        | Property & Housing          | Title deeds, IBI, utilities                                                                           |
| `health`          | Medical Records             | EHIC, ICVP yellow fever, EU DCC, blood-type card, organ donor, allergies                              |
| `insurance`       | Insurance Policies          | Health, life, car, travel, liability                                                                  |
| `legal`           | Police & Court Records      | Antecedentes Penales (ES), Führungszeugnis (DE), Casier Judiciaire (FR), DBS (UK), insolvency check   |
| `due-diligence`   | Due Diligence & Background  | KYC pack, World-Check, LexisNexis adverse media, PEP, source-of-funds, source-of-wealth, UBO         |
| `travel`          | Travel & Visas              | Visas, Global Entry, frequent-flyer status                                                            |
| `memberships`     | Memberships                 | Library, museum, alumni                                                                               |
| `digital`         | Digital Identity            | YubiKey serials, BTC xpub fingerprints, domains                                                       |

## Document shape (canonical)

```jsonc
{
  "id": "passport-de-001",
  "type": "passport",
  "label": "Reisepass — Biometric Passport (Germany)",
  "issuer": { "name": "Bundesdruckerei / Auswärtiges Amt", "country": "DE" },
  "documentNumber": "C0FXY1234",
  "issueDate": "2017-08-15",
  "expiryDate": "2027-08-14",
  "status": "active",                                 // active | expired | clean | reference | ready | passed | filed | paid | revoked
  "tags": ["travel", "primary-id", "biometric"],
  "verifications": [{ "type": "rfid", "method": "BAC + PA + AA" }],
  "assets": {
    "front": "assets/identity/passport-de-mustermann.jpg",
    "back":  "...",
    "pdf":   "...",
    "qr":    "..."
  },
  "lastVerified": "2026-04-01",
  "_source": "Wikimedia Commons · public domain specimen (when applicable)"
}
```

## Image sources (templates)

The `public/assets/` tree mixes:

1. **Real specimen scans** — public-domain government documents from Wikimedia Commons (Mustermann_Reisepass_2017, Deutscher_Personalausweis_(2021), Spanish_ID_card_*, Carte_identité_électronique_française_(2021), Cartão_de_Cidadão_Português, CIE_Italy(2022), Croatian_ID_card_specimen, New_Romanian_ID_Card_(2021), Iceland Nafnskírteini_2024, EHIC_Slovenia, Norwegian Førerkort, …).
2. **SVG placeholders** — for documents without a Commons specimen (custom Spanish passport mockup, EU driving licence template, EHIC template, certificate template, generic QR).

The `_source` field on each document records provenance.

## Build & dev

```bash
~/git/front/b-MyData/myid/build.sh build     # full build → dist/
~/git/front/b-MyData/myid/build.sh dev       # dev server on :8031
~/git/front/b-MyData/myid/build.sh clean     # wipe dist/
```

## Roadmap

1. Replace placeholder assets with the user's real (encrypted) scans.
2. Wire EUDI-wallet selective-disclosure flows (W3C VC + ZK proofs).
3. Add a "share bundle" view: pick docs → generate signed JWT envelope → recipient verifies.
4. Plug into `~/git/vault` for live secret retrieval (sops-encrypted asset paths).
5. Reverse-link to mail-puller / financial APIs for live status (e.g. expiring docs alert).
