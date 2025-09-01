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
git clone <your-repository-url>
cd portfolio
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

## Available Scripts

- `pnpm dev` - Starts the development server
- `pnpm build` - Builds the app for production
- `pnpm start` - Runs the built app in production mode
- `pnpm lint` - Runs the linter to check code quality

## Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── layout.tsx      # Root layout component
│   ├── page.tsx        # Home page
│   ├── globals.css     # Global styles
│   └── fonts/          # Custom fonts
├── components/         # React components
│   ├── About.tsx      # About section
│   ├── Contact.tsx    # Contact section
│   ├── Footer.tsx     # Footer component
│   ├── Header.tsx     # Header component
│   ├── Hero.tsx       # Hero section
│   ├── Projects.tsx   # Projects section
│   └── Skills.tsx     # Skills section
```

## Technologies Used

- **Next.js 15** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Geist Font** - Custom font family

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
