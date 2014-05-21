//test/mocha/js/spec/views/company.spec.js

define([
    "app/views/employee",
    "app/views/company"
        ], function(
            EmployeeView,
            CompanyView
            ) {

  describe("app/views/company", function() {
      it("el should should equal #meep", function() {
      var company = new CompanyView();
        expect(company.$el)
            .to.equal("#meep");
    // this.position = "Dog Walker";
    // var employees = new EmployeeCollection([
    //   var haileyModel = new EmployeeModel({
    //       firstName: "Hailey",
    //       lastName: "Petway",
    //       position: "Coder"
    //   });

    //   var ottoModel = new EmployeeModel({
    //       firstName: "Otto",
    //       lastName: "Martinez",
    //       position: "Engineer"
    //   });
      });
  });
});
