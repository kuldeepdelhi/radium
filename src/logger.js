function log(name) {
    console.log(name)
}

function welcome() {
    console.log('welcome to my application. i am kuldeep')
}
const url = 'http://www.google.com/log'

module.exports.log = log
module.exports.welcome = welcome
module.exports.endpoint = url