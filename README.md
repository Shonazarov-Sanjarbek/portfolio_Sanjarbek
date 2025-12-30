# Portfolio (React + Vite)

This project is a personal portfolio built with React and Vite. It includes a small Express backend used to forward contact form submissions to Telegram, and a Vercel-compatible serverless function (`api/send-message.js`) for deployment.

## Quick start (local)

1. Copy environment example and add your tokens:

```bash
cp .env.example .env
# Edit .env and put your real values for TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID
```

2. Install and run:

Terminal 1 — backend:

```bash
npm install
npm run server
```

Terminal 2 — frontend:

```bash
npm run dev
```

Open `http://localhost:5173` and test the contact form.

## Test endpoint (curl)

If you want to test the backend directly:

```bash
curl -X POST http://localhost:3000/api/send-message \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","phone":"998901234567","telegram":"@testuser","message":"Salom"}'
```

## Deploy to Vercel

1. Push your repo to GitHub.
2. In Vercel dashboard → Project → Settings → Environment Variables add:

- `TELEGRAM_BOT_TOKEN` = your bot token
- `TELEGRAM_CHAT_ID` = your chat id

3. Deploy — the serverless API route is available at `/api/send-message`.

Notes:
- Local `.env` is ignored by `.gitignore` to keep secrets safe.
- The server code falls back to `VITE_TELEGRAM_*` variables if `TELEGRAM_*` are not present (useful for some setups), but you should set `TELEGRAM_*` in production.

## Troubleshooting

- Error `Serverda Telegram sozlamalari yo‘q` (500): make sure the environment variables are set locally or in Vercel.
- If you get Telegram API errors like `Unauthorized` or `chat not found`, check that the bot token and chat id are correct.
- For debugging, share server logs and Network → Response text from the browser.

If you want, I can also add a small `README` section showing how to create a Telegram bot and find chat id.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
