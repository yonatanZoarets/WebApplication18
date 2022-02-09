var IncidentMainBL = (function () {
    var formContext;

    var onLoad = function (executionContext) {
        debugger;

        formContext = executionContext.getFormContext();
        initOnChange();
    };

    var initOnChange = function () {
        //formContext.getControl("cr9b5_status").setDisabled(false)
        formContext.getAttribute("cr9b5_status").addOnChange(initByCaseOriginCode);
    };

    var initByCaseOriginCode = function () {
        var value = formContext.getAttribute("cr9b5_status").getValue();
        //alert(value);
        var bool = true;
        if (value != 1) {
            bool = false;

        }
        formContext.ui.tabs.get("tab_5").setVisible(bool);
    };

    return {
        OnLoad: onLoad,
        InitByCaseOriginCode: initByCaseOriginCode
    }
})()