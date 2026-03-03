// Schedule data for CBS Symposium 2026

// Session types with icons
export type SessionType =
    | "inaugural"           // 🎤 Inauguración
    | "research_lecture"    // 🎓 Ponencias de investigación
    | "speed_talk"         // ⚡ Speed talk
    | "conversatorio"      // 💬 Conversatorios
    | "closing"            // 🎤 Clausura
    | "break";             // ☕ Pausas y almuerzos

export interface SessionCard {
    time: string;
    title: string;
    type: SessionType;
    description?: string;
    speakers?: Speaker[];
    moderator?: Speaker;           // Para ponencias y conversatorios
    panelists?: Speaker[];         // Para conversatorios (3-4 personas)
    icon: string;                  // Icon emoji para cada tipo
    subtitle?: string;             // Para invitaciones especiales
    hasDrawing?: boolean;          // Para clausura con sorteo
}

export interface Speaker {
    name: string;
    role: string;
    avatar: string;                // Iniciales o emoji
    institution?: string;          // Universidad/institución
    bio?: string;                  // Biografía del ponente
}

export interface DayColumn {
    dayName: string;
    date: string;
    colorClass: string;
    sessions: SessionCard[];
}

// Legacy interfaces for backward compatibility
export interface ScheduleDay {
    date: string;
    dayNumber: string;
    theme: string;
    eventType: string;
    color: "cyan" | "purple" | "green";
    activities: Activity[];
}

export interface Activity {
    time: string;
    title: string;
    description: string;
    tags: ActivityTag[];
}

export interface ActivityTag {
    label: string;
    type: "staff" | "moderator" | "speaker" | "volunteer";
}


