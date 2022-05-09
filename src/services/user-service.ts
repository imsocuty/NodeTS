import Users from "../models/user-model";
import {getUserInterface} from "../interfaces/user-interface";

export default class UsersService {
    static async getUsers(body) {
        const params = [body.userId, body.userPw]
        const result:Array<getUserInterface> = await Users.getUsers(params);

        return result[0]?.id;
    }
}