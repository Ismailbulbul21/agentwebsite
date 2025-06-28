# TechSomali Admin Panel Guide

## 🚀 Authentication System Overview

The TechSomali website now includes a complete authentication system that allows you to manage developers through a secure admin panel. This system uses Supabase for database management and includes all the features you need to add, edit, and delete developer profiles.

## 🔐 Login Credentials

**Admin Login:**
- **URL**: `http://localhost:5174/login` (or your deployed URL + `/login`)
- **Email**: [Contact admin for credentials]
- **Password**: [Contact admin for credentials]

> **Security Note**: Admin credentials are stored securely in the database and should not be shared publicly.

## 📱 How to Access the Admin Panel

### Method 1: Direct URL
- Navigate to `/login` in your browser
- Enter the credentials above
- Click "Login to Admin Panel"

### Method 2: From the Website
- Click the "Admin" link in the navbar (visible on all pages)
- This will take you to the login page
- Enter credentials and login

## 🛠️ Admin Panel Features

### Dashboard Overview
Once logged in, you'll see:
- **Header**: Shows "TechSomali Admin" with your name and logout button
- **Empty State**: Clean interface when no developers exist yet
- **Add Developer Button**: Green button to add new developers
- **Success/Error Messages**: Real-time feedback for all actions
- **Developer Grid**: All developers displayed in cards (once added)

### Managing Developers

#### ➕ Adding a New Developer
1. Click the "Add Developer" button
2. Fill out the form with developer information:
   - **Full Name** (required)
   - **Email**
   - **Phone**
   - **Location** (defaults to "Mogadishu, Somalia")
   - **Photo URL** (paste image URL)
   - **Bio** (description)
   - **Skills** (comma-separated: "React, Node.js, Python")
   - **GitHub URL**
   - **LinkedIn URL**
   - **Portfolio URL**
   - **Availability Status** (Available/Busy/Unavailable)
   - **Experience Years**
   - **Hourly Rate** ($)
   - **Projects Completed**

3. Click "Add Developer" to save

#### ✏️ Editing a Developer
1. Find the developer card you want to edit
2. Click the blue "Edit" button
3. The form will open with current information pre-filled
4. Make your changes
5. Click "Update Developer" to save

#### 🗑️ Deleting a Developer
1. Find the developer card you want to delete
2. Click the red trash icon button
3. Confirm the deletion in the popup
4. The developer will be permanently removed

### 🖼️ Adding Developer Images

#### Option 1: Use Image URLs
- Find an image online (professional headshot recommended)
- Copy the image URL
- Paste it in the "Photo URL" field
- The image will automatically display on the website

#### Option 2: Upload to Image Hosting
- Upload your image to services like:
  - [Unsplash](https://unsplash.com) (free stock photos)
  - [Imgur](https://imgur.com) (free image hosting)
  - [Cloudinary](https://cloudinary.com) (professional hosting)
- Copy the generated URL
- Use in the "Photo URL" field

#### Recommended Image Specifications
- **Size**: 400x400 pixels minimum
- **Format**: JPG, PNG, or WebP
- **Aspect Ratio**: Square (1:1) for best results
- **Quality**: High resolution for professional appearance

## 💾 Database Structure

The system automatically manages the following developer fields:
- `id` (auto-generated)
- `full_name`
- `email`
- `phone`
- `location`
- `bio`
- `skills` (stored as array)
- `photo_url`
- `github_url`
- `linkedin_url`
- `portfolio_url`
- `availability_status`
- `experience_years`
- `hourly_rate`
- `projects_completed`
- `rating`
- `created_at` (auto-generated)

## 🔒 Security Features

- **Session Management**: Login state persists across browser sessions
- **Protected Routes**: Admin panel only accessible when logged in
- **Automatic Redirects**: Unauthorized users redirected to login
- **Secure Logout**: Clears all session data

## 🎨 Integration with Website

The admin panel is fully integrated with your existing website:
- **Developers Page**: Automatically displays all developers from the database
- **Real-time Updates**: Changes appear immediately on the public site
- **Responsive Design**: Works on all devices
- **Consistent Styling**: Matches your website's design theme

## 🚨 Troubleshooting

### Login Issues
- **Invalid Credentials**: Double-check email and password
- **Page Not Loading**: Ensure development server is running
- **Database Errors**: Check Supabase connection

### Developer Management Issues
- **Images Not Showing**: Verify the image URL is accessible
- **Skills Not Saving**: Use comma separation: "React, Node.js, Python"
- **Form Not Submitting**: Check for required fields (Full Name)

### General Issues
- **Page Crashes**: Check browser console for errors
- **Slow Loading**: Check internet connection and Supabase status
- **Styling Issues**: Clear browser cache and refresh

## 🔧 Technical Details

### Tech Stack
- **Frontend**: React.js with Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Custom implementation with database verification and localStorage
- **Routing**: React Router

### File Structure
```
src/
├── contexts/
│   └── AuthContext.jsx     # Authentication logic
├── components/
│   ├── ProtectedRoute.jsx  # Route protection
│   └── Navbar.jsx          # Updated with admin link
├── pages/
│   ├── Login.jsx           # Login page
│   └── Admin.jsx           # Admin dashboard
└── App.jsx                 # Updated routing
```

## 🎯 Best Practices

### Developer Profiles
- Use professional headshot photos
- Write clear, concise bios
- List relevant skills only
- Keep contact information updated
- Set accurate availability status

### Content Management
- Regular backups of developer data
- Consistent naming conventions
- Professional language in descriptions
- Up-to-date project counts and experience

### Security
- Admin credentials are stored securely in the database
- Use strong passwords
- Log out when finished
- Don't share admin credentials
- Change password periodically for security

## 📞 Support

If you need help with the admin system:
1. Check this guide first
2. Review error messages carefully
3. Check browser developer console
4. Contact technical support if issues persist

## 🚀 Future Enhancements

Potential future features:
- Image upload functionality
- Bulk developer import/export
- Advanced search and filtering
- Developer statistics dashboard
- Email notifications
- Multi-admin support
- Role-based permissions

---

**Happy Managing! 🎉**

Your TechSomali admin panel is now ready to help you showcase your amazing team of developers to the world. 