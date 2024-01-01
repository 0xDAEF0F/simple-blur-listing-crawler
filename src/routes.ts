import { createPuppeteerRouter } from 'crawlee';

export const router = createPuppeteerRouter();

router.addDefaultHandler(async ({ enqueueLinks, log, page }) => {
    await page.setViewport({ width: 1440, height: 986 });

    await page.waitForSelector('.row.sweepable[role=row]');

    const prices = await page.$$eval('.row.sweepable[role=row]', (rows) => {
        return rows.map((row) => {
            const fullName = row.children.item(1)?.textContent || ''
            const id = fullName.slice(fullName.indexOf('#') + 1)
            const price = row.children.item(3)?.textContent
            return { price, id }
        })
    })

    console.log(prices)
});
