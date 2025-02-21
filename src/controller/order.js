import { createOrderService, getAllOrderByUserService, getAllOrderService, getOrderByOrderService, updateOrderService } from "../service/order.js";



export const createOrderController = async (request, reply) => {
    let { userid } = request.query;

    const data = await createOrderService(userid, request.body);
    return reply.send(data);
};



export const getAllOrderController = async (request, reply) => {
    let { deliveryStatus } = request.query;
    const data = await getAllOrderService(deliveryStatus);
    return reply.send(data);

}


export const getAllOrderByUserController = async (request, reply) => {
    let { deliveryStatus, userid } = request.query;
    const data = await getAllOrderByUserService(deliveryStatus, userid);
    return reply.send(data);

}


export const updateOrderController = async (request, reply) => {

    let { orderid } = request.query;
    const data = await updateOrderService(orderid, request.body);

    return reply.send(data)

};


export const getOrderByOrderController = async (request, reply) => {

    let { orderid } = request.query;

    if (!orderid) {

        return {
            error: "Id is required."
        }
    }


    const data = await getOrderByOrderService(orderid);

    return reply.send(data)

};


