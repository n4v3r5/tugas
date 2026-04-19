# ⚡ Cara Deploy ke Cloudflare Pages (5 Menit)

## ✅ Code Sudah Siap!

Code Anda sudah di-push ke GitHub dan siap deploy:
https://github.com/n4v3r5/tugas.git

---

## 🚀 Langkah Deploy (Ikuti Urutan Ini)

### 1. Buka Cloudflare

**URL:** https://dash.cloudflare.com

- Jika belum punya akun, **Sign Up** (gratis)
- Jika sudah punya, **Log In**

---

### 2. Buat Project Baru

1. Klik **"Workers & Pages"** di sidebar kiri
2. Klik **"Create application"**
3. Pilih tab **"Pages"**
4. Klik **"Connect to Git"**

---

### 3. Connect GitHub

1. Klik **"Connect GitHub"**
2. Authorize Cloudflare untuk akses GitHub Anda
3. Pilih repository: **`tugas`**
4. Klik **"Begin setup"**

---

### 4. Konfigurasi Build

Isi form dengan nilai berikut:

```
Project name: cognicoffee
(atau nama lain yang Anda suka)

Production branch: main

Framework preset: Next.js (Static HTML Export)
(pilih dari dropdown)

Build command: npm run build

Build output directory: out
```

**PENTING:** Pastikan:
- ✅ Build command = `npm run build`
- ✅ Output directory = `out`

---

### 5. Deploy!

1. **Jangan tambahkan** environment variables (tidak perlu!)
2. Klik **"Save and Deploy"**
3. Tunggu 2-3 menit

---

## 🎉 Selesai!

Setelah build selesai, Anda akan dapat URL seperti:

```
https://cognicoffee.pages.dev
```

Atau:

```
https://cognicoffee-xxx.pages.dev
```

**Buka URL tersebut** dan aplikasi Anda sudah live! 🚀

---

## 📱 Screenshot Konfigurasi

Jika bingung, ini settingan yang benar:

```
┌─────────────────────────────────────┐
│ Project name                        │
│ cognicoffee                         │
├─────────────────────────────────────┤
│ Production branch                   │
│ main                                │
├─────────────────────────────────────┤
│ Framework preset                    │
│ Next.js (Static HTML Export) ▼      │
├─────────────────────────────────────┤
│ Build command                       │
│ npm run build                       │
├─────────────────────────────────────┤
│ Build output directory              │
│ out                                 │
└─────────────────────────────────────┘

Environment variables: (kosongkan)

[Save and Deploy]
```

---

## 🔄 Update Aplikasi Nanti

Setiap kali Anda push ke GitHub, Cloudflare otomatis deploy ulang:

```bash
# Edit code
# ...

# Commit dan push
git add .
git commit -m "Update aplikasi"
git push origin main

# Cloudflare Pages otomatis deploy! ✨
```

---

## 🐛 Jika Ada Error

### Build Gagal:

1. Klik deployment yang error
2. Klik **"View build log"**
3. Screenshot error dan share

### 404 Error:

Tidak akan terjadi! Ini static site, semua routing client-side.

---

## 💡 Tips

- **Custom Domain:** Bisa tambahkan domain sendiri di settings
- **Analytics:** Gratis analytics di Cloudflare Dashboard
- **Preview:** Setiap branch dapat preview URL sendiri

---

## ✅ Checklist

- [ ] Sudah login/signup di Cloudflare
- [ ] Sudah connect GitHub
- [ ] Sudah pilih repository `tugas`
- [ ] Build command = `npm run build`
- [ ] Output directory = `out`
- [ ] Klik "Save and Deploy"
- [ ] Tunggu build selesai
- [ ] Buka URL dan test aplikasi

---

## 🆘 Butuh Bantuan?

Jika ada error atau pertanyaan:

1. Screenshot halaman konfigurasi
2. Screenshot build logs (jika error)
3. Share URL Cloudflare Pages Anda

---

Selamat! Aplikasi Anda akan live dalam 5 menit! 🎉

**Tidak perlu database, tidak perlu environment variables, tidak perlu setup rumit!**

Semua data sudah ada di code, tinggal deploy dan jalan! 🚀
