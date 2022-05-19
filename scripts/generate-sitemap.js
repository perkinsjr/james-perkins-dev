const fs = require('fs');

const globby = require('globby');
const prettier = require('prettier');

(async () => {
    const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');
    const pages = await globby(['pages/*.js', 'content/**/*.mdx', 'content/data/categories/*.md', '!pages/_*.js', '!pages/api']);

    const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
                .map((page) => {
                    const path = page
                        .replace('pages', '')
                        .replace('content', '')
                        .replace('data','')
                        .replace('/categories', 'category')
                        .replace('.js', '')
                        .replace('.mdx', '')
                        .replace('.md', '');
                    const route = path === '/index' ? '' : path;
                    if (path === '/admin') {
                        return '';
                    }
                    return `
                        <url>
                            <loc>${`https://jamesperkins.dev${route}`}</loc>
                        </url>
                    `;
                })
                .join('')}
        </urlset>
    `;

    const formatted = prettier.format(sitemap, {
        ...prettierConfig,
        parser: 'html'
    });

    // eslint-disable-next-line no-sync
    fs.writeFileSync('public/sitemap.xml', formatted);
})();
