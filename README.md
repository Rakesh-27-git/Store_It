# StoreIt

**A cloud file storage app** for uploading, organising, sharing and searching your documents, images, video and audio.

**Live demo:** https://store-it-tan.vercel.app


## What it does

- **Passwordless sign-in.** Email one-time password (OTP) login. No passwords to store.
- **Upload with drag and drop.** Files up to 50 MB.
- **File actions.** Rename, view details, share with other users, download and delete.
- **Browse by type.** Documents, images, media and other files each have their own page.
- **Search and sort.** Debounced search, plus sorting by date, name or size.
- **Storage overview.** A chart of how much space you've used and a breakdown per file type.
- **Responsive.** Works on desktop and mobile (mobile navigation included).

## How it works

Server actions (no separate REST API) call [Appwrite](https://appwrite.io) for authentication, file storage and the metadata database:

- `lib/actions/users` – create account, send and verify OTP, sign in/out, current user.
- `lib/actions/files` – upload, list (with type, search and sort filters), rename, share, delete.

Pages are server-rendered, so file lists and storage totals come from the server on each load.

## Tech stack

Next.js (App Router), React, TypeScript, Appwrite (`node-appwrite`), Tailwind CSS, shadcn/ui + Radix, React Hook Form + Zod, react-dropzone, Recharts.

## Run it locally

```bash
git clone https://github.com/Rakesh-27-git/Store_It.git
cd Store_It
npm install
cp .env.example .env.local   # then fill in your Appwrite values
npm run dev
```

Environment variables: `NEXT_PUBLIC_APPWRITE_ENDPOINT`, `NEXT_PUBLIC_APPWRITE_PROJECT`, `NEXT_PUBLIC_APPWRITE_DATABASE`, `NEXT_PUBLIC_APPWRITE_USERS_COLLECTION`, `NEXT_PUBLIC_APPWRITE_FILES_COLLECTION`, `NEXT_PUBLIC_APPWRITE_BUCKET`, `NEXT_APPWRITE_SECRET`.

## Author

Built by [Rakesh Choudhary](https://github.com/Rakesh-27-git).
