const translations = {
    en: {
        nav_home: "Home",
        nav_workflow: "Workflow",
        nav_industries: "Industries",
        nav_platform: "Platform",
        nav_faq: "FAQ",
        nav_book: "Book pilot",
        nav_demo: "Listen to demo",

        home_eyebrow: "Stockholm-built AI voice operations",
        home_subtitle: "Turn every incoming call into a qualified next step.",
        home_lead: "Kyanite gives Swedish teams a 24/7 receptionist that answers naturally, qualifies intent, books meetings, and writes straight into the systems you already run.",
        home_cta_primary: "Book a 1-week pilot",
        home_cta_secondary: "Listen to the live demo",
        home_signal_1_value: "24/7",
        home_signal_1_label: "Always on for after-hours demand",
        home_signal_2_value: "70%",
        home_signal_2_label: "Lower reception overhead",
        home_signal_3_value: "48h",
        home_signal_3_label: "Typical pilot launch window",

        metrics_1_value: "Native Swedish + English",
        metrics_1_label: "Natural voice flows for real customer conversations",
        metrics_2_value: "Live routing and booking",
        metrics_2_label: "Calls move straight into your calendar or CRM",
        metrics_3_value: "EU-hosted data posture",
        metrics_3_label: "Built around GDPR-conscious implementation",
        metrics_4_value: "Custom playbooks",
        metrics_4_label: "Industry logic tuned to your operation",

        workflow_kicker: "Workflow",
        workflow_title: "One calm operations layer from the first ring to the final follow-up.",
        workflow_lead: "The product is designed around routing, qualification, scheduling, and reporting, not around generic chatbot theater.",
        workflow_item_1_title: "Answer immediately",
        workflow_item_1_copy: "The caller reaches a fluent AI receptionist that sounds composed, not synthetic, even during peak hours and evenings.",
        workflow_item_2_title: "Qualify in real time",
        workflow_item_2_copy: "Kyanite asks the right questions for budget, urgency, property type, appointment need, or delivery issue before your team steps in.",
        workflow_item_3_title: "Write back to your stack",
        workflow_item_3_copy: "Every call becomes structured data, action items, and a clear next step inside your calendar, CRM, or internal workflow.",
        workflow_item_4_title: "Spot patterns quickly",
        workflow_item_4_copy: "Leaders see missed demand windows, recurring call reasons, and conversion moments without replaying the whole day.",

        industries_kicker: "Industries",
        industries_title: "Built around high-value inbound calls, not generic support queues.",
        industries_lead: "Each industry page is tailored to a different call pattern so the promise stays concrete.",
        industries_re_kicker: "Real estate",
        industries_re_title: "Qualify buyers, schedule viewings, and keep agents out of repetitive phone loops.",
        industries_re_copy: "Capture budget, timing, and property intent before the first showing gets booked.",
        industries_med_kicker: "Clinics",
        industries_med_title: "Protect the front desk so staff can focus on in-person care.",
        industries_med_copy: "Handle booking, rescheduling, and repeat operational questions without building longer queues.",
        industries_log_kicker: "Logistics",
        industries_log_title: "Deflect tracking calls and route exceptions before they hit your dispatch team.",
        industries_log_copy: "Give customers immediate delivery answers while your operators stay on active shipments.",
        industries_cta: "Explore page",

        platform_kicker: "Platform",
        platform_title: "A voice product with operational memory.",
        platform_lead: "Teams do not need another dashboard mosaic. They need one place where calls become usable decisions.",
        platform_row_1_title: "Conversation summaries that read like handoff notes",
        platform_row_1_copy: "Every call is condensed into the facts your team needs next: who called, why they called, what was promised, and what happens next.",
        platform_row_2_title: "Permissioned access for managers, operators, and specialists",
        platform_row_2_copy: "Kyanite can expose only the call retellings, actions, and views each team member should see while keeping access structured.",
        platform_row_3_title: "Signals worth acting on",
        platform_row_3_copy: "Track call peaks, intent categories, booked meetings, missed opportunities, and the moments that deserve a human callback.",
        control_kicker: "Control layer",
        control_title: "The admin panel turns every handled call into something your team can operate on.",
        control_lead: "This is where the receptionist becomes a managed system: access stays structured, staff stays aligned, and every call leaves behind usable operational context.",
        control_item_1_title: "Role-based access and staff permissions",
        control_item_1_copy: "Give managers, agents, reception leads, and admins different visibility so each person sees the right call retellings, actions, and team views.",
        control_item_2_title: "Database and business data management",
        control_item_2_copy: "Keep business data current, manage internal workflows, and control the information the assistant is allowed to use in live conversations.",
        control_item_3_title: "AI summaries and call analytics",
        control_item_3_copy: "Review structured call summaries, track volumes and intent trends, and spot where staff intervention or process changes will matter most.",

        trust_kicker: "Trust",
        trust_title: "Premium service feel, enterprise-grade caution.",
        trust_lead: "The promise only works if reliability, data handling, and human fallback are as credible as the voice itself.",
        trust_item_1_title: "EU-first operating model",
        trust_item_1_copy: "Implementation can be set around Swedish and EU data expectations, with a process story you can actually explain to clients.",
        trust_item_2_title: "Escalation when nuance matters",
        trust_item_2_copy: "Sensitive calls do not get trapped in automation. Kyanite can route to a person, log the context, and keep the handoff intact.",
        trust_item_3_title: "Measured onboarding",
        trust_item_3_copy: "Pilot first, tune the call flow with real transcripts, then expand once the team trusts what they hear.",
        founder_quote: "We build voice systems that feel composed under pressure and useful the moment the call ends.",
        founder_caption: "Stepan, co-founder",

        cta_kicker: "Pilot",
        cta_title: "Start with one line, one workflow, and one week of real traffic.",
        cta_lead: "We scope the live call paths, adapt the assistant to your operation, and ship a pilot without forcing a giant rollout first.",
        cta_point_1: "Custom call script for your business",
        cta_point_2: "Fast setup around your current tools",
        cta_point_3: "Clear success criteria before launch",
        cta_primary: "Book the pilot",
        cta_secondary: "Hear the demo first",

        faq_title: "Questions teams ask before launch",
        faq_q1: "How fast can the pilot go live?",
        faq_a1: "Most pilot setups are configured inside 48 hours once the call flow, routing rules, and business details are approved.",
        faq_q2: "What if the AI does not understand the caller?",
        faq_a2: "The system can hand over to a person, capture a message, or trigger a callback path depending on the workflow you approve.",
        faq_q3: "Does this replace our whole team?",
        faq_a3: "No. It takes the repetitive inbound layer so your team can work on complex, high-value conversations.",
        faq_q4: "Can Kyanite connect to our stack?",
        faq_a4: "Yes. The system is designed to write structured outcomes into calendars, CRMs, and API-accessible tools.",

        footer_copy: "AI voice receptionists for Swedish teams that need calmer operations and fewer missed opportunities.",
        footer_rights: "© 2026 Kyanite AI Agency. All rights reserved.",

        book_eyebrow: "Book the pilot",
        book_title: "Design the call flow around your real inbound pressure.",
        book_lead: "Tell us what your line handles today and we will map the pilot around the calls that matter most first.",
        book_point_1: "15-minute scoping call with Kyanite",
        book_point_2: "Pilot recommendation based on your current volume",
        book_point_3: "No long rollout required to get started",
        book_form_title: "Share your setup",
        book_form_copy: "We reply with a next-step plan, pilot timing, and the best starting workflow.",
        book_name_label: "Name",
        book_email_label: "Work email",
        book_phone_label: "Phone",
        book_company_label: "Company",
        book_details_label: "Current call flow",
        book_name_placeholder: "Your name",
        book_email_placeholder: "name@company.com",
        book_phone_placeholder: "+46 ...",
        book_company_placeholder: "Company name",
        book_details_placeholder: "What kinds of calls do you want the AI to handle first?",
        book_submit: "Request the pilot",
        book_meta_1_label: "Email",
        book_meta_1_value: "kyaniteautomations@gmail.com",
        book_meta_2_label: "Phone",
        book_meta_2_value: "+46 76 329 28 61",
        book_meta_3_label: "Base",
        book_meta_3_value: "Stockholm, Sweden",
        book_note: "No setup fee for the initial scoping conversation.",

        demo_eyebrow: "Audio demo",
        demo_title: "Hear how the receptionist sounds when a live lead comes in.",
        demo_lead: "The best proof is the rhythm of the conversation: calm greeting, relevant questions, and a clear next action.",
        demo_primary: "Book your own pilot",
        demo_secondary: "Back to homepage",
        demo_live_badge: "Real estate demo",
        demo_player_title: "Swedish property inquiry",
        demo_player_desc: "A buyer calls about a listing and gets qualified before the agent steps in.",
        demo_note: "AI retelling of a Swedish property inquiry.",
        demo_option_1_title: "Buyer qualification",
        demo_option_1_desc: "Budget, location, and viewing intent are captured live.",
        demo_option_2_title: "Clinic intake",
        demo_option_2_desc: "Custom scenario prepared live during the pilot meeting.",
        demo_option_3_title: "Delivery exception",
        demo_option_3_desc: "Custom scenario prepared live during the pilot meeting."
    },
    sv: {
        nav_home: "Hem",
        nav_workflow: "Flöde",
        nav_industries: "Branscher",
        nav_platform: "Plattform",
        nav_faq: "FAQ",
        nav_book: "Boka pilot",
        nav_demo: "Lyssna på demo",

        home_eyebrow: "Stockholmsbyggd AI för röstflöden",
        home_subtitle: "Förvandla varje samtal till ett kvalificerat nästa steg.",
        home_lead: "Kyanite ger svenska team en AI-receptionist som svarar naturligt, kvalificerar behov, bokar möten och skriver direkt in i systemen ni redan använder.",
        home_cta_primary: "Boka en 1-veckas pilot",
        home_cta_secondary: "Lyssna på demon",
        home_signal_1_value: "24/7",
        home_signal_1_label: "Aktiv även när efterfrågan kommer efter kontorstid",
        home_signal_2_value: "70%",
        home_signal_2_label: "Lägre receptionskostnad",
        home_signal_3_value: "48h",
        home_signal_3_label: "Vanligt pilotfönster till start",

        metrics_1_value: "Flytande svenska + engelska",
        metrics_1_label: "Naturliga röstsamtal för riktiga kunddialoger",
        metrics_2_value: "Live-routing och bokning",
        metrics_2_label: "Samtal går direkt till kalender eller CRM",
        metrics_3_value: "EU-hostad datamodell",
        metrics_3_label: "Byggd med GDPR-medveten implementation",
        metrics_4_value: "Anpassade playbooks",
        metrics_4_label: "Branschlogik justerad efter er verksamhet",

        workflow_kicker: "Flöde",
        workflow_title: "Ett lugnt operationslager från första signal till sista uppföljning.",
        workflow_lead: "Produkten är byggd runt routing, kvalificering, bokning och rapportering, inte runt generisk chatbot-teater.",
        workflow_item_1_title: "Svara direkt",
        workflow_item_1_copy: "Den som ringer möts av en AI-receptionist som låter trygg och naturlig, även under toppar och kvällstid.",
        workflow_item_2_title: "Kvalificera i realtid",
        workflow_item_2_copy: "Kyanite ställer rätt frågor om budget, brådska, objekttyp, tidsbokning eller leveransproblem innan teamet tar över.",
        workflow_item_3_title: "Skriv tillbaka till era system",
        workflow_item_3_copy: "Varje samtal blir strukturerad data, åtgärdspunkter och ett tydligt nästa steg i kalender, CRM eller intern process.",
        workflow_item_4_title: "Se mönster snabbare",
        workflow_item_4_copy: "Ledare ser missade efterfrågefönster, återkommande orsaker till samtal och konverteringsmoment utan att spela upp hela dagen.",

        industries_kicker: "Branscher",
        industries_title: "Byggd för värdefulla inkommande samtal, inte generiska supportköer.",
        industries_lead: "Varje branschsida är formad efter ett eget samtalsmönster så löftet förblir konkret.",
        industries_re_kicker: "Fastigheter",
        industries_re_title: "Kvalificera köpare, boka visningar och låt mäklare slippa repetitiva samtal.",
        industries_re_copy: "Samla budget, tidsram och objektintresse innan första visningen bokas.",
        industries_med_kicker: "Kliniker",
        industries_med_title: "Skydda receptionen så personalen kan fokusera på patienter på plats.",
        industries_med_copy: "Hantera bokning, ombokning och återkommande operativa frågor utan längre köer.",
        industries_log_kicker: "Logistik",
        industries_log_title: "Avlasta spårningssamtal och routa avvikelser innan de når dispatch-teamet.",
        industries_log_copy: "Ge kunder snabba leveranssvar medan operatörerna håller fokus på aktiva sändningar.",
        industries_cta: "Öppna sida",

        platform_kicker: "Plattform",
        platform_title: "En röstprodukt med operativt minne.",
        platform_lead: "Team behöver inte ännu ett dashboard-kaos. De behöver en plats där samtal blir till användbara beslut.",
        platform_row_1_title: "Samtalssammanfattningar som känns som riktiga handovers",
        platform_row_1_copy: "Varje samtal kondenseras till det teamet behöver: vem som ringde, varför, vad som lovades och vad som händer nu.",
        platform_row_2_title: "Behörigheter för chefer, operatörer och specialister",
        platform_row_2_copy: "Kyanite kan visa rätt samtalsretellings, åtgärder och vyer för varje roll samtidigt som åtkomsten hålls strukturerad.",
        platform_row_3_title: "Signaler värda att agera på",
        platform_row_3_copy: "Följ samtalstoppar, ärendetyper, bokade möten, missade möjligheter och ögonblick som kräver mänsklig uppföljning.",
        control_kicker: "Kontrollager",
        control_title: "Adminpanelen gör varje hanterat samtal till något teamet faktiskt kan arbeta vidare med.",
        control_lead: "Det är här receptionisten blir ett styrt system: åtkomst hålls strukturerad, personalen håller sig synkad, och varje samtal lämnar efter sig användbar operativ kontext.",
        control_item_1_title: "Rollbaserad åtkomst och personalbehörigheter",
        control_item_1_copy: "Ge chefer, agenter, receptionsansvariga och administratörer olika nivåer av insyn så att varje person ser rätt samtalsretellings, åtgärder och teamvyer.",
        control_item_2_title: "Databas- och verksamhetsdatahantering",
        control_item_2_copy: "Håll verksamhetsdata uppdaterad, hantera interna arbetsflöden och styr vilken information assistenten får använda i live-samtal.",
        control_item_3_title: "AI-sammanfattningar och samtalsanalys",
        control_item_3_copy: "Granska strukturerade samtalssammanfattningar, följ volymer och trendlinjer, och se var personalinsats eller processförändringar ger störst effekt.",

        trust_kicker: "Trygghet",
        trust_title: "Premium känsla i tjänsten, företagsklass i försiktighet.",
        trust_lead: "Löftet fungerar bara om driftsäkerhet, datahantering och mänsklig fallback känns lika trovärdiga som rösten.",
        trust_item_1_title: "EU-först i driftsmodellen",
        trust_item_1_copy: "Implementationen kan sättas upp runt svenska och europeiska datakrav, med en process ni faktiskt kan förklara för kunder.",
        trust_item_2_title: "Eskalerar när nyans behövs",
        trust_item_2_copy: "Känsliga samtal fastnar inte i automation. Kyanite kan skicka vidare till människa, logga kontext och bevara handoffen.",
        trust_item_3_title: "Mättad onboarding",
        trust_item_3_copy: "Pilot först, justera samtalsflödet med riktiga transkript, skala först när teamet litar på det de hör.",
        founder_quote: "Vi bygger röstsystem som känns lugna under press och användbara i samma sekund som samtalet slutar.",
        founder_caption: "Stepan, medgrundare",

        cta_kicker: "Pilot",
        cta_title: "Börja med ett nummer, ett arbetsflöde och en vecka av riktig trafik.",
        cta_lead: "Vi definierar de live-samtal som ska hanteras, anpassar assistenten till er verksamhet och skickar en pilot utan att kräva en stor utrullning först.",
        cta_point_1: "Anpassat samtalsskript för er verksamhet",
        cta_point_2: "Snabb setup runt era nuvarande verktyg",
        cta_point_3: "Tydliga mål innan lansering",
        cta_primary: "Boka piloten",
        cta_secondary: "Lyssna på demon först",

        faq_title: "Frågor team ställer före lansering",
        faq_q1: "Hur snabbt kan piloten gå live?",
        faq_a1: "De flesta piloter kan konfigureras inom 48 timmar när samtalsflöde, routingregler och verksamhetsdetaljer är godkända.",
        faq_q2: "Vad händer om AI:n inte förstår den som ringer?",
        faq_a2: "Systemet kan koppla vidare till en person, ta ett meddelande eller trigga callback beroende på det flöde ni godkänner.",
        faq_q3: "Ersätter det här hela vårt team?",
        faq_a3: "Nej. Det tar det repetitiva inkommande lagret så att teamet kan fokusera på komplexa samtal med högre värde.",
        faq_q4: "Kan Kyanite kopplas till vårt system?",
        faq_a4: "Ja. Systemet är byggt för att skriva strukturerade utfall till kalendrar, CRM och verktyg med API-stöd.",

        footer_copy: "AI-röstreceptionister för svenska team som vill ha lugnare drift och färre missade möjligheter.",
        footer_rights: "© 2026 Kyanite AI Agency. Alla rättigheter förbehållna.",

        book_eyebrow: "Boka piloten",
        book_title: "Forma samtalsflödet runt det verkliga trycket på er linje.",
        book_lead: "Berätta vad telefonen hanterar idag så bygger vi piloten runt de samtal som betyder mest först.",
        book_point_1: "15 minuters scoping-samtal med Kyanite",
        book_point_2: "Pilotrekommendation utifrån er nuvarande volym",
        book_point_3: "Ingen stor utrullning krävs för att börja",
        book_form_title: "Dela er setup",
        book_form_copy: "Vi svarar med nästa steg, tidsram för pilot och vilket arbetsflöde som är bäst att börja med.",
        book_name_label: "Namn",
        book_email_label: "Arbetsmejl",
        book_phone_label: "Telefon",
        book_company_label: "Företag",
        book_details_label: "Nuvarande samtalsflöde",
        book_name_placeholder: "Ditt namn",
        book_email_placeholder: "namn@foretag.se",
        book_phone_placeholder: "+46 ...",
        book_company_placeholder: "Företagsnamn",
        book_details_placeholder: "Vilka typer av samtal vill ni att AI:n ska hantera först?",
        book_submit: "Begär piloten",
        book_meta_1_label: "E-post",
        book_meta_1_value: "kyaniteautomations@gmail.com",
        book_meta_2_label: "Telefon",
        book_meta_2_value: "+46 76 329 28 61",
        book_meta_3_label: "Bas",
        book_meta_3_value: "Stockholm, Sverige",
        book_note: "Ingen setupavgift för det första scoping-samtalet.",

        demo_eyebrow: "Ljuddemo",
        demo_title: "Hör hur receptionisten låter när ett riktigt lead kommer in.",
        demo_lead: "Bästa beviset är samtalets rytm: lugn hälsning, relevanta frågor och ett tydligt nästa steg.",
        demo_primary: "Boka er egen pilot",
        demo_secondary: "Till startsidan",
        demo_live_badge: "Fastighetsdemo",
        demo_player_title: "Svensk fastighetsförfrågan",
        demo_player_desc: "En köpare ringer om ett objekt och kvalificeras innan mäklaren kopplas in.",
        demo_note: "Riktig inspelad svensk fastighetsförfrågan.",
        demo_option_1_title: "Köparkvalificering",
        demo_option_1_desc: "Budget, område och visningsintresse fångas live.",
        demo_option_2_title: "Klinikintag",
        demo_option_2_desc: "Anpassat scenario visas live under pilotsamtalet.",
        demo_option_3_title: "Leveransavvikelse",
        demo_option_3_desc: "Anpassat scenario visas live under pilotsamtalet."
    }
};

let currentLang = "en";

const updateLanguage = lang => {
    currentLang = lang;
    localStorage.setItem("kyanite_lang", lang);
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.getAttribute("data-i18n");
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
        const key = element.getAttribute("data-i18n-placeholder");
        if (translations[lang] && translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });

    document.querySelectorAll(".lang-switcher").forEach(button => {
        const flag = button.querySelector(".lang-flag");
        const text = button.querySelector(".lang-text");

        if (flag && text) {
            flag.textContent = lang === "sv" ? "🇸🇪" : "🇬🇧";
            text.textContent = lang === "sv" ? "SV" : "EN";
        }
    });
};

const toggleLanguage = () => {
    updateLanguage(currentLang === "en" ? "sv" : "en");
};

document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("kyanite_lang");
    if (savedLang && translations[savedLang]) {
        currentLang = savedLang;
    }

    updateLanguage(currentLang);
    window.toggleLanguage = toggleLanguage;
});
