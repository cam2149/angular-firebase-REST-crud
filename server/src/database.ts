import mysql from 'promise-mysql';
import key from './key';

const pool = mysql.createPool(key.database);

pool.getConnection()
.then(conection => {
    pool.releaseConnection(conection);
    console.log('MySQL is connected');
});

export default pool;