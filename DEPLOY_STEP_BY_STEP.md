# 🚀 Panduan Deploy ke Vercel - Step by Step

## ✅ Langkah 1: Code Sudah di GitHub
Code Anda sudah berhasil di-push ke: https://github.com/n4v3r5/tugas.git

---

## 📦 Langkah 2: Setup Database (WAJIB - Pilih Salah Satu)

### Opsi A: Neon (Paling Mudah & Gratis)

1. **Buka** https://neon.tech
2. **Klik** "Sign Up" → Login dengan GitHub
3. **Klik** "Create a project"
4. **Isi**:
   - Project name: `tugas` (atau nama lain)
   - Region: `Singapore` (paling dekat dengan Indonesia)
5. **Copy** connection string yang muncul (ada 2 jenis):
   - **Connection string** → untuk `DATABASE_URL`
   - **Pooled connection** → untuk `DIRECT_URL` (atau bisa pakai yang sama)

Contoh connection string:
```
postgresql://user:password@ep-xxx.ap-southeast-1.aws.neon.tech/neondb
```

**SIMPAN connection string ini!** Anda akan butuh nanti.

### Opsi B: Vercel Postgres

Bisa setup nanti setelah deploy pertama kali (lihat langkah 4).

---

## 🌐 Langkah 3: Deploy ke Vercel

1. **Buka** https://vercel.com
2. **Login** dengan GitHub
3. **Klik** "Add New" → "Project"
4. **Pilih** repository `tugas` dari list
5. **Klik** "Import"

### Konfigurasi Project:

**Framework Preset:** Next.js (sudah auto-detect)

**Root Directory:** `./` (biarkan default)

**Build Command:** (biarkan kosong, akan pakai default)

**Output Directory:** (biarkan kosong)

### Environment Variables (PENTING!):

Klik "Environment Variables" dan tambahkan:

| Name | Value |
|------|-------|
| `DATABASE_URL` | `postgresql://user:password@host/dbname` (dari Neon) |
| `DIRECT_URL` | `postgresql://user:password@host/dbname` (sama dengan DATABASE_URL) |

**Contoh:**
```
DATABASE_URL = postgresql://user:abc123@ep-xxx.ap-southeast-1.aws.neon.tech/neondb
DIRECT_URL = postgresql://user:abc123@ep-xxx.ap-southeast-1.aws.neon.tech/neondb
```

6. **Klik** "Deploy"

Tunggu 2-3 menit sampai build selesai.

---

## 🗄️ Langkah 4: Setup Database Schema

Setelah deploy berhasil, Anda perlu membuat tabel di database.

### Cara Termudah (Via Browser):

1. **Buka terminal** di komputer Anda
2. **Jalankan command** berikut:

```bash
# Set DATABASE_URL (ganti dengan connection string Anda)
set DATABASE_URL=postgresql://user:password@host/dbname

# Push schema ke database
npx prisma db push
```

### Atau Via Vercel CLI:

```bash
# Install Vercel CLI (sekali saja)
npm install -g vercel

# Login
vercel login

# Link ke project
vercel link

# Pull environment variables
vercel env pull .env.local

# Push database schema
npx prisma db push
```

---

## ✨ Langkah 5: Verifikasi & Test

1. **Buka** URL Vercel Anda (contoh: `https://tugas-xxx.vercel.app`)
2. **Test** aplikasi:
   - Coba buka halaman utama
   - Test fitur yang menggunakan database
3. **Jika ada error:**
   - Buka Vercel Dashboard → Project → "Deployments" → Klik deployment terakhir → "View Function Logs"
   - Check error message

---

## 🔧 Troubleshooting

### ❌ Error: "Can't reach database server"

**Solusi:**
- Pastikan `DATABASE_URL` benar (tidak ada spasi, typo)
- Untuk Neon: pastikan menggunakan "Pooled connection string"
- Test connection string dengan:
  ```bash
  npx prisma db push
  ```

### ❌ Error: "Prisma Client not initialized"

**Solusi:**
- Redeploy dengan clear cache:
  - Vercel Dashboard → Settings → General → "Clear Build Cache & Redeploy"

### ❌ Error: "Module not found"

**Solusi:**
- Pastikan semua dependencies ada di `package.json`
- Redeploy

### ❌ Build gagal

**Solusi:**
- Check build logs di Vercel
- Pastikan `typescript.ignoreBuildErrors: true` ada di `next.config.ts` (sudah ada)

---

## 📝 Checklist

- [ ] Code sudah di GitHub ✅ (sudah selesai)
- [ ] Database PostgreSQL sudah dibuat (Neon/Vercel Postgres)
- [ ] Connection string sudah di-copy
- [ ] Deploy ke Vercel sudah berhasil
- [ ] Environment variables sudah ditambahkan
- [ ] Database schema sudah di-push (`npx prisma db push`)
- [ ] Aplikasi bisa diakses dan berfungsi

---

## 🎉 Selesai!

Aplikasi Anda sekarang live di Vercel!

**URL:** https://tugas-xxx.vercel.app (ganti dengan URL Anda)

**Next Steps:**
- Setup custom domain (opsional)
- Monitor logs di Vercel Dashboard
- Update code: `git push` → auto-deploy

---

## 💡 Tips

1. **Auto Deploy:** Setiap kali Anda `git push`, Vercel otomatis deploy ulang
2. **Preview Deployments:** Setiap branch/PR dapat preview URL sendiri
3. **Rollback:** Bisa rollback ke deployment sebelumnya di Vercel Dashboard
4. **Logs:** Check logs real-time di Vercel Dashboard → Functions

---

## 📞 Butuh Bantuan?

Jika ada error atau pertanyaan:
1. Check logs di Vercel Dashboard
2. Baca error message dengan teliti
3. Google error message tersebut
4. Check dokumentasi: https://vercel.com/docs
