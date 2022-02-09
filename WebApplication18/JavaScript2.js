var Sdk = window.Sdk || {};
(function () {

    // Code to run in the form OnLoad event
    this.formOnLoad = function (executionContext) {
        var myUniqueId = "_myUniqueId"; // Define an ID for the notification 
        var formContext = executionContext.getFormContext();
        var currentSN = formContext.getAttribute("cr9b5_currentstudentnumber").getValue();
        var maxSN = formContext.getAttribute("cr9b5_max_students").getValue();
        var message = "Warning! the number of the students is greater tha the maximum ";
        if (currentSN > maxSN)
            formContext.ui.setFormNotification(message, "WARNING", myUniqueId);

        // Wait for 5 seconds before clearing the notification
        window.setTimeout(function () { formContext.ui.clearFormNotification(myUniqueId); }, 5000);
    }
}).call(Sdk);