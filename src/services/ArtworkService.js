import { AppState } from "../AppState.js"
import { Artwork } from "../models/Artwork.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"


class ArtworkService {
    async getArtwork() {
        const response = await api.get('/api/artworks')
        logger.log('got art', response.data)
        const newArtworks = response.data.artworks.map(artworkPOJO => new Artwork(artworkPOJO))
        AppState.artworks = newArtworks
    }
}

export const artworkService = new ArtworkService()