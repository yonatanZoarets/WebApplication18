var IncidentMainBL = (function () {
    var originType = {
        Phone: 1,
        Email: 2,
        Web: 3,
        Facebook: 2483,
        Twitter: 3986,
        IoT: 700610000
    };

    var formContext;

    var onLoad = function (executionContext) {
        debugger;

        formContext = executionContext.getFormContext();
        initOnChange();
    };

    var initOnChange = function () {
        formContext.getAttribute("cr9b5_identitytype").addOnChange(initByCaseOriginCode);
    };

    var initByCaseOriginCode = function () {
        var value = formContext.getAttribute("cr9b5_identitytype").getValue();
        //var title = formContext.getAttribute("title").getValue();
        formContext.getControl("cr9b5_id").setDisabled(true);
        formContext.getControl("cr9b5_hp").setDisabled(true);
        formContext.getControl("cr9b5_passport").setDisabled(true);

        formContext.getAttribute("cr9b5_id").setRequiredLevel("none");
        formContext.getAttribute("cr9b5_hp").setRequiredLevel("none");
        formContext.getAttribute("cr9b5_passport").setRequiredLevel("none");

        //var attribute = "cr9b5_";
        if (value == 255660000) {
             formContext.getAttribute("cr9b5_id").setRequiredLevel("required");
            formContext.getControl("cr9b5_id").setDisabled(false);

        } else if (value == 255660001) {
             formContext.getAttribute("cr9b5_hp").setRequiredLevel("required");
            formContext.getControl("cr9b5_hp").setDisabled(false);
        }
        else if (value == 255660002) {
             formContext.getAttribute("cr9b5_passport").setRequiredLevel("required");
            formContext.getControl("cr9b5_passport").setDisabled(false);
        }

    };

    return {
        OnLoad: onLoad,
        InitByCaseOriginCode: initByCaseOriginCode
    }
})()