import {
  RefreshCw,
  Network,
  Sparkles,
  Code2,
  Boxes,
  Database,
  ShieldCheck,
  UserCog,
  Compass,
  type LucideIcon,
} from "lucide-react";

export interface ServiceItem {
  id: string;
  slug: string;
  /** Short name (hero orbit card, contact form) */
  name: string;
  /** Everyday wording for non-technical visitors (contact form) */
  plainName: string;
  /** One-line summary (hero orbit card) */
  description: string;
  /** Full title (services grid) */
  title: string;
  /** Longer description (services grid) */
  detail: string;
  tag: string;
  icon: LucideIcon;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "legacy-modernization",
    slug: "legacy-modernization",
    name: "Legacy Modernization",
    plainName: "Update or replace an old system",
    description: "Move aging apps to modern .NET without starting over.",
    title: "Legacy Software Modernization",
    detail:
      "Migrate VB6, WinForms, WebForms, Access and older .NET applications to modern .NET, step by step, while the business keeps running.",
    tag: "Incremental • Low Risk",
    icon: RefreshCw,
  },
  {
    id: "api-integration",
    slug: "api-integration",
    name: "API & System Integration",
    plainName: "Connect my software systems together",
    description: "Connect your ERP, CRM and in-house systems.",
    title: "API & Enterprise Integration",
    detail:
      "Reliable APIs and integrations that connect ERP, CRM, accounting and in-house systems, so data moves automatically instead of being re-keyed.",
    tag: "REST • Webhooks • Queues",
    icon: Network,
  },
  {
    id: "intelligent-automation",
    slug: "intelligent-automation",
    name: "AI & Automation",
    plainName: "Automate repetitive work with AI",
    description: "Automate processes and documents with AI.",
    title: "AI & Intelligent Automation",
    detail:
      "Clearly scoped projects for document processing, workflow automation and AI assistants, built on top of the systems you already use.",
    tag: "Scoped • Measurable",
    icon: Sparkles,
  },
  {
    id: "custom-development",
    slug: "custom-development",
    name: "Custom .NET Development",
    plainName: "Build new custom software",
    description: "New business applications, built to last.",
    title: "Custom .NET & Web Applications",
    detail:
      "Line-of-business applications, internal tools and APIs built with .NET, C# and modern front ends, designed to be maintained for years.",
    tag: ".NET • C# • Azure",
    icon: Code2,
  },
  {
    id: "erp-solutions",
    slug: "erp-solutions",
    name: "ERP Solutions",
    plainName: "Improve or customize our ERP",
    description: "Extend, customize and integrate your ERP.",
    title: "ERP Solutions & Customization",
    detail:
      "Customizations, extensions, reporting and integrations that make your ERP fit the way your business actually works.",
    tag: "Customize • Extend • Report",
    icon: Boxes,
  },
  {
    id: "sql-server-optimization",
    slug: "sql-server-optimization",
    name: "SQL Server Optimization",
    plainName: "Speed up a slow database",
    description: "Faster queries and healthier databases.",
    title: "SQL Server Optimization",
    detail:
      "Performance tuning, indexing, query rewrites and health reviews for SQL Server databases that have grown slow or fragile.",
    tag: "Tuning • Health Checks",
    icon: Database,
  },
  {
    id: "maintenance-support",
    slug: "maintenance-support",
    name: "Maintenance & Support",
    plainName: "Ongoing maintenance and support",
    description: "Monitoring, fixes and ongoing development.",
    title: "Application Maintenance & Support",
    detail:
      "Ongoing maintenance, monitoring, integration support, performance reviews and planned improvements on a predictable monthly basis.",
    tag: "Monthly Retainer",
    icon: ShieldCheck,
  },
  {
    id: "fractional-engineering",
    slug: "fractional-engineering",
    name: "Fractional Senior Engineering",
    plainName: "Part-time senior tech expert",
    description: "Senior technical leadership, part-time.",
    title: "Fractional Senior Engineering",
    detail:
      "Experienced senior engineering guidance for businesses that need technical leadership, but not a full-time senior hire.",
    tag: "Part-Time • Senior",
    icon: UserCog,
  },
  {
    id: "technical-consulting",
    slug: "technical-consulting",
    name: "Technical Consulting",
    plainName: "Expert advice or a technical review",
    description: "Architecture reviews and clear roadmaps.",
    title: "Technical Consulting & Reviews",
    detail:
      "Architecture and code reviews, performance assessments and modernization roadmaps, so you can make technical decisions with confidence.",
    tag: "Reviews • Roadmaps",
    icon: Compass,
  },
];
