var retrieveAddress =(function() {
    var formContext;
    var onLoad = function (executionContext) {
        debugger;

        formContext = executionContext.getFormContext();
        initOnChange();
    };
    var initOnChange = function () {
        formContext.getAttribute("cr9b5_facultyofstudentid").addOnChange(getContacts);
    };
    var getContacts = function () {
        //var accountId = Xrm.Page.data.entity.getId().replace("{", "").replace("}", "").toLowerCase();
        if (formContext.getAttribute("cr9b5_facultyofstudentid").getValue() != null) {
            var department  = formContext.getAttribute("cr9b5_facultyofstudentid").getValue()[0].id.replace("{", "").replace("}", "").toLowerCase();
            var req = new XMLHttpRequest();
            req.open("GET", Xrm.Page.context.getClientUrl() + "/api/data/v9.1/cr9b5_faculties(" + department + ")?$select=_cr9b5_businessunit_value", true);
            req.setRequestHeader("OData-MaxVersion", "4.0");
            req.setRequestHeader("OData-Version", "4.0");
            req.setRequestHeader("Accept", "application/json");
            req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
            req.setRequestHeader("Prefer", "odata.include-annotations=\"*\"");
            req.onreadystatechange = function () {
                if (this.readyState === 4) {
                    req.onreadystatechange = null;
                    if (this.status === 200) {
                        var result = JSON.parse(this.response);
                        var _cr9b5_businessunit_value = result["_cr9b5_businessunit_value"];
                        var _cr9b5_businessunit_value_formatted = result["_cr9b5_businessunit_value@OData.Community.Display.V1.FormattedValue"];
                        var _cr9b5_businessunit_value_lookuplogicalname = result["_cr9b5_businessunit_value@Microsoft.Dynamics.CRM.lookuplogicalname"];
                        var campus = [];
                        campus[0] = {};
                        campus[0].id = _cr9b5_businessunit_value;
                        campus[0].name = _cr9b5_businessunit_value_formatted;
                        campus[0].entityType = _cr9b5_businessunit_value_lookuplogicalname;
                        formContext.getAttribute("cr9b5_campusofstudent").setValue(campus);

                    } else {
                        Xrm.Utility.alertDialog(this.statusText);
                    }
                }
            };
            req.send();
        }
    };

    return {
        OnLoad: onLoad
    }
})()
