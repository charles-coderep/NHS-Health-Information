const servicesList = [
    { 'SRV0104': 'Vascular surgery' },
    { 'SRV0073': 'Orthopaedics' },
    { 'SRV0070': 'Ophthalmology' },
    { 'SRV0044': 'General Medicine' },
    { 'SRV0042': 'Gastrointestinal and Liver services' },
    { 'SRV0037': 'Endocrinology and Metabolic Medicine' },
    { 'SRV0050': 'Haematology' },
    { 'SRV0029': 'Diabetic Medicine' },
    { 'SRV0014': 'Cardiology' },
    { 'SRV0028': 'Dermatology' },
    { 'SRV0094': 'Sleep Medicine' },
    { 'SRV0054': 'Infectious Diseases' },
    { 'SRV0091': 'Nephrology' },
    { 'SRV0064': 'Neurology' },
    { 'SRV0093': 'Rheumatology' },
    { 'SRV0017': 'Children\'s & Adolescent Services' },
    { 'SRV0048': 'Geriatric Medicine' },
    { 'SRV0058': 'Obstetrics' },
    { 'SRV0049': 'Gynaecology' },
    { 'SRV0009': 'Diagnostic Imaging' },
    { 'SRV0327': 'Diagnostic Physiological Measurement' },
    { 'SRV0001': 'Accident and emergency services' },
    { 'SRV0117': 'Breast cancer services' },
    { 'SRV0127': 'Colorectal cancer services' },
    { 'SRV0020': 'Community mental health services' },
    { 'SRV0137': 'Sexual health services' },
    { 'SRV0174': 'Stroke' },
    { 'SRV0370': 'Maternity services' },
    { 'SRV0485': 'Obstetrics And Gynaecology' },
    { 'SRV0489': 'Oncology - Clinical' },
    { 'SRV0493': 'Major trauma' },
    { 'SRV0533': 'Emergency Abdominal Surgery' },
    { 'SRV0534': 'Intensive Care' },
    { 'SRV0536': 'Dementia Services' },
    { 'SRV0537': 'Neonatal Care' },
    { 'SRV0538': 'Prostate Cancer Service' },
    { 'SRV0544': 'Paediatric Surgery' },
    { 'SRV0547': 'Inpatient Diabetes' },
    { 'SRV0548': 'Chronic Obstructive Pulmonary Disease' },
    { 'SRV0103': 'Urology' },
    { 'SRV0032': 'Ear, Nose & Throat - ENT' },
    { 'SRV0082': 'Plastic surgery' },
    { 'SRV0053': 'Immunology' },
    { 'SRV0328': 'Diagnostic Endoscopy' },
    { 'SRV0083': 'Podiatry' },
    { 'SRV0081': 'Physiotherapy' },
    { 'SRV0114': 'Bariatric surgery' },
    { 'SRV0136': 'Fertility services' },
    { 'SRV0228': 'Musculo-skeletal services' },
    { 'SRV0067': 'Occupational therapy services' },
    { 'SRV0172': 'Stop smoking services' },
    { 'SRV0013': 'Cancer Services' },
    { 'SRV0384': 'Critical care' },
    { 'SRV0387': 'Pharmacy' },
    { 'SRV0535': 'Cataract Surgery' },
    { 'SRV0011': 'Breast Surgery' },
    { 'SRV0031': 'Dietetics' },
    { 'SRV0243': 'Audiology services (community)' },
    { 'SRV0217': 'Imaging services' },
    { 'SRV0298': 'Minor surgery (e.g. removal of moles and skin lesions) - provided in-house' },
    { 'SRV0307': 'Non-NHS sports injury clinic' },
    { 'SRV0302': 'Travel health with yellow fever' },
    { 'SRV0003': 'Allergy services in hospital' },
    { 'SRV0012': 'Sports and Exercise Medicine' },
    { 'SRV0232': 'Anaesthesia services' },
    { 'SRV0143': 'Mobility and falls services' },
    { 'SRV0408': 'Child and adolescent mental health services (CAMHS)' },
    { 'SRV0002': 'Adult Mental Illness' },
    { 'SRV0279': 'Anticoagulant monitoring and dosing - provided in-house' },
    { 'SRV0280': 'Asthma Clinic' },
    { 'SRV0315': 'Care services for people with learning disabilities' },
    { 'SRV0317': 'Caring for adults over 65' },
    { 'SRV0016': 'Child and Adolescent Psychiatry' },
    { 'SRV0282': 'Child Immunisations' },
    { 'SRV0019': 'Cognitive behavioural therapy services195	Community care services' },
    { 'SRV0022': 'Consultation services' },
    { 'SRV0209': 'Continence services' },
    { 'SRV0284': 'COPD clinic with spirometry' },
    { 'SRV0196': 'COPD services' },
    { 'SRV0156': 'Counselling services' },
    { 'SRV0025': 'Day treatment services' },
    { 'SRV0287': 'Diabetes Clinic providing insulin initiation' },
    { 'SRV0290': 'Drug and alcohol Services' },
    { 'SRV0240': 'DVT services' },
    { 'SRV0034': 'Eating disorders (inpatient)' },
    { 'SRV0218': 'Family planning services' },
    { 'SRV0039': 'Forensic Psychiatry' },
    { 'SRV0125': 'GP services' },
    { 'SRV0055': 'Inpatient mental health services' },
    { 'SRV0295': 'Joint injections' },
    { 'SRV0308': 'Laser/cosmetic services - not available on NHS' },
    { 'SRV0057': 'Learning Disabilities' },
    { 'SRV0492': 'Learning disability health check' },
    { 'SRV0242': 'Learning disability services (community)' },
    { 'SRV0294': 'Long-Acting Reversible Contraception (LARC - eg IUD or implant)' },
    { 'SRV0060': 'Memory services' },
    { 'SRV0061': 'Mental Health - Adults of all ages' },
    { 'SRV0134': 'Nursing services' },
    { 'SRV0068': 'Old Age Psychiatry' },
    { 'SRV0069': 'Older people\'s services' },
    { 'SRV0074': 'Outpatient mental health services' },
    { 'SRV0360': 'Palliative care' },
    { 'SRV0079': 'Personality disorder services' },
    { 'SRV0495': 'Condom supply' },
    { 'SRV0498': 'Emergency contraception' },
    { 'SRV0261': 'Medication review service' },
    { 'SRV0198': 'Minor ailment service' },
    { 'SRV0507': 'Stop smoking voucher service' },
    { 'SRV0258': 'Supervised consumption of medicines' },
    { 'SRV0508': 'Vaccination service' },
    { 'SRV0510': 'Blood pressure monitoring' },
    { 'SRV0531': 'Chlamydia screening and treatment' },
    { 'SRV0529': 'Healthcheck' },
    { 'SRV0514': 'Seasonal flu vaccination service(not at risk groups)' },
    { 'EPS0004': 'Internet Pharmacy' },
    { 'SRV0177': 'Appliance dispensing' },
    { 'SRV0520': 'Appointment booking available for consultations' },
    { 'SRV0521': 'Appointment booking for consultations not required' },
    { 'SRV0557': 'Collect Lateral Flow Device' },
    { 'EPS0002': 'Community Pharmacy' },
    { 'EPS0001': 'Electronic Prescription Service' },
    { 'SRV0523': 'Inhaler recycling' },
    { 'SRV0524': 'Multi - lingual staff' },
    { 'SRV0257': 'New medicine service' },
    { 'SRV0519': 'Prescription collection from local General Practices' },
    { 'SRV0522': 'Prescription delivery service' },
    { 'SRV0526': 'Private consultation room' },
    { 'SRV0527': 'Public Health' },
    { 'SRV0277': 'Seasonal flu vaccination service(at risk groups)' },
    { 'SRV0299': 'Phlebotomy' },
    { 'SRV0285': 'Primary care counselling service' },
    { 'SRV0230': 'Psychiatric intensive care unit' },
    { 'SRV0085': 'Psychiatric liaison services' },
    { 'SRV0086': 'Psychiatry services' },
    { 'SRV0163': 'Respite care services' },
    { 'SRV00376': 'Rehabilitation care services' },
    { 'SRV0095': 'Speech and language services' },
    { 'SRV0100': 'Therapy services' },
    { 'SRV0303': 'Travel health without yellow fever' },
    { 'SRV0112': 'Vascular services' },
    { 'SRV0071': 'Oral and Maxillofacial Surgery' },
    { 'SRV0233': 'Hyperbaric medicine services' },
    { 'SRV0229': 'Wound care services' },
    { 'SRV0487': 'Endocrine and thyroid surgery' },
    { 'SRV0222': 'Neurophysiology services' },
    { 'SRV0075': 'Paediatrics services' },
    { 'SRV0236': 'Tissue viability services' },
    { 'SRV0483': 'Acute Internal Medicine' },
    { 'SRV0490': 'Oncology - Medical' },
    { 'SRV0027': 'Dentistry and Orthodontics' },
    { 'SRV0015': 'Cardiothoracic surgery' },
    { 'SRV0221': 'Ambulance services' },
    { 'SRV0139': 'Oesophago - Gastric cancer surgery' },
    { 'SRV0146': 'Lung cancer services' },
    { 'SRV0539': 'Paediatric intensive care' },
    { 'SRV0066': 'Neurosurgery' },
    { 'SRV0046': 'Genetics' },
    { 'SRV0090': 'Rehabilitation' },
    { 'SRV0077': 'Palliative Medicine' },
    { 'SRV0047': 'Genito - Urinary Medicine' },
    { 'SRV0084': 'Orthotics and Prosthetics' },
    { 'SRV0124': 'Child development & disability services' },
    { 'SRV0310': 'Intrapartum care(care to women in labour)' },
    { 'SRV0253': 'MacMillan services' },
    { 'SRV0158': 'Pharmacy services' },
    { 'SRV0171': 'Skin cancer services' },
    { 'SRV0175': 'Testicular cancer services' },
    { 'SRV0176': 'Thyroid cancer services' },
    { 'SRV0102': 'Trauma services' },
    { 'SRV0179': 'Weight loss services' },
    { 'SRV0388': 'Outpatient parenteral antimicrobial therapy(OPAT)' },
    { 'SRV0401': 'General Pathology' },
    { 'SRV0402': 'Blood Transfusion' },
    { 'SRV0482': 'Perinatal Community Mental Health Service' },
    { 'SRV0244': 'Cardiac services(community)' },
    { 'SRV0541': 'Urgent Treatment Centre' },
    { 'SRV0087': 'Braces and other orthodontic treatment' },
    { 'SRV0178': 'Urgent care centre' },
];

