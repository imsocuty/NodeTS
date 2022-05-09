import mysql from 'mysql';

export default mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'root',
    database:'sys',
    port:3306
});
