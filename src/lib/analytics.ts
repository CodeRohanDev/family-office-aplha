// Google Analytics and tracking utilities
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || '';

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window !== 'undefined' && GA_TRACKING_ID) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', GA_TRACKING_ID, {
      page_title: document.title,
      page_location: window.location.href,
    });
  }
};

// Track page views
export const trackPageView = (url: string, title?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_title: title || document.title,
      page_location: url,
    });
  }
};

// Track events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track conversions
export const trackConversion = (conversionId: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: conversionId,
      value: value,
      currency: 'USD',
    });
  }
};

// Track form submissions
export const trackFormSubmission = (formName: string, success: boolean = true) => {
  trackEvent(
    success ? 'form_submit_success' : 'form_submit_error',
    'engagement',
    formName
  );
};

// Track contact interactions
export const trackContactInteraction = (method: 'email' | 'phone' | 'form' | 'chat') => {
  trackEvent('contact_interaction', 'engagement', method);
};

// Track service interest
export const trackServiceInterest = (serviceName: string) => {
  trackEvent('service_interest', 'engagement', serviceName);
};

// Track downloads
export const trackDownload = (fileName: string, fileType: string) => {
  trackEvent('file_download', 'engagement', `${fileName}.${fileType}`);
};

// Track external link clicks
export const trackExternalLink = (url: string, linkText?: string) => {
  trackEvent('external_link_click', 'engagement', linkText || url);
};

// Track scroll depth
export const trackScrollDepth = (percentage: number) => {
  trackEvent('scroll_depth', 'engagement', `${percentage}%`, percentage);
};

// Track time on page
export const trackTimeOnPage = (seconds: number) => {
  trackEvent('time_on_page', 'engagement', `${Math.floor(seconds / 60)}min`, seconds);
};