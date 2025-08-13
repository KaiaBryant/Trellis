fetch('products.json')
    .then(response => response.json())
    .then(products => {
        const container = document.getElementById('product-list');

        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product';

            const img = document.createElement('img');
            img.src = product.image.default;
            img.alt = product.name;
            img.className = 'product-image';


            img.addEventListener('mouseover', () => {
                img.src = product.image.hover;
            });

            img.addEventListener('mouseout', () => {
                img.src = product.image.default;
            });

            const name = document.createElement('h4');
            name.textContent = product.name;

            const price = document.createElement('p');
            price.textContent = `$${product.price.toFixed(2)}`;

            const description = document.createElement('p');
            description.textContent = product.description;
            description.className = 'description';
            productDiv.appendChild(description);

            productDiv.appendChild(img);
            productDiv.appendChild(name);
            productDiv.appendChild(price);
            productDiv.appendChild(description);

            container.appendChild(productDiv);
        });
    })
    .catch(error => {
        console.error('Error loading products:', error);
    });
