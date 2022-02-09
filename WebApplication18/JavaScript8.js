var IncidentMainBL = (function () {
    //formContext.getControl(arg).setNotification(message,uniqueId);
    var formContext;
    var onLoad = function (executionContext) {
        debugger;

        formContext = executionContext.getFormContext();
        initOnChange();

    }
    var initOnChange = function () {
        formContext.getAttribute("cr9b5_referedanotherstudent").addOnChange(initByCaseOriginCode);
    };
    var count = 0;
    var initByCaseOriginCode = function () {
        console.log("check" + count);
        var confirmStrings = { text: "Do you want to create new student now?", title: "Confirmation Dialog" };
        var confirmOptions = { height: 200, width: 450 };
        var val = formContext.getAttribute("cr9b5_referedanotherstudent").getValue();
        if (val == 1&&count<1) {
            //setTimeout(function () {
            Xrm.Navigation.openConfirmDialog(confirmStrings, confirmOptions).then(
                function (success) {
                    if (success.confirmed) {
                        //console.log("Dialog closed using OK button.");
                        var parameters = {};
                        parameters["cr9b5_refferingstudent"] = formContext.data.entity.getId();
                        parameters["cr9b5_refferingstudentname"] = formContext.getAttribute("firstname").getValue() +" "+ formContext.getAttribute("lastname").getValue();
                        parameters["cr9b5_refferingstudenttype"] = "contact";
                        count = count + 1;
                        Xrm.Utility.openEntityForm("lead", null, parameters);

                    }
                    else { }
                    //console.log("Dialog closed using Cancel button or X.");
                })
        //}, 10);
        }
    };

    return {
        OnLoad: onLoad
    }
})()