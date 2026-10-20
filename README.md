# GymLab Web

Angular single-page application for managing personalised workout plans: authentication with Supabase, biometric profile, plan generation through the [GymLab API](https://github.com/luizgustavocs/gymlab-back) and an LGPD consent flow. Mobile-first and deployed on Vercel.

**Live app:** [gymlab-front.vercel.app](https://gymlab-front.vercel.app) · **Backend:** [gymlab-back](https://github.com/luizgustavocs/gymlab-back)

## Highlights

- **Angular 21** with standalone components and **Signals** for reactive state.
- **Authentication with Supabase Auth** (login, sign-up and password recovery in a single `/auth` flow); the access token is sent as a Bearer token to the Spring Boot API.
- **Protected routes** with an `AuthGuard`.
- **Reactive Forms** with synchronous validation of biometric data (weight, height, gender, goal).
- **LGPD consent modal** on first access, with the decision stored locally and sent to the API for a historical record.
- **Presentation layer only:** all business rules (exercise selection, ordering) stay in the backend's workout engine.
- **Mobile-first dark theme** built with Tailwind CSS 4, including viewport fixes for native select inputs.

## Tech stack

| Technology | Purpose |
|---|---|
| Angular 21, TypeScript | SPA with standalone components |
| Angular Signals | Reactive state |
| Angular Router, guards | Navigation and route protection |
| Reactive Forms | Forms and validation |
| Supabase Auth | Authentication and session |
| Tailwind CSS 4 | Styling |
| Vercel | Hosting |

## Request flow

```
User ─► LGPD consent ─► Supabase Auth (session) ─► JWT
   ─► Angular services (Authorization: Bearer <jwt>) ─► GymLab API (POST /api/treinos/gerar)
```

## Project structure

```
src/app/
├── components/   sidebar and reusable UI
├── guards/       auth.guard.ts
├── pages/        auth, dashboard, profile, renovar
├── services/     auth.ts (Supabase), treino.ts (API)
└── supabase.ts   Supabase client
```

## Getting started

```bash
git clone https://github.com/luizgustavocs/gymlab-front.git
cd gymlab-front
npm install
ng serve
```

The app runs at `http://localhost:4200`. Before running, create `src/environments/environment.ts` from `environment.example.ts` (or run `node set-env.js` with `API_URL`, `SUPABASE_URL` and `SUPABASE_KEY` set). The file is gitignored.

## Deployment (Vercel)

- `set-env.js` generates `environment.ts` from Vercel environment variables (`PRODUCTION`, `API_URL`, `SUPABASE_URL`, `SUPABASE_KEY`) before the build (`node set-env.js && ng build`).
- `vercel.json` rewrites all routes to `index.html`, avoiding 404 errors on SPA routes after a page refresh.

## Roadmap

- Exercise completion checkboxes and load history
- Global `HttpInterceptor` for the Bearer token
- PWA support (service worker and offline cache)

## Author

Luiz Gustavo Costa e Silva · [GitHub](https://github.com/luizgustavocs) · [LinkedIn](https://www.linkedin.com/in/luizgustavocs)

<details>
<summary>Versão em português</summary>

### GymLab Web

SPA em Angular para gerenciar fichas de treino personalizadas, com autenticação pelo Supabase, perfil biométrico, geração de treinos pela [GymLab API](https://github.com/luizgustavocs/gymlab-back) e fluxo de consentimento conforme a LGPD. Mobile-first e hospedada na Vercel.

**Destaques técnicos**
- Angular 21 com standalone components e Signals.
- Supabase Auth com login, cadastro e recuperação de senha; JWT enviado como Bearer token à API Spring Boot.
- Rotas protegidas por AuthGuard e Reactive Forms com validação de biometria.
- Modal de consentimento LGPD no primeiro acesso, com registro local e na API.
- Regras de negócio concentradas no back-end; o front-end é só camada de apresentação.
- Deploy na Vercel com geração do `environment.ts` em tempo de build e rewrites para a SPA.

**Como executar:** `npm install`, criar o `environment.ts` a partir do `environment.example.ts` (ele fica fora do Git) e rodar `ng serve`.
</details>
