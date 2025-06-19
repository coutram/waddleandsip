# 🚀 Vercel Deployment Guide

This guide will help you deploy your Waddle and Sip landing page to Vercel.

## 📋 Prerequisites

- [Vercel account](https://vercel.com/signup)
- [GitHub account](https://github.com)
- Your project pushed to GitHub

## 🎯 Deployment Strategy

We'll deploy two separate projects:
1. **Frontend** (React app) - Static site deployment
2. **Backend** (Express API) - Serverless functions

---

## 🔧 Step 1: Deploy Backend API

### 1.1 Prepare Backend for Vercel

The backend is already configured with `vercel.json`. Make sure your backend directory has:
- ✅ `app.js` (main server file)
- ✅ `package.json` (dependencies)
- ✅ `vercel.json` (Vercel configuration)

### 1.2 Deploy Backend

1. **Go to [Vercel Dashboard](https://vercel.com/dashboard)**
2. **Click "New Project"**
3. **Import your GitHub repository**
4. **Configure the project:**
   - **Framework Preset**: `Node.js`
   - **Root Directory**: `backend`
   - **Build Command**: Leave empty (not needed for API)
   - **Output Directory**: Leave empty
   - **Install Command**: `npm install`

5. **Add Environment Variables:**
   - `EMAIL_USER` = your Gmail address
   - `EMAIL_PASS` = your Gmail app password

6. **Deploy!**

### 1.3 Get Your Backend URL

After deployment, Vercel will give you a URL like:
`https://your-backend-project.vercel.app`

**Save this URL** - you'll need it for the frontend!

---

## 🎨 Step 2: Deploy Frontend

### 2.1 Update Frontend API URL

1. **Open `landing-page/src/App.tsx`**
2. **Find this line:**
   ```typescript
   ? 'https://your-backend-project.vercel.app/api/contact'
   ```
3. **Replace with your actual backend URL:**
   ```typescript
   ? 'https://your-actual-backend-url.vercel.app/api/contact'
   ```

### 2.2 Deploy Frontend

1. **Go to [Vercel Dashboard](https://vercel.com/dashboard)**
2. **Click "New Project"**
3. **Import your GitHub repository (same repo)**
4. **Configure the project:**
   - **Framework Preset**: `Vite`
   - **Root Directory**: `landing-page`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

5. **Deploy!**

---

## 🔗 Step 3: Connect Frontend to Backend

### 3.1 Update Production API URL

After both deployments are complete:

1. **Go to your frontend project settings in Vercel**
2. **Add Environment Variable:**
   - **Name**: `VITE_API_URL`
   - **Value**: `https://your-backend-url.vercel.app`

3. **Update your frontend code to use the environment variable:**

```typescript
const apiUrl = import.meta.env.PROD 
  ? import.meta.env.VITE_API_URL + '/api/contact'
  : 'http://localhost:3001/api/contact'
```

### 3.2 Redeploy Frontend

After making changes, Vercel will automatically redeploy your frontend.

---

## ✅ Step 4: Test Your Deployment

### 4.1 Test the Contact Form

1. **Visit your frontend URL**
2. **Fill out the contact form**
3. **Submit and check:**
   - ✅ Form shows loading state
   - ✅ Success message appears
   - ✅ Email is sent to your business email
   - ✅ Confirmation email is sent to customer

### 4.2 Check Backend Logs

1. **Go to your backend project in Vercel**
2. **Click "Functions" tab**
3. **Check the logs for any errors**

---

## 🔧 Troubleshooting

### Common Issues:

**❌ CORS Errors**
- Make sure your backend has CORS enabled (already done)
- Check that the frontend URL is allowed

**❌ Email Not Sending**
- Verify your Gmail app password is correct
- Check that 2FA is enabled on your Gmail account
- Review Vercel function logs for errors

**❌ Environment Variables Not Working**
- Make sure they're set in the correct project (backend)
- Redeploy after adding environment variables

**❌ API URL Not Found**
- Verify the backend URL is correct in your frontend code
- Check that the backend deployed successfully

---

## 🎉 Success!

Your Waddle and Sip landing page is now live on Vercel with:
- ✅ Beautiful, responsive design
- ✅ Working contact form
- ✅ Email notifications
- ✅ Fast, global CDN
- ✅ Automatic deployments on Git push

## 🔄 Continuous Deployment

Every time you push changes to your GitHub repository:
- Vercel will automatically redeploy both projects
- No manual intervention needed
- Zero downtime deployments

---

## 📞 Support

If you encounter any issues:
1. Check the Vercel documentation
2. Review the function logs in your Vercel dashboard
3. Test locally first to isolate issues 