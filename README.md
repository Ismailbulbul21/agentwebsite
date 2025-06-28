
# DevAgency Somalia - Developer Agency Website

A modern, responsive website for a developer agency based in Mogadishu, Somalia. The agency recruits talented developers and connects them with businesses worldwide.

## 🚀 Features

- **Modern Design**: Clean, professional UI built with Tailwind CSS
- **Responsive Layout**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations**: Beautiful transitions using Framer Motion
- **Real-time Database**: Powered by Supabase for developer profiles and contact messages
- **Contact Form**: Functional contact form that saves messages to database
- **Developer Showcase**: Dynamic grid of talented developers with skills and profiles

## 🛠 Tech Stack

- **Frontend**: React.js with Vite
- **Styling**: Tailwind CSS v3
- **Animations**: Framer Motion
- **Routing**: React Router
- **Database**: Supabase
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation bar with mobile menu
│   ├── Footer.jsx          # Footer with social links
│   ├── DeveloperCard.jsx   # Individual developer card component
│   └── ContactForm.jsx     # Contact form with Supabase integration
├── pages/
│   ├── Home.jsx            # Landing page with hero and features
│   ├── About.jsx           # About page with agency information
│   ├── Developers.jsx      # Developers listing page
│   └── Contact.jsx         # Contact page with form and info
├── supabase/
│   └── client.js           # Supabase client configuration
└── App.jsx                 # Main app component with routing
```

## 🗄 Database Schema

### Developers Table
```sql
- id (UUID, Primary Key)
- full_name (Text)
- photo_url (Text)
- skills (Text Array)
- bio (Text)
- created_at (Timestamp)
```

### Contacts Table
```sql
- id (UUID, Primary Key)
- name (Text)
- email (Text)
- message (Text)
- created_at (Timestamp)
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone [your-repo-url]
   cd agnencywebsite
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Visit `http://localhost:5173` to see the application

### Building for Production

```bash
npm run build
```

## 🌐 Pages Overview

### Home Page
- **Hero Section**: Compelling headline and call-to-action
- **How It Works**: 3-column explanation of the agency process
- **CTA Section**: Additional call-to-action for project inquiries

### About Page
- **Agency Story**: Background and mission
- **Values**: Core company values
- **Statistics**: Key metrics and achievements

### Developers Page
- **Developer Grid**: Responsive grid of developer cards
- **Loading States**: Spinner while fetching data
- **Error Handling**: User-friendly error messages

### Contact Page
- **Contact Form**: Functional form saving to Supabase
- **Contact Information**: Agency details and quick contact options
- **Why Choose Us**: Additional selling points

## 🎨 Design System

### Colors
- **Primary**: Blue-600 (#2563eb)
- **Text**: Gray-700 (#374151)
- **Background**: Gray-100 (#f3f4f6)
- **Cards**: White (#ffffff)

### Typography
- **Font**: System fonts (font-sans)
- **Headings**: Bold weights with proper hierarchy
- **Body**: Regular weight with good line height

### Spacing
- **Container**: max-w-screen-lg with mx-auto
- **Padding**: Consistent p-4, p-6, p-8
- **Gaps**: gap-6, gap-8 for grids

## 🔧 Customization

### Adding New Developers
Developers are stored in Supabase. You can add new developers through the Supabase dashboard or by creating an admin interface.

### Modifying Styles
All styles use Tailwind CSS. Modify the `tailwind.config.js` file to customize the design system.

### Adding New Pages
1. Create a new component in `src/pages/`
2. Add the route to `src/App.jsx`
3. Update the navigation in `src/components/Navbar.jsx`

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: Default styles
- **Tablet**: `sm:` and `md:` prefixes
- **Desktop**: `lg:` and `xl:` prefixes

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms
The built files in the `dist` folder can be deployed to any static hosting service.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support, email info@devagencysomalia.com or join our WhatsApp group.

---

**DevAgency Somalia** - Connecting talented Somali developers with global opportunities
