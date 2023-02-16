const 

    express     = require('express'),
    app         = express(),
    port        = 5000,
    swaggerUi   = require('swagger-ui-express'),
    swaggerDocument = require('./swagger.json'),
    mySql       = require("mysql"),
    connection  = mySql.createConnection({
        "host": "localhost",
        "user": "root",
        "password":"paytm@123",
        "database":"iNeuron"
    });


// DB Schema
/*
CREATE TABLE `employee_details` (
    ->   `emp_id` int NOT NULL AUTO_INCREMENT,
    ->   `emp_name` varchar(32) NOT NULL,
    ->   `emp_designation` varchar(64) NOT NULL,
    ->   `emp_salary` int NOT NULL,
    ->   `is_active` tinyint(1) DEFAULT '1',
    ->   PRIMARY KEY (`emp_id`)
    -> );
*/

// SAMPLE ROUTES
/*
    INSERT - http://localhost:5000/insert?name=Emp2&des=SDE2&sal=100000  
    READ ALL - http://localhost:5000/read
    READ BY ID - http://localhost:5000/read?id=1
    UPDATE - http://localhost:5000/update?name=Emp3&des=SDE2&sal=100000&id=2
    DELETE - http://localhost:5000/delete?id=1

*/
// configuration



// Routing
// app.get("/", (req, res) => {
//     console.log("Hello World!");
//     res.send("Hello World!");
    
// });

app.get("/insert", (req, res) => {
    var
        name        = req.query.name,
        designation = req.query.des,
        salary      = req.query.sal;
    // var query = `Insert into employee_details values(1,'Emp1','SDE',60000,1);`;
    var query = `Insert into employee_details(emp_name,emp_designation, emp_salary) values('${name}', '${designation}', ${salary});`;
    connection.query(query, (err, result) => {
        if(err){
            throw err;
        }
        res.send("Data Inserted!");
    })
})

app.get("/read", (req, res) => {
    var query = `Select * from employee_details;`;
    if(req.query.id > 0)
        query = `Select * from employee_details where emp_id = ${req.query.id};`;
    connection.query(query, (err, result) => {
        if(err){
            throw err;
        }
        res.status(200).send(result);
    })
})

app.get("/update", (req, res) => {
    var
        id          = req.query.id,
        name        = req.query.name,
        designation = req.query.des,
        salary      = req.query.sal;

    var query = `Update employee_details set emp_name = '${name}', emp_designation = '${designation}', emp_salary = ${salary} WHERE emp_id = ${id};`;
    connection.query(query, (err, result) => {
    if(err){
        throw err;
    }
    res.send("Data Updated!");
    })    
    
})

app.get("/delete", (req, res) => {
    var query;
    // query = `Delete * from employee_details;`;
    if(req.query.id > 0)
        query = `Delete from employee_details where emp_id = ${req.query.id};`;
    connection.query(query, (err, result) => {
    if(err){
        throw err;
    }
    res.send("Data Deleted!!");
    })
})

// Swagger Route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;