// SKELETON
/**
 * Application.
 *
 * This file is usually the "binding" of all of the individual Backbone.js
 * components into a unified whole. It is also typically *not* unit tested
 * because it has side effects from just running it. So, here is the expected
 * place to also do things like start Backbone.js History, do `$()` DOM
 * manipulation, etc.
 */
 define([
    "jquery",
    "backbone",
    "app/models/employee",
    "app/views/employee",
    "app/views/company",
    "app/collections/employee",

        // Import and compile a HBS template.
        // For real application, remove this import (and the real file) and replace
        // with imports for your Backbone components needed to bootstrap the full
        // application. Likely this means a collection and router.
        // Polyfill JSON for old browsers.
        "json2"

        ], function (
            $,
            Backbone,
            EmployeeModel,
            EmployeeView,
            CompanyView,
            EmployeeCollection
            ) {
            "use strict";

        // --------------------------------------------------------------------------
        // Backbone.js Components.
        // --------------------------------------------------------------------------
        // Let's write a very simple Backbone model, and bind that with a template
        // to a view.

        var haileyModel = new EmployeeModel({
            firstName: "Hailey",
            lastName: "Petway",
            position: "Coder"
        });

        var ottoModel = new EmployeeModel({
            firstName: "Otto",
            lastName: "Martinez",
            position: "Engineer"
        });


        // var EmployeeCollection = Backbone.Collection.extend({
        //     model: EmployeeModel
        // });

        var employeeCollection = new EmployeeCollection();

        employeeCollection.add([
          haileyModel,
          ottoModel
        ]);

        var newCompanyView = new CompanyView({collection: employeeCollection});

        newCompanyView.render();

// --------------------------------------------------------------------------
// Adjustments **just** for this demo page.
// --------------------------------------------------------------------------
// Hide the existing Notes HTML content for our skeleton application.
// This hide can be removed later, once you are using the HTML content
// in `index.html`.
$(".notes-html").hide();

// Dynamically add our element for the Backbone.js view
// (Usually done in actual HTML).
$("<div class='hello' />").appendTo($("body"));

// --------------------------------------------------------------------------
// Application Bootstrap
// --------------------------------------------------------------------------
// Actually wire up and kick everything off!
//
// **Note**: The `app.js` file is usually just comprised of **imports**
// of the individual Backbone.js components above and the below function
// on page load.

});
