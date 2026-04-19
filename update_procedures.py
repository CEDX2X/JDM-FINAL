import json

def update_procedures(file_path, lang):
    with open(file_path, 'r', encoding='utf-8') as f:
        data = json.load(f)

    if lang == 'fr':
        # Section Admission en Chine
        data['travel']['elite'] = "Admission Universitaire en Chine"
        data['travel']['f1'] = "Placement dans des universités reconnues"
        data['travel']['f2'] = "Aide au choix de filière (médecine, ingénierie, commerce…)"
        data['travel']['f3'] = "Accès à des bourses d’études (CSC et autres)"
        data['travel']['f4'] = "Pré-inscription rapide"
        data['travel']['inquire'] = "Commencer ma candidature"

        # Section Visa & Documentation
        data['travel']['fast'] = ""
        data['travel']['visa'] = "Visa Étudiant Chine (X1 / X2)"
        data['travel']['v1'] = "Constitution complète du dossier"
        data['travel']['v2'] = "Assistance pour lettre d’admission & JW202/JW201"
        data['travel']['v3'] = "Prise de rendez-vous ambassade"
        data['travel']['v4'] = "Suivi jusqu’à obtention du visa"
        data['travel']['check'] = "Vérifier mon éligibilité"
    else:
        # English translation
        data['travel']['elite'] = "University Admission in China"
        data['travel']['f1'] = "Placement in recognized universities"
        data['travel']['f2'] = "Assistance in choosing a major (medicine, engineering, business...)"
        data['travel']['f3'] = "Access to scholarships (CSC and others)"
        data['travel']['f4'] = "Fast pre-registration"
        data['travel']['inquire'] = "Start my application"

        data['travel']['fast'] = ""
        data['travel']['visa'] = "China Student Visa (X1 / X2)"
        data['travel']['v1'] = "Complete application preparation"
        data['travel']['v2'] = "Assistance with admission letter & JW202/JW201"
        data['travel']['v3'] = "Embassy appointment booking"
        data['travel']['v4'] = "Follow-up until visa issuance"
        data['travel']['check'] = "Check my eligibility"

    with open(file_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

update_procedures('src/locales/fr.json', 'fr')
update_procedures('src/locales/en.json', 'en')
print("Procedures updated!")
