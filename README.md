# Portfolio Website

A modern, responsive portfolio website built with Next.js, React, TypeScript, and Tailwind CSS.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js** (version 18 or higher) - [Download here](https://nodejs.org/)
- **pnpm** (recommended) - Install with `npm install -g pnpm`
- **Git** - [Download here](https://git-scm.com/)

## Getting Started

### 1. Clone the Repository

```bash
# If you don't have the code locally yet:
# HTTPS
git clone https://github.com/jadengong/portfolio.git
cd portfolio

# or SSH
# git clone git@github.com:<your-username>/portfolio.git
# cd portfolio
```

### 2. Install Dependencies

Using pnpm (recommended):
```bash
pnpm install
```

Or using npm:
```bash
npm install
```

Or using yarn:
```bash
yarn install
```

### 3. Start the Development Server

Using pnpm:
```bash
pnpm dev
```

Or using npm:
```bash
npm run dev
```

Or using yarn:
```bash
yarn dev
```

### 4. Open Your Browser

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The page auto-updates as you edit the files.

## Contact form email setup

This project uses Resend to send emails from the contact form.

1. Create a Resend account and generate an API key.
2. Create a `.env.local` file in the project root with:

```
RESEND_API_KEY=your_resend_api_key_here
CONTACT_TO_EMAIL=your_destination_email@example.com
```

3. Restart the dev server after adding environment variables.

By default, messages are sent from `Portfolio Contact <onboarding@resend.dev>` to `CONTACT_TO_EMAIL`. The reply-to is set to the sender's email from the form.

## Testing the contact form

1. Start the dev server:
   ```bash
   pnpm dev
   ```
   Note: If port 3000 is busy, Next.js will use another port (e.g., 3001). Check the terminal line that starts with `Local:` and use that URL.

2. Open the site in your browser (replace the port if needed):
   - `http://localhost:3000` or `http://localhost:3001`

3. Go to the Contact section, fill the form, and submit.

4. You should receive an email at `CONTACT_TO_EMAIL` (or the default if not set). Check Spam if not in Inbox.

### Test the API directly

- PowerShell (Windows):
  ```powershell
  Invoke-RestMethod -Method POST `
    -Uri http://localhost:3000/api/contact `
    -ContentType 'application/json' `
    -Body '{"name":"Test User","email":"test@example.com","subject":"Hello","message":"This is a test."}'
  ```

- curl:
  ```bash
  curl -X POST http://localhost:3000/api/contact \
    -H 'Content-Type: application/json' \
    -d '{"name":"Test User","email":"test@example.com","subject":"Hello","message":"This is a test."}'
  ```

Replace `3000` with the actual port shown in your terminal if it differs.

## Troubleshooting

- Ensure `.env.local` contains `RESEND_API_KEY` (and optional `CONTACT_TO_EMAIL`).
- Restart the dev server after changing env vars. The terminal should show `Reload env: .env.local`.
- Check the browser Network tab: the `POST /api/contact` response should be 200.
- Check terminal logs for any server errors.
- If you change the "from" address, add and verify a domain in Resend.
- Check your Spam folder; first-time emails often land there.

## Available Scripts

- `pnpm dev` - Starts the development server
- `pnpm build` - Builds the app for production
- `pnpm start` - Runs the built app in production mode
- `pnpm lint` - Runs the linter to check code quality

## Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── layout.tsx      # Root layout with SEO and structured data
│   ├── page.tsx        # Home page
│   ├── globals.css     # Global styles and custom animations
│   ├── fonts/          # Custom fonts
│   ├── resume/         # Resume page
│   └── api/            # API routes
│       └── contact/    # Contact form API
├── components/         # React components
│   ├── About.tsx      # About section with experience timeline
│   ├── Contact.tsx    # Contact form with validation
│   ├── Footer.tsx     # Footer component
│   ├── Header.tsx     # Header with dark mode and mobile menu
│   ├── Hero.tsx       # Hero section with animations
│   ├── Projects.tsx   # Projects showcase with filtering
│   └── Skills.tsx     # Skills section with categories
└── public/            # Static assets
    ├── profile.jpg    # Profile picture
    ├── codebox.jpg    # Project images
    └── resume-*.pdf   # Resume files
```

## Technologies Used

- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Geist Font** - Custom font family
- **Resend** - Email service for contact form
- **Next.js Image** - Optimized image loading

## Features

- **Responsive Design** - Mobile-first approach with dark mode support
- **SEO Optimized** - Meta tags, OpenGraph, Twitter cards, and JSON-LD structured data
- **Accessibility** - ARIA labels, semantic HTML, and keyboard navigation
- **Contact Form** - Functional contact form with Resend email service
- **Project Showcase** - Filterable project gallery with live demos
- **Resume Viewer** - Dedicated resume page with PDF viewer
- **Custom Animations** - Smooth transitions and micro-interactions
- **Performance** - Optimized images and fast loading times

## Customization

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

### Key Files to Customize:

- `src/app/page.tsx` - Main page layout
- `src/components/` - Individual sections and components
- `src/app/globals.css` - Global styles
- `tailwind.config.ts` - Tailwind CSS configuration

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [React Documentation](https://react.dev/) - learn about React
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - learn about Tailwind CSS
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) - learn about TypeScript

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).
