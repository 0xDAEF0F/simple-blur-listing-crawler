// For more information, see https://crawlee.dev/
import { PuppeteerCrawler, log } from 'crawlee';

import { router } from './routes.js';

const collection = "pudgypenguins"
const startUrls = [`https://blur.io/collection/${collection}`];

const crawler = new PuppeteerCrawler({
    // proxyConfiguration: new ProxyConfiguration({ proxyUrls: ['...'] }),
    requestHandler: router,
    // Comment this option to scrape the full website.
    maxRequestsPerCrawl: 20,
    headless: true,
});

await crawler.run(startUrls);
