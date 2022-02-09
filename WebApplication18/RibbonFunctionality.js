var CaseRibbon = (function () {
    var eFormType =
    {
        "Create": 1,
        "Update": 2,
    };
    var backup = function (FirstPrimaryItemId) {
        debugger;
        var caseId = FirstPrimaryItemId.replace("{", "").replace("}", "").toLowerCase();
        var formType = Xrm.Page.ui.getFormType();
        var today = new Date();
        Xrm.WebApi.online.retrieveRecord("account", caseId, "?$select=name,cr767_activeuntil,telephone1,address1_composite,emailaddress1,fax").then(
            function success(result) {
                if (eFormType.Create != formType) {
                    var parameters = {};
                    var activeUntil = result["cr767_activeuntil"];
                    var _account_value = caseId;
                    var _account_value_formatted = result["name"];
                    var _account_value_lookuplogicalname = "account";
                    if (_account_value != null) {
                        parameters["cr767_account"] = _account_value;
                        parameters["cr767_accountname"] = _account_value_formatted;
                        parameters["cr767_accounttype"] = _account_value_lookuplogicalname;
                        console.log(parameters["cr767_account"]);
                        console.log(parameters["cr767_accountname"]);
                        console.log(parameters["cr767_accounttype"]);
                    }
                    parameters["cr767_name"] = result["name"];
                    parameters["cr767_fax"] = result["fax"];
                    parameters["cr767_email"] = result["emailaddress1"];
                    parameters["cr767_address"] = result["address1_composite"];
                    parameters["cr767_telephone"] = result["telephone1"];//cr767_activeuntil
                    parameters["is_Active"] = (activeUntil>=today);

                    Xrm.Utility.openEntityForm("cr767_backupdetails", null, parameters);
                }
            },
            function (error) {
                alert("error");
                Xrm.Utility.alertDialog(error.message);
            }
        );
    };
    return {
        Backup: backup
    }
})();
