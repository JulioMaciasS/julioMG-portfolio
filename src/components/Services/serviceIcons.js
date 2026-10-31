import {
  Globe, Hotel, Search, Bot, Wrench,
  LayoutTemplate, CalendarCheck, ArrowRightLeft, ShieldCheck,
  BedDouble, CalendarRange, Plug,
  Sparkles, MessagesSquare, Mail, Workflow,
  LayoutDashboard, AppWindow,
} from 'lucide-react';

// One icon per service, keyed like services.categories.
export const SERVICE_ICONS = {
  websites: Globe,
  hotels: Hotel,
  visibility: Search,
  automation: Bot,
  software: Wrench,
};

// One icon per offer, in the same order as each category's offers.
export const OFFER_ICONS = {
  websites: [LayoutTemplate, CalendarCheck, ArrowRightLeft, ShieldCheck],
  hotels: [BedDouble, CalendarRange, Plug],
  visibility: [Search, Sparkles],
  automation: [MessagesSquare, Mail, Workflow],
  software: [LayoutDashboard, AppWindow],
};
