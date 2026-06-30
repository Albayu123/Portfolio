# Progress - Portfolio Improvement Plan

## Priority Improvements (berdasarkan Next.js Best Practices)

### 1. Image Optimization - Replace `<img>` dengan `next/image`
**File:** `src/components/sections/ProjectsSection.tsx` lines 32-39
**Issue:** Menggunakan `<img>` native bukan `next/image`
**Action:** 
- Import `Image` dari `next/image`
- Setup blur placeholder atau priority untuk gambar di atas fold
- Handle error fallback dengan komponen Image

### 2. Extract Icon Mapping ke Utility Function
**File:** `src/components/sections/TechStackSection.tsx` lines 8-43, `ServicesSection.tsx` lines 8-21
**Issue:** Duplicate icon rendering logic di multiple komponen
**Action:** Buat utility hook `useIconMapping.ts` untuk menghindari duplikasi kode

### 3. Metadata Enhancement - Tambah SEO Tags
**File:** `src/app/layout.tsx`
**Issue:** Kurang meta tags esensial untuk SEO
**Action:** Tambah `generateMetadata` atau export metadata object:
- `title` (50-60 chars)
- `description` (150-160 chars)
- Open Graph tags
- Canonical URL

### 4. Bundle Optimization - Dynamic Imports
**File:** `src/components/ui/Toast.tsx`
**Issue:** Framer Motion diimport langsung mungkin besar
**Action:** Pertimbangkan dynamic import untuk komponen dengan animasi non-critical

### 5. Client Component Audit - Minimize 'use client'
**File:** `src/components/sections/AboutSection.tsx`, `ExperienceSection.tsx`
**Issue:** Komponen mungkin bisa jadi Server Component
**Action:** Review apakah komponen benar-benar butuh client state atau bisa server-rendered

### 6. App Router File Conventions - Tambah loading, error, dan not-found
**File:** `src/app/`
**Issue:** Tidak ada `loading.tsx`, `error.tsx`, dan `not-found.tsx`
**Action:** Buat file konvensi App Router:
- `loading.tsx` — loading state halaman
- `error.tsx` — error boundary global
- `not-found.tsx` — custom 404 page

### 7. next/image - Tambah priority & sizes Props
**File:** `src/components/sections/ProjectsSection.tsx`
**Issue:** Image di atas fold tidak diberi `priority`, dan tidak ada `sizes` untuk responsive
**Action:** 
- Tambah prop `priority` pada project card pertama (above the fold)
- Tambah prop `sizes` untuk optimasi responsive image

### 8. Refactor useIconMapping ke Utility Function
**File:** `src/hooks/useIconMapping.tsx`
**Issue:** Fungsi ini bukan React hook (tidak pakai hooks API) tapi ditulis sebagai hook
**Action:** Ubah menjadi pure utility function biasa, pindah ke `src/utils/iconMapping.tsx`

### 9. [Minor] Footer - Hindari 'use client' untuk copyright year
**File:** `src/components/layout/Footer.tsx`
**Issue:** Footer menggunakan `'use client'` hanya untuk `new Date().getFullYear()`, padahal semua konten lainnya static.
**Action:** 
- Hapus `'use client'` dari Footer
- Ekstrak tahun ke komponen client kecil `CopyrightYear` atau gunakan `export const dynamic = 'force-static'`

## Status
- [x] Image Optimization
- [x] Icon Mapping Extract
- [x] Metadata Enhancement
- [x] Bundle Optimization Review
- [x] Client Component Audit
- [x] App Router File Conventions
- [x] next/image priority & sizes
- [x] Refactor useIconMapping ke utility

## minor
- [ ] Footer - Hindari 'use client' untuk copyright year
