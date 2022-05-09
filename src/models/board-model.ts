import mysqlDB from '../repos/mysql-db';
import {getUserInterface} from "../interfaces/user-interface";

export default class Boards {
    static getBoards(params:Array<any>):Promise<Array<getUserInterface>> {
        return new Promise((resolve, reject) => {
            mysqlDB.query('select * from board', params, function (err, rows, fields) {
                if (err) {
                    console.log(err);
                    reject(err);
                }
                resolve(rows);

            })
        })
    }
}