//test/mocha/js/spec/models/employee.spec.js

define(["app/models/employee"
], function(EmployeeModel) {

  describe("app/models/employee", function() {
    it("should have defaults", function() {
      var employee = new EmployeeModel();
      expect(employee.get("position"))
        .to.equal("Customer Service");
    });

  it("should stub get", function () {
    var stub = sinon.stub(EmployeeModel.prototype, "get", function (){
    return "Hi!!";
    });
    var employee = new EmployeeModel();

      expect(employee.get("position")).to.equal("Hi!!");
      stub.restore();
  });

  });

});
