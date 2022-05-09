import mysqlDB from '../repos/mysql-db';
import {getUserInterface} from "../interfaces/user-interface";

export default class Users {
    static getUsers(params:Array<any>):Promise<Array<getUserInterface>> {
        return new Promise((resolve, reject) => {
            mysqlDB.query('select * from test_user where id=? and pw=?', params, function (err, rows, fields) {
                if (err) {
                    console.log(err);
                    reject(err);
                }
                resolve(rows);

            })
        })
    }
}