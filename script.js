// postcode search

document.addEventListener("DOMContentLoaded", (event) => {
    const searchButton = document.getElementById('searchButton');

    searchButton.addEventListener('click', function () {
        const postcode = document.getElementById('postcode').value;
        const checkboxes = document.querySelectorAll('input[name="service"]:checked');
        let services = [];
        checkboxes.forEach((checkbox) => {
            services.push(checkbox.value);
        });

        if (postcode) {
            const url = new URL(`https://api.nhs.uk/service-search/search-postcode-or-place?api-version=1&search=${postcode}`);
            let filterQuery = services.length > 0
                ? `OrganisationTypeID eq 'HOS' and ${services.map(service => `ServicesProvided /any (x: x eq '${service}')`).join(' and ')}`
                : `OrganisationTypeID eq 'HOS'`;
            console.log(filterQuery);
            fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "subscription-key": "81e7f4069d6d4505b3415d1708b39cac"
                },
                body: JSON.stringify({
                    "filter": filterQuery,
                    "top": 25,
                    "skip": 0,
                    "count": true
                })
            })
                .then(response => {
                    if (!response.ok) {
                        return response.json()
                            .then(errorData => {
                                throw new Error(`${response.status}: ${errorData.errorName}. ${errorData.errorText}`);
                            });
                    }
                    return response.json();
                })
                .then(data => { NHSorgLoadArray(data) }).
                catch(error => console.error(error));
        }
        else {
            alert("please input postcode");
        }
    })
})


function NHSorgLoadArray(data) {
    console.log(data)
    const latPos = data.value[1].Latitude;
    const longPos = data.value[1].Longitude
    initMap(latPos, longPos);
}




// Load Google Map with markers
/**
* @license
* Copyright 2019 Google LLC. All Rights Reserved.
* SPDX-License-Identifier: Apache-2.0
*/
function initMap(latPos, longPos) {
    const myLatLng = { lat: latPos, lng: longPos };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: myLatLng,
    });

    new google.maps.Marker({
        position: myLatLng,
        map,
        title: "Hello World!",
    });
}