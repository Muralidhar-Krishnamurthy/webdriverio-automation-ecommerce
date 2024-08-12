import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'

describe('Test Script Github Actions', () => {
    it('Open Toyota Autoparts', async () => {
        await browser.url('https://autoparts.toyota.com/')
        await $("//a[contains(text(),'Shop Wheels')]").click()
        await $("h1.plp__title").waitForClickable()
    })
})

