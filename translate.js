const content = document.getElementById('content');
const languageSelect = document.getElementById('language-select');

const translations = {
    "en": {
        "title": "Deniz Hönigs - Academic",
        "intro": "I'm Deniz Hönigs, a 12<sup>th</sup> grade student studying in <a href=\"https://sj.k12.tr\" target=\"_blank\">Saint-Joseph French High School</a>",
        "cvLink": "[TR] / [FR]",
        "grades": "Grades",
        "testResults": "Test Results",
        "prepClass": "Prep Class",
        "ninthGrade": "9th Grade",
        "tenthGrade": "10th Grade",
        "eleventhGrade": "11th Grade",
        "twelfthGrade": "12th Grade",
        "sat": "SAT",
        "dalfC2": "DALF C2",
        "dalfC1": "DALF C1",
        "delfB2": "DELF B2",
        "ielts": "IELTS",
        "firstTerm": "First Term",
        "secondTerm": "Second Term",
        "maths": "Maths",
        "readingWriting": "Reading & Writing",
        "comprehensionProductionOrale": "Compréhension et production orales (CO + PO)",
        "comprehensionProductionEcrites": "Compréhension et production écrites (CE + PE)",
        "comprehensionOral": "Compréhension de l'oral (CO)",
        "comprehensionEcrits": "Compréhension des écrits (CE)",
        "productionEcrite": "Production écrite (PE)",
        "productionOrale": "Production orale (PO)",
        "backToMainPage": "Click here to go back to the main page",
    },
    "tr": {
        "title": "Deniz Hönigs - Akademik",
        "intro": "Ben Deniz Hönigs, <a href=\"https://sj.k12.tr\" target=\"_blank\">Saint-Joseph Fransız Lisesi</a>'nde okuyan 12. sınıf öğrencisiyim.",
        "cvLink": "[TR] / [FR]",
        "grades": "Notlar",
        "testResults": "Sınav Sonuçları",
        "prepClass": "Hazırlık Sınıfı",
        "ninthGrade": "9. Sınıf",
        "tenthGrade": "10. Sınıf",
        "eleventhGrade": "11. Sınıf",
        "twelfthGrade": "12. Sınıf",
        "sat": "SAT",
        "dalfC2": "DALF C2",
        "dalfC1": "DALF C1",
        "delfB2": "DELF B2",
        "ielts": "IELTS",
        "firstTerm": "Birinci Dönem",
        "secondTerm": "İkinci Dönem",
        "maths": "Matematik",
        "readingWriting": "Okuma ve Yazma",
        "comprehensionProductionOrale": "Sözlü Anlama ve Üretim (CO + PO)",
        "comprehensionProductionEcrites": "Yazılı Anlama ve Üretim (CE + PE)",
        "comprehensionOral": "Sözlü Anlama (CO)",
        "comprehensionEcrits": "Yazılı Anlama (CE)",
        "productionEcrite": "Yazılı Üretim (PE)",
        "productionOrale": "Sözlü Üretim (PO)",
        "backToMainPage": "Ana sayfaya dönmek için buraya tıklayın.",
    },
    "fr": {
        "title": "Deniz Hönigs - Académique",
        "intro": "Je suis Deniz Hönigs, un élève de terminale (12ème année) au <a href=\"https://sj.k12.tr\" target=\"_blank\">Lycée Français Saint-Joseph</a>",
        "cvLink": "[TR] / [FR]",
        "grades": "Notes",
        "testResults": "Résultats des tests",
        "prepClass": "Classe préparatoire",
        "ninthGrade": "Classe de 9ème",
        "tenthGrade": "Classe de 10ème",
        "eleventhGrade": "Classe de 11ème",
        "twelfthGrade": "Classe de 12ème",
        "sat": "SAT",
        "dalfC2": "DALF C2",
        "dalfC1": "DALF C1",
        "delfB2": "DELF B2",
        "ielts": "IELTS",
        "firstTerm": "Premier Trimestre",
        "secondTerm": "Deuxième Trimestre",
        "maths": "Mathématiques",
        "readingWriting": "Lecture et Écriture",
        "comprehensionProductionOrale": "Compréhension et Production Orale (CO + PO)",
        "comprehensionProductionEcrites": "Compréhension et Production Écrite (CE + PE)",
        "comprehensionOral": "Compréhension de l'Oral (CO)",
        "comprehensionEcrits": "Compréhension des Écrits (CE)",
        "productionEcrite": "Production Écrite (PE)",
        "productionOrale": "Production Orale (PO)",
        "backToMainPage": "Cliquez ici pour revenir à la page principale.",
    }
};

function translatePage(language) {
    for (const element of content.querySelectorAll('*')) {
        if (element.textContent.trim()) {
            const translatedText = translations[language][element.textContent.trim()] || element.textContent.trim();
            element.textContent = translatedText;
        }
    }
}

languageSelect.addEventListener('change', () => {
    const selectedLanguage = languageSelect.value;
    translatePage(selectedLanguage);
    document.documentElement.lang = selectedLanguage; // Set lang attribute
});

// Initial translation on page load
translatePage('en'); // Default to English