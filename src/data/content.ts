import heroImage from '../assets/images/hero_luxury_interior_1792581071404.jpg';
import quietResidenceImg from '../assets/images/project_quiet_residence_1792581071041.jpg';
import modernRetreatImg from '../assets/images/project_modern_retreat_1792581071879.jpg';
import atelierApartmentImg from '../assets/images/project_atelier_apartment_1792581071089.jpg';
import studioDetailImg from '../assets/images/studio_architectural_detail_1792581072556.jpg';
import statementSpaceImg from '../assets/images/statement_luxury_space_1792581073215.jpg';

import { Project, Service, ProcessStep, Testimonial } from '../types';

export const IMAGES = {
  hero: heroImage,
  quietResidence: quietResidenceImg,
  modernRetreat: modernRetreatImg,
  atelierApartment: atelierApartmentImg,
  studioDetail: studioDetailImg,
  statementSpace: statementSpaceImg,
};

export const PROJECTS: Project[] = [
  {
    id: 'quiet-residence',
    number: '01',
    title: 'The Quiet Residence',
    category: 'Private Residence & Spatial Architecture',
    location: 'Kyoto Prefecture, Japan',
    year: '2025',
    area: '420 m² / 4,520 sq ft',
    image: quietResidenceImg,
    brief: 'A warm, minimalist private residence with natural stone, oak wood, and soft daylight.',
    fullDescription:
      'The Quiet Residence was conceived as an architectural sanctuary where light functions as a primary building material. Sculpted around internal courtyards and warm limestone planes, the home celebrates tactile restraint. Custom low-profile linen seating and wide-plank white oak flooring are illuminated by changing daylight, creating an uninterrupted sense of serenity and timeless pause.',
    palette: [
      { name: 'Warm Ivory', hex: '#F7F4EE' },
      { name: 'Soft Beige', hex: '#E7DFD2' },
      { name: 'Muted Taupe', hex: '#A79B8A' },
      { name: 'Charcoal Oak', hex: '#20201E' },
    ],
    materials: [
      'Honed Japanese Limestone',
      'Wide-plank White Oak',
      'Handmade Washi Paper Pendants',
      'Unlacquered Brushed Bronze',
      'Textured Belgian Linen',
    ],
    architecturalHighlights: [
      'Recessed skylight channels delivering soft diffused light along northern walls',
      'Concealed frameless pocket doors creating boundless spatial continuity',
      'Monolithic floating limestone hearth hand-carved on site',
      'Flush floor-to-ceiling glass reveals framing curated courtyard maple greenery',
    ],
  },
  {
    id: 'modern-retreat',
    number: '02',
    title: 'The Modern Retreat',
    category: 'Contemporary Villa & Landscape Integration',
    location: 'Provence, France',
    year: '2025',
    area: '680 m² / 7,320 sq ft',
    image: modernRetreatImg,
    brief: 'A contemporary villa featuring sculptural furniture, clean architecture, and seamless indoor-outdoor living.',
    fullDescription:
      'Organized around a centuries-old olive tree and sunken reflection court, The Modern Retreat dissolves the boundary between refined interior architecture and the raw Mediterranean landscape. Monolithic hand-textured stone walls ground the living spaces, while motorized double-glazed panels slide into hidden wall cavities to invite cool garden breezes and natural birdsong inside.',
    palette: [
      { name: 'Travertine Stone', hex: '#EFE9DE' },
      { name: 'Sun-Bleached Linen', hex: '#E2DACB' },
      { name: 'Earthy Clay', hex: '#B5A593' },
      { name: 'Deep Basalt', hex: '#262522' },
    ],
    materials: [
      'Quarried Monolithic Limestone Wall',
      'Honed Roman Travertine Floors',
      'Smoked European Walnut Joinery',
      'Curved Bouclé Upholstery',
      'Bespoke Cast Iron Fireplace Insert',
    ],
    architecturalHighlights: [
      'Multi-axis floor-to-ceiling glass walls that pocket completely into stone piers',
      'Acoustically calibrated plaster ceilings concealing ambient linear illumination',
      'Custom floating travertine coffee monolith anchored directly into the floor slab',
      'Central garden courtyard creating natural cross-ventilation and shadow play',
    ],
  },
  {
    id: 'atelier-apartment',
    number: '03',
    title: 'The Atelier Apartment',
    category: 'Heritage Renovation & Urban Luxury',
    location: '8th Arrondissement, Paris',
    year: '2026',
    area: '285 m² / 3,060 sq ft',
    image: atelierApartmentImg,
    brief: 'A refined city apartment with neutral textures, sophisticated lighting, and carefully selected furniture.',
    fullDescription:
      'A high-wire dialogue between historic 19th-century Haussmann craftsmanship and contemporary architectural rigor. Elaborate ceiling medallions and restored oak chevron parquet are paired with blackened steel partition screens, a monolithic Calacatta marble hearth, and curated sculptural furniture. The apartment balances the grandeur of historic Paris with the quiet discipline of modern living.',
    palette: [
      { name: 'Chalk White', hex: '#F9F8F5' },
      { name: 'Calacatta Vein', hex: '#DED8CE' },
      { name: 'Warm Taupe', hex: '#9E9281' },
      { name: 'Blackened Steel', hex: '#1C1B1A' },
    ],
    materials: [
      'Restored French Oak Chevron Parquet',
      'Calacatta Michelangelo Honed Marble',
      'Blackened Architectural Steel',
      'Brushed Champagne Brass Fixtures',
      'Mohair Velvet & Textured Wool Rugs',
    ],
    architecturalHighlights: [
      'Bespoke floor-to-ceiling steel pivot doors creating flexible enfilade room connections',
      'Preserved 3.6-meter plaster moldings restored with artisan gypsum techniques',
      'Integrated shadow-gap baseboards with concealed floor-wash lighting',
      'Sculptural modernist lighting that transforms from ambient gallery glow to task warmth',
    ],
  },
];

