import {getUserInterface} from "../interfaces/user-interface";
import Boards from "@models/board-model";

export default class BoardService {
    static async getBoards(body) {
        const result:Array<getUserInterface> = await Boards.getBoards();

        return result;
    }
}