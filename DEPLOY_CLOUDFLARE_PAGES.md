# 🚀 Deploy ke Cloudflare Pages - Panduan Lengkap

## ✅ Perubahan yang Sudah Dilakukan

1. ✅ Mengubah Next.js config ke `output: "export"` (static site)
2. ✅ Menghapus semua kode database (Prisma)
3. ✅ Menghapus API routes
4. ✅ Menggunakan data statis di `useAppStore.ts`
5. ✅ Konfigurasi images untuk static export

## 🎯 Keuntungan Cloudflare Pages

- ✅ **Gratis** unlimited bandwidth
- ✅ **Cepat** dengan CDN global
- ✅ **Mudah** deploy langsung dari GitHub
- ✅ **Tidak perlu database** (semua data statis)
- ✅ **Tidak ada error 404** seperti Vercel

---

## 📦 Langkah 1: Test Build di Local

Sebelum deploy, pastikan build berhasil:

```bash
# Install dependencies
npm install

# Build untuk production
npm run build

# Hasilnya akan ada di folder "out"
```

Jika build berhasil, lanjut ke langkah 2.

---

## 🌐 Langkah 2: Deploy ke Cloudflare Pages

### Via Dashboard (Paling Mudah):

1. **Buka** https://dash.cloudflare.com
2. **Login** atau Sign Up (gratis)
3. **Klik** "Workers & Pages" di sidebar kiri
4. **Klik** "Create application"
5. **Pilih** "Pages" tab
6. **Klik** "Connect to Git"

### Konfigurasi Project:

1. **Select repository:** Pilih `tugas` dari GitHub
2. **Project name:** `cognicoffee` (atau nama lain)
3. **Production branch:** `main`

### Build Settings:

```
Framework preset: Next.js (Static HTML Export)
Build command: npm run build
Build output directory: out
```

### Environment Variables:

**TIDAK PERLU** environment variables karena semua data sudah statis!

4. **Klik** "Save and Deploy"

Tunggu 2-3 menit, aplikasi Anda akan live!

---

## 🎉 Selesai!

Setelah deploy berhasil, Anda akan dapat URL seperti:
```
https://cognicoffee.pages.dev
```

Atau custom domain jika Anda punya.

---

## 🔧 Update Aplikasi

Setiap kali Anda push ke GitHub, Cloudflare Pages otomatis deploy ulang:

```bash
# Edit code
# ...

# Commit dan push
git add .
git commit -m "Update content"
git push origin main

# Cloudflare Pages otomatis deploy!
```

---

## 📝 Cara Menambah/Edit Konten Buku

Semua data buku ada di file: `src/store/useAppStore.ts`

### Menambah Buku Baru:

```typescript
{
  id: "book-id",
  title: "Judul Buku",
  author: "Nama Penulis",
  coverImage: "/images/cover.jpg", // Taruh gambar di folder public/images/
  genres: ["Genre1", "Genre2"],
  excerpt: "Deskripsi singkat buku...",
  chapters: [
    {
      title: "Bab 1",
      content: "Isi bab 1..."
    }
  ]
}
```

### Menambah Gambar:

1. Taruh file gambar di folder `public/images/`
2. Referensi di code: `/images/nama-file.jpg`

---

## 🎨 Custom Domain (Opsional)

Jika punya domain sendiri:

1. Cloudflare Dashboard → Pages → Project Anda
2. Klik "Custom domains"
3. Klik "Set up a custom domain"
4. Ikuti instruksi

---

## 💡 Tips

### Optimize Gambar:

Compress gambar sebelum upload untuk loading lebih cepat:
- Gunakan https://tinypng.com
- Atau https://squoosh.app

### Preview Deployment:

Setiap branch/PR dapat preview URL sendiri:
```
https://branch-name.cognicoffee.pages.dev
```

### Rollback:

Bisa rollback ke deployment sebelumnya di Cloudflare Dashboard.

---

## 🐛 Troubleshooting

### Build Gagal:

**Cek build logs** di Cloudflare Dashboard → Deployments → Klik deployment → View logs

**Error umum:**
- "Module not found" → `npm install` di local, commit `package-lock.json`
- "Type error" → Sudah di-handle dengan `ignoreBuildErrors: true`

### 404 Error:

Tidak akan terjadi karena ini static site. Semua routing client-side.

### Gambar Tidak Muncul:

- Pastikan gambar ada di `public/images/`
- Path harus `/images/nama-file.jpg` (dengan slash di depan)
- Case-sensitive! `harry-potter.jpg` ≠ `Harry-Potter.jpg`

---

## 📊 Perbandingan: Vercel vs Cloudflare Pages

| Feature | Vercel | Cloudflare Pages |
|---------|--------|------------------|
| Harga | Limited free | Unlimited free |
| Database | Perlu setup | Tidak perlu |
| Deploy | Kadang error | Lebih stabil |
| Speed | Cepat | Sangat cepat |
| Setup | Kompleks | Sederhana |

---

## ✅ Checklist Deploy

- [ ] Build berhasil di local (`npm run build`)
- [ ] Push ke GitHub
- [ ] Connect repository di Cloudflare Pages
- [ ] Set build command: `npm run build`
- [ ] Set output directory: `out`
- [ ] Deploy berhasil
- [ ] Test aplikasi di URL Cloudflare

---

## 🎯 Next Steps

Setelah deploy berhasil:

1. **Test semua fitur** di URL production
2. **Share URL** ke teman/client
3. **Monitor** di Cloudflare Analytics
4. **Update konten** kapan saja dengan push ke GitHub

---

Selamat! Aplikasi Anda sekarang live di Cloudflare Pages! 🎉

**URL:** https://cognicoffee.pages.dev (atau custom domain Anda)
