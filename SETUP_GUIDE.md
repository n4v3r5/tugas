# Panduan Setup Database & Deploy

## Langkah 1: Setup Database PostgreSQL

Sebelum deploy, Anda perlu database PostgreSQL. Pilih salah satu:

### Opsi A: Neon (Recommended - Free & Mudah)

1. Buka https://neon.tech
2. Sign up dengan GitHub
3. Klik "Create Project"
4. Pilih region terdekat (Singapore untuk Indonesia)
5. Copy connection string yang muncul
6. Simpan untuk langkah berikutnya

### Opsi B: Vercel Postgres

1. Login ke https://vercel.com
2. Nanti setelah import project, buka tab "Storage"
3. Klik "Create Database" → "Postgres"
4. Copy connection string

## Langkah 2: Commit & Push ke GitHub

Jalankan command berikut di terminal:

```bash
# Add semua perubahan
git add .

# Commit dengan pesan
git commit -m "Configure for Vercel deployment"

# Push ke GitHub
git push origin main
```

## Langkah 3: Deploy ke Vercel

1. Buka https://vercel.com
2. Klik "Add New" → "Project"
3. Import repository GitHub Anda
4. Di halaman konfigurasi:
   - Framework Preset: Next.js (auto-detect)
   - Root Directory: ./
   - Build Command: (biarkan default)
   - Output Directory: (biarkan default)

5. Klik "Environment Variables" dan tambahkan:

```
DATABASE_URL = postgresql://user:password@host/dbname (dari Neon/Vercel Postgres)
DIRECT_URL = postgresql://user:password@host/dbname (sama dengan DATABASE_URL)
```

6. Klik "Deploy"

## Langkah 4: Setup Database Schema

Setelah deploy berhasil, jalankan migration:

**Cara 1: Via Vercel CLI**
```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Link project
vercel link

# Pull environment variables
vercel env pull .env.local

# Run migration
npx prisma db push
```

**Cara 2: Via Prisma Studio (Lebih Mudah)**
```bash
# Gunakan DATABASE_URL dari Neon/Vercel
npx prisma db push --schema=./prisma/schema.prisma
```

## Langkah 5: Verifikasi

1. Buka URL Vercel Anda (contoh: https://your-app.vercel.app)
2. Test aplikasi
3. Jika ada error, check logs di Vercel Dashboard

## Troubleshooting

### Error saat build
- Check logs di Vercel Dashboard
- Pastikan semua dependencies ada di package.json

### Error database connection
- Pastikan DATABASE_URL benar
- Pastikan database mengizinkan koneksi dari Vercel
- Untuk Neon: pastikan "Enable pooling" aktif

### Error Prisma Client
- Redeploy dengan clear cache
- Pastikan `postinstall` script ada di package.json

## Command Lengkap untuk Copy-Paste

```bash
# 1. Commit perubahan
git add .
git commit -m "Configure for Vercel deployment"
git push origin main

# 2. Setelah deploy di Vercel, setup database
npm i -g vercel
vercel login
vercel link
vercel env pull .env.local
npx prisma db push
```

Selesai! Aplikasi Anda sekarang live di Vercel 🎉
