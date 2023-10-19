import { test,expect} from '@playwright/test'
import { HomePage } from './home_page';
import { CreateSongPage } from './create_song_page';

test("Add new song",async ({page}) => {
    await page.goto("http://192.168.1.195:8080");
    var homePage: HomePage = new HomePage(page);
    await homePage.addButton.click();

    var createSengPage: CreateSongPage= new CreateSongPage(page);
    await createSengPage.fillSong('NewSong', 
    'Loco', 
    'Rock', 
    'Album To you', 
    'https://www.google.com/',
    'https://www.google.com/',
    'tab',
    'Lyrics');
})