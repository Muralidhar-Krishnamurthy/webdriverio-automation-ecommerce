
describe('Test Script Github Actions', () => {
    it('Open Toyota Autoparts', async () => {
        await browser.url('https://autoparts.toyota.com/')
        await $("//a[contains(text(),'Shop Wheels')]").click()
        await $("h1.plp__title").waitForClickable()        
    })
})

