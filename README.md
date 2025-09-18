This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Internationalization (i18n)

This project uses [next-i18next](https://github.com/isaachinman/next-i18next) for internationalization support.

### Adding Languages
- Update `locales` in `next.config.ts` to add/remove supported languages.
- Default languages: English (en), Urdu (ur), Pashto (ps), Arabic (ar).

### Adding Translations
- Create a `/public/locales/{lang}/common.json` file for each language.
- Example: `/public/locales/en/common.json`, `/public/locales/ur/common.json`, etc.

### Usage in Components
- Use the `useTranslation` hook from `next-i18next`:

```tsx
import { useTranslation } from 'next-i18next';

const MyComponent = () => {
  const { t } = useTranslation('common');
  return <div>{t('welcome')}</div>;
};
```

### Running with i18n
- No extra steps needed; i18n is integrated with Next.js build and dev scripts.
