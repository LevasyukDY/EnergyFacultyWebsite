<p align="center" width="100%">
    <img width="33%" src="./src/assets/logo.png"> 
</p>

![](https://img.shields.io/npm/v/npm)
![](https://img.shields.io/github/languages/code-size/LevasyukDY/EnergyFacultyWebsite) 
![](https://img.shields.io/github/commit-activity/w/LevasyukDY/EnergyFacultyWebsite)
![](https://img.shields.io/github/last-commit/LevasyukDY/EnergyFacultyWebsite)
![](https://img.shields.io/badge/partner-github.com%2FTseplyaevAF-red)


# Информационный сервис ЭФ ЗабГУ

В данном репозитории представлен исходный код frontend-части сайта энергетического факультета.

Исходный код телеграм бота вы можете найти [в моём репозитории](https://github.com/LevasyukDY/EnergyFacultyTelegramBot)

Исходный код backend вы можете найти [в репозитории](https://github.com/TseplyaevAF/energy_faculty) моего партнёра.

## To-Do

- [ ] увеличение фотографий поста при клике
- [ ] версия для слабовидящих
- [ ] локализация
- [x] схема расположения кабинетов по этажам


## Структура проекта

```
├── package.json                – конфиг всех необходимых пакетов для проекта
├── public
│  ├── favicon.ico                  – иконка сайта
│  └── index.html
├── README.md
└── src
  ├── App.vue                   – main компонент всего приложения
  ├── assets                    – каталог с медиа файлами
  │  ├── images                     – вспомогательные картинки
  │  │  ├── позитрон.png
  │  │  └── ...
  │  └── logo.png                   – логотип сайта
  ├── components                – каталог с компонентами
  │  ├── NewsPreview.vue            – предпросмотр новостей на главной странице
  │  ├── ParallaxCarousel.vue       – реализация слайдера с новостями на главной странице
  │  ├── sidebar                – каталог компонентов бокового меню
  │  │  ├── SidebarLink.vue         – логика перенаправления при нажатии
  │  │  ├── SidebarMenu.vue         – кнопки меню
  │  │  └── state.js                – константы для гибкой настройки бокового меню
  │  └── StudentDeanery.vue     – компонент студенческого деканата на главной странице
  ├── main.js                   – создание экземпляра App и подключение пакетов
  ├── router                    – каталог с файлами для vue-router
  │  └── index.js                   – конфигурация роутинга
  ├── store                     – каталог с модулями для глобального хранилища vuex
  │  └── index.js                   – конфигурация хранилища
  └── views                     – каталог отображения страниц
    ├── AbiturientsPage.vue         – страница для абитуриентов
    ├── ContactsPage.vue            – страница с контактами
    ├── DepartmentPage.vue          – шаблон страницы кафедры
    ├── FacultyPage.vue             – страница с информацией о факультете
    ├── HomePage.vue                – главная страница
    ├── NewsPage.vue                – страница с новостями
    ├── PostPage.vue                – шаблон страницы новости
    ├── ProfilePage.vue             - редирект на вход в личные кабинеты
    └── StudentsPage.vue            – страница для студентов
```

## Зависимости проекта
```json
"dependencies": {
    "@fortawesome/fontawesome-free": "^6.0.0",
    "axios": "^0.26.1",
    "core-js": "^3.21.1",
    "vue": "^3.2.31",
    "vue-router": "^4.0.13",
    "vueperslides": "^3.3.2",
    "vuex": "^4.0.2"
  },
"devDependencies": {
    "@babel/cli": "^7.17.6",
    "@babel/core": "^7.17.5",
    "@babel/eslint-parser": "^7.5.4",
    "@babel/preset-env": "^7.16.11",
    "@vue/cli-plugin-babel": "^5.0.1",
    "@vue/cli-plugin-eslint": "^5.0.1",
    "@vue/cli-plugin-router": "^5.0.1",
    "@vue/cli-service": "^5.0.1",
    "@vue/compiler-sfc": "^3.2.31",
    "@vue/eslint-config-prettier": "^7.0.0",
    "eslint": "^8.10.0",
    "eslint-plugin-prettier": "^4.0.0",
    "eslint-plugin-vue": "^8.5.0",
    "prettier": "^2.5.1",
    "sass": "^1.51.0",
    "sass-loader": "^12.6.0"
}
```

## Установка проекта
```
npm install
```

### Компиляция и быстрая-перезагрузка для разработки
```
npm run serve
```

### Компиляция и минификация для продакшена
```
npm run build
```

### Lints и fixes файлы
```
npm run lint
```

### Настроить конфигурацию
См. [Справочник по конфигурации](https://cli.vuejs.org/config/).
