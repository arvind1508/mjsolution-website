# MJ Solutions - Next.js Website

Interactive brand website inspired by the provided MJ Solutions PDF visual direction.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Static export

```bash
npm run build
```

Deploy the generated `out/` folder.

## Base path for deploy

- Root domain deploy (for `https://mjsolution.in`): do not set `NEXT_PUBLIC_BASE_PATH`.
- Subfolder deploy (example `https://example.com/mjsolution-website`): set `NEXT_PUBLIC_BASE_PATH=/mjsolution-website` before `npm run build`.
