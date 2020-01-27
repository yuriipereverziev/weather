$(document).ready(function () {

    $('#submitCity').click(function () {

        //get value from input field
        var city = $("#city").val();

        //check not empty
        if (city !== '') {

            $.ajax({

                url: "http://api.openweathermap.org/data/2.5/forecast/?q=" + city + "&units=metric" + "&cnt=7" + "&APPID=cf737ad1e1201266f2e87b08acd97b1f",
                type: "GET",
                dataType: "jsonp",
                success: function (data) {
                    var table = '';
                    for (var i = 0; i < data.list.length; i++) {
                        table += "<td><img src=https://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png></td>";
                    }

                    $("#weather-icons").html(table);
                    $("#weather-days td").show()
                }
            });

        } else {
            $('#error').html('Field cannot be empty');
        }
    });
});
