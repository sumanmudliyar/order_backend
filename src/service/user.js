import { checkUserCredentialRepo, getUserByEmailRepo } from "../repo/user.js"
import jwt from "jsonwebtoken";
import dotenv from "dotenv";




export const loginService = async (email, password) => {

    try {

        const checkEmailExists = await getUserByEmailRepo(email);


        if (checkEmailExists) {

            const checkCredentials = await checkUserCredentialRepo(email, password);



            if (checkCredentials) {

                console.log("checkCredentials", checkCredentials.user_id)

                const token = jwt.sign(
                    { id: checkCredentials.user_id, email: checkCredentials.email },
                    process.env.JWT_SECRET_KEY,
                    { expiresIn: process.env.JWT_TOKEN_EXPIRY }

                );


                // console.log("process", process.env.JWT_SECRET_KEY, process.env.JWT_TOKEN_EXPIRY)




                return {
                    user: checkCredentials,
                    token: token
                }

                    ;
            } else {
                return {
                    error: "Wrong credentials"
                }
            }



        } else {
            return {
                error: "User not exists."
            }
        }

    } catch (error) {


        console.log("error in login service", error)


        return {
            error: "Something went wrong."
        }

    }
}