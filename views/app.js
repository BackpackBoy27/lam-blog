$(document).ready(function() {
    $("#submit").on("click", function(e) {
        e.preventDefault();

        // clear the form for new search
        $("#data_table").empty();

        // check if input is given and is valid
        if ($("#ipAdd").val() == "") {
            alert("Please enter a valid ip address");
        } else {
            const ipAdd = $("#ipAdd").val();
            const apiKey = "test";

            $.ajax({
                async: true,
                crossDomain: true,
                url: `https://jkosgei-free-ip-geolocation-v1.p.rapidapi.com/${ipAdd}?api-key=${apiKey}`,
                method: "GET",
                headers: {
                    "x-rapidapi-host":
                        "jkosgei-free-ip-geolocation-v1.p.rapidapi.com",
                    "x-rapidapi-key":
                        "99481dc939msh2e3c8e5dad0b58ep1fe7d4jsn424a1bf5d81f"
                }
            }).then(res => {
                console.log(res);
                let imgSrc = res.flag;
                $("#data_table").append(`
                        <tr><td></td><td><img src="${imgSrc}"></td></tr>
                        <tr><td>Country</td><td>${res.country_name}</td></tr>
                        <tr><td>Region</td><td>${res.region_code}</td></tr>
                        <tr><td>City</td><td>${res.city}</td></tr>
                        <tr><td>zipcode</td><td>${res.postal}</td></tr>
                        <tr><td>Latitude</td><td>${res.latitude}</td></tr>
                        <tr><td>Longitude</td><td>${res.longitude}</td></tr>
                        <tr><td colspan="2" align="right"><button onclick="document.getElementById('id03').style.display='block'"
                        style="width:auto; id="saveBtn">Save results</button></td></tr>
                    `);
            });
        }
    });

    $("#startAppBtn").on("click", function(e) {
        e.preventDefault();

        if ($("#name").val() == "") {
            alert("Please enter your name");
            $("#name").css("border", "solid 2px red");
        } else {
            const userData = { name: $("#name").val() };
            console.log(userData);

            $.ajax({
                url: "/users/new",
                method: "POST",
                data: userData
            }).then(res => {
                window.location.href = "/search";
            });
        }
    });

    $("#showHistoryBtn").on("click", function(e) {
        e.preventDefault();
        $.ajax({
            url: "/users/search",
            method: "GET"
        }).then(res => {
            // console.log(res);

            for (let each of res) {
                $("#history").append(`
                    <tr>
                        <td>${each.name}</td>
                    </tr>
                `);
            }
        });
    });
});
