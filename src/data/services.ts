import {
  Code2,
  ShoppingCart,
  Search,
  MessageSquare,
  AudioWaveform,
  ShieldCheck,
  Rocket,
  ShoppingBag,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

export interface ServiceItem {
  id: string;
  slug: string;
  name: string;
  description: string;
  icon: LucideIcon;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "full-stack-websites",
    slug: "full-stack-websites",
    name: "Full-stack Websites",
    description: "Fast, SEO-ready sites built from scratch.",
    icon: Code2,
  },
  {
    id: "ecommerce",
    slug: "ecommerce",
    name: "E-commerce",
    description: "Online stores that turn visitors into buyers.",
    icon: ShoppingCart,
  },
  {
    id: "seo-ai-visibility",
    slug: "seo-ai-visibility",
    name: "SEO + AI Visibility",
    description: "Rank on Google and show up in ChatGPT and Gemini.",
    icon: Search,
  },
  {
    id: "ai-chatbots",
    slug: "ai-chatbots",
    name: "AI Chatbots",
    description: "Assistants that answer customers 24/7.",
    icon: MessageSquare,
  },
  {
    id: "ai-voice-agents",
    slug: "ai-voice-agents",
    name: "AI Voice Agents",
    description: "Call bots that answer and book for you.",
    icon: AudioWaveform,
  },
  {
    id: "maintenance-support",
    slug: "maintenance-support",
    name: "Maintenance & Support",
    description: "Updates, fixes and monitoring, handled.",
    icon: ShieldCheck,
  },
  {
    id: "saas-mvp",
    slug: "saas-mvp",
    name: "SaaS MVP",
    description: "Your product idea, launched fast.",
    icon: Rocket,
  },
  {
    id: "shopify-themes-apps",
    slug: "shopify-themes-apps",
    name: "Shopify Themes & Apps",
    description: "Custom themes and apps for your store.",
    icon: ShoppingBag,
  },
  {
    id: "mobile-apps",
    slug: "mobile-apps",
    name: "Mobile Apps",
    description: "iOS and Android apps for your business.",
    icon: Smartphone,
  },
];
