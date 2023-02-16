var
    express = require('express'),
    request = require('supertest'),
    app = require('../App'),
    controllersSetup = require('../test-setup/controllers-setup');

describe('Testing for Read All',() => {
    it('', async() => {
        let response = await request(app).get('/read');
        // expect(response.body).toEqual([{"emp_designation": "SDE", "emp_id": 1, "emp_name": "Emp1", "emp_salary": 60000, "is_active": 1}, {"emp_designation": "SDE3", "emp_id": 3, "emp_name": "Emp6", "emp_salary": 900000, "is_active": 1}]);
    })
})

describe('Testing for Read ',() => {
    it('', async() => {
        let response = await request(app).get('/read?id=1');
        // expect(response.body).toEqual([{"emp_designation": "SDE", "emp_id": 1, "emp_name": "Emp1", "emp_salary": 60000, "is_active": 1}]);
    })
})

describe('Testing for Insert',() => {
    it('', async() => {
        let response = await request(app).get('/insert?name=Emp2&des=SDE2&sal=100000  ');
        // expect(response.text).toEqual("Hello World!");
    })
})

describe('Testing for Update',() => {
    it('', async() => {
        let response = await request(app).get('/update?name=Emp3&des=SDE2&sal=100000&id=2');
        // expect(response.text).toEqual("Hello World!");
    })
})

describe('Testing for Delete',() => {
    it('', async() => {
        let response = await request(app).get('/delete?id=1');
        // expect(response.text).toEqual("Hello World!");
    })
})
