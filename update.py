import json

def update_locale(file_path, lang):
    with open(file_path, 'r', encoding='utf-8') as f:
        data = json.load(f)

    # Footer
    data['footer']['desc'] = "Votre partenaire de confiance en logistique, voyages, études en Chine et équipements sportifs, basé au Cameroun et en Chine." if lang == 'fr' else "Your trusted partner in logistics, travel, studies in China, and sports equipment, based in Cameroon and China."
    
    data['footer']['links']['privateAviation'] = "Études en Chine" if lang == 'fr' else "Study in China"
    data['footer']['links']['globalLogistics'] = "Import-Export & Achats" if lang == 'fr' else "Import-Export & Sourcing"
    data['footer']['links']['sportsApparel'] = "Boutique Sport Douala" if lang == 'fr' else "Sports Store Douala"
    data['footer']['links']['tradeFinance'] = "Facilitation des Paiements" if lang == 'fr' else "Payment Facilitation"

    # Contact
    data['contact']['desc'] = "Rencontrez notre équipe à Yaoundé, Douala ou en Chine pour donner vie à votre projet d'études, d'achat ou de voyage." if lang == 'fr' else "Meet our team in Yaoundé, Douala, or China to bring your study, sourcing, or travel projects to life."
    data['contact']['sub_travel'] = "Projet d'Études en Chine / Visa" if lang == 'fr' else "Study in China / Visa Project"
    data['contact']['sub_logistics'] = "Import-Export / Achat en Chine" if lang == 'fr' else "Import-Export / Sourcing in China"
    data['contact']['sub_sport'] = "Boutique / Équipement Sportif" if lang == 'fr' else "Store / Sports Equipment"
    data['contact']['hq_addr'] = "Douala & Yaoundé (Texaco École de Police), Cameroun<br />Chine" if lang == 'fr' else "Douala & Yaoundé (Texaco École de Police), Cameroon<br />China"
    data['contact']['corp'] = "Facilitation des Paiements" if lang == 'fr' else "Payment Facilitation"
    data['contact']['corp_desc'] = "Transactions sécurisées et fiables pour vos achats en Chine." if lang == 'fr' else "Secure and reliable transactions for your purchases in China."
    data['contact']['priv'] = "Orientation Étudiants & Business" if lang == 'fr' else "Student & Business Orientation"
    data['contact']['priv_desc'] = "Accueil à l'arrivée et accompagnement à la recherche d'opportunités en Chine." if lang == 'fr' else "Arrival reception and support in finding opportunities in China."
    
    # Home - Why Us (Keep their FR changes, sync EN)
    data['home']['why']['title'] = "L'Avantage JDM SARL" if lang == 'fr' else "The JDM SARL Advantage"
    data['home']['why']['desc'] = "Pourquoi les entreprises les plus exigeantes au Cameroun nous choisissent comme partenaire stratégique." if lang == 'fr' else "Why the most demanding enterprises in Cameroon choose us as their strategic partner."
    data['home']['why']['agilityDesc'] = "Notre vaste réseau nous permet d'agir plus rapidement et efficacement vers le contient Africain." if lang == 'fr' else "Our extensive network allows us to act more quickly and efficiently towards the African continent."
    
    # Home - Testimonials
    data['home']['testimonials']['t1'] = "\"L'accompagnement de JDM dans mes achats en Chine a été parfait. Ils ont trouvé des fournisseurs fiables et géré l'expédition jusqu'à Douala sans tracas.\"" if lang == 'fr' else "\"JDM's support in my sourcing from China was perfect. They found reliable suppliers and managed the shipping to Douala without any hassle.\""
    data['home']['testimonials']['p1'] = "PDG, Best Travel Service" if lang == 'fr' else "CEO, Best Travel Service"
    data['home']['testimonials']['t2'] = "\"Grâce au Pack Sérénité JDM, j'ai pu obtenir mon visa et mon admission en médecine (MBBS) en Chine très facilement. L'orientation sur place m'a beaucoup aidé.\"" if lang == 'fr' else "\"Thanks to the JDM Serenity Pack, I got my visa and medical (MBBS) admission in China very easily. The on-site orientation helped me a lot.\""
    data['home']['testimonials']['p2'] = "Étudiant en Chine" if lang == 'fr' else "Student in China"

    # Travel (JDM TRAVEL)
    data['travel']['badge'] = "Expertise Voyages & Études" if lang == 'fr' else "Travel & Study Expertise"
    data['travel']['title'] = "JDM" if lang == 'fr' else "JDM"
    data['travel']['title_sub'] = "Travel" if lang == 'fr' else "Travel"
    data['travel']['desc'] = "Anticipez vos démarches avec JDM TRAVEL pour garantir votre admission et votre visa en toute sérénité." if lang == 'fr' else "Anticipate your procedures with JDM TRAVEL to guarantee your admission and visa with complete peace of mind."
    data['travel']['prec'] = "Pack Sérénité" if lang == 'fr' else "Serenity Pack"
    data['travel']['prec_sub'] = "JDM" if lang == 'fr' else "JDM"
    data['travel']['prec_desc'] = "Évaluation de profil, accompagnement administratif, aide au visa, et opportunités de bourses d'études." if lang == 'fr' else "Profile evaluation, administrative support, visa assistance, and scholarship opportunities."
    data['travel']['routes'] = "Filières d'Excellence" if lang == 'fr' else "Programs of Excellence"
    data['travel']['elite'] = "Programmes Disponibles" if lang == 'fr' else "Available Programs"
    data['travel']['f1'] = "Santé : Médecine (MBBS), Pharmacie" if lang == 'fr' else "Health: Medicine (MBBS), Pharmacy"
    data['travel']['f2'] = "Technologie : Ingénierie, Informatique" if lang == 'fr' else "Technology: Engineering, Computer Science"
    data['travel']['f3'] = "Business & Langues : Management, Finance, Langue Chinoise" if lang == 'fr' else "Business & Languages: Management, Finance, Chinese Language"
    data['travel']['fast'] = "Nos" if lang == 'fr' else "Our"
    data['travel']['visa'] = "Services Inclus" if lang == 'fr' else "Included Services"
    data['travel']['v1'] = "Réservation de billets d'avion" if lang == 'fr' else "Flight ticket booking"
    data['travel']['v2'] = "Assistance & accompagnement visa" if lang == 'fr' else "Visa assistance & support"
    data['travel']['v3'] = "Accueil & orientation (Étudiants / Business)" if lang == 'fr' else "Welcome & orientation (Students / Business)"
    
    # Curated (Clean up)
    data['travel']['curated'] = "Opportunités en Chine" if lang == 'fr' else "Opportunities in China"
    data['travel']['curated_desc'] = "Nous vous accompagnons également dans la découverte de la Chine." if lang == 'fr' else "We also support you in exploring China."
    data['travel']['iconic'] = "Traduction de documents" if lang == 'fr' else "Document translation"
    data['travel']['amalfi'] = "Traductions certifiées" if lang == 'fr' else "Certified translations"
    data['travel']['amalfi_desc'] = "Accompagnement linguistique complet." if lang == 'fr' else "Comprehensive language support."

    # Logistics (JDM Import-Export)
    data['log']['badge'] = "ACHATS ET EXPÉDITION" if lang == 'fr' else "PURCHASING AND SHIPPING"
    data['log']['title'] = "JDM Import-Export &" if lang == 'fr' else "JDM Import-Export &"
    data['log']['title_sub'] = "Sourcing" if lang == 'fr' else "Sourcing"
    data['log']['desc'] = "Recherche d'articles et de fournisseurs fiables en Chine, avec facilitation des paiements et expédition vers le Cameroun." if lang == 'fr' else "Searching for reliable items and suppliers in China, with payment facilitation and shipping to Cameroon."
    data['log']['int'] = "Nos Services" if lang == 'fr' else "Our Services"
    data['log']['int_desc'] = "Nous vous assurons un accompagnement complet pour vos achats en Asie." if lang == 'fr' else "We provide you with comprehensive support for your purchases in Asia."
    data['log']['ocean'] = "Achats en Chine" if lang == 'fr' else "Purchasing in China"
    data['log']['o1'] = "Recherche d'articles et de fournisseurs fiables" if lang == 'fr' else "Searching for reliable items and suppliers"
    data['log']['o2'] = "Facilitation des paiements vers la Chine" if lang == 'fr' else "Facilitating payments to China"
    data['log']['o3'] = "Expédition rapide et sécurisée vers le Cameroun" if lang == 'fr' else "Fast and secure shipping to Cameroon"
    data['log']['mgt_title'] = "Accompagnement Business" if lang == 'fr' else "Business Support"
    data['log']['m1_desc'] = "Nous trouvons pour vous les meilleures offres sur le marché chinois." if lang == 'fr' else "We find the best offers on the Chinese market for you."

    with open(file_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

update_locale('src/locales/fr.json', 'fr')
update_locale('src/locales/en.json', 'en')
print("Locales updated!")
