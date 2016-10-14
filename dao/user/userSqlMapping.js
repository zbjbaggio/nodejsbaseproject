/**
 * Created by jay on 2016-9-28.
 */

var user = {
    insert : 'INSERT INTO user(name, phone, email, password) VALUES(?, ?, ?, ?)',
    update : 'update user set name = ?, phone = ?, email = ?, password = ? where id = ?',
    delete : 'delete from user where id = ?',
    queryById : 'select * from user where id = ?',
    queryByName : 'select * from user where name = ?',
    queryAll : 'select * from user '
};

module.exports = user;