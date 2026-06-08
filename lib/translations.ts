"use client"

export type Language = "fr" | "en" | "ht"

export const translations = {
  // Navigation
  nav: {
    league: { fr: "Ligue", en: "League", ht: "Lig" },
    clubs: { fr: "Clubs", en: "Clubs", ht: "Klib" },
    players: { fr: "Joueurs", en: "Players", ht: "Jwè" },
    matches: { fr: "Matchs", en: "Matches", ht: "Match" },
    scoring: { fr: "Buteurs", en: "Scoring", ht: "Pwen" },
    media: { fr: "Médias", en: "Media", ht: "Medya" },
    about: { fr: "À propos", en: "About", ht: "Sou Nou" },
    joinLeague: { fr: "Rejoindre la Ligue", en: "Join the League", ht: "Antre nan Lig la" },
  },

  // Hero
  hero: {
    since: { fr: "Ottawa • Depuis 2007", en: "Ottawa • Since 2007", ht: "Ottawa • Depi 2007" },
    soccerLeague: { fr: "Ligue de Soccer", en: "Soccer League", ht: "Lig Foutbòl" },
    tagline: {
      fr: "La première ligue de football communautaire de l'Est de l'Ontario — unissant Ottawa et Gatineau par le beau jeu.",
      en: "Eastern Ontario's premier community football league — uniting Ottawa & Gatineau through the beautiful game.",
      ht: "Premye lig foutbòl kominotè nan Lès Ontario — ini Ottawa ak Gatineau atravè bèl jwèt la.",
    },
    registerTeam: { fr: "Inscrire Équipe", en: "Register Team", ht: "Enskri Ekip" },
    viewSchedule: { fr: "Voir Calendrier", en: "View Schedule", ht: "Wè Kalandriye" },
    standings: { fr: "Classement", en: "Standings", ht: "Klasman" },
  },

  // About
  about: {
    sectionTitle: { fr: "À propos de la Ligue", en: "About the League", ht: "Sou Lig la" },
    title: { fr: "À Propos", en: "About", ht: "Sou" },
    ottawaBolides: { fr: "Ottawa Bolides", en: "Ottawa Bolides", ht: "Ottawa Bolides" },
    description1: {
      fr: "Ottawa Bolides est une organisation sportive communautaire à but non lucratif fondée en 2007. Nous promouvons le développement des jeunes, l'engagement culturel et le football populaire dans la région Gatineau-Ottawa.",
      en: "Ottawa Bolides is a community-based, not-for-profit sports organization founded in 2007. We promote youth development, cultural engagement, and grassroots soccer in the Gatineau–Ottawa region.",
      ht: "Ottawa Bolides se yon òganizasyon espò kominotè san bi likratif ki te fonde an 2007. Nou ankouraje devlopman jèn yo, angajman kiltirèl, ak foutbòl nan rasin nan rejyon Gatineau-Ottawa.",
    },
    description2: {
      fr: "Membre enregistré de l'Association de soccer du district de l'Est de l'Ontario (EODSA), nous alignons plusieurs équipes dans la Ligue de soccer Ottawa Carleton (OCSL) et organisons la Coupe Ottawa Bolides annuelle — célébrant la passion et la diversité de notre communauté à travers le beau jeu.",
      en: "A registered member of the Eastern Ontario District Soccer Association (EODSA), we field multiple teams in the Ottawa Carleton Soccer League (OCSL) and host the annual Coupe Ottawa Bolides — celebrating the passion and diversity of our community through the beautiful game.",
      ht: "Yon manm anrejistre nan Asosyasyon Foutbòl Distri Lès Ontario (EODSA), nou gen plizyè ekip nan Lig Foutbòl Ottawa Carleton (OCSL) epi nou fè Koup Ottawa Bolides chak ane — selebre pasyon ak divèsite kominote nou atravè bèl jwèt la.",
    },
    coupeOttawaBolides: { fr: "Coupe Ottawa Bolides", en: "Coupe Ottawa Bolides", ht: "Koup Ottawa Bolides" },
    ocslMember: { fr: "Membre OCSL", en: "OCSL Member", ht: "Manm OCSL" },
    eodsaAffiliated: { fr: "Affilié EODSA", en: "EODSA Affiliated", ht: "Afilye EODSA" },
    since2007: { fr: "Depuis 2007", en: "Since 2007", ht: "Depi 2007" },
    ourMission: { fr: "Notre Mission", en: "Our Mission", ht: "Misyon Nou" },
    missionText: {
      fr: "Bâtir des champions sur et hors du terrain en développant des joueurs talentueux, en promouvant l'éducation, le travail d'équipe, la discipline et en créant des opportunités à travers le football — tout en célébrant l'esprit multiculturel de notre communauté.",
      en: "To build champions on and off the field by developing talented players, promoting education, teamwork, discipline, and creating opportunities through soccer — while celebrating the multicultural spirit of our community.",
      ht: "Bati chanpyon sou teren an ak deyò teren an lè nou devlope jwè talan, ankouraje edikasyon, travay ann ekip, disiplin, epi kreye opòtinite atravè foutbòl — pandan nou selebre lespri miltikiltirèl kominote nou an.",
    },
    youthDevelopment: { fr: "Développement des Jeunes", en: "Youth Development", ht: "Devlopman Jèn" },
    communityImpact: { fr: "Impact Communautaire", en: "Community Impact", ht: "Enpak Kominotè" },
    eliteCompetition: { fr: "Compétition d'Élite", en: "Elite Competition", ht: "Konpetisyon Elit" },
    culturalUnity: { fr: "Unité Culturelle", en: "Cultural Unity", ht: "Inite Kiltirèl" },
  },

  // Stats
  stats: {
    playersRegistered: { fr: "Joueurs Inscrits", en: "Players Registered", ht: "Jwè Enskri" },
    clubsCompeting: { fr: "Clubs en Compétition", en: "Clubs Competing", ht: "Klib k ap Konpete" },
    seasonsPlayed: { fr: "Saisons Jouées", en: "Seasons Played", ht: "Sezon Jwe" },
    strongCommunity: { fr: "Communauté Forte", en: "Strong Community", ht: "Kominote Fò" },
    region: { fr: " Région", en: " Region", ht: " Rejyon" },
  },

  // Standings
  standings: {
    sectionTitle: { fr: "Classement COB26", en: "COB26 Standings", ht: "Klasman COB26" },
    leagueTable: { fr: "Tableau de la Ligue", en: "League Table", ht: "Tablo Lig la" },
    qualificationZone: { fr: "Zone de qualification", en: "Qualification zone", ht: "Zòn kalifikasyon" },
    topScorers: { fr: "Meilleurs Buteurs", en: "Top Scorers", ht: "Pi Bon Makè" },
    topPoints: { fr: "Meilleurs Points", en: "Top Points", ht: "Pi Bon Pwen" },
    goals: { fr: "Buts", en: "Goals", ht: "Gòl" },
    pts: { fr: "Pts", en: "Pts", ht: "Pwen" },
  },

  // Schedule
  schedule: {
    sectionTitle: { fr: "Matchs & Résultats", en: "Fixtures & Results", ht: "Match ak Rezilta" },
    upcomingMatches: { fr: "Matchs à Venir", en: "Upcoming Matches", ht: "Match k ap Vini" },
    recentResults: { fr: "Résultats Récents", en: "Recent Results", ht: "Rezilta Resan" },
    live: { fr: "En Direct", en: "Live", ht: "An Dirèk" },
    upcoming: { fr: "À Venir", en: "Upcoming", ht: "K ap Vini" },
    final: { fr: "Terminé", en: "Final", ht: "Fini" },
  },

  // Clubs
  clubs: {
    sectionTitle: { fr: "Clubs & Localisations", en: "Clubs & Locations", ht: "Klib ak Kote yo Ye" },
    meetTheTeams: { fr: "Découvrez les", en: "Meet the", ht: "Rankontre" },
    teams: { fr: "Équipes", en: "Teams", ht: "Ekip yo" },
    clubsCompeting: { fr: "clubs en compétition dans COB26", en: "clubs competing in COB26", ht: "klib k ap konpete nan COB26" },
  },

  // CTA / Footer
  cta: {
    readyToJoin: { fr: "Prêt à Rejoindre la", en: "Ready to Join the", ht: "Pare pou Antre nan" },
    bolidesFamily: { fr: "Famille Bolides?", en: "Bolides Family?", ht: "Fanmi Bolides?" },
    ctaDescription: {
      fr: "Faites partie d'une ligue qui bâtit une communauté, célèbre la diversité et développe les joueurs sur et hors du terrain. Inscrivez votre équipe dès aujourd'hui pour la saison 2026.",
      en: "Be part of a league that builds community, celebrates diversity, and develops players on and off the pitch. Register your team today for the 2026 season.",
      ht: "Fè pati yon lig ki bati kominote, selebre divèsite, epi devlope jwè sou teren an ak deyò teren an. Enskri ekip ou jodi a pou sezon 2026 la.",
    },
    registerYourTeam: { fr: "Inscrire Votre Équipe", en: "Register Your Team", ht: "Enskri Ekip Ou" },
    learnMore: { fr: "En Savoir Plus", en: "Learn More", ht: "Aprann Plis" },
  },

  // Footer
  footer: {
    quickLinks: { fr: "Liens Rapides", en: "Quick Links", ht: "Lyen Rapid" },
    stayConnected: { fr: "Restez Connecté", en: "Stay Connected", ht: "Rete Konekte" },
    home: { fr: "Accueil", en: "Home", ht: "Akèy" },
    register: { fr: "S'inscrire", en: "Register", ht: "Enskri" },
    description: {
      fr: "La première ligue de football communautaire de l'Est de l'Ontario — unissant la région à travers le football depuis 2007.",
      en: "Eastern Ontario's premier community soccer league — uniting the region through football since 2007.",
      ht: "Premye lig foutbòl kominotè nan Lès Ontario — ini rejyon an atravè foutbòl depi 2007.",
    },
    allRightsReserved: { fr: "Tous droits réservés", en: "All rights reserved", ht: "Tout dwa rezève" },
    oneLeague: { fr: "Une Ligue. Une Communauté.", en: "One League. One Community.", ht: "Yon Lig. Yon Kominote." },
  },
}

export function t(key: string, lang: Language): string {
  const keys = key.split(".")
  let result: unknown = translations
  for (const k of keys) {
    if (result && typeof result === "object" && k in result) {
      result = (result as Record<string, unknown>)[k]
    } else {
      return key
    }
  }
  if (result && typeof result === "object" && lang in result) {
    return (result as Record<Language, string>)[lang]
  }
  return key
}
