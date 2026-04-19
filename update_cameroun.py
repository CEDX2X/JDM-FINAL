import json

def update_cameroun_locale(file_path, lang):
    with open(file_path, 'r', encoding='utf-8') as f:
        data = json.load(f)

    # -------- TRAVEL --------
    if lang == 'fr':
        data['travel']['mod'] = "Admissions Garanties"
        data['travel']['neon'] = "Partenariats avec les Meilleures Universités"
        data['travel']['wild'] = "Dossiers Simplifiés"
        data['travel']['safari'] = "Constitution et validation rapide de votre dossier"
        data['travel']['alpine'] = "Logement Étudiant"
        data['travel']['grand'] = "Réservation de chambre sur le campus garantie"
        data['travel']['cta_title'] = "Prêt à Débuter vos Études en Chine ?"
        data['travel']['cta_desc'] = "Contactez nos conseillers pour discuter de votre profil et garantir votre rentrée académique dès maintenant."
        data['travel']['talk'] = "Prendre Rendez-vous"
    else:
        data['travel']['mod'] = "Guaranteed Admissions"
        data['travel']['neon'] = "Partnerships with Top Universities"
        data['travel']['wild'] = "Simplified Applications"
        data['travel']['safari'] = "Fast compilation and validation of your application"
        data['travel']['alpine'] = "Student Accommodation"
        data['travel']['grand'] = "Guaranteed on-campus room booking"
        data['travel']['cta_title'] = "Ready to Start Your Studies in China?"
        data['travel']['cta_desc'] = "Contact our advisors to discuss your profile and secure your academic intake today."
        data['travel']['talk'] = "Book an Appointment"

    # -------- LOGISTICS (JDM Import-Export) --------
    if lang == 'fr':
        data['log']['live_desc'] = "Plus de 500+ Fournisseurs Vérifiés"
        data['log']['air'] = "Fret Aérien Rapide"
        data['log']['air_desc'] = "Des solutions d'expédition express depuis la Chine vers Douala et Yaoundé."
        data['log']['a1'] = "Envois Express (Door-to-Door)"
        data['log']['a2'] = "Consolidation et Groupage Aérien"
        data['log']['book_pri'] = "Expédition Sécurisée"
        
        data['log']['ground'] = "Groupage Maritime & Dédouanement"
        data['log']['g1'] = "Envoi par Groupage Maritime (CBM)"
        data['log']['g2'] = "Procédures de Dédouanement Incluses"
        data['log']['g3'] = "Livraison dans nos locaux à Douala/Yaoundé"
        
        data['log']['mgt'] = "Paiements Chine"
        data['log']['m1'] = "Sourcing Direct Usine"
        data['log']['m2'] = "Contrôle Qualité (QC)"
        data['log']['m2_desc'] = "Vérification rigoureuse de votre marchandise en Chine avant toute expédition."
        data['log']['m3'] = "Paiement Alipay / WeChat"
        data['log']['m3_desc'] = "Paiement direct et sécurisé de vos fournisseurs sans complications bancaires."
        
        data['log']['elevate'] = "Développez votre Business avec JDM SARL"
        data['log']['elevate_desc'] = "Rejoignez les centaines de commerçants camerounais qui nous font confiance pour leurs approvisionnements depuis 2023."
        
        data['log']['ent'] = "Grossistes & Boutiques"
        data['log']['ent_title'] = "Achats en Gros"
        data['log']['ent_desc'] = "Recherche de fournisseurs B2B, négociation des prix et fret maritime adapté aux gros volumes."
        
        data['log']['sme'] = "Particuliers & Petites Commandes"
        data['log']['sme_title'] = "Achat au Détail et Groupage"
        data['log']['sme_desc'] = "Service d'achat sur plateformes chinoises (Taobao, 1688) et expédition groupée abordable."
    else:
        data['log']['live_desc'] = "Over 500+ Verified Suppliers"
        data['log']['air'] = "Fast Air Freight"
        data['log']['air_desc'] = "Express shipping solutions from China to Douala and Yaoundé."
        data['log']['a1'] = "Express Shipping (Door-to-Door)"
        data['log']['a2'] = "Consolidation and Air Groupage"
        data['log']['book_pri'] = "Secure Shipping"
        
        data['log']['ground'] = "Sea Groupage & Customs Clearance"
        data['log']['g1'] = "Sea Groupage Shipping (CBM)"
        data['log']['g2'] = "Customs Clearance Procedures Included"
        data['log']['g3'] = "Delivery at our Douala/Yaoundé offices"
        
        data['log']['mgt'] = "China Payments"
        data['log']['m1'] = "Direct Factory Sourcing"
        data['log']['m2'] = "Quality Control (QC)"
        data['log']['m2_desc'] = "Rigorous verification of your goods in China prior to shipping."
        data['log']['m3'] = "Alipay / WeChat Payment"
        data['log']['m3_desc'] = "Direct and secure payment to your suppliers without banking complications."
        
        data['log']['elevate'] = "Grow your Business with JDM SARL"
        data['log']['elevate_desc'] = "Join hundreds of Cameroonian merchants who have trusted us for their sourcing since 2023."
        
        data['log']['ent'] = "Wholesalers & Boutiques"
        data['log']['ent_title'] = "Wholesale Purchasing"
        data['log']['ent_desc'] = "B2B supplier sourcing, price negotiation, and sea freight suited for large volumes."
        
        data['log']['sme'] = "Individuals & Small Orders"
        data['log']['sme_title'] = "Retail Purchasing and Groupage"
        data['log']['sme_desc'] = "Purchasing service on Chinese platforms (Taobao, 1688) and affordable groupage shipping."

    with open(file_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

update_cameroun_locale('src/locales/fr.json', 'fr')
update_cameroun_locale('src/locales/en.json', 'en')
print("Advanced localized updates applied!")
