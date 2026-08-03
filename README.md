# React Native & Expo Router Application (FSD Architecture)

Кроссплатформенное мобильное приложение, разработанное на React Native с использованием Expo и TypeScript. 

## 🚀 Технологический стек
* **Framework:** React Native (Expo)
* **Routing:** Expo Router (File-based routing)
* **Language:** TypeScript
* **State Management:** Jotai
* **Architecture:** Feature-Sliced Design (FSD)
* **Code Quality:** ESLint, Prettier

## 🏗 Структура проекта (FSD)
Приложение построено по методологии Feature-Sliced Design для обеспечения масштабируемости и слабой связанности компонентов:
* `app/` — инициализация приложения, глобальные провайдеры и роутинг (Expo Router).
* `widget/` — самостоятельные комплексные блоки страницы (комбинация фич и сущностей).
* `features/` — части функционала, несущие бизнес-ценность (действия пользователя).
* `entities/` — бизнес-сущности (логика предметной области, модели данных).
* `shared/` — переиспользуемые модули, не привязанные к специфике бизнеса (UI-кит, API-клиенты, хелперы).

## 📦 Установка и запуск
1. Установите зависимости: `npm install`
2. Запустите проект: `npx expo start`
