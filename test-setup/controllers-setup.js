const { query } = require('express');
const mysql = require('mysql');


// jest.mock('mysql', () => ({
//    query: jest.fn()
// }));


// jest.mock('mysql', () => {
//     return jest.fn()
//         .mockImplementation(query => {  // return successfully result at second execution 
//             console.log(" Hello ----- World ");
//             })                 
// });


// jest.mock('mysql', () => {
//     return {
//       query: jest.fn(() => [{"emp_designation": "SDEEEEEEEEEEEEE", "emp_id": 1, "emp_name": "Emp1", "emp_salary": 60000, "is_active": 1}])
//     };
//   });