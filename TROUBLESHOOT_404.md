# 🔧 Troubleshooting Error 404 di Vercel

## Kemungkinan Penyebab Error 404

### 1. Build Gagal (Paling Umum)
Jika build gagal, Vercel akan menampilkan 404.

**Cara Cek:**
1. Buka Vercel Dashboard → Project Anda
2. Klik tab **"Deployments"**
3. Lihat status deployment terakhir:
   - ✅ **Ready** = Build berhasil
   - ❌ **Error** = Build gagal
   - 🔄 **Building** = Masih proses

**Jika Build Gagal:**
1. Klik deployment yang error
2. Scroll ke bawah, lihat **"Build Logs"**
3. Cari error message (biasanya di bagian bawah)
4. Screenshot error dan share untuk bantuan lebih lanjut

---

### 2. Environment Variables Belum Ditambahkan

**Cara Cek:**
1. Vercel Dashboard → Settings → Environment Variables
2. Pastikan ada:
   - `DATABASE_URL`
   - `DIRECT_URL`

**Jika Belum Ada:**
- Tambahkan sesuai panduan di `CARA_TAMBAH_ENV_VERCEL.md`
- **Wajib Redeploy** setelah menambahkan

---

### 3. Database Belum Di-Setup

**Cara Cek:**
Jika build berhasil tapi aplikasi error saat runtime:

1. Klik deployment → **"View Function Logs"**
2. Cari error seperti:
   - "Can't reach database server"
   - "Prisma Client not initialized"
   - "DATABASE_URL is not defined"

**Solusi:**
```bash
# Set DATABASE_URL dari Neon/Vercel Postgres
set DATABASE_URL=postgresql://your-connection-string

# Push schema ke database
npx prisma db push
```

---

### 4. Routing Issue (Jarang Terjadi)

Aplikasi Anda menggunakan client-side routing, jadi seharusnya tidak ada masalah.

**Cara Test:**
- Coba akses root URL: `https://your-app.vercel.app/`
- Jika root URL juga 404, berarti build gagal

---

## 🎯 Langkah Troubleshooting (Ikuti Urutan Ini)

### Step 1: Cek Status Build

```
Vercel Dashboard → Deployments → Lihat status terakhir
```

**Jika Status = Error:**
- Baca build logs
- Copy error message
- Lanjut ke Step 2

**Jika Status = Ready:**
- Lanjut ke Step 3

---

### Step 2: Fix Build Errors

**Error Umum & Solusi:**

#### Error: "Type error" atau "TypeScript error"
Sudah di-handle dengan `ignoreBuildErrors: true` di `next.config.ts`

#### Error: "Module not found"
```bash
# Pastikan semua dependencies terinstall
npm install

# Commit dan push
git add package.json package-lock.json
git commit -m "Update dependencies"
git push origin main
```

#### Error: "Prisma Client not generated"
Sudah di-handle dengan `postinstall` script di `package.json`

#### Error: "Out of memory"
Jarang terjadi, tapi bisa upgrade Vercel plan atau optimize build

---

### Step 3: Cek Environment Variables

```bash
# Via Vercel Dashboard
Settings → Environment Variables → Pastikan DATABASE_URL ada

# Atau via CLI
vercel env ls
```

**Jika Belum Ada:**
1. Tambahkan `DATABASE_URL` dan `DIRECT_URL`
2. **Wajib Redeploy:**
   ```
   Deployments → ... → Redeploy
   ```

---

### Step 4: Setup Database Schema

```bash
# Set DATABASE_URL
set DATABASE_URL=postgresql://your-connection-string

# Push schema
npx prisma db push

# Verify
npx prisma studio
```

---

### Step 5: Clear Cache & Redeploy

Kadang cache Vercel menyebabkan masalah:

1. **Settings** → **General**
2. Scroll ke bawah
3. Klik **"Clear Build Cache & Redeploy"**

---

## 🔍 Cara Dapat Informasi Error Lebih Detail

### Via Vercel Dashboard:

1. **Build Logs:**
   ```
   Deployments → Klik deployment → Build Logs
   ```

2. **Function Logs (Runtime Errors):**
   ```
   Deployments → Klik deployment → View Function Logs
   ```

3. **Real-time Logs:**
   ```
   Project → Logs (tab di atas)
   ```

### Via Vercel CLI:

```bash
# Install CLI
npm i -g vercel

# Login
vercel login

# Link project
vercel link

# View logs
vercel logs
```

---

## 📋 Checklist Debugging

Centang satu per satu:

- [ ] Build status = Ready (bukan Error)
- [ ] Environment variables sudah ditambahkan
- [ ] Sudah redeploy setelah tambah env variables
- [ ] Database schema sudah di-push (`npx prisma db push`)
- [ ] Sudah coba clear cache & redeploy
- [ ] Sudah cek function logs (tidak ada error)
- [ ] URL yang diakses benar (https://your-app.vercel.app)

---

## 🆘 Jika Masih Error

**Informasi yang Dibutuhkan:**

1. **URL Vercel Anda:**
   ```
   https://your-app.vercel.app
   ```

2. **Screenshot Build Logs:**
   - Vercel Dashboard → Deployments → Klik deployment → Screenshot bagian error

3. **Screenshot Function Logs:**
   - Klik "View Function Logs" → Screenshot error message

4. **Environment Variables:**
   - Apakah sudah ditambahkan? (Ya/Tidak)
   - Apakah sudah redeploy setelah tambah? (Ya/Tidak)

5. **Database:**
   - Provider apa? (Neon/Vercel Postgres/lainnya)
   - Apakah sudah `npx prisma db push`? (Ya/Tidak)

---

## 💡 Tips Debugging

### Test Build di Local:

```bash
# Build seperti di Vercel
npm run build

# Jika build berhasil di local tapi gagal di Vercel:
# - Cek Node.js version
# - Cek environment variables
```

### Test Database Connection:

```bash
# Set DATABASE_URL
set DATABASE_URL=postgresql://...

# Test connection
npx prisma db push

# Jika berhasil, berarti connection string benar
```

### Force Fresh Deploy:

```bash
# Commit kosong untuk trigger deploy
git commit --allow-empty -m "Force redeploy"
git push origin main
```

---

## 🎬 Video Tutorial Debugging

Jika masih bingung:
- YouTube: "Vercel 404 error troubleshooting"
- Vercel Docs: https://vercel.com/docs/errors

---

## ⚠️ Warning: intersection-observer

Warning ini **TIDAK** menyebabkan error 404. Ini hanya warning dari dependency `@mdxeditor/editor`.

**Abaikan warning ini** atau update dependency:
```bash
npm update @mdxeditor/editor
```

Tapi ini tidak urgent dan tidak mempengaruhi deployment.

---

Ikuti langkah-langkah di atas secara berurutan. Jika masih error, share screenshot build logs untuk bantuan lebih lanjut! 🚀
