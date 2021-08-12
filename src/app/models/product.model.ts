export enum SecurityTypes{Basic,Standart,Deluxe,Custom}

export class Product{
    key!:string;
    image!:string;
    name!:string;
    description!:string;
    price!:number;
    securityPackageType!:SecurityTypes;
    public type():any{
       return SecurityTypes[Number(this.securityPackageType)]
    }
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