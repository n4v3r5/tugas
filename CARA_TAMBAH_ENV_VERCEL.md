# 🔧 Cara Menambahkan Environment Variables di Vercel

## Metode 1: Saat Deploy Pertama Kali (Paling Mudah)

### Langkah-langkah:

1. **Buka** https://vercel.com
2. **Login** dengan GitHub
3. **Klik** "Add New" → "Project"
4. **Pilih** repository `tugas`
5. **Klik** "Import"

6. **Di halaman Configure Project**, scroll ke bawah sampai ketemu bagian **"Environment Variables"**

7. **Tambahkan variables** satu per satu:

   **Variable 1:**
   ```
   Name: DATABASE_URL
   Value: postgresql://user:password@host/dbname
   ```
   - Klik "Add"

   **Variable 2:**
   ```
   Name: DIRECT_URL
   Value: postgresql://user:password@host/dbname
   ```
   - Klik "Add"

8. **Klik** "Deploy"

---

## Metode 2: Setelah Project Sudah Di-Deploy

### Langkah-langkah:

1. **Buka** https://vercel.com/dashboard
2. **Klik** project Anda (`tugas`)
3. **Klik** tab **"Settings"** (di menu atas)
4. **Klik** **"Environment Variables"** (di sidebar kiri)

5. **Tambahkan variable baru:**
   - Di bagian "Key", ketik: `DATABASE_URL`
   - Di bagian "Value", paste connection string Anda
   - Pilih environment: **Production**, **Preview**, **Development** (centang semua)
   - Klik **"Save"**

6. **Ulangi** untuk variable lainnya (`DIRECT_URL`)

7. **Redeploy** project:
   - Klik tab **"Deployments"**
   - Klik titik tiga (...) di deployment terakhir
   - Klik **"Redeploy"**

---

## 📋 Environment Variables yang Dibutuhkan

### Wajib (Untuk Database):

```
DATABASE_URL = postgresql://user:password@host:5432/dbname
DIRECT_URL = postgresql://user:password@host:5432/dbname
```

**Cara dapat connection string:**
- **Neon**: https://neon.tech → Dashboard → Connection Details
- **Vercel Postgres**: Vercel Dashboard → Storage → Postgres → .env.local tab

### Opsional (Jika pakai NextAuth):

```
NEXTAUTH_URL = https://your-app.vercel.app
NEXTAUTH_SECRET = (generate dengan: openssl rand -base64 32)
```

---

## 🎯 Tips Penting

### ✅ DO (Lakukan):
- Gunakan connection string yang benar (copy-paste langsung)
- Centang semua environment (Production, Preview, Development)
- Redeploy setelah menambah/mengubah variables
- Simpan connection string di tempat aman (password manager)

### ❌ DON'T (Jangan):
- Jangan commit `.env` ke GitHub
- Jangan share connection string di public
- Jangan lupa redeploy setelah update variables
- Jangan ada spasi di awal/akhir value

---

## 🔍 Cara Cek Variables Sudah Benar

### Via Vercel Dashboard:

1. Buka project → **Settings** → **Environment Variables**
2. Lihat list variables yang sudah ditambahkan
3. Pastikan `DATABASE_URL` dan `DIRECT_URL` ada

### Via Deployment Logs:

1. Klik tab **"Deployments"**
2. Klik deployment terakhir
3. Klik **"View Function Logs"**
4. Jika ada error "DATABASE_URL is not defined", berarti variables belum ditambahkan

---

## 🐛 Troubleshooting

### ❌ Error: "Environment variable not found"

**Penyebab:** Variables belum ditambahkan atau salah nama

**Solusi:**
1. Cek spelling: `DATABASE_URL` (huruf besar semua)
2. Pastikan sudah save
3. Redeploy project

### ❌ Error: "Can't reach database server"

**Penyebab:** Connection string salah

**Solusi:**
1. Copy ulang connection string dari Neon/Vercel Postgres
2. Pastikan tidak ada spasi di awal/akhir
3. Test connection string di local:
   ```bash
   set DATABASE_URL=postgresql://...
   npx prisma db push
   ```

### ❌ Variables tidak muncul setelah ditambahkan

**Solusi:**
1. Refresh halaman
2. Redeploy project (wajib!)
3. Clear browser cache

---

## 📸 Screenshot Guide (Langkah Visual)

### Saat Deploy Pertama:
```
[Import Git Repository]
  ↓
[Configure Project]
  ↓
[Environment Variables] ← Tambahkan di sini
  ↓ Key: DATABASE_URL
  ↓ Value: postgresql://...
  ↓ [Add]
  ↓
[Deploy]
```

### Setelah Deploy:
```
[Dashboard]
  ↓
[Pilih Project]
  ↓
[Settings]
  ↓
[Environment Variables] ← Klik di sidebar
  ↓
[Add New] ← Klik tombol ini
  ↓ Key: DATABASE_URL
  ↓ Value: postgresql://...
  ↓ Environment: ✓ Production ✓ Preview ✓ Development
  ↓
[Save]
  ↓
[Redeploy Project]
```

---

## 🎬 Video Tutorial (Alternatif)

Jika masih bingung, bisa tonton video tutorial:
- YouTube: "How to add environment variables in Vercel"
- Atau baca docs: https://vercel.com/docs/projects/environment-variables

---

## ✅ Checklist

Setelah menambahkan variables:

- [ ] `DATABASE_URL` sudah ditambahkan
- [ ] `DIRECT_URL` sudah ditambahkan
- [ ] Semua environment (Production, Preview, Development) sudah dicentang
- [ ] Sudah klik "Save"
- [ ] Sudah redeploy project
- [ ] Deployment berhasil (tidak ada error)
- [ ] Aplikasi bisa diakses dan database berfungsi

---

## 💡 Pro Tips

1. **Gunakan Vercel CLI** untuk manage variables via terminal:
   ```bash
   vercel env add DATABASE_URL
   vercel env ls
   ```

2. **Pull variables ke local** untuk development:
   ```bash
   vercel env pull .env.local
   ```

3. **Gunakan different values** untuk Production vs Preview:
   - Production: database production
   - Preview: database staging/test

---

Selesai! Environment variables Anda sekarang sudah terkonfigurasi dengan benar 🎉
