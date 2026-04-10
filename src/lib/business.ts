// Single source of truth for business data. Edit here to update site-wide.

export const BUSINESS = {
  name: "NYC Sewer & Drain",
  fullName: "NYC Sewer & Drain Pro Solutions LLC",
  owner: "Justin Fortis",
  establishedYear: 2020,
  phone: "(718) 500-8493",
  phoneHref: "tel:+17185008493",
  email: "service@nycseweranddrain.com",
  address: {
    line1: "Brooklyn, NY 11208",
    mail: "P.O. Box 80012, Brooklyn, NY 11208",
  },
  hours: {
    emergency: "24 hours · 7 days",
    regular: "Mon–Fri · 8:00 AM – 6:00 PM",
    saturday: "Sat · 9:00 AM – 4:00 PM",
  },
  areas: [
    "Brooklyn",
    "Queens",
    "Manhattan",
    "Staten Island",
    "The Bronx",
    "Nassau County",
  ],
  license: "NYC Master Plumber · Licensed, Bonded, Insured",
  bbb: "BBB A+ Accredited",
} as const;

// Verified working Unsplash image — bathroom fixture close-up
export const HERO_IMAGE =
  "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=1600&q=85&auto=format&fit=crop";

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
