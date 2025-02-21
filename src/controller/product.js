import { getAllProductService } from "../service/product.js";




export const getAllProductController = async (request, reply) => {
    const data = await getAllProductService();
    return reply.send(data);
};