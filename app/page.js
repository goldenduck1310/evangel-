import { readFile } from 'node:fs/promises';
import path from 'node:path';
import Script from 'next/script';

export default async function HomePage() {
  const body = await readFile(path.join(process.cwd(), 'public', 'page-body.html'), 'utf8');
  return (
    <>
      <div id="next-site-root" dangerouslySetInnerHTML={{ __html: body }} />
      <Script src="/config.js" strategy="afterInteractive" />
      <Script src="/app.js" strategy="afterInteractive" />
      <Script src="/sections.js" strategy="afterInteractive" />
    </>
  );
}
