// Translation data for Kyanite website
const translations = {
    en: {
        // Navigation
        nav_home: 'Home',
        nav_about: 'About Us',
        nav_why: 'Why Us',
        nav_services: 'Services',
        nav_contact: 'Contact Us',

        // Hero Section
        hero_claim: 'Mary, Meet Your New 24/7 AI Receptionist',
        hero_slogan: 'Never Miss a Lead in Sweden Again',
        hero_subheadline: 'An intelligent voice assistant that handles calls, books meetings, and updates your database in real-time. Cut operational costs by 70% while providing instant response to every customer.',
        hero_trust: 'Trusted by Swedish businesses in Real Estate, Healthcare & Logistics.',
        hero_cta_demo: 'Listen to Demo',
        hero_cta_pilot: 'Book a 1-Week Free Pilot',
        see_problem: 'See the Problem We Solve',

        // Problem Section
        problem_title: 'The Hidden Cost of Missed Calls',
        problem_intro: 'Every unanswered call is a lost opportunity. Swedish businesses lose up to 30% of potential revenue from calls missed outside office hours.',
        problem_card1_title: 'Expensive Staffing',
        problem_card1_desc: 'A full-time receptionist in Sweden costs 450,000–600,000 SEK/year including benefits, taxes, and training. Most calls don\'t require human empathy—just accurate, instant answers.',
        problem_card1_stat: 'Cost: 450,000–600,000 SEK/year per employee',
        problem_card2_title: 'Limited Hours (9–17)',
        problem_card2_desc: 'Your customers work the same hours you do. They call during lunch breaks, evenings, and weekends. When you don\'t answer, they call your competitor—who does.',
        problem_card2_stat: 'Lost calls: 40% happen after 17:00 & weekends',
        problem_card3_title: 'Human Error in CRM',
        problem_card3_desc: 'Manual data entry leads to mistakes: wrong phone numbers, missed follow-ups, forgotten appointments. Your team spends 2–3 hours daily updating systems instead of selling.',
        problem_card3_stat: 'Time wasted: 10–15 hours/week on admin',
        problem_card4_title: 'Holidays & Peak Seasons',
        problem_card4_desc: 'Summer vacations, Christmas, sick days—your phone still rings. Temporary staff cost more and don\'t know your business. Every missed call during peak season is revenue gone.',
        problem_card4_stat: 'Peak loss: Up to 50% of calls during holidays',
        problem_cta_text: 'The solution isn\'t hiring more people. It\'s smarter automation.',
        problem_cta_btn: 'See How Kyanite Solves This',

        // Why Us Section
        why_title: 'Why Swedish Businesses Choose Kyanite',
        why_card1_title: '24/7/365 Availability',
        why_card1_desc: 'Your AI receptionist never sleeps, never takes sick leave, and never goes on vacation. Handle calls at 3 AM on Christmas Day with the same professionalism as Monday morning.',
        why_card2_title: 'Native Swedish & English',
        why_card2_desc: 'Perfect accent in both Swedish and English. No robotic voices. Your customers won\'t know they\'re talking to AI until they see the instant follow-up in their inbox.',
        why_card3_title: '70% Lower Operational Costs',
        why_card3_desc: 'Replace an entire call center team with one AI system. No salaries, no benefits, no training. Just predictable monthly pricing that scales with your call volume.',

        // Admin/Services Section
        services_title: 'Complete Control Through Your Admin Dashboard',
        services_intro: 'Every call transcribed. Every action tracked. Every insight at your fingertips.',
        services_card1_title: 'AI Call Summary',
        services_card1_desc: 'Intelligent transcription with automatic extraction of key information: customer name, phone, budget, preferences, and intent. Get a structured summary in your inbox within seconds of each call.',
        services_card1_li1: 'Full call transcription in Swedish or English',
        services_card1_li2: 'Auto-tagging by topic and sentiment',
        services_card1_li3: 'Action items highlighted automatically',
        services_card1_li4: 'Search across all historical calls',
        services_card2_title: 'Access Management',
        services_card2_desc: 'Control who sees what. Grant different access levels to your team members—realtors see only their clients, managers see everything, admins control permissions.',
        services_card2_li1: 'Role-based permissions (Admin, Manager, Agent)',
        services_card2_li2: 'Audit log of all user actions',
        services_card2_li3: 'SSO integration for enterprise',
        services_card2_li4: 'GDPR-compliant data access controls',
        services_card3_title: 'Database & Calendar Integration',
        services_card3_desc: 'Your AI updates your existing systems in real-time. Bookings appear in your calendar. Lead data flows into your CRM. No manual entry, no errors.',
        services_card3_li1: 'Native integrations: Visma, Fortnox, Google Calendar',
        services_card3_li2: 'REST API for custom connections',
        services_card3_li3: 'Two-way sync with your CRM',
        services_card3_li4: 'Automatic follow-up email/SMS triggers',
        services_card4_title: 'Analytics & Reporting',
        services_card4_desc: 'Track what matters: call volume, conversion rates, peak hours, common questions. Make data-driven decisions to optimize your operations.',
        services_card4_li1: 'Real-time dashboard with key metrics',
        services_card4_li2: 'Weekly/monthly performance reports',
        services_card4_li3: 'Call recording playback',
        services_card4_li4: 'ROI calculator showing cost savings',
        services_cta: 'See Live Dashboard Demo',

        // Industries Section
        industries_title: 'Built for Swedish Industries',
        industries_intro: 'One platform. Tailored solutions for your specific business needs.',
        industries_re_title: 'Real Estate Agencies',
        industries_re_pain: 'Problem: Agents waste 3–4 hours daily answering the same questions about listings, scheduling viewings, and qualifying leads.',
        industries_re_solution: 'Your AI Receptionist Handles:',
        industries_re_li1: 'Budget Pre-Qualification: "What\'s your budget range?" "Have you been pre-approved for a mortgage?"',
        industries_re_li2: 'Property Matching: Automatically matches caller preferences with available listings',
        industries_re_li3: 'Viewing Scheduling: Books property showings directly in agent\'s calendar',
        industries_re_li4: 'Follow-Up Automation: Sends property details via SMS/email immediately after the call',
        industries_re_result: 'Result: Agents focus on closing deals. Every lead is qualified before the first showing.',
        industries_med_title: 'Medical Clinics & Dental',
        industries_med_pain: 'Problem: Receptionists are overwhelmed with appointment booking, cancellations, and FAQ—taking time away from in-person patients.',
        industries_med_solution: 'Your AI Receptionist Handles:',
        industries_med_li1: 'Patient Booking: "I need to see a doctor this week." Books available slots in your clinic system',
        industries_med_li2: 'FAQ Automation: Opening hours, parking info, preparation instructions, insurance accepted',
        industries_med_li3: 'Prescription Refills: Collects patient info and forwards to medical staff',
        industries_med_li4: 'Cancellation Management: Automatically fills cancelled slots from waitlist',
        industries_med_result: 'Result: Receptionists focus on patients in the office. Zero missed appointments from phone queues.',
        industries_log_title: 'Logistics & Delivery',
        industries_log_pain: 'Problem: Customer service is flooded with "Where is my order?" calls. Tracking updates don\'t answer specific delivery questions.',
        industries_log_solution: 'Your AI Receptionist Handles:',
        industries_log_li1: 'Real-Time Tracking: "Where\'s my shipment?" AI checks database and provides live status',
        industries_log_li2: 'Delivery Rescheduling: Customer not home? AI books new delivery time automatically',
        industries_log_li3: 'Proof of Delivery: Sends POD documents via SMS/email on request',
        industries_log_li4: 'Damaged Goods Claims: Collects claim details and creates support ticket',
        industries_log_result: 'Result: 60% reduction in support calls. Customers get instant answers without waiting on hold.',
        industries_cta_text: 'Don\'t see your industry? We build custom solutions.',
        industries_cta_btn: 'Talk to Our Team',

        // Trust Section
        trust_title: 'Enterprise-Grade Security & Compliance',
        trust_intro: 'Your data is protected. Your customers\' privacy is guaranteed.',
        trust_card1_title: 'GDPR Compliant',
        trust_card1_desc: 'All data stored on EU servers (Stockholm region). Full data processing agreements available. Right to deletion automated. We\'re your personuppgiftsbiträde (data processor).',
        trust_card2_title: 'Bank-Level Encryption',
        trust_card2_desc: 'TLS 1.3 for data in transit. AES-256 encryption at rest. Call retellings stored securely with access logging.',
        trust_card3_title: 'Multilingual Support',
        trust_card3_desc: 'Perfect Swedish (svenska) and English out of the box. Additional languages available on request. Natural accent, not robotic text-to-speech.',
        trust_card4_title: '99.9% Uptime SLA',
        trust_card4_desc: 'Redundant systems across multiple data centers. Automatic failover. Your phone line never goes down. Guaranteed uptime in contract.',

        // About Section
        about_title: 'About Us',
        about_p1: 'At Kyanite, we don\'t just deliver AI-powered automations—we deliver measurable results. Our AI voice receptionists help Swedish businesses save time, cut costs by up to 70%, and never miss a customer call again.',
        about_p2: 'We\'ve deployed solutions across Real Estate, Healthcare, and Logistics—proving that the right AI implementation doesn\'t replace your team, it amplifies them. Our systems handle the repetitive calls so your people can focus on high-value work.',
        about_p3: 'We\'re so confident in our technology that we offer a free 1-week pilot. No upfront cost, no commitment. Just 7 days of your calls handled by AI, and you decide if it\'s worth keeping.',
        about_p4: 'Our mission: Make enterprise-grade AI automation accessible to every Swedish business—secure, compliant, and built for scale.',
        about_founder_name: 'Stepan – Co-Founder',
        about_founder_desc: 'Bridging the gap between Economics and Generative AI to help Swedish businesses scale through automation.',
        about_founder_quote: '"I focus on providing real value through work that speaks for itself."',

        // Contact Section
        contact_title: 'Start Your 1-Week Free Pilot',
        contact_intro: 'No commitment. No setup fee. Just 7 days of your calls handled by AI.',
        contact_email_label: 'Email',
        contact_phone_label: 'Phone',
        contact_location_label: 'Location',
        contact_response_label: 'Response Time',
        contact_email: 'kyaniteautomations@gmail.com',
        contact_phone: '+46 76 329 28 61',
        contact_location: 'Stockholm, Sweden',
        contact_response: 'Within 2 hours during business days',
        contact_cta: 'Book Your Free Pilot',

        // Footer
        footer_tagline: 'Never Miss a Lead Again.',
        footer_subtitle: 'AI-powered voice receptionists for Swedish businesses.',
        footer_links: 'Quick Links',
        footer_problem: 'The Problem',
        footer_services: 'Admin Dashboard',
        footer_industries: 'Industries',
        footer_trust: 'Security',
        footer_contact: 'Contact',
        footer_legal: 'GDPR Compliant | Personuppgiftsbiträde | Data Processor Agreement Available',
        footer_copyright: '© 2025 Kyanite AI Automation Agency. All rights reserved.',

        // Demo page
        demo_title: 'Listen to AI Call Demos',
        demo_intro: 'Hear how our AI receptionist handles real business calls in Swedish and English.',
        demo_select: 'Select a demo below',
        demo_desc: 'Choose an industry to hear AI in action',
        demo_cta_title: 'Ready to hear your own AI receptionist?',
        demo_cta_desc: 'Book a 1-week free pilot and we\'ll set up a custom demo for your business.',
        demo_cta_btn: 'Book Your Free Pilot',
        demo_back: '← Home',

        // Book page
        book_title: 'Book a Free Call',
        book_name: 'Your Name',
        book_email: 'Your Email',
        book_company: 'Company Name',
        book_service: 'Select Service',
        book_budget: 'Budget Range',
        book_details: 'Tell us more about your project...',
        book_submit: 'Submit',
        book_back: '← Home'
    },

    sv: {
        // Navigation
        nav_home: 'Hem',
        nav_about: 'Om Oss',
        nav_why: 'Varför Oss',
        nav_services: 'Tjänster',
        nav_contact: 'Kontakt',

        // Hero Section
        hero_claim: 'Mary, Möt Din Nya 24/7 AI-Receptionist',
        hero_slogan: 'Aldrig Missa Ett Lead i Sverige Igen',
        hero_subheadline: 'En intelligent röstassistent som hanterar samtal, bokar möten och uppdaterar din databas i realtid. Sänk driftskostnaderna med 70% samtidigt som varje kund får omedelbar respons.',
        hero_trust: 'Litad av svenska företag inom Fastigheter, Vård & Logistik.',
        hero_cta_demo: 'Lyssna på Demo',
        hero_cta_pilot: 'Boka en 1-Veckas Gratis Pilot',
        see_problem: 'Se Problemet Vi Löser',

        // Problem Section
        problem_title: 'Den Dolda Kostnaden av Missade Samtal',
        problem_intro: 'Varje obesvarat samtal är en förlorad möjlighet. Svenska företag förlorar upp till 30% av potentiell intäkt från samtal utanför kontorstid.',
        problem_card1_title: 'Dyr Personal',
        problem_card1_desc: 'En heltidsreceptionist i Sverige kostar 450 000–600 000 kr/år inklusive förmåner, skatter och utbildning. De flesta samtal kräver inte mänsklig empati—bara korrekta, omedelbara svar.',
        problem_card1_stat: 'Kostnad: 450 000–600 000 kr/år per anställd',
        problem_card2_title: 'Begränsade Tider (9–17)',
        problem_card2_desc: 'Dina kunder arbetar samma tider som du. De ringer under lunchrast, kvällar och helger. När du inte svarar, ringer de din konkurrent—som gör det.',
        problem_card2_stat: 'Förlorade samtal: 40% sker efter 17:00 & helger',
        problem_card3_title: 'Mänskliga Fel i CRM',
        problem_card3_desc: 'Manuell datainmatning leder till misstag: fel telefonnummer, missade uppföljningar, glömda möten. Ditt team lägger 2–3 timmar dagligen på att uppdatera system istället för att sälja.',
        problem_card3_stat: 'Tid slösad: 10–15 timmar/vecka på admin',
        problem_card4_title: 'Helgdager & Toppsäsonger',
        problem_card4_desc: 'Sommarlov, jul, sjukdagar—din telefon ringer fortfarande. Temporär personal kostar mer och känner inte ditt företag. Varje missat samtal under toppsäsong är förlorad intäkt.',
        problem_card4_stat: 'Toppsäsong förlust: Upp till 50% av samtal under helgdager',
        problem_cta_text: 'Lösningen är inte att anställa fler. Det är smartare automatisering.',
        problem_cta_btn: 'Se Hur Kyanite Löser Detta',

        // Why Us Section
        why_title: 'Varför Svenska Företag Väljer Kyanite',
        why_card1_title: '24/7/365 Tillgänglighet',
        why_card1_desc: 'Din AI-receptionist sover aldrig, blir aldrig sjuk och går aldrig på semester. Hantera samtal kl 03 på juldagen med samma professionalitet som måndag morgon.',
        why_card2_title: 'Flytande Svenska & Engelska',
        why_card2_desc: 'Perfekt accent på både svenska och engelska. Inga robotröster. Dina kunder märker inte att de pratar med AI förrän de ser den omedelbara uppföljningen i inkorgen.',
        why_card3_title: '70% Lägre Driftskostnader',
        why_card3_desc: 'Ersätt ett helt callcenter-team med ett AI-system. Inga löner, inga förmåner, ingen utbildning. Bara förutsägbar månadsprissättning som skalar med ditt samtalsvolym.',

        // Admin/Services Section
        services_title: 'Full Kontroll Genom Din Admin-Panel',
        services_intro: 'Varje samtal transkriberat. Varje åtgärd spårad. Varje insikt vid dina fingertips.',
        services_card1_title: 'AI SamtalsSammanfattning',
        services_card1_desc: 'Intelligent transkribering med automatisk extrahering av nyckelinformation: kundnamn, telefon, budget, preferenser och avsikt. Få en strukturerad sammanfattning i inkorgen inom sekunder efter varje samtal.',
        services_card1_li1: 'Full samtalstranskribering på svenska eller engelska',
        services_card1_li2: 'Auto-tagging efter ämne och sentiment',
        services_card1_li3: 'Åtgärdspunkter markerade automatiskt',
        services_card1_li4: 'Sök i alla historiska samtal',
        services_card2_title: 'Åtkomsthantering',
        services_card2_desc: 'Kontrollera vem som ser vad. Ge olika åtkomstnivåer till dina teammedlemmar—mäklare ser bara sina kunder, chefer ser allt, admins kontrollerar behörigheter.',
        services_card2_li1: 'Rollbaserade behörigheter (Admin, Chef, Agent)',
        services_card2_li2: 'Granskningslogg för alla användaråtgärder',
        services_card2_li3: 'SSO-integration för företag',
        services_card2_li4: 'GDPR-compliant dataåtkomstkontroller',
        services_card3_title: 'Databas & Kalender Integration',
        services_card3_desc: 'Din AI uppdaterar dina befintliga system i realtid. Bokningar visas i kalendern. Lead-data flödar in i ditt CRM. Ingen manuell inmatning, inga fel.',
        services_card3_li1: 'Nativa integrationer: Visma, Fortnox, Google Calendar',
        services_card3_li2: 'REST API för anpassade anslutningar',
        services_card3_li3: 'Tvåvägssynkronisering med ditt CRM',
        services_card3_li4: 'Automatiska uppföljningsmail/SMS-triggers',
        services_card4_title: 'Analys & Rapportering',
        services_card4_desc: 'Spåra vad som matters: samtalsvolym, konverteringsgrad, topptider, vanliga frågor. Fatta databaserade beslut för att optimera din verksamhet.',
        services_card4_li1: 'Realtidsdashboard med nyckeltal',
        services_card4_li2: 'Vecko-/månadsvisa prestandarapporter',
        services_card4_li3: 'Uppspelning av samtalsinspelningar',
        services_card4_li4: 'ROI-kalkylator som visar kostnadsbesparingar',
        services_cta: 'Se Live Dashboard Demo',

        // Industries Section
        industries_title: 'Byggd för Svenska Branscher',
        industries_intro: 'En plattform. Skräddarsydda lösningar för dina specifika affärsbehov.',
        industries_re_title: 'Fastighetsbyråer',
        industries_re_pain: 'Problem: Mäklare lägger 3–4 timmar dagligen på att svara på samma frågor om objekt, boka visningar och kvalificera leads.',
        industries_re_solution: 'Din AI-Receptionist Hanterar:',
        industries_re_li1: 'Budget Förkvalificering: "Vad är din budget?" "Har du blivit lånelöfte?"',
        industries_re_li2: 'Objektmatchning: Matchar automatiskt uppringares preferenser med tillgängliga objekt',
        industries_re_li3: 'Visningsbokning: Bokar objektsvisningar direkt i mäklarens kalender',
        industries_re_li4: 'Uppföljningsautomatisering: Skickar objektdetaljer via SMS/mail direkt efter samtalet',
        industries_re_result: 'Resultat: Mäklare fokuserar på att avsluta affärer. Varje lead är kvalificerad före första visningen.',
        industries_med_title: 'Vårdcentraler & Tandvård',
        industries_med_pain: 'Problem: Receptionister är överbelastade med bokningar, avbokningar och FAQ—tar tid från patienter på plats.',
        industries_med_solution: 'Din AI-Receptionist Hanterar:',
        industries_med_li1: 'Patientbokning: "Jag behöver träffa en läkare denna vecka." Bokar lediga tider i kliniksystemet',
        industries_med_li2: 'FAQ Automatisering: Öppettider, parkeringsinfo, förberedelser, försäkringar accepterade',
        industries_med_li3: 'Receptförnyelse: Samlar patientinfo och skickar till medicinsk personal',
        industries_med_li4: 'Avbokningshantering: Fyller automatiskt avbokade tider från väntelista',
        industries_med_result: 'Resultat: Receptionister fokuserar på patienter på kontoret. Noll missade bokningar från telefonkö.',
        industries_log_title: 'Logistik & Transport',
        industries_log_pain: 'Problem: Kundservice är översvämmad med "Var är min order?"-samtal. Spårningsuppdaterar svarar inte på specifika leveransfrågor.',
        industries_log_solution: 'Din AI-Receptionist Hanterar:',
        industries_log_li1: 'Realtidsspårning: "Var är min leverans?" AI kollar databas och ger live-status',
        industries_log_li2: 'Leveransomläggning: Kund inte hemma? AI bokar ny leveranstid automatiskt',
        industries_log_li3: 'Leveransbevis: Skickar POD-dokument via SMS/mail på begäran',
        industries_log_li4: 'Skadegodsanspråk: Samlar anspråksdetaljer och skapar supportärende',
        industries_log_result: 'Resultat: 60% reduktion av supportsamtal. Kunder får omedelbara svar utan att vänta i kö.',
        industries_cta_text: 'Ser du inte din bransch? Vi bygger anpassade lösningar.',
        industries_cta_btn: 'Prata med Vårt Team',

        // Trust Section
        trust_title: 'Säkerhet & Efterlevnad i Företagsklass',
        trust_intro: 'Din data är skyddad. Dina kunders integritet är garanterad.',
        trust_card1_title: 'GDPR Compliant',
        trust_card1_desc: 'All data lagrad på EU-servrar (Stockholm-region). Fulla databehandlingsavtal tillgängliga. Raderingsrätt automatiserad. Vi är ditt personuppgiftsbiträde.',
        trust_card2_title: 'Banknivå Kryptering',
        trust_card2_desc: 'TLS 1.3 för data i transit. AES-256 kryptering i vila. Samtalsåterställningar lagras säkert med åtkomstloggning.',
        trust_card3_title: 'Flerspråkigt Stöd',
        trust_card3_desc: 'Perfekt svenska och engelska från start. Fler språk tillgängliga på begäran. Naturlig accent, inte robotisk text-till-tal.',
        trust_card4_title: '99,9% Drifttid SLA',
        trust_card4_desc: 'Redundanta system över flera datacenter. Automatisk failover. Din telefonlinje går aldrig ner. Garanterad drifttid i kontrakt.',

        // About Section
        about_title: 'Om Oss',
        about_p1: 'På Kyanite levererar vi inte bara AI-drivna automatiseringar—vi levererar mätbara resultat. Våra AI-röstreceptionister hjälper svenska företag att spara tid, sänka kostnader med upp till 70%, och aldrig missa ett kundsamtal igen.',
        about_p2: 'Vi har implementerat lösningar inom Fastigheter, Vård och Logistik—bevisar att rätt AI-implementering inte ersätter ditt team, det förstärker dem. Våra system hanterar de repetitiva samtalen så dina medarbetare kan fokusera på högvärdigt arbete.',
        about_p3: 'Vi är så säkra på vår teknik att vi erbjuder en gratis 1-veckas pilot. Ingen förskottskostnad, ingen bindning. Bara 7 dagar av dina samtal hanterade av AI, så avgör du om det är värt att behålla.',
        about_p4: 'Vårt uppdrag: Göra AI-automatisering i företagsklass tillgänglig för varje svenskt företag—säkert, compliant och byggt för skalning.',
        about_founder_name: 'Stepan – Medgrundare',
        about_founder_desc: 'Överbryggar klyftan mellan Ekonomi och Generativ AI för att hjälpa svenska företag att skala genom automatisering.',
        about_founder_quote: '"Jag fokuserar på att leverera verkligt värde genom arbete som talar för sig själv."',

        // Contact Section
        contact_title: 'Starta Din 1-Veckas Gratis Pilot',
        contact_intro: 'Ingen bindning. Ingen startavgift. Bara 7 dagar av dina samtal hanterade av AI.',
        contact_email_label: 'E-post',
        contact_phone_label: 'Telefon',
        contact_location_label: 'Plats',
        contact_response_label: 'Svarstid',
        contact_email: 'kyaniteautomations@gmail.com',
        contact_phone: '+46 76 329 28 61',
        contact_location: 'Stockholm, Sverige',
        contact_response: 'Inom 2 timmar under vardagar',
        contact_cta: 'Boka Din Gratis Pilot',

        // Footer
        footer_tagline: 'Aldrig Missa Ett Lead Igen.',
        footer_subtitle: 'AI-drivna röstreceptionister för svenska företag.',
        footer_links: 'Snabblänkar',
        footer_problem: 'Problemet',
        footer_services: 'Admin Dashboard',
        footer_industries: 'Branscher',
        footer_trust: 'Säkerhet',
        footer_contact: 'Kontakt',
        footer_legal: 'GDPR Compliant | Personuppgiftsbiträde | Databehandlingsavtal Tillgängligt',
        footer_copyright: '© 2025 Kyanite AI Automation Agency. Alla rättigheter reserverade.',

        // Demo page
        demo_title: 'Lyssna på AI Samtalsdemor',
        demo_intro: 'Hör hur vår AI-receptionist hanterar riktiga affärssamtal på svenska och engelska.',
        demo_select: 'Välj en demo nedan',
        demo_desc: 'Välj en bransch för att höra AI i action',
        demo_cta_title: 'Redo att höra din egen AI-receptionist?',
        demo_cta_desc: 'Boka en 1-veckas gratis pilot så sätter vi upp en anpassad demo för ditt företag.',
        demo_cta_btn: 'Boka Din Gratis Pilot',
        demo_back: '← Hem',

        // Book page
        book_title: 'Boka Ett Gratis Samtal',
        book_name: 'Ditt Namn',
        book_email: 'Din E-post',
        book_company: 'Företagsnamn',
        book_service: 'Välj Tjänst',
        book_budget: 'Budget',
        book_details: 'Berätta mer om ditt projekt...',
        book_submit: 'Skicka',
        book_back: '← Hem'
    }
};

