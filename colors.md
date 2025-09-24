# Family Office Alpha - Color Theme

## Primary Color Palette

### Core Brand Colors
- **Navy Blue** (`#0A2342`) - Primary brand color used for headers, navigation, and main text
- **Gold** (`#D4AF37`) - Accent color for highlights, CTAs, and brand elements
- **Charcoal** (`#1A1A1A`) - Secondary dark color for text and backgrounds
- **White** (`#FFFFFF`) - Pure white for clean backgrounds and contrast
- **Off-White** (`#F8F9FA`) - Subtle background color for sections and cards

## Complete Color Palette

### Blue Spectrum
- `#0A2342` - Navy (Primary brand color)
- `#1E3A8A` - Dark Blue (Charts, business metrics)
- `#1E40AF` - Medium Blue (Asset allocation, client data)
- `#3B82F6` - Standard Blue (Market sentiment)
- `#DBEAFE` - Light Blue (Geographic backgrounds)

### Gold & Yellow Spectrum
- `#D4AF37` - Gold (Primary accent color)
- `#B8941F` - Dark Gold (Asset allocation dark variant)
- `#EAB308` - Yellow (Market sentiment, security core)
- `#FEF3C7` - Light Gold (Geographic backgrounds)

### Green Spectrum
- `#059669` - Dark Green (Success, growth metrics)
- `#047857` - Darker Green (Asset allocation dark variant)
- `#10B981` - Medium Green (Security indicators)
- `#D1FAE5` - Light Green (Geographic backgrounds)

### Red Spectrum (Alerts & Warnings)
- `#DC2626` - Red (High risk, threats)
- `#B91C1C` - Dark Red (Asset allocation dark variant)
- `#991B1B` - Darker Red (Critical threats)
- `#7C2D12` - Very Dark Red (Critical security threats)
- `#EF4444` - Bright Red (Threat visualization)

### Orange Spectrum
- `#EA580C` - Orange (Medium threats, commodities)
- `#C2410C` - Dark Orange (Asset allocation dark variant)
- `#D97706` - Medium Orange (Security layers, threats)
- `#F59E0B` - Yellow-Orange (Medium security threats)

### Purple Spectrum
- `#7C3AED` - Purple (Technology, real estate, crypto)
- `#6D28D9` - Dark Purple (Asset allocation dark variant)
- `#EDE9FE` - Light Purple (Geographic backgrounds)

### Gray Spectrum
- `#1A1A1A` - Charcoal (Primary text color)
- `#6B7280` - Gray (Cash equivalents, neutral data)
- `#4B5563` - Dark Gray (Asset allocation dark variant)
- `#E5E7EB` - Light Gray (Chart backgrounds, gauge backgrounds)
- `#FFFFFF` - White (Pure white backgrounds)
- `#F8F9FA` - Off-White (Subtle backgrounds)

## Color Usage Guidelines

### Navigation & Headers
- **Background**: White with transparency (`bg-white/95`, `bg-white/90`)
- **Text**: Charcoal for main navigation items
- **Active States**: Gold for active links and hover states
- **Logo Area**: Clean white background

### Hero Section
- **Background**: Navy with gradient to charcoal (`bg-navy`, `bg-gradient-to-b from-navy to-charcoal`)
- **Primary Text**: White for main headings
- **Accent Text**: Gold for brand name highlights
- **Secondary Text**: Off-white for descriptions (`text-offWhite`)

### Content Sections
- **Primary Backgrounds**: White and off-white alternating
- **Card Backgrounds**: White with subtle borders
- **Text Hierarchy**:
  - Primary headings: Navy
  - Body text: Charcoal with opacity variations (`text-charcoal/70`, `text-charcoal/80`)
  - Secondary text: Off-white with opacity (`text-offWhite/70`)

### Interactive Elements
- **Primary Buttons**: Gold background with navy text
- **Secondary Buttons**: Navy background with white text, or gold border with gold text
- **Hover States**: Gold for most interactive elements
- **Focus States**: Gold accents and highlights

### Footer
- **Background**: Navy
- **Text**: White and off-white
- **Links**: Off-white with gold hover states
- **Icons**: Gold accent color

## Semantic Color Applications

### Status & Feedback Colors
- **Success/Growth**: Green (`text-green-600`) - Used for positive metrics
- **Information**: Blue (`text-blue-600`) - Used for informational elements
- **Warning/Attention**: Gold - Maintains brand consistency for important callouts

### Transparency & Overlays
- **Light Overlays**: Gold with low opacity (`bg-gold/10`, `bg-gold/5`)
- **Dark Overlays**: Navy with low opacity (`bg-navy/5`, `border-navy/10`)
- **Backdrop Effects**: White with blur (`bg-white/95 backdrop-blur-md`)

## Gradient Applications
- **Hero Background**: Navy to charcoal gradient
- **CTA Sections**: Navy to charcoal gradient for emphasis
- **Chart Elements**: Gold gradients for data visualization

## Accessibility Considerations
- High contrast maintained between navy text on white backgrounds
- Gold provides sufficient contrast when used appropriately
- Off-white backgrounds maintain readability while reducing eye strain
- Charcoal provides excellent readability for body text

## Brand Consistency Notes
- Gold is consistently used as the primary accent color across all components
- Navy serves as the authoritative, trustworthy primary color
- The palette maintains a professional, luxury aesthetic appropriate for high-net-worth clientele
- Color combinations create a sophisticated, clean, and modern appearance

## Color Usage by Component

### Data Visualization Colors
- **Asset Allocation**: Blue (`#1E3A8A`), Gold (`#D4AF37`), Green (`#059669`), Purple (`#7C3AED`), Red (`#DC2626`), Orange (`#EA580C`), Gray (`#6B7280`)
- **Performance Charts**: Gold (`#D4AF37`) for primary lines, Navy (`#1E3A8A`) for secondary data
- **Risk Metrics**: Green (`#059669`) for low risk, Gold (`#D4AF37`) for moderate, Red (`#DC2626`) for high risk
- **Security Threats**: Red spectrum (`#DC2626`, `#991B1B`, `#7C2D12`) for severity levels
- **Geographic Distribution**: Blue (`#1E3A8A`), Gold (`#D4AF37`), Green (`#059669`), Purple (`#7C3AED`) with light variants for backgrounds

### Status & Semantic Colors
- **Success/Positive**: Green (`#059669`, `#10B981`)
- **Warning/Caution**: Orange (`#EA580C`, `#F59E0B`)
- **Error/Critical**: Red (`#DC2626`, `#EF4444`)
- **Information**: Blue (`#1E3A8A`, `#3B82F6`)
- **Neutral**: Gray (`#6B7280`, `#E5E7EB`)

## Technical Implementation
Colors are defined in `tailwind.config.js` as custom color extensions:
```javascript
colors: {
  navy: "#0A2342",
  gold: "#D4AF37", 
  charcoal: "#1A1A1A",
  white: "#FFFFFF",
  offWhite: "#F8F9FA",
}
```

Additional colors are used directly in components for data visualization and specialized UI elements.

This comprehensive color system creates a cohesive, professional brand identity that conveys trust, luxury, and expertise - essential qualities for a family office and cybersecurity advisory firm.