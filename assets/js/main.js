$(document).ready(function() {

    //Bootstrap tooltip
    $(function() {
        $('[data-toggle="tooltip"]').tooltip()
    })

    //Typeform
    $(function() {
        if (!document.getElementById.call(document, "typef_orm")) {
            js = document.createElement.call(document, "script");
            js.id = "typef_orm";
            js.src = "https://embed.typeform.com/" + "embed.js";
            q = document.getElementsByTagName.call(document, "script")[0];
            q.parentNode.insertBefore(js, q)
        }
    })()
})