export const siteConfig = {
  company: {
    name: "Artisan bûcheron élagueur M.Lévêque",
    tagline: "Expert en élagage, abattage et aménagement paysager",
    description: "Artisan bûcheron élagueur professionnel spécialisé dans l'élagage, l'abattage sécurisé, la pose de clôtures et l'aménagement d'espaces verts. Service de grimpeur qualifié pour tous vos travaux en hauteur, débroussaillage et entretien paysager dans la région d'Abbeville."
  },
  contact: {
    phoneDisplay: "06 27 88 64 20",
    phoneE164: "+33627886420",
    email: "Contactez-nous par téléphone"
  },
  location: {
    city: "Abbeville",
    region: "Hauts-de-France",
    radiusKm: 30,
    coords: {
      lat: 50.1045525,
      lng: 1.7984686
    },
    villes: [
      "Abbeville",
      "Amiens",
      "Rue",
      "Fort-Mahon-Plage",
      "Crécy-en-Ponthieu",
      "Nouvion-en-Ponthieu",
      "Hallencourt",
      "Pont-Rémy",
      "Longpré-les-Corps-Saints",
      "Picquigny",
      "Flixecourt",
      "Ailly-sur-Somme"
    ],
    realisationsVilles: [
      "Abbeville",
      "Amiens",
      "Rue",
      "Crécy-en-Ponthieu",
      "Pont-Rémy",
      "Picquigny"
    ],
    temoignagesVilles: [
      "Abbeville",
      "Amiens",
      "Rue"
    ]
  },
  stats: {
    projectsCount: "230+",
    yearsExperience: "15 ans"
  },
  googleReviews: {
    rating: "4.9",
    count: 50,
    searchQuery: "Artisan+bûcheron+élagueur+M.Lévêque+Abbeville+avis"
  },
  seo: {
    titleTemplate: "%s | Artisan bûcheron élagueur M.Lévêque - Abbeville",
    defaultTitle: "Élagueur professionnel Abbeville - Artisan bûcheron M.Lévêque",
    metaDescription: "Artisan bûcheron élagueur professionnel à Abbeville. Élagage, abattage, débroussaillage et aménagement paysager. 15 ans d'expérience, 4.9/5 sur Google. Devis gratuit.",
    url: "https://www.artisan-bucheron-leveque-abbeville.fr"
  }
};

export const googleReviewsSearchUrl = () => `https://www.google.com/search?q=${siteConfig.googleReviews.searchQuery}`;

export type SiteConfig = typeof siteConfig;