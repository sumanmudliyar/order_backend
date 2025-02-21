import { loginService } from "../service/user.js";




export const loginController = async (request, reply) => {
    let { email, password } = request.query;

    const data = await loginService(email, password);
    return reply.send(data);
};