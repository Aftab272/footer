# Team4Stack Website

A modern, responsive website with an admin panel built with React and Vite.

## Features

- Responsive footer with hover effects and dark background
- Admin panel for managing footer links
- React-based frontend with Vite tooling
- Mobile-friendly design

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd team4stack
   ```

3. Install dependencies:
   ```
   npm install
   ```

### Development

To start the development server:
```
npm run dev
```

The application will be available at `http://localhost:5173` (or the next available port).

### Building for Production

To create a production build:
```
npm run build
```

The build output will be in the `dist` directory.

## Deployment

### Deploying to Vercel

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Log in to your Vercel account
3. Click "New Project"
4. Import your repository
5. Configure the project:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Click "Deploy"

The application will be automatically deployed and available at a Vercel URL.

## Routing

- Main site: `/`
- Admin panel: `/admin`

## Structure

- `src/components/Footer.jsx` - The responsive footer component
- `src/components/AdminPanel.jsx` - The admin panel for managing links
- `src/App.jsx` - Main application component with routing
- `vercel.json` - Vercel routing configuration

## Customization

To customize the footer links, modify the `footerLinks` array in `src/components/Footer.jsx`.

To modify the admin panel functionality, edit `src/components/AdminPanel.jsx`.