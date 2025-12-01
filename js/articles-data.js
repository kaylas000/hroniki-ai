// AI CHRONICLES - Articles Data

const articlesData = [
    // NEWS
    {
        id: 1,
        category: 'news',
        title: 'OpenAI представила GPT-5: революция в мире ИИ',
        description: 'Новая модель GPT-5 от OpenAI демонстрирует беспрецедентные способности в понимании контекста и решении сложных задач.',
        date: '2025-03-15',
        url: 'articles/gpt-5-release.html',
        status: 'new'
    },
    {
        id: 2,
        category: 'news',
        title: 'Google запустил Gemini Ultra Pro',
        description: 'Новейшая версия Gemini превосходит конкурентов в мультимодальных задачах и работе с кодом.',
        date: '2025-03-10',
        url: 'articles/gemini-ultra-pro.html',
        status: 'new'
    },
    {
        id: 3,
        category: 'news',
        title: 'Anthropic обновил Claude 3.5',
        description: 'Обновленная версия Claude стала еще более безопасной и точной в ответах.',
        date: '2025-03-05',
        url: 'articles/claude-3-5-update.html',
        status: 'popular'
    },
    
    // MODELS
    {
        id: 4,
        category: 'models',
        title: 'Сравнение GPT-4 vs Claude 3 vs Gemini',
        description: 'Детальный анализ трех ведущих моделей ИИ, их сильные и слабые стороны.',
        date: '2025-03-01',
        url: 'articles/gpt4-vs-claude-vs-gemini.html',
        status: 'popular'
    },
    {
        id: 5,
        category: 'models',
        title: 'Обзор Llama 3: открытая модель от Meta',
        description: 'Подробный обзор возможностей открытой модели Llama 3 и ее применение.',
        date: '2025-02-25',
        url: 'articles/llama-3-review.html',
        status: 'new'
    },
    {
        id: 6,
        category: 'models',
        title: 'Midjourney V7: новый уровень генерации изображений',
        description: 'Обзор новых возможностей Midjourney V7 и сравнение с конкурентами.',
        date: '2025-02-20',
        url: 'articles/midjourney-v7.html',
        status: 'popular'
    },
    
    // PROMPTS
    {
        id: 7,
        category: 'prompts',
        title: '50 лучших промптов для ChatGPT',
        description: 'Коллекция проверенных промптов для эффективной работы с ChatGPT.',
        date: '2025-02-15',
        url: 'articles/best-chatgpt-prompts.html',
        status: 'popular'
    },
    {
        id: 8,
        category: 'prompts',
        title: 'Промпты для генерации кода',
        description: 'Эффективные промпты для создания качественного кода на разных языках программирования.',
        date: '2025-02-10',
        url: 'articles/coding-prompts.html',
        status: 'new'
    },
    {
        id: 9,
        category: 'prompts',
        title: 'Промпты для Midjourney: гайд',
        description: 'Полное руководство по созданию эффективных промптов для генерации изображений.',
        date: '2025-02-05',
        url: 'articles/midjourney-prompts-guide.html',
        status: 'popular'
    }
];

// Helper Functions
function getAllArticles() {
    return articlesData.sort((a, b) => new Date(b.date) - new Date(a.date));
}

function getArticlesByCategory(category) {
    return articlesData
        .filter(article => article.category === category)
        .sort((a, b) => new Date(b.date) - new Date(a.date));
}

function getLatestArticles(count = 3) {
    return articlesData
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, count);
}

function generateArticleCard(article) {
    const categoryClass = article.category;
    const categoryIcon = {
        'news': '\ud83d\udcf0',
        'models': '\ud83e\udd16',
        'prompts': '\ud83d\udcac'
    }[article.category];
    
    return `
        <article class="blog-card">
            <div class="blog-date">${formatDate(article.date)}</div>
            <h3>${article.title}</h3>
            <p>${article.description}</p>
            <div class="blog-meta">
                <span class="category ${categoryClass}">${categoryIcon} ${getCategoryName(article.category)}</span>
                <a href="${article.url}" class="read-more">Читать →</a>
            </div>
        </article>
    `;
}

function formatDate(dateStr) {
    const date = new Date(dateStr);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('ru-RU', options);
}

function getCategoryName(category) {
    const names = {
        'news': 'Новости',
        'models': 'Обзоры',
        'prompts': 'Промпты'
    };
    return names[category] || category;
}