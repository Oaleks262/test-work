let costumer = document.querySelector(".nav-customers");
let product = document.querySelector(".product")
let helper = document.querySelector(".nav-help");
let promote = document.querySelector(".nav-promote");  
let income = document.querySelector(".nav-income");
let producted = document.querySelector(".nav-product");
let content = document.querySelector(".content")

costumer.addEventListener("click", function(e){
    product.style.display = "flex";
    content.style.display = "flex";
    resetMenuStyles();
    costumer.style.backgroundColor = "lightblue"; 
});

helper.addEventListener("click", function(e){
    product.style.display = "none";
    resetMenuStyles();
    helper.style.backgroundColor = "lightblue";
    helper.style.borderRadius = "10px";
});

promote.addEventListener("click", function(e){
    product.style.display = "none";
    resetMenuStyles();
    promote.style.backgroundColor = "lightblue";
    product.style.borderRadius = "10px";
});

income.addEventListener("click", function(e){
    product.style.display = "none";
    resetMenuStyles();
    income.style.backgroundColor = "lightblue";
    income.style.borderRadius = "10px";
});

producted.addEventListener("click", function(e){
    product.style.display = "none";
    resetMenuStyles();
    producted.style.backgroundColor = "lightblue";
    producted.style.borderRadius = "10px"
});

function resetMenuStyles() {
    costumer.style.backgroundColor = "";
    helper.style.backgroundColor = "";
    promote.style.backgroundColor = "";
    income.style.backgroundColor = "";
    producted.style.backgroundColor = "";
}


let searchBorder = document.querySelector(".product-header-search");
let search = document.querySelector(".search-input");

search.addEventListener("click", function(e){
    searchBorder.style.border = "1px solid #B5B7CB";
    searchBorder.style.borderRadius = "10px";
    e.stopPropagation();
})
document.addEventListener("click", function(e){
    if(!search.contains(e.target)){
        searchBorder.style.border = "none";
        searchBorder.style.borderRadius = "0";
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const peopleList = document.getElementById('people-list');
    const searchInput = document.querySelector(".search-input");
    const searchResult = document.getElementById('searchResult');
    const itemsPerPage = 8;
    let currentPage = 1;
    let originalPeopleData;
    let displayedData; 
  
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        originalPeopleData = data;
        displayedData = [...originalPeopleData]; // Копіюємо оригінальний список
  
        displayPage(currentPage);
  
        let pagesListItems = document.querySelectorAll('.product-pages-li');
  
        pagesListItems.forEach(function(item, index) {
          item.addEventListener('click', function(e) {
            if (item.classList.contains('product-pages-li-on')) {
              return;
            }
  
            pagesListItems.forEach(function(li) {
              li.classList.remove('product-pages-li-on');
            });
  
            item.classList.add('product-pages-li-on');
            currentPage = index + 1;
            displayPage(currentPage);
  
            e.preventDefault(); 
          });
        });
  
        document.querySelector('.product-pages-li-back').addEventListener('click', function(e) {
          if (currentPage > 1) {
            pagesListItems[currentPage - 2].click();
          }
          e.preventDefault();
        });
  
        document.querySelector('.product-pages-li-next').addEventListener('click', function(e) {
          if (currentPage < pagesListItems.length) {
            pagesListItems[currentPage].click();
          }
          e.preventDefault();
        });
      })
      .catch(error => console.error('Error loading data:', error));
  
    function displayPage(page) {
      const startIndex = (page - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const pageData = displayedData.slice(startIndex, endIndex);
  
      const htmlContent = pageData.map(person => `
        <li  class="list-li">
          <p class="list-name">${person.name}</p>
          <p class="list-company">${person.company}</p>
          <p class="list-number">${person.number}</p>
          <p class="list-email">${person.email}</p>
          <p class="list-country">${person.country}</p>
          <p class="list-status"><a href="#" class="astatus ${person.status === 'Active' ? 'list-button-on' : 'list-button-off'}">${person.status}</a></p>
        </li>
      `).join('');
  
      peopleList.innerHTML = htmlContent;
    }
  
    function filterList(searchText) {
      if (searchText.trim() === '') {
        displayedData = [...originalPeopleData]; 
      } else {
        displayedData = originalPeopleData.filter(person =>
          person.name.toLowerCase().includes(searchText.toLowerCase()) ||
          person.company.toLowerCase().includes(searchText.toLowerCase()) ||
          person.number.includes(searchText) ||
          person.email.toLowerCase().includes(searchText.toLowerCase()) ||
          person.country.toLowerCase().includes(searchText.toLowerCase())
        );
      }
  
    
      currentPage = 1;
      displayPage(currentPage);
  
      if (displayedData.length > 0) {
        searchResult.textContent = `Знайдено ${displayedData.length} ${displayedData.length === 1 ? 'запис' : 'записи'}.`;
      } else {
        searchResult.textContent = 'Нічого не знайдено.';
      }
    }
  
    searchInput.addEventListener('input', function () {
      const searchText = searchInput.value.trim();
      filterList(searchText);
    });
  });

  let navbar = document.querySelector(".nav");
  let navDashboard = document.querySelector(".nav-dashboard-mob");
  
  let buttstat = document.querySelector(".stat");
  let buttclose = document.querySelector('.close');

 
  navDashboard.addEventListener("click", function (e) {
      if (navbar.style.display === "flex") {
          navbar.style.display = "none";
          buttstat.style.display = "flex";
          buttclose.style.display = "none";
      } else {
          navbar.style.display = "flex";
          buttstat.style.display = "none";
          buttclose.style.display = "flex";
      }
      e.stopPropagation();
  });
  

  




  