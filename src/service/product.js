import { getAllProductRepo } from "../repo/product.js";



export const getAllProductService = async () => {

    try {
        const result = await getAllProductRepo();

        return result;

    } catch (error) {
        throw error

    }
}