export enum SecurityTypes{Basic,Standart,Deluxe,Custom}

export class Product{
    key!:string;
    imageSrc!:string;
    name!:string;
    description!:string;
    price!:number;
    securityPackageType!:SecurityTypes;
    /**
     *
     */
    // constructor(imageSrc:string,name:string, description:string,price:number, securityPackageType:SecurityTypes) {
    //     this.imageSrc = imageSrc;
    //     this.name =name;
    //     this.description = description;
    //     this.price = price;
    //     this.securityPackageType = securityPackageType;

    // }

}