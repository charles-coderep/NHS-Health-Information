import './styles/style.less';
import servicesList from './services.json';
import API_KEY from './config.js';


function addServiceAutocomplete() {
    const serviceInputField = document.getElementById('service-input');
    const serviceSuggestionList = document.querySelector('.service-suggestions ul');

    // Getter function for the input value
    const getInputFieldValue = () => serviceInputField.value;

    // Setter function for the input value
    const setInputFieldValue = (value) => {
        serviceInputField.value = value;
    };

    serviceInputField.addEventListener('input', () => {
        const inputValuesArray = getInputFieldValue().split(',').map(s => s.trim());
        const currentInputinArray = inputValuesArray[inputValuesArray.length - 1].toLowerCase();
        serviceSuggestionList.innerHTML = ''; // Clear suggestions list
        if (!currentInputinArray) return;

        const filteredServices = servicesList.filter(serviceObject =>
            Object.values(serviceObject)[0].toLowerCase().includes(currentInputinArray)
        ).slice(0, 10);

        filteredServices.forEach(serviceObject => {
            const li = document.createElement("li");
            const serviceName = Object.values(serviceObject)[0];
            li.innerText = serviceName;
            serviceSuggestionList.appendChild(li);

            li.addEventListener('click', () => {
                inputValuesArray[inputValuesArray.length - 1] = serviceName; // Replace current input
                setInputFieldValue(inputValuesArray.join(', ')); // Update the input field
                serviceSuggestionList.innerHTML = ''; // Clear suggestions
            });
        });
    });

    // Return the getter and setter
    return { getInputFieldValue, setInputFieldValue };
}


function loadGoogleMapsApi() {
    let script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=weekly&callback=Function.prototype`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
}

const getKeys = (serviceValues) => {
    return serviceValues.map(serviceValue => {
        for (const serviceObj of servicesList) {
            if (Object.values(serviceObj)[0].toLowerCase() === serviceValue.toLowerCase()) {
                return Object.keys(serviceObj); // Return the key when a match is found
            }
        }
        return null; // Return null if no match is found
    }).filter(key => key !== null); // Filter out any null values
};

document.addEventListener("DOMContentLoaded", (event) => {
    loadGoogleMapsApi();
    const searchButton = document.getElementById('searchButton');
    //update the DOM with autosuggestion values
    const { getInputFieldValue, setInputValue } = addServiceAutocomplete();

    searchButton.addEventListener('click', function () {
        const postcode = document.getElementById('postcode').value;
        const servicesString = getInputFieldValue(); // Use the getter to get the input value        
        const servicesNameArr = servicesString.split(',').map(service => service.trim());
        const servicesCodes = getKeys(servicesNameArr);
        if (postcode) {
            const url = new URL(`https://api.nhs.uk/service-search/search-postcode-or-place?api-version=1&search=${postcode}`);
            let filterQuery = servicesCodes.length > 0
                ? `OrganisationTypeID eq 'HOS' and ${servicesCodes.map(service => `ServiceCodesProvided /any (x: x eq '${service}')`).join(' and ')}`
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
                .then(data => { orgSelector(data, 2) }).
                catch(error => console.error(error));
        }
        else {
            alert("please input postcode");
        }
    })
})


function orgSelector(data, firstThree) {
    console.log(data)
    const positions = [];

    for (let i = 0; i < firstThree; i++) {
        positions.push({
            lat: data.value[i].Latitude,
            lng: data.value[i].Longitude
        });
    }
    console.log(positions);
    initMap(positions);
}




// Load Google Map with markers
/**
* @license
* Copyright 2019 Google LLC. All Rights Reserved.
* SPDX-License-Identifier: Apache-2.0
*/
function initMap(positions) {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: positions[0],
    });

    //This object will represent a rectangle that includes all the markers.
    let bounds = new google.maps.LatLngBounds();


    positions.forEach(pos => {
        new google.maps.Marker({
            position: pos,
            map,
            title: "Hospital location", //customise later
        });
        bounds.extend(pos);
    });

    if (positions.length === 1) {
        // If there's only one marker, set a default zoom level
        map.setZoom(14); // You can adjust this value as needed
    } else {
        // If there are multiple markers, fit them all into the view
        map.fitBounds(bounds);
    }

}