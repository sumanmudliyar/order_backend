

import Order from "../model/order.js";



export const createOrderRepo = async (account) => {
    const createdOrder = await Order.create(account);
    return createdOrder;
};

export const updateOrderRepo = async (orderid, updatedValues) => {
    const updatedOrder = await Order.update(updatedValues, {
        where: {
            order_id: orderid

        }
    }).catch((error) => {
        throw error


    })

    return updatedOrder;

}


export const getAllOrderRepo = async (deliveryStatus) => {

    let allOrder;
    if (deliveryStatus == "all") {
        allOrder = await Order.findAll();


    } else {
        allOrder = await Order.findAll({
            where: {
                deliveryStatus: deliveryStatus
            }
        })

    }
    return allOrder;
};

export const getAllOrderByUserRepo = async (deliveryStatus, userid) => {

    let allOrder;
    if (deliveryStatus == "all") {
        allOrder = await Order.findAll({
            where: {
                user_id: userid

            }

        });


    } else {
        allOrder = await Order.findAll({
            where: {
                deliveryStatus: deliveryStatus,
                user_id: userid

            }
        })

    }
    return allOrder;
};


export const getOrderByOrderIdRepo = async (orderid) => {
    try {
        const result = await Order.findOne({
            where: { order_id: orderid },
        });



        return result;
    } catch (error) {
        console.error("Error fetching order:", error);
        throw error; // Re-throw for handling at the service/controller level
    }
};






