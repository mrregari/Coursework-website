# Пояснительная записка к курсовому проекту
## "ReSell - Игровая торговая площадка"

## Содержание
1. [Анализ предметной области и существующих решений](#1-анализ-предметной-области-и-существующих-решений)
   1.1. [Анализ рынка игровых торговых площадок](#11-анализ-рынка-игровых-торговых-площадок)
   1.2. [Анализ целевой аудитории](#12-анализ-целевой-аудитории)
   1.3. [Анализ функциональных требований](#13-анализ-функциональных-требований)
   1.4. [Анализ технических требований](#14-анализ-технических-требований)
2. [Проектирование веб-приложения](#2-проектирование-веб-приложения)
   2.1. [Структура сайта](#21-структура-сайта)
   2.2. [Описание пользовательского интерфейса](#22-описание-пользовательского-интерфейса)
   2.3. [Процессы взаимодействия](#23-процессы-взаимодействия)
   2.4. [Требования к безопасности](#24-требования-к-безопасности)

## 1. Анализ предметной области и существующих решений

### 1.1. Анализ рынка игровых торговых площадок

В настоящее время рынок цифровой дистрибуции игрового контента представлен несколькими крупными игроками. Рассмотрим основных конкурентов:

#### Steam Market
- Крупнейшая платформа для торговли внутриигровыми предметами
- Преимущества:
  - Высокий уровень безопасности транзакций
  - Интеграция с популярными играми Valve
  - Надежная система торговли
- Недостатки:
  - Ограниченный ассортимент (только предметы из игр Valve)
  - Высокие комиссии (до 15%)
  - Отсутствие возможности торговли аккаунтами

#### G2A
- Популярный маркетплейс для продажи ключей активации
- Преимущества:
  - Широкий ассортимент игр и ключей
  - Система защиты покупателей G2A Shield
  - Конкурентные цены
- Недостатки:
  - Проблемы с легальностью некоторых ключей
  - Высокие комиссии для продавцов
  - Сложная процедура верификации

#### Plati.market
- Российская площадка для цифровых товаров
- Преимущества:
  - Поддержка различных платежных систем
  - Быстрые выплаты продавцам
  - Русскоязычный интерфейс
- Недостатки:
  - Ограниченная международная аудитория
  - Устаревший дизайн
  - Недостаточная защита покупателей

### 1.2. Анализ целевой аудитории

Основные группы пользователей платформы ReSell:

1. Активные геймеры (18-35 лет):
   - Потребности:
     - Покупка игр по выгодным ценам
     - Продажа ненужных ключей активации
     - Торговля внутриигровыми предметами
   - Характеристики:
     - Регулярно играют в игры
     - Следят за скидками и акциями
     - Имеют опыт онлайн-покупок

2. Трейдеры игровых предметов:
   - Потребности:
     - Быстрая продажа предметов
     - Минимальные комиссии
     - Удобный интерфейс для массовых операций
   - Характеристики:
     - Профессионально занимаются торговлей
     - Работают с большими объемами товаров
     - Требуют надежной системы безопасности

3. Продавцы игровых услуг:
   - Потребности:
     - Площадка для продвижения услуг
     - Система отзывов и рейтинга
     - Защита от мошенничества
   - Характеристики:
     - Предоставляют услуги буста и прокачки
     - Продают игровые аккаунты
     - Заинтересованы в долгосрочном сотрудничестве

### 1.3. Анализ функциональных требований

Основные функциональные возможности платформы ReSell:

1. Система торговли:
   - Листинг товаров с подробным описанием
   - Система фильтрации и поиска
   - Автоматическая проверка ключей
   - Безопасная сделка через гарант-сервис

2. Личный кабинет:
   - История транзакций
   - Управление товарами
   - Система уведомлений
   - Настройки безопасности

3. Социальные функции:
   - Система отзывов и рейтинга
   - Чат между пользователями
   - Форум сообщества
   - Система жалоб и поддержки

### 1.4. Анализ технических требований

Технические аспекты реализации платформы:

1. Клиентская часть:
   - Адаптивный дизайн (см. Рис. 1)
   - Поддержка всех современных браузеров
   - Быстрая загрузка страниц
   - Интуитивно понятный интерфейс

2. Серверная часть:
   - Высокая производительность
   - Масштабируемая архитектура
   - Защита от DDoS-атак
   - Резервное копирование данных

3. Безопасность:
   - Двухфакторная аутентификация
   - Шифрование данных
   - Защита от мошенничества
   - Мониторинг подозрительной активности

## 2. Проектирование веб-приложения

### 2.1. Структура сайта

Веб-приложение ReSell построено по модульному принципу и имеет следующую структуру:

1. Главная страница (index.html):
   - Шапка сайта:
     - Логотип и название проекта
     - Главное навигационное меню
     - Кнопки авторизации/регистрации
     - Поисковая строка
   - Основной контент:
     - Баннер с актуальными предложениями
     - Блок популярных категорий
     - Секция "Горячие предложения"
     - Блок "Топ продавцов"
   - Футер:
     - Навигация по разделам
     - Контактная информация
     - Ссылки на социальные сети
     - Правовая информация

2. Каталог товаров (buy.html):
   - Панель фильтрации:
     - Категории товаров
     - Ценовой диапазон
     - Рейтинг продавцов
     - Наличие гаранта
   - Список товаров:
     - Карточки товаров
     - Пагинация
     - Сортировка
   - Боковая панель:
     - Популярные теги
     - Статистика продаж
     - Рекомендации

3. Личный кабинет:
   - Профиль пользователя
   - Управление товарами
   - История транзакций
   - Настройки безопасности

### 2.2. Описание пользовательского интерфейса

Интерфейс ReSell разработан с учетом современных тенденций веб-дизайна и принципов UX:

1. Навигация:
   - Интуитивно понятное меню
   - Быстрый доступ к основным разделам
   - Хлебные крошки для навигации
   - Умный поиск с подсказками

2. Карточки товаров (см. Рис. 2):
   - Крупное изображение товара
   - Четкое отображение цены
   - Рейтинг и отзывы продавца
   - Кнопки быстрых действий
   - Индикатор наличия гаранта

3. Цветовая схема:
   - Основной цвет: #2A2A2A (темно-серый)
   - Акцентный цвет: #FF4D4D (красный)
   - Дополнительный: #4CAF50 (зеленый)
   - Фоновый: #F5F5F5 (светло-серый)

### 2.3. Процессы взаимодействия

Основные пользовательские сценарии в системе:

1. Процесс покупки:
   ```mermaid
   graph TD
   A[Выбор товара] --> B[Проверка наличия]
   B --> C[Добавление в корзину]
   C --> D[Выбор способа оплаты]
   D --> E[Подтверждение заказа]
   E --> F[Получение товара]
   ```

2. Процесс продажи:
   - Создание карточки товара
   - Установка цены и описания
   - Загрузка подтверждающих документов
   - Публикация объявления
   - Обработка заказов

3. Система гарантированных сделок:
   - Проверка товара гарантом
   - Подтверждение оплаты
   - Передача товара покупателю
   - Перевод средств продавцу

### 2.4. Требования к безопасности

Система безопасности ReSell включает:

1. Защита аккаунтов:
   - Двухфакторная аутентификация
   - Защита от брутфорса
   - Система восстановления доступа
   - Журналирование действий

2. Безопасность транзакций:
   - Шифрование данных
   - Защищенное соединение (SSL)
   - Мониторинг подозрительных операций
   - Система возврата средств

3. Защита данных:
   - Хеширование паролей
   - Шифрование личной информации
   - Регулярное резервное копирование
   - Защита от SQL-инъекций


# Документация по JavaScript коду проекта ReSell

## Оглавление
1. [Глобальные переменные](#глобальные-переменные)
2. [Модальные окна](#модальные-окна)
3. [Работа с товарами](#работа-с-товарами)
4. [Система поиска](#система-поиска)
5. [Вспомогательные функции](#вспомогательные-функции)

## Глобальные переменные

```javascript
let displayedProductIds = new Set();        // Хранит ID отображенных товаров на главной странице
let searchDisplayedProductIds = new Set();  // Хранит ID отображенных товаров на странице поиска
```

## Модальные окна

### Модальное окно авторизации

```javascript
function openAuthModal() {
    const modal = document.getElementById('authModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';  // Блокировка прокрутки страницы
}

function closeAuthModal() {
    const modal = document.getElementById('authModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';  // Возвращение прокрутки страницы
}
```

### Модальное окно карточки товара

```javascript
function openProductModal(card) {
    const modal = document.getElementById('productModal');
    // Получение данных из карточки товара
    const image = card.querySelector('.product-image img').src;
    const type = card.querySelector('.product-type').textContent;
    const name = card.querySelector('.product-name').textContent;
    const price = card.querySelector('.product-price').textContent;
    const description = card.querySelector('.product-description').textContent;

    // Заполнение модального окна
    modal.querySelector('#modalProductImage').src = image;
    modal.querySelector('.product-modal-type').textContent = type;
    modal.querySelector('.product-modal-name').textContent = name;
    modal.querySelector('.product-modal-price').textContent = price;
    modal.querySelector('.product-modal-description').textContent = description;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProductModal() {
    const modal = document.getElementById('productModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}
```

## Работа с товарами

### Создание карточки товара

```javascript
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
```

### Загрузка товаров

```javascript
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
```

### Получение случайных товаров

```javascript
function getRandomProducts(products, count, isSearch = false) {
    const usedIds = isSearch ? searchDisplayedProductIds : displayedProductIds;
    // Фильтрация неотображенных товаров
    const availableProducts = products.filter(product => !usedIds.has(product.id));
    
    if (availableProducts.length <= count) {
        availableProducts.forEach(product => usedIds.add(product.id));
        return availableProducts;
    }
    
    // Случайный выбор товаров
    const shuffled = [...availableProducts].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, count);
    selected.forEach(product => usedIds.add(product.id));
    
    return selected;
}
```

### Отображение товаров

```javascript
function displayProductsInContainer(products, containerSelector, append = false) {
    const container = document.querySelector(containerSelector);
    if (!container) return;
    
    const productsHTML = products.map(product => createProductCard(product)).join('');
    
    if (append) {
        container.innerHTML += productsHTML;  // Добавление новых карточек
    } else {
        container.innerHTML = productsHTML;   // Замена существующих карточек
    }
    
    // Добавление обработчиков событий
    const productCards = container.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('click', () => openProductModal(card));
    });
}
```

## Система поиска

### Фильтрация товаров

```javascript
function filterProducts(products, query = '', category = 'Все') {
    const searchQuery = query.toLowerCase();
    
    return products.filter(product => {
        const matchesCategory = category === 'Все' || product.type === category;
        
        if (searchQuery === '') {
            return matchesCategory;
        }

        // Поиск по всем полям товара
        const searchableFields = [
            product.name,
            product.type,
            product.description,
            product.price,
        ];

        const matchesSearch = searchableFields.some(field => 
            field.toString().toLowerCase().includes(searchQuery)
        );
        
        return matchesSearch && matchesCategory;
    });
}
```

### Оптимизация поиска (Debounce)

```javascript
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
```

## Вспомогательные функции

### Создание кнопки "Показать больше"

```javascript
function createLoadMoreButton(container, className) {
    const updateButton = document.createElement('button');
    updateButton.className = className;
    updateButton.innerHTML = '<span>Показать больше товаров</span>';
    container.appendChild(updateButton);
    return updateButton;
}
```

### Добавление новых товаров

```javascript
function addMoreProducts(products, containerSelector, count, isSearch = false) {
    const newProducts = getRandomProducts(products, count, isSearch);
    if (newProducts.length > 0) {
        displayProductsInContainer(newProducts, containerSelector, true);
        return true;
    } else {
        const updateButton = document.querySelector(isSearch ? '.search-update-btn' : '.update-products-btn');
        if (updateButton) {
            updateButton.disabled = true;
            updateButton.innerHTML = '<span>Больше нет товаров</span>';
        }
        return false;
    }
}
```

## Основные особенности системы

1. **Динамическая загрузка товаров:**
   - Постепенная загрузка по 12 товаров
   - Отслеживание уже отображенных товаров
   - Предотвращение дублирования

2. **Умный поиск:**
   - Поиск по всем полям карточки товара
   - Мгновенное обновление результатов
   - Оптимизация с помощью debounce
   - Фильтрация по категориям

3. **Модальные окна:**
   - Авторизация
   - Детальный просмотр товара
   - Блокировка прокрутки страницы

4. **Оптимизация производительности:**
   - Использование Set для хранения ID
   - Debounce для поисковых запросов
   - Эффективная фильтрация данных

5. **Обработка ошибок:**
   - Проверка существования элементов
   - Обработка ошибок загрузки данных
   - Безопасное преобразование типов 
