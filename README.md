# Pickleball Tournament Registration (React/Next.js) — Vercel Ready (Sporty Theme)

Deployable on **Vercel free** using **Supabase** for database + proof image storage.

## Run locally
```bash
npm install
cp .env.example .env.local
# Fill env values
npm run dev
```

## Supabase setup (fast)
1. Create Supabase project
2. SQL Editor: run `supabase.sql`
3. Storage: create bucket `uploads` and set it **PUBLIC**
4. Get env keys (Project Settings → API):
   - SUPABASE_URL
   - SUPABASE_SERVICE_ROLE_KEY

## Deploy to Vercel
1. Push to GitHub
2. Import in Vercel
3. Add env vars in Vercel:
   - SUPABASE_URL
   - SUPABASE_SERVICE_ROLE_KEY
   - ADMIN_USERNAME
   - ADMIN_PASSWORD
   - ADMIN_JWT_SECRET

Admin: `/admin/login`
