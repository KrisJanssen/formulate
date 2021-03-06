// Variables.
var app = angular.module("umbraco");

// Service to help with Formulate fields.
app.factory("formulateFields", function (formulateVars,
    formulateServer) {

    // Variables.
    var services = {
        formulateVars: formulateVars,
        formulateServer: formulateServer
    };

    // Return service.
    return {

        // Gets the field types.
        getFieldTypes: getGetFieldTypes(services)

    };

});

// Returns the function that gets field types.
function getGetFieldTypes(services) {
    return function () {

        // Variables.
        var url = services.formulateVars.GetFieldTypes;

        // Get field types from server.
        return services.formulateServer.get(url, {}, function (data) {

            // Return field types.
            return data.FieldTypes.map(function (field) {
                return {
                    icon: field.Icon,
                    typeLabel: field.TypeLabel,
                    directive: field.Directive,
                    typeFullName: field.TypeFullName
                };
            });

        });

    };
}