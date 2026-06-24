# QuickAI - Frontend

The React frontend for QuickAI, built with Vite and Tailwind CSS.

## Tech Stack

- **React 19** with React Router for client-side routing
- **Vite** for fast development and optimized builds
- **Tailwind CSS 4** for utility-first styling
- **Clerk** for authentication and user management
- **Axios** for API communication
- **Lucide React** for icons
- **React Markdown** for rendering AI-generated content
- **React Hot Toast** for notifications

## Project Structure

```
src/
├── App.jsx              # Route definitions
├── main.jsx             # Entry point (ClerkProvider + BrowserRouter)
├── index.css            # Global styles, Tailwind config, custom theme
├── pages/
│   ├── Home.jsx         # Landing page
│   ├── Layout.jsx       # Authenticated layout with sidebar
│   ├── Dashboard.jsx    # User's creations overview
│   ├── WriteArticle.jsx # AI article generation
│   ├── BlogTitles.jsx   # AI blog title generation
│   ├── GenerateImages.jsx # Text-to-image generation
│   ├── ReviewResume.jsx # PDF resume review
│   ├── RemoveBackground.jsx # Image background removal
│   ├── RemoveObject.jsx # Object removal from images
│   └── Communities.jsx  # Public feed of published creations
├── components/
│   ├── NavBar.jsx       # Top navigation bar
│   ├── Sidebar.jsx      # Side navigation (8 tool links)
│   ├── Hero.jsx         # Landing page hero section
│   ├── AItools.jsx      # Tool card grid
│   └── CreationItem.jsx # Expandable creation display
└── assets/
    └── assets.js        # Static data (tool cards, testimonials)
```


Create a `.env` file in the `client/` directory:

```env
VITE_CLERK_PUBLISHABLE_KEY=pk_test_...
VITE_BASE_URL=http://localhost:3000
```

| Variable                      | Description                     |
| ----------------------------- | ------------------------------- |
| `VITE_CLERK_PUBLISHABLE_KEY`  | Clerk publishable key           |
| `VITE_BASE_URL`               | Backend API base URL            |

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run linter
npm run lint
```

## Pages & Features

| Page               | Route                | Description                                      |
| ------------------ | -------------------- | ------------------------------------------------ |
| Home               | `/`                  | Landing page with hero and tool cards             |
| Dashboard          | `/dashboard`         | View count and list of user's creations           |
| Write Article      | `/write-article`     | Generate articles with 3 length options            |
| Blog Titles        | `/blog-titles`       | Generate titles with 8 category filters            |
| Generate Images    | `/generate-images`   | Create images with 7 style presets                 |
| Review Resume      | `/review-resume`     | Upload PDF for AI-powered resume feedback          |
| Remove Background  | `/remove-background` | Upload image to remove background                  |
| Remove Object      | `/remove-object`     | Upload image and describe object to remove         |
| Communities        | `/communities`       | Browse and like published creations                |

## Styling

- **Primary color:** `#5044E5`
- **Font:** Outfit (Google Fonts)
- Custom Tailwind theme with responsive breakpoints
- Gradient backgrounds per tool category

## Deployment

Configured for Vercel deployment via `vercel.json` with SPA rewrites.
