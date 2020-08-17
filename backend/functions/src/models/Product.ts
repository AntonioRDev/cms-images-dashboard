type ProductParams = {
    id: string;
    name: string;
    imageSrc: string;
}

export default class Product {
    id: string;
    name: string;
    imageSrc: string;
    createdAt: string;
    deletedAt: string;

    constructor(params: ProductParams){
        this.id = params.id;
        this.name = params.name;
        this.imageSrc = params.imageSrc;
        this.createdAt = "";
        this.deletedAt = "";
    }
}