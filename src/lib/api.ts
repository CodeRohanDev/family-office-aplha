// API utilities for Family Office Alpha

const API_BASE_URL = 'https://apis-repo-xi.vercel.app/api';

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  purpose: string;
  message: string;
}

export interface NewsletterData {
  email: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
  error?: string;
}

// Send contact form submission
export async function submitContactForm(data: ContactFormData): Promise<ApiResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/family-office-alpha-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: 'contact',
        data: data
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return {
      success: true,
      message: result.message || 'Contact form submitted successfully!'
    };
  } catch (error) {
    console.error('Contact form submission error:', error);
    return {
      success: false,
      message: 'Failed to submit contact form. Please try again.',
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

// Subscribe to newsletter
export async function subscribeToNewsletter(email: string): Promise<ApiResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/family-office-alpha-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: 'newsletter',
        data: { email }
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return {
      success: true,
      message: result.message || 'Successfully subscribed to newsletter!'
    };
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return {
      success: false,
      message: 'Failed to subscribe to newsletter. Please try again.',
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

// Validate email format
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Validate phone format (basic validation)
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
  return phoneRegex.test(cleanPhone) && cleanPhone.length >= 10;
}

// Format phone number for display
export function formatPhoneNumber(phone: string): string {
  const cleanPhone = phone.replace(/\D/g, '');
  if (cleanPhone.length === 10) {
    return `(${cleanPhone.slice(0, 3)}) ${cleanPhone.slice(3, 6)}-${cleanPhone.slice(6)}`;
  } else if (cleanPhone.length === 11 && cleanPhone[0] === '1') {
    return `+1 (${cleanPhone.slice(1, 4)}) ${cleanPhone.slice(4, 7)}-${cleanPhone.slice(7)}`;
  }
  return phone;
}