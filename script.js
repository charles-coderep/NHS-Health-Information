/*
Name	All products (trial subscription)
Primary key	81e7f4069d6d4505b3415d1708b39cac
Secondary key	00ff0f1db3d54b74919f40eaa979acba
State	Active


curl -X POST https://api.nhs.uk/service-search/search?api-version=1 
   -H 'Content-Type: application/json'
   -H 'subscription-key: 81e7f4069d6d4505b3415d1708b39cac'
   -d '{    "orderby": "OrganisationName",
    "top": 25,
    "skip": 0,
    "count": true
    }' 
*/

//const serviceSearchApiOrgV2 = "https://api.nhs.uk/service-search/search-postcode-or-place?api-version=1&search=G428DD";

/* document.addEventListener("DOMContentLoaded", (event) => {
    const searchButton = document.getElementById('searchButton');

    searchButton.addEventListener('click', function () {
        const postcode = document.getElementById('postcode').value;
        const url = new URL(`https://api.nhs.uk/service-search/search-postcode-or-place?api-version=1&search=${postcode}`);
        //const postcode = url.searchParams.get('search');
        fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "subscription-key": "81e7f4069d6d4505b3415d1708b39cac"
            },
            body: JSON.stringify({
                "select": "OrganisationName",
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
            .then(data => console.log(data)).
            catch(error => console.error(error));
    })
}) */

document.addEventListener("DOMContentLoaded", (event) => {
    const searchButton = document.getElementById('searchButton');

    searchButton.addEventListener('click', function () {
        const term = document.getElementById('term').value;
        const url = new URL(`https://api.nhs.uk/service-search/?api-version=2&search=${term}`);
        //const postcode = url.searchParams.get('search');
        fetch(url, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "subscription-key": "81e7f4069d6d4505b3415d1708b39cac"
            }
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
            .then(data => console.log(data)).
            catch(error => console.error(error));
    })
})

