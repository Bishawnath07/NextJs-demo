const itemsPerPage = 5;
const totalItems = 60;
let currentPage = 1;

function displayItems(page) {
  const content = document.getElementById('content');
  content.innerHTML = ''; // Clear previous content

  // Generate and display items for the given page
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  for (let i = startIndex; i < endIndex; i++) {
    const item = document.createElement('p');
    item.textContent = `Item ${i + 1}`;
    content.appendChild(item);
  }
}

function updatePagination() {
  const pagination = document.getElementById('pagination');
  pagination.innerHTML = ''; // Clear previous pagination buttons

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  for (let i = 1; i <= totalPages; i++) {
    const pageLink = document.createElement('span');
    pageLink.textContent = i;
    pageLink.classList.add('page-link');
    if (i === currentPage) {
      pageLink.classList.add('active');
    }
    pageLink.addEventListener('click', function () {
      gotoPage(i);
    });
    pagination.appendChild(pageLink);
  }
}

function gotoPage(page) {
  if (page >= 1 && page <= Math.ceil(totalItems / itemsPerPage)) {
    currentPage = page;
    displayItems(currentPage);
    updatePagination();
  }
}

// Initial display
// displayItems(currentPage);
updatePagination();

// 2nd pagenination