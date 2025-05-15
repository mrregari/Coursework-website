// Функции для работы с модальным окном авторизации
function openAuthModal() {
    const modal = document.getElementById('authModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Запрещаем прокрутку страницы
}

function closeAuthModal() {
    const modal = document.getElementById('authModal');
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Возвращаем прокрутку страницы
}

// Функции для работы с модальным окном регистрации
function openRegisterModal() {
    const modal = document.getElementById('registerModal');
    const authModal = document.getElementById('authModal');
    authModal.classList.remove('active');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeRegisterModal() {
    const modal = document.getElementById('registerModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Функция для сохранения нового пользователя
async function registerUser(userData) {
    try {
        const response = await fetch('/data/users.json');
        const data = await response.json();
        
        // Проверка существования пользователя
        const userExists = data.users.some(user => 
            user.login === userData.login || user.email === userData.email
        );
        
        if (userExists) {
            throw new Error('Пользователь с таким логином или email уже существует');
        }

        // Создание нового пользователя
        const newUser = {
            id: data.users.length + 1,
            login: userData.login,
            password: userData.password, // В реальном проекте пароль должен быть захеширован
            email: userData.email,
            created_at: new Date().toISOString().split('T')[0]
        };

        data.users.push(newUser);

        // В реальном проекте здесь был бы запрос к API для сохранения пользователя
        // Для демонстрации просто показываем успешное сообщение
        alert('Регистрация успешна! Теперь вы можете войти в систему.');
        closeRegisterModal();
        openAuthModal();
        
        return true;
    } catch (error) {
        alert(error.message);
        return false;
    }
}

// Функции для работы с модальным окном карточки товара
function openProductModal(card) {
    const modal = document.getElementById('productModal');
    const modalImage = document.getElementById('modalProductImage');
    const modalType = modal.querySelector('.product-modal-type');
    const modalName = modal.querySelector('.product-modal-name');
    const modalPrice = modal.querySelector('.product-modal-price');
    const modalDescription = modal.querySelector('.product-modal-description');

    // Получаем данные из карточки товара
    const image = card.querySelector('.product-image img').src;
    const type = card.querySelector('.product-type').textContent;
    const name = card.querySelector('.product-name').textContent;
    const price = card.querySelector('.product-price').textContent;
    const description = card.querySelector('.product-description').textContent;

    // Заполняем модальное окно данными
    modalImage.src = image;
    modalType.textContent = type;
    modalName.textContent = name;
    modalPrice.textContent = price;
    modalDescription.textContent = description;

    // Показываем модальное окно
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProductModal() {
    const modal = document.getElementById('productModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Функция для создания карточки товара
function createProductCard(product) {
    return `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <span class="product-type">${product.type}</span>
                <h3 class="product-name">${product.name}</h3>
                <span class="product-price">${product.price}</span>
                <p class="product-description">${product.description}</p>
            </div>
        </div>
    `;
}

// Функция для загрузки и отображения товаров
async function loadProducts() {
    try {
        const response = await fetch('/data/products.json');
        const data = await response.json();
        return data.products;
    } catch (error) {
        console.error('Ошибка при загрузке товаров:', error);
        return [];
    }
}

// Функция для фильтрации товаров
function filterProducts(products, query = '', category = 'Все') {
    const searchQuery = query.toLowerCase();
    
    return products.filter(product => {
        // Проверяем совпадение по категории
        const matchesCategory = category === 'Все' || product.type === category;
        
        // Если поисковый запрос пустой, фильтруем только по категории
        if (searchQuery === '') {
            return matchesCategory;
        }

        // Проверяем совпадение по всем текстовым полям товара
        const searchableFields = [
            product.name,           // Название
            product.type,          // Тип/категория
            product.description,   // Описание
            product.price,         // Цена
        ];

        // Ищем совпадение хотя бы в одном из полей
        const matchesSearch = searchableFields.some(field => 
            field.toString().toLowerCase().includes(searchQuery)
        );
        
        // Возвращаем true только если совпадает и категория, и поисковый запрос
        return matchesSearch && matchesCategory;
    });
}

// Множество для хранения ID отображенных товаров
let displayedProductIds = new Set();
let searchDisplayedProductIds = new Set(); // Для страницы поиска

// Функция для получения случайных товаров, исключая уже отображенные
function getRandomProducts(products, count, isSearch = false) {
    const usedIds = isSearch ? searchDisplayedProductIds : displayedProductIds;
    // Фильтруем товары, исключая уже отображенные
    const availableProducts = products.filter(product => !usedIds.has(product.id));
    
    // Если доступных товаров меньше, чем запрошено, вернем все доступные
    if (availableProducts.length <= count) {
        availableProducts.forEach(product => usedIds.add(product.id));
        return availableProducts;
    }
    
    // Перемешиваем доступные товары
    const shuffled = [...availableProducts].sort(() => 0.5 - Math.random());
    // Берем нужное количество
    const selected = shuffled.slice(0, count);
    // Добавляем их ID в множество отображенных
    selected.forEach(product => usedIds.add(product.id));
    
    return selected;
}

// Функция для отображения товаров в указанном контейнере
function displayProductsInContainer(products, containerSelector, append = false) {
    const container = document.querySelector(containerSelector);
    if (!container) return;
    
    const productsHTML = products.map(product => createProductCard(product)).join('');
    
    if (append) {
        // Добавляем новые карточки к существующим
        container.innerHTML += productsHTML;
    } else {
        // Заменяем содержимое контейнера
        container.innerHTML = productsHTML;
    }
    
    // Добавляем обработчики для новых карточек
    const productCards = container.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('click', () => openProductModal(card));
    });
}

// Функция для добавления новых случайных товаров
function addMoreProducts(products, containerSelector, count, isSearch = false) {
    const newProducts = getRandomProducts(products, count, isSearch);
    if (newProducts.length > 0) {
        displayProductsInContainer(newProducts, containerSelector, true);
        return true;
    } else {
        // Если новых товаров больше нет, скрываем или деактивируем кнопку
        const updateButton = document.querySelector(isSearch ? '.search-update-btn' : '.update-products-btn');
        if (updateButton) {
            updateButton.disabled = true;
            updateButton.innerHTML = '<span>Больше нет товаров</span>';
        }
        return false;
    }
}

// Функция для создания кнопки "Показать больше"
function createLoadMoreButton(container, className) {
    const updateButton = document.createElement('button');
    updateButton.className = className;
    updateButton.innerHTML = '<span>Показать больше товаров</span>';
    container.appendChild(updateButton);
    return updateButton;
}

// Добавляем обработчики событий после загрузки DOM
document.addEventListener('DOMContentLoaded', async () => {
    // Загружаем все товары
    const allProducts = await loadProducts();
    displayedProductIds.clear(); // Очищаем множество при загрузке страницы
    searchDisplayedProductIds.clear(); // Очищаем множество для поиска

    // Отображаем случайные товары в разделе "Лидеры продаж"
    const popularProducts = getRandomProducts(allProducts, 12);
    displayProductsInContainer(popularProducts, '.popular-products .products-grid');

    // Добавляем кнопку обновления для раздела "Лидеры продаж"
    const popularSection = document.querySelector('.popular-products');
    if (popularSection) {
        const updateButton = createLoadMoreButton(popularSection, 'update-products-btn');
        updateButton.addEventListener('click', () => {
            addMoreProducts(allProducts, '.popular-products .products-grid', 12);
        });
    }

    // Отображаем случайные товары в разделе "Рекомендации"
    const recommendedProducts = getRandomProducts(allProducts, 4);
    displayProductsInContainer(recommendedProducts, '.recommendations-grid');

    // Обработчики для модального окна авторизации
    const modal = document.getElementById('authModal');
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeAuthModal();
        }
    });

    const loginButtons = document.querySelectorAll('.login-btn');
    loginButtons.forEach(button => {
        button.addEventListener('click', openAuthModal);
    });

    const authForm = document.querySelector('.auth-form');
    authForm.addEventListener('submit', (e) => {
        e.preventDefault();
    });

    // Обработчики для модального окна карточки товара
    const productModal = document.getElementById('productModal');
    productModal.addEventListener('click', (e) => {
        if (e.target === productModal) {
            closeProductModal();
        }
    });

    // Поиск на странице buy.html
    const searchInput = document.querySelector('.search-input');
    const searchButton = document.querySelector('.search-button');
    const categoryLinks = document.querySelectorAll('.category-link');
    const searchContainer = document.querySelector('.products-grid')?.parentElement;

    if (searchInput && searchButton && searchContainer) {
        // Создаем кнопку "Показать больше" для страницы поиска
        const searchUpdateButton = createLoadMoreButton(searchContainer, 'update-products-btn');
        
        // Отображаем первые 12 товаров при загрузке страницы поиска
        const initialProducts = getRandomProducts(allProducts, 12, true);
        displayProductsInContainer(initialProducts, '.products-grid');

        // Обработчик поиска
        const handleSearch = () => {
            const query = searchInput.value;
            const activeCategory = document.querySelector('.category-link.active');
            const category = activeCategory ? activeCategory.textContent : 'Все';
            
            // Очищаем множество отображенных товаров при новом поиске
            searchDisplayedProductIds.clear();
            
            // Фильтруем товары
            const filteredProducts = filterProducts(allProducts, query, category);
            
            // Показываем первые 12 результатов
            const initialSearchProducts = filteredProducts.slice(0, 12);
            initialSearchProducts.forEach(product => searchDisplayedProductIds.add(product.id));
            
            displayProductsInContainer(initialSearchProducts, '.products-grid');
            
            // Обновляем состояние кнопки
            searchUpdateButton.disabled = filteredProducts.length <= 12;
            searchUpdateButton.innerHTML = '<span>Показать больше товаров</span>';
            
            // Обновляем обработчик кнопки "Показать больше"
            searchUpdateButton.onclick = () => {
                const nextProducts = filteredProducts.filter(product => !searchDisplayedProductIds.has(product.id)).slice(0, 12);
                if (nextProducts.length > 0) {
                    nextProducts.forEach(product => searchDisplayedProductIds.add(product.id));
                    displayProductsInContainer(nextProducts, '.products-grid', true);
                }
                searchUpdateButton.disabled = searchDisplayedProductIds.size >= filteredProducts.length;
                if (searchUpdateButton.disabled) {
                    searchUpdateButton.innerHTML = '<span>Больше нет товаров</span>';
                }
            };
        };

        // Используем debounce для оптимизации производительности
        function debounce(func, wait) {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    clearTimeout(timeout);
                    func(...args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            };
        }

        // Применяем debounce к функции поиска
        const debouncedSearch = debounce(handleSearch, 100);

        // Добавляем обработчик для кнопки "Показать больше" на странице поиска
        searchUpdateButton.addEventListener('click', () => {
            addMoreProducts(allProducts, '.products-grid', 12, true);
        });

        // Добавляем обработчик ввода для поля поиска
        searchInput.addEventListener('input', debouncedSearch);

        // Обработчики для категорий
        if (categoryLinks) {
            categoryLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    categoryLinks.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                    handleSearch(); // Мгновенный поиск при смене категории
                });
            });
        }
    }

    // Обработчик для кнопки "Найти услугу"
    const findServiceBtn = document.querySelector('.cta-btn');
    if (findServiceBtn) {
        findServiceBtn.addEventListener('click', () => {
            window.location.href = '/buy.html';
        });
    }

    // Обработчики для переключения между окнами авторизации и регистрации
    const registerLink = document.querySelector('.auth-register');
    const loginLink = document.querySelector('.auth-login');
    
    registerLink.addEventListener('click', (e) => {
        e.preventDefault();
        openRegisterModal();
    });
    
    loginLink.addEventListener('click', (e) => {
        e.preventDefault();
        closeRegisterModal();
        openAuthModal();
    });

    // Обработчик формы регистрации
    const registerForm = document.getElementById('registerForm');
    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const login = document.getElementById('regLogin').value;
        const email = document.getElementById('regEmail').value;
        const password = document.getElementById('regPassword').value;
        const confirmPassword = document.getElementById('regConfirmPassword').value;

        // Валидация
        if (password !== confirmPassword) {
            alert('Пароли не совпадают');
            return;
        }

        if (password.length < 6) {
            alert('Пароль должен содержать минимум 6 символов');
            return;
        }

        const userData = { login, email, password };
        await registerUser(userData);
    });
});

// Закрытие модальных окон по нажатию Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeAuthModal();
        closeProductModal();
        closeRegisterModal();
    }
}); 