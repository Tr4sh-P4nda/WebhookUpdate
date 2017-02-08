var lastupdate = "";
setInterval(function(e) {
    $.ajax({
        type: "GET",
        url: "http://yourdomain.com/pathtoapp/lastupdate.txt",
        async: true,
        success: function(text) {
            if (lastupdate == "") {
                lastupdate = text;
            } else {
                if (lastupdate != text) {
                    location.reload(true);
                }
            }
        }
    });
}, 5000);