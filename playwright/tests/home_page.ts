import { Locator, Page} from '@playwright/test'

export class HomePage{
    readonly page: Page;
    readonly addButton: Locator;
    readonly songTitle: Locator;

    constructor(page: Page){
        this.page = Page;
        this.addButton= this.page.locator("[class='cyan accent-2 btn btn--absolute btn--floating btn--raised btn--right theme--light'] .btn__content")
        this.songTitle= this.page.locator("")
    }
}