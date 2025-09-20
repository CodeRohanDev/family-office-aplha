# Family Office Alpha Website

A professional website for Family Office Alpha, showcasing their cybersecurity advisory and family office services for high-net-worth families and institutions.

## 🚀 Features

- **Modern Design**: Clean, professional design with navy, gold, and white color scheme
- **Responsive**: Fully responsive design that works on all devices
- **Interactive**: Smooth animations and transitions using Framer Motion
- **Advanced Analytics**: Real-time charts and data visualizations
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Fast Performance**: Built with Next.js 15 and optimized for speed

## 📋 Pages

- **Home**: Hero section with company overview and key statistics
- **Company Profile**: Detailed company information, mission, values, and timeline
- **Services**: Comprehensive service offerings including cybersecurity packages
- **Team**: Leadership team and advisory board information
- **Activities**: Events, webinars, partnerships, and key topics
- **Contact**: Contact form and company information

## 📊 Analytics & Charts

The website features advanced data visualization components showcasing portfolio performance and cybersecurity metrics:

### Interactive Metrics Dashboard
- **Tabbed Interface**: Performance, Security, Clients, and Global Reach metrics
- **Real-time Data**: Live performance indicators with trend analysis
- **Detailed Insights**: Comprehensive breakdowns with key performance details
- **Smooth Transitions**: AnimatePresence for seamless tab switching

### Portfolio Radar Chart
- **Custom SVG Visualization**: 6-dimensional portfolio health assessment
- **Asset Allocation**: Interactive breakdown of investment distribution
- **Performance Comparison**: Portfolio vs benchmark analysis with dual indicators
- **Animated Loading**: Staggered animations for enhanced user experience

### Security Operations Dashboard
- **SOC-style Interface**: Professional security monitoring visualization
- **Threat Level Distribution**: Color-coded security threat analysis
- **Real-time Activity Feed**: Live security event monitoring
- **Progress Indicators**: Animated security score visualizations

### Market Trend Analysis (Alternative)
- **Chart.js Integration**: Professional line charts with multiple datasets
- **Performance Tracking**: YTD returns and security score correlation
- **Interactive Tooltips**: Detailed hover information and data points
- **Responsive Design**: Optimized for all screen sizes

### Network Topology Diagram (Alternative)
- **SVG Network Map**: Interactive cybersecurity architecture visualization
- **Connection Types**: Secure, encrypted, and monitored connection indicators
- **Node Status**: Real-time security status for all network components
- **Pulse Animations**: Dynamic core node activity indicators

## 🛠 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Charts**: Chart.js with react-chartjs-2
- **Icons**: Lucide React
- **Fonts**: Inter & Playfair Display (Google Fonts)
- **Language**: TypeScript

## 🎨 Design System

### Colors
- **Navy**: #0A2342 (Primary brand color)
- **Gold**: #D4AF37 (Accent color)
- **Charcoal**: #1A1A1A (Text color)
- **Off White**: #F8F9FA (Background color)

### Typography
- **Headings**: Playfair Display (Serif)
- **Body**: Inter (Sans-serif)

## 🚀 Getting Started

1. **Install dependencies**:
```bash
npm install
```

2. **Run the development server**:
```bash
npm run dev
```

3. **Open your browser**:
Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── activities/         # Events and activities page
│   ├── company-profile/    # About company page (with charts)
│   ├── contact/           # Contact page
│   ├── services/          # Services page
│   ├── team/              # Team page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── AboutPreview.tsx   # About section preview
│   ├── ChartsSection.tsx  # Main charts container
│   ├── Footer.tsx         # Site footer
│   ├── Hero.tsx           # Hero section
│   ├── InteractiveMetrics.tsx    # Tabbed metrics dashboard
│   ├── MarketTrendChart.tsx      # Chart.js market analysis
│   ├── Navigation.tsx     # Main navigation
│   ├── NetworkTopology.tsx       # SVG network diagram
│   ├── PortfolioRadarChart.tsx   # Custom radar visualization
│   ├── SecurityDashboard.tsx     # SOC-style security metrics
│   ├── ServicePreview.tsx # Services preview
│   └── Testimonials.tsx   # Client testimonials
└── public/               # Static assets
    └── logo.png          # Company logo
```

## 🎯 Chart Components Usage

### Interactive Metrics Component
```tsx
import InteractiveMetrics from '@/components/InteractiveMetrics';

// Features:
// - Tabbed interface (Performance, Security, Clients, Global)
// - Real-time metrics with trend indicators
// - Detailed breakdowns and insights
// - Smooth animations and transitions
<InteractiveMetrics />
```

### Portfolio Radar Chart
```tsx
import PortfolioRadarChart from '@/components/PortfolioRadarChart';

// Features:
// - Custom SVG radar chart (6 dimensions)
// - Asset allocation visualization
// - Performance vs benchmark comparison
// - Animated loading sequences
<PortfolioRadarChart />
```

### Security Dashboard
```tsx
import SecurityDashboard from '@/components/SecurityDashboard';

// Features:
// - SOC-style security metrics
// - Threat level distribution
// - Real-time activity feed
// - Animated progress indicators
<SecurityDashboard />
```

### Market Trend Chart (Chart.js)
```tsx
import MarketTrendChart from '@/components/MarketTrendChart';

// Features:
// - Professional line charts
// - Multiple datasets (Portfolio, Benchmark, Security)
// - Interactive tooltips
// - Performance summary cards
<MarketTrendChart />
```

### Network Topology Diagram
```tsx
import NetworkTopology from '@/components/NetworkTopology';

// Features:
// - SVG-based network visualization
// - Animated connections and nodes
// - Security status indicators
// - Responsive design with legends
<NetworkTopology />
```

## 📝 Content

The website content is based on the Family Office Alpha company information including:

- **Services**: Cybersecurity assessment, strengthening, accounting, bill pay, vendor selection, technology implementation, and custom reporting
- **Team**: Julia Valentine (CEO), Tracy McWilliams (Co-Founder), and advisory board
- **Activities**: Webinars, masterclasses, partnerships with 73 Holdings and Colley Intelligence
- **Contact**: 27 West 60th Street, New York, NY 10023

## ⚡ Chart Features & Capabilities

### Performance Analytics
- **Real-time Data**: Live portfolio performance tracking
- **Benchmark Comparison**: Market index comparisons with outperformance metrics
- **Risk Analysis**: Sharpe ratio, volatility, and drawdown measurements
- **YTD Returns**: Year-to-date performance with trend indicators

### Security Monitoring
- **Threat Detection**: 99.9% detection rate with AI-powered analysis
- **Zero Breach Record**: 15+ years of perfect security track record
- **24/7 Monitoring**: Round-the-clock security operations center
- **Incident Response**: <2 minute average response time

### Client Metrics
- **50+ Families Served**: Ultra-high-net-worth family office clients
- **98% Retention Rate**: Long-term client relationships (12+ year average)
- **$2B+ AUM**: Assets under management with consistent growth
- **Global Reach**: 25+ countries with multi-jurisdiction expertise

### Interactive Features
- **Hover Effects**: Detailed tooltips and information overlays
- **Smooth Animations**: Framer Motion powered transitions
- **Responsive Design**: Optimized for desktop, tablet, and mobile
- **Real-time Updates**: Live data visualization with automatic refresh

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📞 Contact Information

**Family Office Alpha**
- 📍 27 West 60th Street, New York, NY 10023
- 📧 info@foalpha.com
- 🌐 [Contact Us](https://www.foalpha.com/contact)

## 📄 License

This project is proprietary and confidential to Family Office Alpha.