export const SERVICES: Service[] = [
  {
    number: '01',
    title: 'Interior Architecture',
    summary:
      'Structural layout reconfiguration, ceiling planes, custom joinery documentation, lighting design, and architectural materiality for luxury residences and penthouses.',
    deliverables: [
      'Spatial planning & wall repositioning drawings',
      'Integrated MEP & architectural lighting schemes',
      'Custom cabinetry, millwork & stone detailing',
      'Material schedule & finish specifications',
    ],
    duration: '8–16 weeks',
  },
  {
    number: '02',
    title: 'Residential Interior Design',
    summary:
      'Complete aesthetic curation including bespoke furniture procurement, handcrafted textiles, artisan lighting, artwork placement, and tactile finishing.',
    deliverables: [
      'Curated concept boards & tactile material samples',
      'Bespoke furniture design & master artisan commissioning',
      'Fine textile, drapery & rug sourcing from European mills',
      'White-glove styling, staging & final handover',
    ],
    duration: '6–12 weeks',
  },
  {
    number: '03',
    title: 'Commercial Spaces',
    summary:
      'Brand-elevating architectural environments for boutique hotels, Michelin-starred hospitality, private family offices, and luxury fashion flagships.',
    deliverables: [
      'Customer journey & operational spatial zoning',
      'High-traffic luxury material durability engineering',
      'Brand narrative integration through bespoke form',
      'Full statutory compliance & contractor coordination',
    ],
    duration: '12–24 weeks',
  },
  {
    number: '04',
    title: 'Space Planning & Styling',
    summary:
      'Tailored spatial optimization and art curation that reharmonizes existing architecture through sculptural furniture, bespoke illumination, and collectible design.',
    deliverables: [
      'Precise scale furniture layout plans',
      'Collectible vintage & contemporary art acquisition',
      'Botanical, ceramic & tactile decorative styling',
      'Turnkey photo-ready finishing',
    ],
    duration: '3–6 weeks',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    subtitle: 'Understanding the client’s vision, goals, lifestyle, and requirements.',
    description:
      'Every collaboration begins with intimate listening. We examine how you live, the rhythm of your daily rituals, the site’s natural light orientations, and your personal relationship to space and material.',
    keyMilestones: [
      'Comprehensive lifestyle & spatial questionnaire',
      'On-site laser scan & light vector analysis',
      'Inspirational narrative & spatial ethos synthesis',
    ],
  },
  {
    number: '02',
    title: 'Concept',
    subtitle: 'Developing the creative direction, materials, and design concept.',
    description:
      'We formulate a unified architectural narrative. Physical material trays—containing raw stones, hand-poured bronzes, textured linens, and natural woods—are assembled to establish an authentic sensory palette.',
    keyMilestones: [
      'Sensory material moodboards & finish samples',
      '3D spatial volume diagrams & circulation layouts',
      'Initial photometric daylighting concepts',
    ],
  },
  {
    number: '03',
    title: 'Design',
    subtitle: 'Refining layouts, details, and the visual experience.',
    description:
      'Conceptual ideas transition into millimetric precision. We engineer every joint, recessed illumination cove, custom joinery element, and architectural junction with comprehensive technical documentation.',
    keyMilestones: [
      'Full CAD architectural drawing packages',
      'Photorealistic 4K atmospheric renderings',
      'Bespoke furniture workshop blueprints & FF&E catalog',
    ],
  },
  {
    number: '04',
    title: 'Deliver',
    subtitle: 'Presenting a considered final design tailored to the project.',
    description:
      'From artisan supervision to final placement, our team orchestrates every phase of installation. We oversee craftspeople on site and complete the turnkey handover with white-glove styling.',
    keyMilestones: [
      'Rigorous site supervision & artisan coordination',
      'Defect-free snagging & quality certification',
      'Bespoke owner care manual & completed turnkey reveals',
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'ATELIER NOIR elevated our home far beyond expectations. Their command of light, proportions, and natural materials transformed our daily way of living into something calm and extraordinary.',
    client: 'Claire & Marcus Vance',
    role: 'Private Residence Clients',
    project: 'The Quiet Residence',
    location: 'Kyoto Hills',
    sampleLabel: 'Sample Client Demonstration Review',
  },
  {
    quote:
      'The balance they struck between contemporary architectural discipline and warm tactile richness is rare. They listened to every subtle requirement and delivered a space that feels deeply personal.',
    client: 'Antoine de Saint-Germain',
    role: 'Private Collector & Villa Owner',
    project: 'The Modern Retreat',
    location: 'Provence',
    sampleLabel: 'Sample Client Demonstration Review',
  },
];

export const STUDIO_DETAILS = {
  founded: '2018',
  locations: ['Paris', 'New York', 'Milan'],
  awards: ['Architectural Digest AD100 Honoree', 'Frame Awards Interior of the Year', 'Dezeen Awards Finalist'],
  ethos:
    'We believe that space is not merely empty volume waiting to be decorated, but an emotional instrument that governs how one breathes, thinks, and rests. By paring back excess and honoring honest materials—honed stone, raw oak, hand-cast bronze, and unbleached linen—we sculpt environments that age with timeless dignity.',
  leadArchitects: [
    {
      name: 'Laurent Moreau',
      role: 'Principal Architect & Co-Founder',
      origin: 'Paris / École Spéciale d’Architecture',
    },
    {
      name: 'Elena Soleri',
      role: 'Design Director & Co-Founder',
      origin: 'Milan / Politecnico di Milano',
    },
  ],
};
