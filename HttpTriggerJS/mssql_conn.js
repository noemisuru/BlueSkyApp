var express = require('express');
var app = express();

app.get('/', function (req, res) {

    var sql = require("mssql");

    // config for your database

    //dbc:sqlserver://chilisqlserver.database.windows.net:1433;database=mssqldatabase;user=chiliuser@chilisqlserver;password={your_password_here};encrypt=true;trustServerCertificate=false;hostNameInCertificate=*.database.windows.net;loginTimeout=30;

    var config = {
        user: 'chiliuser@chilisqlserver',
        password: 'Chiliteam2019',
        server: 'chilisqlserver.database.windows.net',
        database: 'mssqldatabase2',
        options: {
            // If you are on Microsoft Azure, you need encryption:
            encrypt: true,
            database: 'mssqldatabase'  //update me
        }
    };

    // connect to your database
    sql.connect(config, function (err) {

        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();

        // query to the database and get the records
        request.query('select * from Users;', function (err, recordset) {

            if (err) console.log(err)

            // send records as a response
            res.send(recordset);

        });
    });

    sql.close();
});

app.get('/login', function (req, res) {

    var sql = require("mssql");

    // config for your database

    //dbc:sqlserver://chilisqlserver.database.windows.net:1433;database=mssqldatabase;user=chiliuser@chilisqlserver;password={your_password_here};encrypt=true;trustServerCertificate=false;hostNameInCertificate=*.database.windows.net;loginTimeout=30;

    var config = {
        user: 'chiliuser@chilisqlserver',
        password: 'Chiliteam2019',
        server: 'chilisqlserver.database.windows.net',
        database: 'mssqldatabase2',
        options: {
            // If you are on Microsoft Azure, you need encryption:
            encrypt: true,
            database: 'mssqldatabase'  //update me
        }
    };

    // connect to your database
    sql.connect(config, function (err) {

        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();

        // query to the database and get the records
        request.query("INSERT INTO Users(UserId, Region, Country, Groupp, Company) VALUES('9966','UK','UK','CIB','DB');", function (err, recordset) {

            if (err) console.log(err)

            // send records as a response
            res.send(recordset);

        });
    });
    sql.close();
});

var server = app.listen(5000, function () {
    console.log('Server is running..');
});
