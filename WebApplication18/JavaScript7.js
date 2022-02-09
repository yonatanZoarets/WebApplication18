
var paidBills = (function () {
    var disableAllFields=function () {
        //Xrm.Page.ui.controls.forEach(function (control, i) {
        //    if (control && !control.getDisabled()) {
        //        control.setDisabled(true);
        //    }
        //});
        var bool = formContext.getAttribute("cr9b5_paidallbills").getValue();
        var attributes = Xrm.Page.data.entity.attributes.get();
        for (var i in attributes) {
            var myattribute = Xrm.Page.data.entity.attributes.get(attributes[i].getName());
            var myname = myattribute.getName();
            if (Xrm.Page.getControl(myname) != null && myname != "cr9b5_paidallbills") {
                //alert(myname);
                Xrm.Page.getControl(myname).setDisabled(!bool);
            }
        }
    }
    var onLoad = function (executionContext) {
        debugger;

        formContext = executionContext.getFormContext();
        initOnChange();
    };
    var initOnChange = function () {
        formContext.getAttribute("cr9b5_paidallbills").addOnChange(disableAllFields);
    };
    return {
        OnLoad:onLoad
    }
})()