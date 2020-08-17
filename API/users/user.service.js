const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `insert into registration(firstName, lastName, gender, email, password, number)
            values(?,?,?,?,?,?)`, [
                data.firstName,
                data.lastName,
                data.gender,
                data.email,
                data.password,
                data.number,
            ],

            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getUsers: (callBack) => {
        pool.query(
            "SELECT id, firstName, lastName, gender, email,number from registration", [],
            (error, results, fields) => {
                if (error) {
                    return console.log(error);
                }
                return callBack(null, results);
            }
        );
    },
    getUsersById: (id, callBack) => {
        pool.query(
            "SELECT id, firstName, lastName, gender, email,number from registration where id=?", [id],
            (error, results, fields) => {
                if (error) {
                    return console.log(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    updateUser: (data, callBack) => {
        pool.query(
            `update registration set firstName=?, lastName=?, gender=?, email=?, password=?, number=? where id=?`, [
                data.firstName,
                data.lastName,
                data.gender,
                data.email,
                data.password,
                data.number,
                data.id,
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    deleteUser: (data, callBack) => {
        pool.query(
            `delete from registration where id=?`, [data.id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getUserByUserEmail: (email, callback) => {
        pool.query(
            `select * from registration where email=?`, [email],
            (error, results, fields) => {
                if (error) {
                    callback(error);
                }
                return callback(null, results[0]);
            }
        );
    },
};