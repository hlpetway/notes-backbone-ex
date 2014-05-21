//app/js/app/views/company.js

define([
    "backbone",
    "hbs!app/templates/employees",
    "app/views/employee"

        ], function(
            Backbone,
            employeesTmpl,
            EmployeeView
            ) {

    //Backbone.js Employee View - Renders single model

        var CompanyView = Backbone.View.extend({
          el: "#meep",
          template: employeesTmpl,

          initialize: function() {
            this.render();
          },

          render: function(){
            var that = this;
            _.each(this.collection.models, function(model) {
              that.$el.append($("<div id="+model.cid+">"));

              var emp = new EmployeeView({
                  model: model,
                  el: "#"+model.cid
              });
            });
          }
        });
        return CompanyView;
  });
