import Product from "../model/product.js";


export const getAllProductRepo = async () => {
    const productData = await Product.findAll(
    ).catch((e) => {
        throw new Error(e)

    })
    return productData;


}

