//app/js/app/views/employee.js

define([
    "backbone",
    "hbs!app/templates/employee",

        ], function(
            Backbone,
            employeeTmpl
            ) {

    //Backbone.js Employee View - Renders single model

    var EmployeeView = Backbone.View.extend({
      template: employeeTmpl,
      initialize: function(){
        this.render();
      },
      render: function(){
        console.log(this.$el); //console.log here!
                this.$el.html(this.template(this.model.toJSON()));
                return this;
              }
            });
            return EmployeeView;
  });
