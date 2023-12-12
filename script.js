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

{  
     "count": true | false (default),  
     "facets": [ "facet_expression_1", "facet_expression_2", ... ],  
     "filter": "odata_filter_expression",  
     "highlight": "highlight_field_1, highlight_field_2, ...",  
     "highlightPreTag": "pre_tag",  
     "highlightPostTag": "post_tag",  
     "minimumCoverage": # (% of index that must be covered to declare query successful; default 100),  
     "orderby": "orderby_expression",  
     "queryType": "simple" (default) | "full",
     "scoringParameters": [ "scoring_parameter_1", "scoring_parameter_2", ... ],  
     "scoringProfile": "scoring_profile_name",  
     "scoringStatistics" : "local" | "global",
     "search": "simple_query_expression",  
     "searchFields": "field_name_1, field_name_2, ...",  
     "searchMode": "any" (default) | "all",  
     "select": "field_name_1, field_name_2, ...",  
     "sessionId" : "session_id",
     "skip": # (default 0),  
     "top": #  
   }
 "filter": "ServicesProvided \/ any (x: x eq 'Gynaecology')",
//"filter": "OrganisationTypeID eq 'PHA'",
*/

//https://developer.api.nhs.uk/nhs-api/documentation/comments#:~:text=NHS%20APIs%20Ratings%20and%20Reviews%20API&text=Ratings%20and%20reviews%20for%20NHS,data%20in%20a%20JSON%20format.
//possibly this API for waiting lists also: https://digital.nhs.uk/developer/api-catalogue/elective-waiting-list#overview--who-can-use-this-api

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
            //const postcode = url.searchParams.get('search');
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
                .then(data => console.log(data)).
                catch(error => console.error(error));
        }
        else {
            alert("please input postcode");
        }
    })
})

/* document.addEventListener("DOMContentLoaded", (event) => {
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
}) */

