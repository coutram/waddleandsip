# Contact Form Server Setup

This guide will help you set up a working backend for the Waddle and Sip contact form.

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- A Gmail account (or other email service)

## Setup Instructions

### 1. Install Server Dependencies

```bash
# Copy the server package.json to a new directory
cp server-package.json package.json

# Install dependencies
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the server directory:

```env
# Email Configuration
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# Server Configuration
PORT=3001
```

### 3. Gmail App Password Setup

For Gmail, you'll need to use an App Password:

1. Go to your Google Account settings
2. Enable 2-factor authentication
3. Go to Security → App passwords
4. Generate a new app password for "Mail"
5. Use that password in the `EMAIL_PASS` environment variable

### 4. Update Frontend API Endpoint

In your React app (`src/App.tsx`), uncomment and update the fetch call:

```typescript
const response = await fetch('http://localhost:3001/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
})

if (!response.ok) {
  throw new Error('Failed to send message')
}

const result = await response.json()
```

### 5. Start the Server

```bash
# Development mode (with auto-restart)
npm run dev

# Production mode
npm start
```

The server will run on `http://localhost:3001`

## Features

- ✅ Form validation (client and server-side)
- ✅ Email notifications to your business email
- ✅ Confirmation emails to customers
- ✅ CORS enabled for frontend integration
- ✅ Error handling and logging
- ✅ Health check endpoint

## API Endpoints

- `POST /api/contact` - Submit contact form
- `GET /api/health` - Health check

## Email Templates

The server sends two emails:
1. **Business notification** - Sent to your business email with form details
2. **Customer confirmation** - Sent to the customer thanking them

## Customization

You can customize:
- Email templates in `server-example.js`
- Validation rules
- Email service (Gmail, SendGrid, etc.)
- Response messages

## Security Notes

- Always use environment variables for sensitive data
- Consider rate limiting for production
- Use HTTPS in production
- Validate all inputs server-side
- Consider using a service like SendGrid for better deliverability 