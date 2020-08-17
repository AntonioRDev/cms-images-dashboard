export default class Product {
  createdAt: string;
  deletedAt: string;

  constructor(private id: string, private name: string, private imageSrc: string) {
    this.createdAt = "";
    this.deletedAt = "";
  }
}
