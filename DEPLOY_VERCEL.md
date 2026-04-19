# Panduan Deploy ke Vercel

## Perubahan yang Sudah Dilakukan

1. ✅ Mengubah database dari SQLite ke PostgreSQL di `prisma/schema.prisma`
2. ✅ Menyesuaikan build script di `package.json`
3. ✅ Menghapus konfigurasi `output: "standalone"` dari `next.config.ts`
4. ✅ Menambahkan `vercel.json` untuk konfigurasi build
5. ✅ Membuat `.env.example` sebagai template

## Langkah Deploy ke Vercel

### 1. Setup Database PostgreSQL

Pilih salah satu provider database PostgreSQL:

**Opsi A: Vercel Postgres (Recommended)**
- Login ke [Vercel Dashboard](https://vercel.com)
- Buat project baru atau pilih project yang sudah ada
- Pergi ke tab "Storage" → "Create Database" → "Postgres"
- Copy connection string yang diberikan

**Opsi B: Neon (Free Tier Bagus)**
- Daftar di [Neon](https://neon.tech)
- Buat database baru
- Copy connection string

**Opsi C: Supabase**
- Daftar di [Supabase](https://supabase.com)
- Buat project baru
- Copy connection string dari Settings → Database

### 2. Setup Environment Variables di Vercel

Di Vercel Dashboard project Anda:
1. Pergi ke "Settings" → "Environment Variables"
2. Tambahkan variable berikut:

```
DATABASE_URL=postgresql://...
DIRECT_URL=postgresql://...
NEXTAUTH_URL=https://your-domain.vercel.app
NEXTAUTH_SECRET=generate-random-secret-key
```

**Generate NEXTAUTH_SECRET:**
```bash
openssl rand -base64 32
```

### 3. Deploy ke Vercel

**Cara 1: Via GitHub (Recommended)**
1. Push code ke GitHub repository
2. Import repository di [Vercel](https://vercel.com/new)
3. Vercel akan otomatis detect Next.js dan deploy

**Cara 2: Via Vercel CLI**
```bash
npm i -g vercel
vercel login
vercel
```

### 4. Jalankan Database Migration

Setelah deploy pertama kali, jalankan migration:

**Via Vercel CLI:**
```bash
vercel env pull .env.local
npx prisma migrate deploy
```

**Atau via Prisma Data Platform:**
```bash
npx prisma db push
```

### 5. Verifikasi

- Buka URL Vercel Anda
- Test semua fitur yang menggunakan database
- Check logs di Vercel Dashboard jika ada error

## Troubleshooting

### Error: "Can't reach database server"
- Pastikan DATABASE_URL sudah benar di environment variables
- Pastikan database provider mengizinkan koneksi dari Vercel

### Error: "Prisma Client not generated"
- Pastikan `postinstall` script ada di package.json
- Atau tambahkan `prisma generate` di build command

### Error: "Module not found"
- Clear build cache di Vercel: Settings → General → Clear Build Cache
- Redeploy

## Development Lokal dengan PostgreSQL

Jika ingin development lokal dengan PostgreSQL:

**Menggunakan Docker:**
```bash
docker run --name postgres -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres
```

Update `.env`:
```
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/mydb"
DIRECT_URL="postgresql://postgres:postgres@localhost:5432/mydb"
```

Jalankan migration:
```bash
npx prisma migrate dev
```

## Catatan Penting

- SQLite tidak bisa digunakan di Vercel karena serverless environment
- Setiap deployment baru akan reset file system
- Gunakan PostgreSQL atau database cloud lainnya
- Jangan commit file `.env` ke git (sudah ada di .gitignore)
