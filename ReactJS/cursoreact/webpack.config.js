const path = require('path');

module.exports = {
    entry: './teste.js',
    output:{
        path: path.resolve(__dirname,'build'),
        filename: 'bundler.js'
    }
}