
let allProducts = [];

async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Products:', data.products);
        allProducts = data.products;
        displayProducts(allProducts);
    } catch (error) {
        console.error('Error fetching JSON data:', error);
    }
}

function displayProducts(products) {
    const item_section = document.getElementById("items");
    item_section.innerHTML = '';

    products.forEach(product => {
        const productHTML = `  
                <div class="bg-blue-400 w-[85vw] h-[30vh] rounded-3xl flex items-center p-[20px] gap-5 overflow-hidden">  
                    <div class="h-[100%] w-[180px] bg-white rounded-xl">  
                        <img class="object-cover size-[100%]"  
                            src="${product.thumbnail || 'https://via.placeholder.com/180'}"  
                            alt="${product.name}">  
                    </div>  
                    <div class="flex flex-col w-[100%] h-[100%]">  
                        <p class="font-bold">${product.title}</p>  
                        <p>Description: ${product.description || 'No description available.'}</p>  
                        <p>Category: ${product.category || 'Uncategorized'}</p>  
                        <p>Price: ${product.price}$</p>  
                        <p>Rating: ${product.rating || 'No ratings available'}</p>  
                    </div>  
                </div>`;
        item_section.innerHTML += productHTML;
    });
}

function filterProducts() {
    const searchValue = document.getElementById("search-input").value.toLowerCase();
    const upperLimit = parseFloat(document.getElementById("upper-limit").value) || Infinity;
    const lowerLimit = parseFloat(document.getElementById("lower-limit").value) || 0;
    const rating = parseFloat(document.getElementById("rating-input").value) || 0;

    const filteredProducts = allProducts.filter(product => {
        const isMatchingTitle = product.title.toLowerCase().includes(searchValue);
        const isInPriceRange = product.price >= lowerLimit && product.price <= upperLimit;
        const isMatchingRating = product.rating >= rating;

        return isMatchingTitle && isInPriceRange && isMatchingRating;
    });

    displayProducts(filteredProducts);
}

document.getElementById("search-button").addEventListener("click", filterProducts);

fetchData('https://dummyjson.com/products');