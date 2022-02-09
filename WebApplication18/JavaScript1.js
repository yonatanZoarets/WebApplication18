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

    var onSave = function (executionContext) {
        debugger;

        formContext = executionContext.getFormContext();
        if (formContext.getControl("cr9b5_max_students").getValue() != null)
            formContext.getControl("cr9b5_max_students").setDisabled(true);
    };

    var initOnChange = function () {
    };

    var initByCaseOriginCode = function () {

    };

    return {
        OnSave: onSave,
        InitByCaseOriginCode: initByCaseOriginCode
    }
})()