/******************* CUESTIONS  **********************/

const questions = [

    {
        id: 1,
        category: "geography",
        question: "¿Cuál es el idioma más hablado en Suiza?",
        correctAnswer: ["Alemán"],
        incorrectAnswers: ["Sueco", "Ingles", "El del dinero"]
    },
    {
        id: 2,
        category: "geography",
        question: "¿Qué país está entre Perú y Colombia?",
        correctAnswer: ["Ecuador"],
        incorrectAnswers: ["Brasil", "Argentina", "Chile"]
    },
    {
        id: 3,
        category: "geography",
        question: "¿Cuál es el río más largo de Europa Occidental?",
        correctAnswer: ["Rin"],
        incorrectAnswers: ["Tajo", "Volga", "Amazonas"]
    },
    {
        id: 4,
        category: "geography",
        question: "¿Qué lago baña la ciudad de Ginebra?",
        correctAnswer: ["Lago Leman"],
        incorrectAnswers: ["Lago Titicaca", "Lago Onega", "Lago Vänern"]
    },
    {
        id: 5,
        category: "geography",
        question: "¿En qué país europeo se habla el magyar?",
        correctAnswer: ["Hungría"],
        incorrectAnswers: ["Bulgaria", "Francia", "Suiza"]
    },
    {
        id: 6,
        category: "geography",
        question: "¿Qué palabra significa “hijo de” en los apellidos escoceses?",
        correctAnswer: ["Mac"],
        incorrectAnswers: ["Lac", "Rac", "Sac"]
    },
    {
        id: 7,
        category: "geography",
        question: "¿Cuál es la capital de Indonesia?",
        correctAnswer: ["Yakarta"],
        incorrectAnswers: ["Mali", "Estambul", "Tokio"]
    },
    {
        id: 8,
        category: "geography",
        question: "¿En qué país se encuentra el pico Aconcagua?",
        correctAnswer: ["Argentina"],
        incorrectAnswers: ["Ecuador", "Chile", "China"]
    },
    {
        id: 8,
        category: "geography",
        question: "¿A qué país pertenece la isla de Creta?",
        correctAnswer: ["Grecia"],
        incorrectAnswers: ["Italia", "Chile", "China"]
    },
    {
        id: 9,
        category: "entertaiment",
        question: "¿Cuál es el oso más famoso del parque nacional de Yellowstone?",
        correctAnswer: ["Yogui"],
        incorrectAnswers: ["Chu-lin", "Bubu", "Polar"]
    },
    {
        id: 10,
        category: "entertaiment",
        question: "¿Qué actor, que no era el feo ni el malo, era el bueno?",
        correctAnswer: ["Clint Eastwood"],
        incorrectAnswers: ["Marlon Brando", "John Wayne", "Alfredo Landa"]
    },
    {
        id: 11,
        category: "entertaiment",
        question: "¿Con qué director de cine italiano se casó la actriz Giulietta Masina?",
        correctAnswer: ["Federico Fellini"],
        incorrectAnswers: ["Marcelo Mastroiani", "Alejandro Amenabar", "Roberto Benigni"]
    },
    {
        id: 12,
        category: "entertaiment",
        question: "¿Quién fue la gran ganadora de los Grammy Latinos 2018?",
        correctAnswer: ["Rosalia"],
        incorrectAnswers: ["Rosa OT", "Masiel", "Las grecas"]
    },
    {
        id: 13,
        category: "entertaiment",
        question: "¿Cuál de los Siete Enanitos no tenía barba?",
        correctAnswer: ["Mudito"],
        incorrectAnswers: ["Mocoso", "Gruñón", "Sabio"]
    },
    {
        id: 14,
        category: "entertaiment",
        question: "¿Qué conocido actor español protagonizó “La máscara del Zorro” en 1998?",
        correctAnswer: ["Antonio Banderas"],
        incorrectAnswers: ["Sean Connery", "Mario Casas", "Arturo Valls"]
    },
    {
        id: 15,
        category: "entertaiment",
        question: "¿Cuál es el tipo de música por el que se conoció mundialmente Astrud Gilberto?",
        correctAnswer: ["Bossa Nova"],
        incorrectAnswers: ["Lambada", "Salsa", "Bachata"]
    },
    {
        id: 16,
        category: "entertaiment",
        question: "¿Qué canción de Los Beatles ha sido la más grabada?",
        correctAnswer: ["Yesterday"],
        incorrectAnswers: ["Yellow submarine", "Help", "Let it be"]
    },
    {
        id: 17,
        category: "entertaiment",
        question: '¿Quién dijo: “Hitler me ha copiado el bigote”?',
        correctAnswer: ["Charlie Chaplin"],
        incorrectAnswers: ["Chiquito de la calzada", "Cantinflas", "Bigote Arrocet"]
    },
    {
        id: 18,
        category: "entertaiment",
        question: "¿Quién fue la primera voz de Mickey Mouse?",
        correctAnswer: ["Walt Disney"],
        incorrectAnswers: ["Joselito", "Jose Mota", "Tom Hanks"]
    },
    {
        id: 19,
        category: "history",
        question: "¿Qué reina británica era hija de los Reyes Católicos?",
        correctAnswer: ["Catalina de Aragón"],
        incorrectAnswers: ["Isabel I", "Juana la loca", "Maria Antonieta"]
    },
    {
        id: 20,
        category: "history",
        question: "¿Qué país fue llamado la Galia por los romanos?",
        correctAnswer: ["Francia"],
        incorrectAnswers: ["Portugal", "Alemania", "Italia"]
    },
    {
        id: 21,
        category: "history",
        question: "¿Qué batalla crucial tuvo lugar en 1815?",
        correctAnswer: ["Waterloo"],
        incorrectAnswers: ["Batalla de los 5 ejercitos", "Batalla de las Termopilas", "Batalla de Verdún"]
    },
    {
        id: 22,
        category: "history",
        question: "¿Cuál era la ciudad hogar de Marco Polo?",
        correctAnswer: ["Venecia"],
        incorrectAnswers: ["Florencia", "Roma", "Albacete"]
    },
    {
        id: 23,
        category: "history",
        question: "¿Quién era el emperador de Roma cuando murió Jesús?",
        correctAnswer: ["Tiberio"],
        incorrectAnswers: ["Julio César", "Trajano", "Adriano"]
    },
    {
        id: 24,
        category: "history",
        question: "¿Cómo se conoce a la policía italiana?",
        correctAnswer: ["Carabinieri"],
        incorrectAnswers: ["Bobbies", "Maderos", "Langostinieri"]
    },
    {
        id: 25,
        category: "history",
        question: "¿Cuál fue la dictadura que comenzó en España en el año 1923?",
        correctAnswer: ["General Primo de Rivera"],
        incorrectAnswers: ["Franco", "Pinnochet", "Mussolini"]
    },
    {
        id: 26,
        category: "history",
        question: "¿Quién fue el primer presidente de los Estados Unidos?",
        correctAnswer: ["George Washington"],
        incorrectAnswers: ["John Adams", "Tomas Jefferson", "James Madison"]
    },
    {
        id: 27,
        category: "history",
        question: "¿Qué país africano fue fundado en 1847 por esclavos americanos liberados?",
        correctAnswer: ["Liberia"],
        incorrectAnswers: ["Congo", "Sudafrica", "Argelia"]
    },
    {
        id: 28,
        category: "history",
        question: "¿En qué ciudad se entrevistaron Franco y Hitler??",
        correctAnswer: ["Hendaya"],
        incorrectAnswers: ["Badajoz", "Paris", "Madrid"]
    },
    {
        id: 29,
        category: "science",
        question: "¿Cómo se llaman las células nerviosas?",
        correctAnswer: ["Neuronas"],
        incorrectAnswers: ["Amigdalas", "Globulos blancos", "Globulos rojos"]
    },
    {
        id: 30,
        category: "science",
        question: "¿Qué es más valioso?",
        correctAnswer: ["Brillante"],
        incorrectAnswers: ["Diamante", "Oro", "Plata"]
    },
    {
        id: 31,
        category: "science",
        question: "¿En qué mes el sol está más cerca de la Tierra?",
        correctAnswer: ["Diciembre"],
        incorrectAnswers: ["Enero", "Junio", "Agosto"]
    },
    {
        id: 32,
        category: "science",
        question: "¿En qué parte del cuerpo se encuentra la piel más gruesa?",
        correctAnswer: ["Espalda"],
        incorrectAnswers: ["Pies", "Manos", "Cabeza"]
    },
    {
        id: 33,
        category: "science",
        question: "¿A qué le tiene miedo una persona que sufre vértigo?",
        correctAnswer: ["A las alturas"],
        incorrectAnswers: ["A las abejas", "Al agua", "A la oscuridad"]
    },
    {
        id: 34,
        category: "science",
        question: "¿Cómo se llama la ciencia que estudia la sangre?",
        correctAnswer: ["Hematología"],
        incorrectAnswers: ["Neurología", "Sangrelogía", "Venología"]
    },
    {
        id: 35,
        category: "science",
        question: "¿Qué fabricó Alessandro Volta, por primera vez, en 1800?",
        correctAnswer: ["Pila"],
        incorrectAnswers: ["Coche", "Batería", "Play Station"]
    },
    {
        id: 36,
        category: "science",
        question: "¿Cuál de los cinco sentidos se desarrolla el primero?",
        correctAnswer: ["Olfato"],
        incorrectAnswers: ["Vista", "Tacto", "Oído"]
    },
    {
        id: 37,
        category: "science",
        question: "¿Cuál es el dedo más sensible de la mano?",
        correctAnswer: ["Indice"],
        incorrectAnswers: ["Pulgar", "Anular", "Corazón"]
    },

];

export {questions};