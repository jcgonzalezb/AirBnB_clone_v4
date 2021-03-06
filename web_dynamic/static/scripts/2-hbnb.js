const amenities = new Array();
$(document).ready(function () {
    $("input").click(function () {
        if ($(this).is(":checked")) {
            if (amenities.includes($(this).attr('data-name')) == false) {
                amenities.push($(this).attr('data-name'))
            }
        } else {
            for (let i = 0; i < amenities.length; i++) {
                if (amenities[i] == $(this).attr('data-name')) {
                    amenities.splice(i, 1);
                    break;
                }
            }
        }
        $('#amenities_filter').text('')
        for (let i = 0; i < amenities.length; i++) {
            if ($('#amenities_filter')[0].textContent.length < 40){
                if (i == 0)
                    $('#amenities_filter').append(amenities[i])
                else
                    $('#amenities_filter').append(", " + amenities[i])
            } else {
                $('#amenities_filter').append("...")
                break;
            }
        }
    });
    $.get("http://localhost:5001/api/v1/status/", function(data)
    {
        if (data.status === "OK") {
            $("#api_status").css("background-color", "#ff545f");
            $("#api_status").addClass("available");
        } else {
            $("#api_status").css("background-color", "#cccccc");
            $("#api_status").removeClass("available");
        }
    });
});