// Current language
let currentLang = 'en';

// Initialize translations
function initTranslations() {
    // Check for saved language preference
    const savedLang = localStorage.getItem('kyanite_lang');
    if (savedLang && translations[savedLang]) {
        currentLang = savedLang;
    }
    updateLanguage(currentLang);
}

// Update all translatable elements
function updateLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('kyanite_lang', lang);

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            // Handle elements with HTML content
            if (element.innerHTML.includes('<')) {
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = element.innerHTML;
                const textNodes = getTextNodes(tempDiv);
                if (textNodes.length > 0) {
                    textNodes[0].nodeValue = translations[lang][key];
                }
                element.innerHTML = tempDiv.innerHTML;
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    // Update placeholders for form inputs
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });

    // Update language switcher button
    updateLangSwitcher(lang);

    // Update html lang attribute
    document.documentElement.lang = lang;
}

// Get text nodes from element
function getTextNodes(node) {
    const textNodes = [];
    if (node.nodeType === Node.TEXT_NODE) {
        textNodes.push(node);
    }
    for (let child of node.childNodes) {
        textNodes.push(...getTextNodes(child));
    }
    return textNodes;
}

// Update language switcher button appearance
function updateLangSwitcher(lang) {
    const switchers = document.querySelectorAll('.lang-switcher');
    switchers.forEach(switcher => {
        const flag = switcher.querySelector('.lang-flag');
        const text = switcher.querySelector('.lang-text');

        if (flag && text) {
            if (lang === 'sv') {
                flag.textContent = '🇸🇪';
                text.textContent = 'SV';
            } else {
                flag.textContent = '🇬🇧';
                text.textContent = 'EN';
            }
        }
    });
}

// Toggle between languages
function toggleLanguage() {
    const newLang = currentLang === 'en' ? 'sv' : 'en';
    updateLanguage(newLang);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initTranslations);
