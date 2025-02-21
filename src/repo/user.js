
import User from "../model/user.js";


export const getUserByEmailRepo = async (email) => {

    const result = await User.findOne({
        where: {
            email: email
        }
    });

    return result;


}


export const checkUserCredentialRepo = async (email, password) => {

    const result = await User.findOne({
        where: {
            email: email,
            password: password
        }
    });

    return result;

}