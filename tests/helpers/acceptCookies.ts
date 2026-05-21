import { Page } from '@playwright/test'

const acceptCookies = async (page: Page, brandName: string, baseURL:string) => {

    const acceptNewModal = async () => {
        const button = await page.getByRole('button', {name: 'Akkoord'})
        await button.click()
        console.log(`accepting the modal on ${brandName}`)
    }

    // In some headless situations the modal does not get shown (i.e. no redirect to myprivacy.dpgmedia.nl), in that case we just need to proceed and not be stuck waiting.
    const observeUrl = async () => {
        await page.waitForURL(baseURL)
        console.log(`No cookie modals to accept, we are on ${baseURL} already.`)
    }

    await Promise.any([acceptNewModal(), observeUrl()])
}

export default acceptCookies