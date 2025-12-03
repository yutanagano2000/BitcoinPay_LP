# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

BitCoinPay is a cryptocurrency-to-everyday-payments service landing page built with Nuxt 4 and Vue 3. It features multi-language support (17 languages), a waitlist signup system, and integration with Supabase for backend services.

## Tech Stack

- **Framework**: Nuxt 4 (compatibility version 4, compatibility date 2025-07-15)
- **UI**: @nuxt/ui v4 (Tailwind-based component library)
- **i18n**: @nuxtjs/i18n with 17 locales
- **Form Validation**: vee-validate + zod
- **Backend**: Supabase (via @supabase/supabase-js)
- **Package Manager**: pnpm

## Commands

```bash
pnpm dev        # Start development server on http://localhost:3000
pnpm build      # Build for production
pnpm preview    # Preview production build
pnpm postinstall # Run nuxt prepare (auto-runs after install)
```

## Architecture

### Directory Structure (Nuxt 4 convention)

```
app/                    # Main application code (Nuxt 4 style)
  app.vue               # Root component
  pages/                # File-based routing
    index.vue           # Landing page
    privacy.vue         # Privacy policy
    terms.vue           # Terms of service
    contact/            # Contact page route
  components/
    layout/             # AppHeader, AppFooter, LanguageSwitcher
    sections/           # Landing page sections (Hero, Features, FAQ, etc.)
    ui/                 # Reusable UI components
    forms/              # Form components
  composables/          # Shared composable functions
  assets/css/           # Global CSS (main.css)

server/                 # Server-side code (Nitro)
  api/                  # API endpoints
    waitlist.post.ts    # POST /api/waitlist - waitlist signup
    contact/            # Contact form endpoints
  utils/
    supabase.ts         # Supabase client initialization

i18n/
  locales/              # Translation JSON files (en, ja, de, es, fr, etc.)
```

### Component Naming Convention

Components are auto-imported with path-based naming:
- `components/layout/AppHeader.vue` -> `<LayoutAppHeader />`
- `components/sections/HeroSection.vue` -> `<SectionsHeroSection />`

### API Endpoints

- `POST /api/waitlist` - Email signup with zod validation
- Server-side uses Supabase service key (not exposed to client)

### Environment Variables

Required in `.env`:
```
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_KEY=your-service-role-key
```

## Key Patterns

### i18n Usage
```vue
<script setup lang="ts">
const { t, locale } = useI18n();
</script>

<template>
  <div>{{ t('key.path') }}</div>
</template>
```

### API Endpoint Pattern (with zod validation)
```typescript
import { z } from 'zod';

const schema = z.object({
  email: z.string().email(),
});

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const result = schema.safeParse(body);

  if (!result.success) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Validation failed',
    });
  }

  // Process validated data
  return { success: true };
});
```

### Dark Mode

The app uses dark mode by default (`colorMode.preference: 'dark'`).

## Nuxt 4 Specifics

This project uses Nuxt 4's new directory structure where application code lives in `app/` directory, while server code remains at root level in `server/`. The `future.compatibilityVersion: 4` flag is enabled in nuxt.config.ts.
