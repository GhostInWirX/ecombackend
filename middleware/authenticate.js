import jwtprovider from "../config/jwtprovider.js";
import userService from "../service/user.service.js";

const authenticate = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization || "";
        const token = authHeader.startsWith("Bearer ") ? authHeader.split(" ")[1] : "";
        if (!token) {
            return res.status(404).send({ error: "token not found" });
        }
        const userId = jwtprovider.getUserIdFromToken(token);
        const user = await userService.findUserByID(userId);
        req.user = user;
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
    next();
};

export default authenticate;