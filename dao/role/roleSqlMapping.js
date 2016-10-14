/**
 * Created by jay on 2016-10-13.
 */

var role = {
    insert : 'INSERT INTO role(name) VALUES(?)',
    update : 'update role set name = ? where id = ?',
    delete : 'delete from role where id = ?',
    queryById : 'select * from role where id = ?',
    queryAll : 'select * from role '
};

module.exports = role;