import {getUserInterface} from "../interfaces/user-interface";
import Boards from "@models/board-model";

export default class BoardService {
    static async getBoards(body) {
        const params = [body.id, body.title, body.content]
        const result:Array<getUserInterface> = await Boards.getBoards(params);

        return result[0]?.id;
    }
}