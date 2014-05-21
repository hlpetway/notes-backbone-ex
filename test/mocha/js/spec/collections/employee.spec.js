//test/mocha/js/spec/collection/employee.spec.js

define([
    "app/models/employee",
    "app/collections/employee"
        ], function(
            EmployeeModel,
            EmployeeCollection
            ) {

  describe("app/collections/employee", function() {
      it("should have no models", function() {
        var employees = new EmployeeCollection();

        expect(employees.models.length)
            .to.equal(0);
      });
  });

});
