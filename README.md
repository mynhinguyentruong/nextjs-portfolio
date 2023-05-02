
# nhi-ymihn.dev

- **Framework**: [Next.js](https://nextjs.org/)
- **Database**: [PlanetScale](https://planetscale.com)
- **Authentication**: [NextAuth.js](https://next-auth.js.org)
- **Deployment**: [Vercel](https://vercel.com)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)

## TODO

There are still a few things I want to do:

- [ ] Global `404` page coming soon
- [ ] Move redirects to end of routing stack (not in `next.config.js`)
- [ ] Use new support for API routes in `app` (not ready yet)
- [ ] Improved scroll position support in `app/` (not implemented yet)

You can learn more about the `app/` directory [here](https://beta.nextjs.org/docs).

## Running Locally

This application requires Node.js v16.13+.

```bash
git clone https://github.com/mynhinguyentruong/nextjs-portfolio.git
cd nextjs-portfolio
pnpm install
pnpm dev
```

Create a `.env` file similar to [`.env.example`](https://github.com/mynhinguyentruong/nextjs-portfolio/blob/main/.env.example).

