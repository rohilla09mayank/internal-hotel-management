# Hotel Management Admin Panel

An internal admin panel built for hotel staff to manage cabins, bookings, and settings through a secure, user-friendly interface.

## Features

- **User Management**  
  Admins can create new users for the system.

- **Cabin Management**  
  Add, edit, or delete cabin listings. Cabins are displayed in a sortable and filterable table with contextual actions.

- **Booking Management**  
  Handle all hotel bookings:

  - Check-in and check-out guests
  - Add extra services (e.g., breakfast)
  - Track and update booking statuses

- **Dashboard Overview**  
  A visually appealing dashboard with:

  - Sales and revenue charts
  - Booking trends
  - Key performance stats
  - Quick actions for recent bookings
  - Dashboard data filtering by date or type

- **Settings Panel**  
  Configure global application settings such as:

  - Breakfast price
  - Minimum and maximum nights stay

- **Authentication & Route Protection**  
  All routes and features are protected with authentication to ensure secure access.

- **Dark Mode Support**  
  Automatically adapts to system-level dark mode preferences.

## Tech Stack

- **React** – Frontend library for building UI
- **Supabase** – Authentication and backend-as-a-service
- **Styled Components** – CSS-in-JS styling
- **React Query** – Data fetching and caching
- **React Router** – Client-side routing
- **React Hook Form** – Form handling and validation

## 📂 Project Structure

```bash
src/
├── context/            # Context for theme
├── features/           # Feature-specific logic and components (cabins, bookings, dashboard, etc.)
├── hooks/              # Custom hooks
├── pages/              # Route-based page components
├── services/           # Supabase client and API helpers
├── styles/             # Global and theme-based styles
├── ui/                 # Presentational and reusable components
├── utils/              # Helper functions
└── App.jsx             # Main application file
```

## Security

- All routes are authenticated.
- Access is restricted based on user login status.

## UI Highlights

- Context menus for table rows (edit/delete/check-in etc.)
- Interactive, filterable, and sortable tables
- Clean dark/light theme support
- Mobile-responsive design
