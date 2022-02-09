var CaseRibbon = (function () {
    var eFormType =
    {
        "Create": 1,
        "Update": 2,
    };
    function setToForm(parameters,sourceField, targetField) {
        var department = parent.Xrm.Page.getAttribute(sourceField).getValue();
        parameters[targetField] = department[0].id.replace("{", "").replace("}", "").toLowerCase();
        parameters[targetField+"name"] = department[0].name;
        parameters[targetField + "type"] = department[0].entityType;

        console.log(parameters[targetField]);
        console.log(parameters[targetField + "name"]);
        console.log(parameters[targetField + "type"]);
    }
    var registerNew = function (FirstPrimaryItemId) {
        debugger;
        var caseId = FirstPrimaryItemId.replace("{", "").replace("}", "").toLowerCase();
        var formType = Xrm.Page.ui.getFormType();
        //alert(caseId);
        Xrm.WebApi.online.retrieveRecord("cr9b5_faculty", caseId, "?$select=cr9b5_name").then(
            function success(result) {
                if (eFormType.Create != formType) {
                    //alert(result);
                    //var department = parent.Xrm.Page.getAttribute("cr9b5_facultyid").getValue();
                    var parameters = {};
                    var _ownerid_value = caseId;
                    var _ownerid_value_formatted =  result["cr9b5_name"];
                    var _ownerid_value_lookuplogicalname = "cr9b5_faculty";
                    if (_ownerid_value != null) {
                        parameters["cr9b5_facultyofstudentid"] = _ownerid_value;
                        parameters["cr9b5_facultyofstudentidname"] = _ownerid_value_formatted;
                        parameters["cr9b5_facultyofstudentidtype"] = _ownerid_value_lookuplogicalname;
                        console.log(parameters["cr9b5_facultyofstudentid"]);
                        console.log(parameters["cr9b5_facultyofstudentidname"]);
                        console.log(parameters["cr9b5_facultyofstudentidtype"]);
                    }

                    setToForm(parameters, "cr9b5_businessunit", "cr9b5_campusofstudent")

                    Xrm.Utility.openQuickCreate("contact", null, parameters);
                }
            },
            function (error) {
                alert("error");
                Xrm.Utility.alertDialog(error.message);
            }
        );
        //alert(formType);  
    };
    return {
        registerNew: registerNew
    }
})();


                    //var campus = parent.Xrm.Page.getAttribute("cr9b5_businessunit").getValue();
                    // = campus[0].id;
                    //parameters = campus[0].name;
                    //parameters = campus[0].entityType;

                    //parameters["cr9b5_facultyofstudentid"] = result.id;
                    //parameters["cr9b5_facultyofstudentidname"] = result.name;
                    //parameters["cr9b5_facultyofstudentidtype"] = department[0].entityType;