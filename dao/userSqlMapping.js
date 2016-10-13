/**
 * Created by jay on 2016-9-28.
 */

var user = {
    insert : 'INSERT INTO user(name, age) VALUES(?, ?)',
    update : 'update user set name = ?, age = ? where id = ?',
    delete : 'delete from user where id = ?',
    queryById : 'select * from user where id = ?',
    queryAll : 'select * from user '
};

module.exports = user;