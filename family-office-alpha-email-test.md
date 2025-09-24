# Family Office Alpha - Email API Test

This file provides examples of how to use the Family Office Alpha email API.

## Contact Form Example

```javascript
// Example of sending a contact form submission
const contactFormData = {
  type: "contact",
  data: {
    firstName: "John",
    lastName: "Smith",
    email: "john.smith@example.com",
    phone: "+1 (555) 123-4567",
    purpose: "Wealth Management Inquiry",
    message: "I'm interested in learning more about your family office services for wealth exceeding $50M."
  }
};

// POST to /api/family-office-alpha-email
fetch('https://apis-repo-xi.vercel.app/api/family-office-alpha-email', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(contactFormData)
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
```

## Newsletter Subscription Example

```javascript
// Example of sending a newsletter subscription
const newsletterData = {
  type: "newsletter",
  data: {
    email: "subscriber@example.com"
  }
};

// POST to /api/family-office-alpha-email
fetch('https://apis-repo-xi.vercel.app/api/family-office-alpha-email', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(newsletterData)
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
```