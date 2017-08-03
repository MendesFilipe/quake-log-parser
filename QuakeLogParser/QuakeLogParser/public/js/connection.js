var util = require('util');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'wunderman'
});

module.exports = {

    //
    // Conecta com o banco de dados
    //
    openConnection: function openConnection() {
        connection.connect();
    },

    //
    // Executa Query
    //
    runQuery: function runQuery(sql, callback) {
        connection.query(sql, function (err, rows, fields) {
            if (err) {
                console.error(sql);
                throw err;
            }

            callback(err, rows, fields);
        });
    },

    //
    // TRUNCATE
    //
    truncateData: function truncateData(callback) {
        var sql = 'TRUNCATE `wunderman`.`basesb`';

        this.runQuery(sql, callback.bind(this));
    },

    //
    // CREATE
    //
    createData: function createData(model, callback) {
        var sql = util.format('INSERT INTO `wunderman`.`basedb` (idPartida, resultados) VALUES (%s, \'%s\')', model.idPartida, model.resultados);

        this.runQuery(sql, callback.bind(this));
    },

    //
    // CLOSE CONNECTION
    //
    closeConnection: function closeConnection(model, callback) {
        connection.end();
    }
};