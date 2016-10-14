var getName = function () {
    return new Promise(function (resolve) {
        resolve('jayazhang')
    })
};
var test = async function() {
    let name = await getName();
    console.log(name)
};
test();
