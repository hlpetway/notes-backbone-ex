//app/js/app/collections/employee.js

define([
    "backbone",
    "app/models/employee"

        ], function(
            Backbone,
            EmployeeModel
            ) {

    // Backbone.js Collection
    // The collection contains the models and is the initial collection.

        var EmployeeCollection = Backbone.Collection.extend({
          model: EmployeeModel
        });
        return EmployeeCollection;

});
