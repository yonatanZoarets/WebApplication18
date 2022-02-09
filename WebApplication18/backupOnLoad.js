var Sdk = window.Sdk || {};
(function () {

    // Code to run in the form OnLoad event
    this.formOnLoad = function () {

        var isActive = Xrm.Page.context.getQueryStringParameters().is_Active;
        if (isActive) {
            alert("account is still active - backup not allowed");
            window.close();
        }

    }
}).call(Sdk);