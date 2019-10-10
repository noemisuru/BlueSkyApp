//        user: 'chiliuser@chilisqlserver',
//        password: 'Chiliteam2019',
//        server: 'chilisqlserver.database.windows.net',
//        database: 'mssqldatabase',


var Connection = require('tedious').Connection;  
var config = {  
    server: 'chilisqlserver.database.windows.net',  //update me
    authentication: {
        type: 'default',
        options: {
            userName: 'chiliuser@chilisqlserver', //update me
            password: 'Chiliteam2019'  //update me
        }
    },
    options: {
        // If you are on Microsoft Azure, you need encryption:
        encrypt: true,
        database: 'mssqldatabase'  //update me
    }
};  
var connection = new Connection(config);  
connection.on('connect', function(err) {  
    // If no error, then good to proceed.  
    console.log("Connected");  
    executeStatement1();  
});  

var Request = require('tedious').Request  
var TYPES = require('tedious').TYPES;  

function executeStatement1() {  
    request = new Request('INSERT INTO dbo.USER_DATA (USERID, login_time, logout_time) OUTPUT INSERTED.USERID VALUES (@USERID, @login_time, @logout_time);', 
    function(err) {  
             if (err) {  
        console.log(err);}  
    });  
    request.addParameter('USERID', TYPES.Int, 101); 
    request.addParameter('login_time', TYPES.SmallDateTime, null);  
    request.addParameter('logout_time', TYPES.SmallDateTime, new Date());  
    request.on('row', function(columns) {  
        columns.forEach(function(column) {  
          if (column.value === null) {  
            console.log('NULL');  
          } else {  
            console.log("user id of inserted item is " + column.value);  
          }  
        });  
    });       
    connection.execSql(request);  
}  