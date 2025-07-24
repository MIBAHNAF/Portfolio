# Email Setup Guide for Contact Form

Your contact form has been implemented and will send emails to `mirhnafali717@gmail.com`. To activate it, follow these steps:

## Method 1: Web3Forms (Recommended - FREE)

1. **Go to [Web3Forms](https://web3forms.com/)**
2. **Sign up with your email** (mirhnafali717@gmail.com)
3. **Create a new form** and copy your Access Key
4. **Replace the placeholder** in `Contact.jsx`:
   ```javascript
   // Line 32 in Contact.jsx - replace this:
   access_key: 'YOUR_WEB3FORMS_ACCESS_KEY',
   
   // With your actual key:
   access_key: 'your-actual-access-key-here',
   ```

## Method 2: Alternative - EmailJS

If you prefer EmailJS:

1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up and create a service
3. Get your Service ID, Template ID, and Public Key
4. Replace the fetch code in Contact.jsx with EmailJS integration

## Features Implemented:

✅ **Beautiful Design**: Matches your provided design with background image  
✅ **Responsive**: Works perfectly on mobile, tablet, and desktop  
✅ **Form Validation**: Required fields with proper validation  
✅ **Loading States**: Shows "Submitting..." when sending  
✅ **Success/Error Messages**: User feedback after submission  
✅ **Email Integration**: Ready to receive emails at mirhnafali717@gmail.com  
✅ **Smooth Animations**: Hover effects and transitions  

## Testing:

1. Set up Web3Forms access key
2. Fill out the form on your website
3. Check your email (mirhnafali717@gmail.com) for messages
4. Form will show success/error messages to users

The form is fully functional and styled to match your design!
