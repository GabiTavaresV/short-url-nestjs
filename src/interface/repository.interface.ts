export interface Repository {
    createShortUrl( url: string): Promise<any>
}