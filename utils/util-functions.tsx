export const CategoryEndpoint=(title:string):string=>{
    switch (title) {
        case 'Womens Clothes':
             return 'https://dummyjson.com/products/category/womens-dresses'
            break;
            case 'Mens Clothes':
                return 'https://dummyjson.com/products/category/mens-shirts'

            break;
    
            case 'Shoes':
                return 'https://dummyjson.com/products/category/mens-shoes'

            break;
    
            case 'Cosmetics':
                return 'https://dummyjson.com/products/category/skincare'

            break;
    
            case 'BabySupplies':
                return 'https://dummyjson.com/products/category/skincare'

            break;
    
            case 'Electronics':
                return 'https://dummyjson.com/products/category/smartphones'

            break;
    
            case 'Others':
                return 'https://dummyjson.com/products/category/laptops'

            break;

    
    
        default:
            return ''
            break;
    }
}
