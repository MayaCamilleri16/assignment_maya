document.addEventListener('DOMContentLoaded', function () {
    // Search functionality
    const searchIconDiv = document.querySelector('.searchIconDiv');
    const searchInput = document.createElement('input');
    searchInput.setAttribute('type', 'text');
    searchInput.setAttribute('placeholder', 'Search');
    searchInput.classList.add('form-control');
    searchInput.style.display = 'none';

    searchIconDiv.addEventListener('click', function () {
        searchInput.style.display = searchInput.style.display === 'none' ? 'block' : 'none';
        if (searchInput.style.display === 'block') {
            searchInput.focus();
        }
    });

    document.addEventListener('click', function (event) {
        const isClickInside = searchIconDiv.contains(event.target) || searchInput.contains(event.target);
        if (!isClickInside) {
            searchInput.style.display = 'none';
        }
    });

    searchIconDiv.appendChild(searchInput);

    // Dropdown functionality
    const dropdownBtn = document.querySelector('.dropdown-btn');
    const dropdownBox = document.getElementById('dropdownBox');

    dropdownBtn.addEventListener('click', function () {
        dropdownBox.style.display = dropdownBox.style.display === 'none' ? 'block' : 'none';
    });

    window.addEventListener('click', function (event) {
        if (!event.target.matches('.dropdown-btn')) {
            dropdownBox.style.display = 'none';
        }
    });

    // Heart button functionality
const heartButtons = document.querySelectorAll('.favorite-button');

heartButtons.forEach(function (heartButton) {
    heartButton.addEventListener('click', function () {
        const isRed = this.style.color === 'red';
        this.style.color = isRed ? 'black' : 'red';
    });
});
function addToFavorites(productName, productPrice, button) {
    const productId = button.parentElement.dataset.productId;

    // Make an AJAX request to addToFavorites.php
    fetch('addToFavorites.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            productId: productId,
            productName: productName,
            productPrice: productPrice,
        }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Product added to favorites!');
        } else {
            alert('Failed to add product to favorites. Please try again.');
        }
    })
    .catch(error => console.error('Error:', error));
}

});