// New grid-based schedule data for elegant column layout
export const dayColumns: DayColumn[] = [
    {
        dayName: "Jueves",
        date: "5 MAR",
        colorClass: "text-cyan-400",
        sessions: [
            {
                time: "09:30 - 10:00",
                title: "Inauguración Oficial",
                type: "inaugural",
                icon: "🎤",
                description: "Palabras iniciales del maestro de ceremonia, presentación de la mesa de honor y visión del evento I Simposio Internacional de Biología Sintética CBS 2026 y palabra de nuestras autoridades.",
                speakers: [
                    { name: "Marko Zapata", role: "Maestro de Ceremonia", avatar: "/symposium-cbs/images/team/Marko_zapata.jpg" },
                ],
                subtitle: "Te invitamos a ser parte del inicio de este evento transformador en biología sintética.",
            },
            {
                time: "10:00 - 11:15",
                title: "CF2H: a Cell-Free Two-hybrid platform for rapid protein binder screening and more",
                type: "research_lecture",
                icon: "🎓",
                description: "Avances en plataformas de screening de proteínas utilizando tecnología cell-free en biología sintética.",
                speakers: [
                    { name: "Julien Capin", role: "Ponente", avatar: "/symposium-cbs/images/panelist/Julien_Capin.jpg", institution: "Francia", bio: "Julien obtuvo un máster en Biotecnología en la ENSTBB y completó un doctorado en Biología Sintética en la University of Bristol. Su investigación se centra en la entrega de CRISPR-Cas9, vacunas proteicas contra SARS-CoV-2 y, desde 2021, sistemas libres de células bacterianos y desarrollo de biosensores en el Centre de Biologie Structurale." },
                ],
                moderator: { name: "Rodrigo Puertas", role: "Moderador", avatar: "/symposium-cbs/images/team/Rodrigo_Puertas.png", bio: "Coordinador Académico del I Simposio Internacional de Biología Sintética CBS 2026" },
            },
            {
                time: "11:15 - 12:00",
                title: "Receso",
                type: "break",
                icon: "☕",
            },
            {
                time: "12:00 - 01:15",
                title: "Bacterias programables como dispositivos vivos para detectar y monitorear metabolitos intestinales",
                type: "research_lecture",
                icon: "🎓",
                description: "Desarrollo de bacterias modificadas genéticamente como biosensores para monitoreo de metabolitos en sistemas biológicos.",
                speakers: [
                    { name: "Ana Zúñiga", role: "Ponente", avatar: "/symposium-cbs/images/panelist/Ana_Zuñiga.jpeg", institution: "Francia", bio: "La Dra. Ana Zúñiga obtuvo su doctorado en Genética Molecular y Microbiología en la Pontificia Universidad Católica de Chile. Fue postdoc FONDECYT y luego investigadora en el Centre de Biologie Structurale. Desde 2022 es investigadora permanente en INSERM, liderando biosensores bacterianos." },
                ],
                moderator: { name: "Rodrigo Puertas", role: "Moderador", avatar: "/symposium-cbs/images/team/Rodrigo_Puertas.png", bio: "Coordinador Académico del I Simposio Internacional de Biología Sintética CBS 2026" },
            },
            {
                time: "01:15 - 03:00",
                title: "Almuerzo",
                type: "break",
                icon: "🍽️",
            },
            {
                time: "03:00 - 04:20",
                title: "Synthetic biology and synthetic genomics to engineer and understand the microbes of tomorrow",
                type: "research_lecture",
                icon: "🎓",
                description: "Perspectivas sobre genomic sintética y aplicaciones en la ingeniería de microorganismos para el futuro.",
                speakers: [
                    { name: "Daniel Schindler", role: "Ponente", avatar: "/symposium-cbs/images/panelist/Daniel_Schindler.jpeg", institution: "Alemania", bio: "Daniel estudió Biología en la Ruhr University Bochum y obtuvo su PhD en la Philipps University Marburg. Fue postdoc en la University of Edinburgh y el MIB. Desde 2025 es profesor en la Heidelberg University (ZMBH)." },
                ],
                moderator: { name: "Mijael Espinoza", role: "Moderador", avatar: "/symposium-cbs/images/team/Mijael_Espinoza.jpg", bio: "Miembro del comité académico del I Simposio Internacional de Biología Sintética CBS 2026" },
            },
            {
                time: "04:20 - 04:30",
                title: "Receso",
                type: "break",
                icon: "☕",
            },
            {
                time: "04:30 - 05:15",
                title: "Flujo integral en Biología sintética: Herramientas clave para optimizar cada etapa",
                type: "speed_talk",
                icon: "⚡",
                description: "Presentación rápida de herramientas integrales para optimizar los procesos en biología sintética.",
                speakers: [
                    { name: "Consuelo Martell Arellano", role: "Biolab Scientific", avatar: "/symposium-cbs/images/panelist/Consuelo_biolab.jpeg", bio: "Consuelo Martell Arellano, bióloga por la Universidad Nacional Agraria la Molina, con mas de 10 años de experiencia en el sector de tecnología para laboratorios. Actualmente me desempeño como Gerente de producto en BIOLAB SCIENTIFIC liderando estrategias técnicas y comerciales para soluciones en la investigación." },
                ],
            },
        ],
    },
    {
        dayName: "Viernes",
        date: "6 MAR",
        colorClass: "text-purple-400",
        sessions: [
            {
                time: "08:00 - 09:15",
                title: "Producción de Proteínas Recombinantes por Biología Sintética",
                type: "research_lecture",
                icon: "🎓",
                description: "Aplicación de técnicas de biología sintética en la producción eficiente de proteínas recombinantes.",
                speakers: [
                    { name: "Alberto Donayre", role: "Ponente", avatar: "/symposium-cbs/images/panelist/Donayre.jpg", institution: "UTEC", bio: "Doctorado obtenido en Genética y Biotecnología de Plantas, en el Programa de Posgrado de CINVESTAV-Instituto Politécnico Nacional-IPN, México en 2009. Estudios Postdoctorales en Universidad Nacional Autónoma de México (UNAM), en 2009-2011. Durante cinco años desarrollo estancia Postdoctoral en Biología Sintética en Colorado State University (CSU), Fort Collins, USA. Profesor de Ingenieria en Biotecnologia (Tec de Monterrey), en 2014-2016. Áreas de Investigación: Biología Sintética, Biotecnología y Regulación Genética (Genómica Funcional)." },
                ],
                moderator: { name: "Valery Velasquez", role: "Moderador", avatar: "/symposium-cbs/images/team/Valery_Velasquez.jpg", bio: "Miembro del comité académico y alianzas del I Simposio Internacional de Biología Sintética CBS 2026" },
            },
            {
                time: "09:15 - 10:00",
                title: "Receso",
                type: "break",
                icon: "☕",
            },
            {
                time: "10:00 - 11:15",
                title: "Uso y abuso de factores de transcripción bacterianos",
                type: "research_lecture",
                icon: "🎓",
                description: "Desarrollo y aplicación de biosensores basados en principios de biología sintética para detección de analitos.",
                speakers: [
                    { name: "Daniel Guerra Giraldez", role: "Ponente", avatar: "/symposium-cbs/images/panelist/Daniel_guerra.jpg", institution: "UPCH", bio: "El Dr. Daniel Guerra Giraldez es Profesor en la Facultad de Ciencias e Ingeniería, Jefe del Departamento Académico de Ingeniería y Director del Laboratorio de Moléculas Individuales en la Universidad Peruana Cayetano Heredia. Su trabajo acorta la brecha entre la biofísica fundamental y el potencial transformador de la biología sintética, abarcando desde el estudio de alta resolución en Biofísica de Moléculas Individuales hasta la ingeniería de circuitos genéticos funcionales. En el ecosistema de la biología sintética, el Dr. Guerra desarrolla Biosensores, del tipo de Célula Entera, de transcripción-traducción libre de células, y de proteínas quiméricas, destacando sistemas para la detección de mercurio, arsénico y cadmio con alta especificidad. Sus investigaciones sobre la dinámica de la transcripción incluye el ensayo de nuevos inhibidores de la ARN polimerasa de Mycobacterium tuberculosis. Desde su laboratorio, integra la red Reclone, que aboga por la Biología Molecular de Código Abierto (Open-Source). Al crear y difundir herramientas para la fabricación local de enzimas, está ayudando a descentralizar la biotecnología y a empoderar a una nueva generación de científicos en América Latina." },
                ],
                moderator: { name: "Valery Velasquez", role: "Moderador", avatar: "/symposium-cbs/images/team/Valery_Velasquez.jpg", bio: "Miembro del comité académico y alianzas del I Simposio Internacional de Biología Sintética CBS 2026" },
            },
            {
                time: "12:00 - 02:00",
                title: "Almuerzo",
                type: "break",
                icon: "🍽️",
                description: "Tiempo para almorzar y networking informal entre participantes.",
            },
            {
                time: "02:00 - 03:15",
                title: "Herramientas moleculares en Biología Sintética",
                type: "research_lecture",
                icon: "🎓",
                description: "Análisis de herramientas moleculares esenciales para investigación y aplicación de biología sintética.",
                speakers: [
                    { name: "Benjamín Díaz Zamora", role: "Ponente", avatar: "/symposium-cbs/images/team/benja_cbs.jpg", institution: "UNMSM", bio: "Benjamín Díaz Zamora es investigador en Biología Sintética con experiencia como becario en el laboratorio del Dr. Ming-Ru Wu en el Instituto Oncológico Dana-Farber y la Facultad de Medicina de Harvard. Se especializa en ensamblaje de biopartes, cultivo y transformación bacteriana, cultivo de células de mamíferos, transfección y caracterización de circuitos genéticos. Su objetivo es establecer el primer biocentro de biología sintética en Perú para reducir los costos del ensamblaje de ADN en circuitos biológicos." },
                ],
                moderator: { name: "Rodrigo Puertas", role: "Moderador", avatar: "/symposium-cbs/images/team/Rodrigo_Puertas.png", bio: "Miembro del comité académico y alianzas del I Simposio Internacional de Biología Sintética CBS 2026" },
            },
            {
                time: "03:15 - 04:00",
                title: "Receso",
                type: "break",
                icon: "☕",
            },
            {
                time: "04:00 - 05:20",
                title: "Liderazgo Estudiantil y el Poder de la Comunidad en SynBio",
                type: "conversatorio",
                icon: "💬",
                description: "Diálogo abierto sobre cómo los estudiantes y comunidades impulsan la investigación y adopción de biología sintética.",
                moderator: { name: "Mijael Espinoza", role: "Moderador", avatar: "/symposium-cbs/images/team/Mijael_Espinoza.jpg", bio: "Miembro del comité académico y alianzas del I Simposio Internacional de Biología Sintética CBS 2026" },
                panelists: [
                    { name: "Lya Torres", role: "Embajadora iGEM", avatar: "/symposium-cbs/images/panelist/Lya_conversatorio.jpeg", bio: "Egresada de la Lic. en Biotecnología, con experiencia en investigación experimental en ingeniería de proteínas y evaluación biológica. Coordinadora del laboratorio experimental de su equipo iGEM en 2025. Actual embajadora de Latinoamérica en iGEM" },
                    { name: "Mariana Fernandez", role: "Embajadora iGEM", avatar: "/symposium-cbs/images/panelist/Mariana_Rodriguez.jpg", bio: "Mariana Rodríguez es estudiante mexicana de Ingeniería en Biotecnología en el Tecnológico de Monterrey, Campus Chihuahua. Apasionada por la biología y la innovación científica, participó en iGEM 2025, donde destacó por desarrollar soluciones biotecnológicas con impacto positivo en su comunidad. " },
                    { name: "Nelzy Mendoza", role: "Investigadora Peruana", avatar: "/symposium-cbs/images/panelist/Nelzy_mendoza.jpg", bio: "Bachiller en Bioingeniería (2025) con experiencia en biología sintética e ingeniería de tejidos. Integrante de AylluGene en iGEM Design League 2023 donde su equipo obtuvo Medalla de Plata y el reconocimeinto “Best Partnerships & Collaboration”. Realizó estancias en Max Planck MtL y University of Alberta. Reconocida como Leader of Tomorrow por Global Biotech Revolution (GBR), lo cual le permitió participar en el GAP Summit 2025 en la universidad de Cambridge." },
                ],
            },
        ],
    },
    {
        dayName: "Sábado",
        date: "7 MAR",
        colorClass: "text-emerald-400",
        sessions: [
            {
                time: "08:00 - 09:15",
                title: "AvianGuard: Plataforma de vacuna oral de doble acción mediante ingeniería de probióticos",
                type: "research_lecture",
                icon: "🎓",
                description: "Desarrollo innovador de vacunas orales mediante ingeniería sintética de probióticos para aplicaciones veterinarias.",
                speakers: [
                    { name: "Valentina Ramírez", role: "Ponentes", avatar: "/symposium-cbs/images/panelist/valentina.jpg", institution: "Ecuador", bio: "Bióloga e investigadora en biología sintética y biotecnología aplicada. Miembro del Equipo iGEM Ecuador, medalla de oro en iGEM Competition 2025. Fundadora de espacios universitarios de bioingeniería. Iniciará una maestría en la UNESP con beca CAPES." },
                    { name: "Wladimir Tandapilco", role: "Ponentes", avatar: "/symposium-cbs/images/panelist/wladimir.jpg", institution: "Ecuador", bio: "Ingeniero en Biotecnología con seis años de experiencia en microbiología molecular, biología sintética, modelado matemático y diseño experimental. Instructor de Dry Lab de iGEM Ecuador, integrando diseño de circuitos genéticos con IA para aplicaciones terapéuticas e industriales, y mentor de jóvenes científicos en Latinoamérica." },

                ],
                moderator: { name: "Daniela Rojas", role: "Moderador", avatar: "/symposium-cbs/images/team/daniela_rojas.jpg", bio: "Miembro de la coordinación de logística del I Simposio Virtual Internacional Synbio" },
            },
            {
                time: "09:15 - 10:00",
                title: "Receso",
                type: "break",
                icon: "☕",
            },
            {
                time: "10:00 - 11:15",
                title: "Las levaduras convencionales y no convencionales en aplicaciones de Synbio",
                type: "research_lecture",
                icon: "🎓",
                description: "Aplicación de levaduras como chasis biológicos para producción y síntesis de compuestos en biología sintética.",
                speakers: [
                    { name: "Benjamín Mendoza Téllez", role: "Ponente", avatar: "/symposium-cbs/images/panelist/benjamin_Mendoza.jpg", institution: "México", bio: "Biólogo mexicano de la UNAM, cursa un posgrado en Ciencias Bioquímicas. Se especializa en biología sintética aplicada a edición genética. Ganó medalla de oro en iGEM 2024 y colabora con SynBio LATAM para impulsar la disciplina en la región." },
                ],
                moderator: { name: "Marko Zapata", role: "Moderador", avatar: "/symposium-cbs/images/team/Marko_zapata.jpg", bio: "Presidente del comité y coordinador de logística del I Simposio Virtual Internacional Synbio" },
            },
            {
                time: "11:15 - 02:00",
                title: "Almuerzo",
                type: "break",
                icon: "🍽️",
                description: "Tiempo para almorzar y networking informal entre participantes.",
            },
            {
                time: "02:00 - 03:15",
                title: "Aplicación de Mycoplasma sp. como chasis en la producción de moléculas de interés biomédico",
                type: "research_lecture",
                icon: "🎓",
                description: "Uso innovador de Mycoplasma como plataforma celular para síntesis de compuestos farmacéuticos y biomédicos.",
                speakers: [
                    { name: "Alonso Segura Valverde", role: "Ponente", avatar: "/symposium-cbs/images/panelist/alonso.jpg", institution: "Costa Rica", bio: "Biólogo molecular y bioinformático con experiencia académica en biología sintética aplicada a biomedicina.  Ha trabajado en múltiples laboratorios nacionales e internacionales y en este momento está finalizando su Licenciatura en Biotecnología en la Universidad Nacional de Costa Rica. Contribuye activamente al ecosistema de biología sintética en Latinoamérica a través de co-fundar y dirigir SynBio LATAM y coordinar el SynBio Bootcamp/Hackathon, entre otras actividades extracurriculares. " },
                ],
                moderator: { name: "Marko Zapata", role: "Moderador", avatar: "/symposium-cbs/images/team/Marko_zapata.jpg", bio: "Presidente del comité y coordinador de logística del I Simposio Virtual Internacional Synbio" },
            },
            {
                time: "03:15 - 04:00",
                title: "Receso",
                type: "break",
                icon: "☕",
            },
            {
                time: "04:00 - 05:20",
                title: "Fronteras de la Biología Sintética en LATAM: Investigación, Desarrollo Profesional y Posicionamiento Global",
                type: "conversatorio",
                icon: "💬",
                description: "Conversatorio regional sobre los desafíos, oportunidades y futuro de la biología sintética en Latinoamérica.",
                moderator: { name: "Marko Zapata", role: "Moderador", avatar: "/symposium-cbs/images/team/Marko_zapata.jpg", bio: "Presidente del comité y coordinador de logística del I Simposio Virtual Internacional Synbio" },
                panelists: [
                    { name: "Natalie Edwards", role: "iGEM Community", avatar: "/symposium-cbs/images/panelist/natalie_edwards.jpg", bio: "Es Coordinadora de Investigación en Pregrado en la Escuela de Ingeniería de la Pontificia Universidad Católica de Chile, impulsando oportunidades de investigación para estudiantes STEM. Además, es embajadora de iGEM LATAM, promoviendo el avance de la biología sintética en la región" },
                    { name: "Alonso Segura", role: "Synbio LATAM", avatar: "/symposium-cbs/images/panelist/alonso.jpg", bio: "Biólogo molecular y bioinformático con experiencia académica en biología sintética aplicada a biomedicina.  Ha trabajado en múltiples laboratorios nacionales e internacionales y en este momento está finalizando su Licenciatura en Biotecnología en la Universidad Nacional de Costa Rica. Contribuye activamente al ecosistema de biología sintética en Latinoamérica a través de co-fundar y dirigir SynBio LATAM y coordinar el SynBio Bootcamp/Hackathon, entre otras actividades extracurriculares. " },
                    { name: "Marco Pereyra", role: "Allbiotech", avatar: "/symposium-cbs/images/panelist/marco_pereyra.jpeg", bio: "Director de Operaciones de Allbiotech. Ingeniero Biotecnólogo con doctorado en Biología Molecular. Postdoc en el Instituto de Biotecnología de la UNAM. Especialista en biotecnología microbiana y biología sintética para bioreciclaje de plásticos y soluciones sostenibles en Latinoamérica." },
                    { name: "Antonella Nole", role: "Synbio Bootcamp", avatar: "/symposium-cbs/images/panelist/Antonella_nolle.jpeg", bio: "Ingeniera en Biotecnología y Msc. en Bioinformática, coordinadora del programa educativo latinoamericano SynBio Bootcamp & Hackatón, técnico docente de laboratorios moleculares y consultora de ciencias." },
                ],
            },
            {
                time: "05:20 - 06:00",
                title: "Ceremonia de Clausura y Sorteo Final de Certificados",
                type: "closing",
                icon: "🎤",
                description: "Palabras finales, reconocimiento de participantes y sorteo final de certificados de asistencia patrocinado por Biolab Scientific. ¡Únete a nosotros para celebrar este logro conjunto!",
                speakers: [
                    { name: "Rodrigo Puertas", role: "Moderador", avatar: "/symposium-cbs/images/team/Rodrigo_Puertas.png" },
                ],
                hasDrawing: true,
            },
        ],
    },
];

