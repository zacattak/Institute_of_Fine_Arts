export class Art {
    constructor(data) {
        this.id = data.id
        this.slug = data.slug
        this.admirers = data.admirers
        this.description = data.description
        this.cached = data.cached
        this.imgUrl = data.imgUrls
    }
}


