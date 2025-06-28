# Developer Agency Website - Requirements

## Project Overview
A modern, responsive website for a developer agency based in Mogadishu, Somalia. The agency recruits talented developers and connects them with businesses, restaurants, and clients who need software solutions.

## Technical Stack
- **Frontend**: React.js with React Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Backend**: Supabase (Database + Storage)
- **Deployment**: Vercel

## Features & Pages

### Navigation Bar
- **Positioning**: Sticky/fixed at top
- **Styling**: `bg-white shadow-md px-6 py-4`
- **Layout**: Agency name (left), navigation links (right)
- **Links**: Home, About, Developers, Contact
- **Interactions**: Hover effect `text-blue-600`
- **Responsive**: Mobile menu for small screens

### Home Page
#### Hero Section
- **Layout**: Full-screen hero
- **Headline**: "We Recruit the Best Developers in Somalia"
- **Subtitle**: "Our agency connects talented Somali developers with businesses worldwide"
- **CTA Button**: "Meet Our Developers" → links to Developers page
- **Button Style**: `bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-all`
- **Animation**: Framer Motion fade in from top

#### How It Works Section
- **Layout**: 3-column grid (`grid-cols-1 md:grid-cols-3 gap-6 p-6`)
- **Content**: 
  1. "We Recruit Developers"
  2. "We Find Clients" 
  3. "We Deliver Results"
- **Styling**: Icons, `shadow-md rounded-xl`
- **Animation**: Fade up on scroll (`whileInView`)

### About Page
- **Layout**: 2-column grid
- **Content**: 
  - Left: Image (Mogadishu/developers placeholder)
  - Right: Agency story, mission, services
- **Styling**: `text-lg leading-relaxed`
- **Animation**: Slide-in effect

### Developers Page
- **Data Source**: Supabase `developers` table
- **Layout**: Grid (`grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6`)
- **Card Styling**: `shadow-md p-4 rounded-lg hover:scale-105 transition-transform`
- **Content**: Developer image, name, skills
- **Interactions**: Click for full profile (modal or `/developers/:id`)
- **Loading States**: Spinner while fetching

### Contact Page
- **Form Fields**: name, email, message
- **Form Styling**: `p-3 border rounded-md w-full`
- **Functionality**: Save to Supabase `contacts` table
- **Feedback**: Green success message
- **Additional**: Agency contact info, WhatsApp/email icons
- **Button Style**: `bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700`

## Database Schema

### Developers Table
```sql
- id (primary key)
- full_name (text)
- photo_url (text)
- skills (text array)
- bio (text)
```

### Contacts Table
```sql
- id (primary key)
- name (text)
- email (text)
- message (text)
- created_at (timestamp)
```

## Animation Guidelines
- **Entry Animations**: `initial={{ opacity: 0, y: 20 }}`, `animate={{ opacity: 1, y: 0 }}`, duration: 0.6s
- **Scroll Animations**: `whileInView` for sections
- **Hover Effects**: `whileHover={{ scale: 1.05 }}` for buttons
- **Card Hover**: `hover:scale-105 transition-transform`

## Styling Guidelines
- **Primary Color**: blue-600
- **Text Color**: gray-700
- **Background**: gray-100
- **Cards**: white background
- **Typography**: font-sans
- **Borders**: rounded-xl
- **Shadows**: shadow-md
- **Responsive**: sm:, md:, lg: breakpoints
- **Container**: `max-w-screen-lg mx-auto`
- **Spacing**: p-4, p-6, gap-6

## Project Structure
```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── DeveloperCard.jsx
│   └── ContactForm.jsx
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Developers.jsx
│   └── Contact.jsx
├── supabase/
│   └── client.js
├── assets/
└── App.jsx
```

## Footer
- **Styling**: `bg-gray-900 text-white py-6`
- **Content**: Agency name, copyright, GitHub/WhatsApp links

## Environment Variables
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```

## Future Considerations
- Space for "Projects" page (not implemented yet)
- Authentication system (to be added later)
- Admin panel (to be added later)

## Deployment
- **Platform**: Vercel
- **Backend**: Supabase
- **Storage**: Supabase Storage for images

## Quality Requirements
- Mobile-friendly responsive design
- Well-commented code
- Loading states and error handling
- Clean, modern UI
- Smooth animations
- Fast performance 