// Export dayColumns como la fuente principal de datos
// scheduleDays se mantiene para compatibilidad backward si es necesario

// English version of the schedule data
export const dayColumnsEN: DayColumn[] = [
    {
        dayName: "Thursday",
        date: "5 MAR",
        colorClass: "text-cyan-400",
        sessions: [
            {
                time: "09:30 - 10:00",
                title: "Official Opening Ceremony",
                type: "inaugural",
                icon: "🎤",
                description: "Opening remarks from the Master of Ceremonies, presentation of the keynote speakers, and vision for the I International Synthetic Biology Symposium CBS 2026, with remarks from our authorities.",
                speakers: [
                    { name: "Master of Ceremonies", role: "CBS", avatar: "MC" },
                ],
                subtitle: "Join us for the beginning of this transformative event in synthetic biology.",
            },
            {
                time: "10:00 - 11:15",
                title: "CF2H: a Cell-Free Two-hybrid platform for rapid protein binder screening and more",
                type: "research_lecture",
                icon: "🎓",
                description: "Advances in protein screening platforms using cell-free technology in synthetic biology.",
                speakers: [
                    { name: "Julien Capin", role: "Speaker", avatar: "JC", institution: "France", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
                ],
                moderator: { name: "Rodrigo Puertas", role: "Moderator", avatar: "/images/team/Rodrigo_Puertas.png", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
            },
            {
                time: "11:15 - 12:00",
                title: "Coffee Break",
                type: "break",
                icon: "☕",
            },
            {
                time: "12:00 - 01:15",
                title: "Programmable Bacteria as Living Devices to Detect and Monitor Intestinal Metabolites",
                type: "research_lecture",
                icon: "🎓",
                description: "Development of genetically modified bacteria as biosensors for monitoring metabolites in biological systems.",
                speakers: [
                    { name: "Ana Zúñiga", role: "Speaker", avatar: "AZ", institution: "France", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation." },
                ],
                moderator: { name: "Rodrigo Puertas", role: "Moderator", avatar: "/images/team/Rodrigo_Puertas.png", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
            },
            {
                time: "01:15 - 02:45",
                title: "Lunch",
                type: "break",
                icon: "🍽️",
            },
            {
                time: "02:45 - 04:00",
                title: "Synthetic Biology and Synthetic Genomics to Engineer and Understand the Microbes of Tomorrow",
                type: "research_lecture",
                icon: "🎓",
                description: "Perspectives on synthetic genomics and applications in engineering microorganisms for the future.",
                speakers: [
                    { name: "Daniel Schindler", role: "Speaker", avatar: "DS", institution: "Germany", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. International expert in applied synthetic biology." },
                ],
                moderator: { name: "Mijael Espinoza", role: "Moderator", avatar: "/images/team/Mijael_Espinoza.jpg", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
            },
            {
                time: "04:00 - 04:30",
                title: "Coffee Break",
                type: "break",
                icon: "☕",
            },
            {
                time: "04:30 - 05:15",
                title: "Integrated Workflow in Synthetic Biology: Key Tools for Optimizing Every Stage",
                type: "speed_talk",
                icon: "⚡",
                description: "Quick presentation of comprehensive tools for optimizing processes in synthetic biology.",
                speakers: [
                    { name: "Biolab Scientific", role: "Speed Talk", avatar: "BS", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
                ],
            },
        ],
    },
    {
        dayName: "Friday",
        date: "6 MAR",
        colorClass: "text-purple-400",
        sessions: [
            {
                time: "08:00 - 09:15",
                title: "Production of Recombinant Proteins by Synthetic Biology",
                type: "research_lecture",
                icon: "🎓",
                description: "Application of synthetic biology techniques in efficient production of recombinant proteins.",
                speakers: [
                    { name: "Alberto Donayre", role: "Speaker", avatar: "AD", institution: "UTEC", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Peruvian researcher specialized in protein expression." },
                ],
                moderator: { name: "Valery Velasquez", role: "Moderator", avatar: "/images/team/Valery_Velasquez.jpg", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
            },
            {
                time: "09:15 - 10:00",
                title: "Coffee Break",
                type: "break",
                icon: "☕",
            },
            {
                time: "10:00 - 11:15",
                title: "Biosensors",
                type: "research_lecture",
                icon: "🎓",
                description: "Development and application of biosensors based on synthetic biology principles for analyte detection.",
                speakers: [
                    { name: "Alonso Segura Valverde", role: "Speaker", avatar: "AS", institution: "LATAM", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Expert in microorganism applications." },
                ],
                moderator: { name: "Valery Velasquez", role: "Moderator", avatar: "/images/team/Valery_Velasquez.jpg", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
            },
            {
                time: "12:00 - 02:00",
                title: "Lunch",
                type: "break",
                icon: "🍽️",
                description: "Time for lunch and informal networking among participants.",
            },
            {
                time: "02:00 - 03:15",
                title: "Molecular Tools in Synthetic Biology",
                type: "research_lecture",
                icon: "🎓",
                description: "Analysis of essential molecular tools for research and application of synthetic biology.",
                speakers: [
                    { name: "Benjamín Díaz Zamora", role: "Speaker", avatar: "/images/team/benja_cbs.jpg", institution: "UNMSM", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Peruvian researcher in synthetic medicine." },
                ],
                moderator: { name: "Rodrigo Puertas", role: "Moderator", avatar: "/images/team/Rodrigo_Puertas.png", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
            },
            {
                time: "03:15 - 04:00",
                title: "Coffee Break",
                type: "break",
                icon: "☕",
            },
            {
                time: "04:00 - 05:20",
                title: "Student Leadership and the Power of Community in SynBio",
                type: "conversatorio",
                icon: "💬",
                description: "Open dialogue on how students and communities drive research and adoption of synthetic biology.",
                moderator: { name: "Mijael Espinoza", role: "Moderator", avatar: "/images/team/Mijael_Espinoza.jpg", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
                panelists: [
                    { name: "Lya Torres", role: "iGEM Ambassador", avatar: "LT", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." },
                    { name: "Mariana Fernandez", role: "iGEM Ambassador", avatar: "MF", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." },
                    { name: "Nelzy Mendoza", role: "scientist", avatar: "NM", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." },
                ],
            },
        ],
    },
    {
        dayName: "Saturday",
        date: "7 MAR",
        colorClass: "text-emerald-400",
        sessions: [
            {
                time: "08:00 - 09:15",
                title: "AvianGuard: Dual-Action Oral Vaccine Platform Through Probiotic Engineering",
                type: "research_lecture",
                icon: "🎓",
                description: "Innovative development of oral vaccines through synthetic engineering of probiotics for veterinary applications.",
                speakers: [
                    { name: "Valentina Ramírez & Wladimir Tandapilco", role: "Speakers", avatar: "VW", institution: "Collaborative", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
                ],
                moderator: { name: "Daniela Rojas", role: "Moderator", avatar: "/images/team/daniela_rojas.jpg", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
            },
            {
                time: "09:15 - 10:00",
                title: "Coffee Break",
                type: "break",
                icon: "☕",
            },
            {
                time: "10:00 - 11:15",
                title: "Conventional and Non-Conventional Yeasts in SynBio Applications",
                type: "research_lecture",
                icon: "🎓",
                description: "Application of yeasts as biological chassis for production and synthesis of compounds in synthetic biology.",
                speakers: [
                    { name: "Benjamín Mendoza Téllez", role: "Speaker", avatar: "BM", institution: "LATAM", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
                ],
                moderator: { name: "Marko Zapata", role: "Moderator", avatar: "/images/team/Marko_zapata.jpg", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
            },
            {
                time: "11:15 - 02:00",
                title: "Lunch",
                type: "break",
                icon: "🍽️",
                description: "Time for lunch and informal networking among participants.",
            },
            {
                time: "02:00 - 03:15",
                title: "Application of Mycoplasma sp as Chassis in the Production of Biomedical Interest Molecules",
                type: "research_lecture",
                icon: "🎓",
                description: "Innovative use of Mycoplasma as a cellular platform for synthesis of pharmaceutical and biomedical compounds.",
                speakers: [
                    { name: "Alonso Segura Valverde", role: "Speaker", avatar: "AS", institution: "LATAM", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
                ],
                moderator: { name: "Marko Zapata", role: "Moderator", avatar: "/images/team/Marko_zapata.jpg", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
            },
            {
                time: "03:15 - 04:00",
                title: "Coffee Break",
                type: "break",
                icon: "☕",
            },
            {
                time: "04:00 - 05:20",
                title: "Frontiers of Synthetic Biology in LATAM: Research, Professional Development, and Global Positioning",
                type: "conversatorio",
                icon: "💬",
                description: "Regional dialogue on the challenges, opportunities, and future of synthetic biology in Latin America.",
                moderator: { name: "Marko Zapata", role: "Moderator", avatar: "/images/team/Marko_zapata.jpg", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
                panelists: [
                    { name: "Nathalie Edwards", role: "iGEM Community", avatar: "NE", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." },
                    { name: "Alonso Segura", role: "Synbio LATAM", avatar: "AS", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." },
                    { name: "Marco Pereyra", role: "Allbiotech", avatar: "MP", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." },
                    { name: "Antonella Nole", role: "Synbio Bootcamp", avatar: "AN", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." },
                ],
            },
            {
                time: "05:20 - 06:00",
                title: "Closing Ceremony and Final Certificate Raffle",
                type: "closing",
                icon: "🎤",
                description: "Closing remarks, recognition of participants, and final raffle of attendance certificates sponsored by Biolab Scientific. Join us to celebrate this collective achievement!",
                speakers: [
                    { name: "UNMSM Authorities", role: "Closing", avatar: "AU" },
                ],
                hasDrawing: true,
            },
        ],
    },
];

// Export dayColumns como la fuente principal de datos
// scheduleDays se mantiene para compatibilidad backward si es necesario
