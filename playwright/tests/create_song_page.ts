import { Locator, Page} from '@playwright/test'

export class CreateSongPage{
    readonly page: Page;
    readonly title: Locator;
    readonly artist: Locator;
    readonly gener: Locator;
    readonly album: Locator;
    readonly albumImage: Locator;
    readonly youtubeId: Locator;
    readonly tab: Locator;
    readonly lyrics: Locator;
    readonly button: Locator;

    constructor(page: Page){
        this.page = Page;
        this.title= this.page.locator('input#sngTitle');
        this.artist= this.page.locator('input#sngArtist');
        this.gener= this.page.locator('input#sngGenre');
        this.album= this.page.locator('input#sngAlbum');
        this.albumImage= this.page.locator('input#sngAlbumImg');
        this.youtubeId= this.page.locator('input#sngYoutube');
        this.tab= this.page.locator('textarea#sngTab');
        this.lyrics= this.page.locator('textarea#sngLyricsg');
        this.button= this.page.locator('button#sngBtn > .btn__content');
    };

    async fillSong(title: string, 
        artist: string, 
        gener: string, 
        album: string, 
        albumUrl: string, 
        youtubeUrl: string, 
        tab: string, 
        lyrics: string){
        await this.title.fill(title);
        await this.artist.fill(artist);
        await this.gener.fill(gener);
        await this.album.fill(album);
        await this.albumImage.fill(albumUrl);
        await this.youtubeId.fill(youtubeUrl);
        await this.tab.fill(tab);
        await this.lyrics.fill(lyrics);
        await this.button.click();
    }
}