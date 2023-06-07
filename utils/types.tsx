



export type ProductType={
    id: number,
    title:string,
    description:string,
    price:number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail:string,
    images:Array<string>
}

export type DataType={
 products:Array<ProductType>,
 total:number,
 skip:number,
 limit:number
}
export type CartType={
    id: number,
    title:string,
    description:string,
    price:number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail:string,
    quantity:number,
    images:Array<string>
}


export type UserType={
    username:string,
    password:string
}