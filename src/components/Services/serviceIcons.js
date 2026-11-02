import { Globe, Hotel, Search, Bot, Wrench } from 'lucide-react';

// One icon per service, keyed like services.categories.
export const SERVICE_ICONS = {
  websites: Globe,
  hotels: Hotel,
  visibility: Search,
  automation: Bot,
  software: Wrench,
};

// One illustration per offer (see OfferIllustration), in the same order as
// each category's offers.
export const OFFER_ART = {
  websites: ['site', 'booking', 'migration', 'privacy'],
  hotels: ['directBooking', 'rates', 'api'],
  visibility: ['seo', 'geo'],
  automation: ['assistant', 'leads', 'connect'],
  software: ['dashboard', 'webapp'],
};
