var IncidentMainBL = (function () {
    //formContext.getControl(arg).setNotification(message,uniqueId);
    var formContext;
    var onLoad = function (executionContext) {
        debugger;

        formContext = executionContext.getFormContext();
        initOnChange();

    }
    var initOnChange = function () {
        formContext.getAttribute("cr9b5_id").addOnChange(initByCaseOriginCode);
    };
    var initByCaseOriginCode = function () {
        var myUniqueId = "_myUniqueId"; // Define an ID for the notification 
        var value = formContext.getAttribute("cr9b5_id").getValue();
        //alert(typeof (value));
        //var bool = true;
        if (value != null) {
            if (isNaN(value)) {
                formContext.getControl("cr9b5_id").setNotification("ID must be number", myUniqueId);
            }
            else if (value.length != 9) {
                formContext.getControl("cr9b5_id").setNotification("ID must be 9 digits", myUniqueId);
            }
            else {
                formContext.getControl("cr9b5_id").clearNotification(myUniqueId);
            }
        }

    };

    return {
        OnLoad: onLoad,
        InitByCaseOriginCode: initByCaseOriginCode
    }
})()