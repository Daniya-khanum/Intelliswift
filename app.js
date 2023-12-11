document.addEventListener('DOMContentLoaded', function () {
  const companyInfoList = document.getElementById('companyInfoList');
  const showButton = document.getElementById('showButton');

  // Your company data
  const companies = [
    { name: 'Intelliswift', hq: 'Newark, CA', indiaLocations: ['Pune', 'Bengaluru'] },
    { name: 'Salesforce', hq: 'San Francisco, CA', indiaLocations: ['Hyderabad', 'Bengaluru', 'Mumbai', 'Gurugram', 'Jaipur'] }
  ];

  function displayCompanyInfo() {
    // Clear previous content
    companyInfoList.innerHTML = '';

    // Log to the console
    console.log("Number of companies:", companies.length);

    console.log("Name of companies:");
    companies.forEach(company => console.log(company.name));

    console.log("Headquarters of the companies:");
    companies.forEach(company => console.log(company.hq));

    // Display on the HTML page
    companies.forEach(company => {
      const listItem = document.createElement('li');
      listItem.textContent = `${company.name} - ${company.hq} - ${company.indiaLocations.join(', ')}`;
      companyInfoList.appendChild(listItem);
    });
  }

  showButton.addEventListener('click', function () {
    console.log("Button clicked");
    displayCompanyInfo();
  });
});
