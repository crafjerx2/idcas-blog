const createNewBtn = document.querySelector('#kestra-root-page-master > div.MuiBox-root.css-9c49na > div > div:nth-child(1) > div > div > div > div > div > div.css-ics3wv > div:nth-child(1) > div > button:nth-child(2)');

//open modal
createNewBtn.click();

const entityName = document.querySelector('[name="contact.entityName"]');
const establishDate = document.querySelector('[name="contact.establishDate"]');
const govtId = document.querySelector('[name="contact.govtId"]');
const countryOfCitizenship = document.querySelector('[name="contact.countryOfCitizenship"]');



// actions

entityName.value = 'IDCASCorp';
establishDate.value = '2000-01-01';
govtId.value = '451698841';
countryOfCitizenship.value = 'UNITED STATES';


