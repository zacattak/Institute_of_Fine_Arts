import { AppState } from "../AppState.js"
import { Art } from "../models/Art.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"


class ArtService {
    async getArt() {
        const response = await api.get('api/artworks')
        logger.log('got art', response.data)
        const newArt = response.data.results.map(artPOJO => new Art(artPOJO))
        AppState.artworks = newArtworks
    }
}

export const artService = new ArtService()