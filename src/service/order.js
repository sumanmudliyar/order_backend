import { createOrderRepo, getAllOrderByUserRepo, getAllOrderRepo, getOrderByOrderIdRepo, updateOrderRepo } from "../repo/order.js";
import { wss } from "../index.js"; // Import WebSocket server instance

export const createOrderService = async (userid, body) => {
    const createdOrder = await createOrderRepo(body);
    return createdOrder;
};

export const getAllOrderService = async (deliveryStatus) => {
    const allOrders = await getAllOrderRepo(deliveryStatus);
    return allOrders;
};


export const getAllOrderByUserService = async (deliveryStatus, userid) => {
    const allOrders = await getAllOrderByUserRepo(deliveryStatus, userid);
    return allOrders;
};



export const updateOrderService = async (orderid, updatedvalues) => {
    const updatedOrder = await updateOrderRepo(orderid, updatedvalues);

    console.log("updatedOrder", updatedOrder);

    const orderData = await getOrderByOrderIdRepo(orderid);


    wss.on("connection", (ws) => {
        console.log("Client connected to WebSocket update service");

        ws.on("message", (message) => {
            console.log("Received:", message.toString());
        });

        // Handle client disconnection
        ws.on("close", () => {
            console.log("Client disconnected from WebSocket");
        });
    });


    // Broadcast the updated order to all connected clients
    wss.clients.forEach((client) => {
        console.log("inside ws update service")
        if (client.readyState === client.OPEN) {
            client.send(JSON.stringify({ type: "ORDER_UPDATED", updatedStatus: orderData.deliveryStatus, orderid: orderid }));
        }
    });

    return updatedOrder;
};


export const getOrderByOrderService = async (orderid) => {

    const result = await getOrderByOrderIdRepo(orderid);
    return result;


}