const addServiceAutocomplete = () => {
    const serviceInput = document.getElementById('service-input');
    const serviceSuggestions = document.querySelector('.service-suggestions ul');
    const selectedServicesContainer = document.createElement('div');
    selectedServicesContainer.className = 'selected-services';
    serviceInput.parentNode.insertBefore(selectedServicesContainer, serviceInput);

    serviceInput.addEventListener('input', (event) => {
        const inputText = serviceInput.value.toLowerCase();
        serviceSuggestions.innerHTML = '';
        if (!inputText) return;

        const filteredServices = servicesList.filter(serviceObject => {
            return Object.values(serviceObject)[0].toLowerCase().includes(inputText);
        }).slice(0, 10);

        filteredServices.forEach(serviceObject => {
            const li = document.createElement('li');
            const serviceName = Object.values(serviceObject)[0];
            li.innerText = serviceName;
            serviceSuggestions.appendChild(li);

            li.addEventListener('click', () => {
                const span = document.createElement('span');
                span.textContent = serviceName;
                span.className = 'selected-service';
                selectedServicesContainer.appendChild(span);

                // Optional: Add a remove button or icon inside the span
                const removeBtn = document.createElement('span');
                removeBtn.textContent = 'x';
                removeBtn.className = 'remove-service';
                removeBtn.onclick = function () {
                    selectedServicesContainer.removeChild(span);
                };
                span.appendChild(removeBtn);

                serviceSuggestions.innerHTML = '';
                serviceInput.value = '';
                serviceInput.focus();
            });
        });
    });
};


// postcode search
document.addEventListener("DOMContentLoaded", (event) => {
    const searchButton = document.getElementById('searchButton');
    //update the DOM with autosuggestion values
    addServiceAutocomplete();

    searchButton.addEventListener('click', function () {
        const postcode = document.getElementById('postcode').value;
        const checkboxes = document.querySelectorAll('input[name="service"]:checked'); //get the updated dom service values after user clicked search 
        //let services = //get the updated dom service values after user clicked search ;

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
                .then(data => { orgSelector(data, firstThree = 4) }).
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
        zoom: 14,
        center: positions[0],
    });

    //This object will represent a rectangle that includes all the markers.
    let bounds = new google.maps.LatLngBounds();


    positions.forEach(pos => {
        let marker = new google.maps.Marker({
            position: pos,
            map,
            title: "Hospital location", //customise later
        });
        bounds.extend(pos);
    })

    map.fitBounds(bounds);
}