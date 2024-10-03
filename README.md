# YouTube Video Search

A simple YouTube video search app built with Sveltekit.

## Features

- Search for videos
- Order results by relevance, date or rating
- View video thumbnails, titles, descriptions, and comments
- Open videos in YouTube

## Project Creation

This project was created with the Sveltekit starter template via the command:

```bash
npm create svelte@latest youtube-jh
```

commit: f6ad018

Then I setup TailwindCSS.

commit: 378befa

The result of these two steps created the following directory structure:

```bash
.
├── README.md
├── eslint.config.js
├── package-lock.json
├── package.json
├── playwright.config.ts
├── postcss.config.js
├── src
│   ├── app.css
│   ├── app.d.ts
│   ├── app.html
│   ├── index.test.ts
│   ├── lib
│   │   └── index.ts
│   └── routes
│       ├── +layout.svelte
│       └── +page.svelte
├── static
│   └── favicon.png
├── svelte.config.js
├── tailwind.config.js
├── tests
│   └── test.ts
├── tsconfig.json
└── vite.config.ts
```

All other modifications were made by me.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/knowthen/youtube-jh
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file with your YouTube API key:

   ```bash
   YOUTUBE_API_KEY=<YOUR_YOUTUBE_API_KEY>
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173` to access the app.
