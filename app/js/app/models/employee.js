//app/js/app/models/employee.js

define([
    "backbone"

      ], function(
          Backbone
      ) {

    // Backbone.js Model
    // The model contains the data.
    // Typically this is synched with remote or local storage.


        var EmployeeModel = Backbone.Model.extend({
            defaults: {
                firstName: "",
                lastName: "",
                position: "Customer Service"
            }
        });
        return EmployeeModel;

});
