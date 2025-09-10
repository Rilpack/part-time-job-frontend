# Part-time Shifts — React Native (CLI)

Небольшое приложение на **React Native (CLI)**, которое показывает список доступных смен по геолокации пользователя. Поддерживаются **Android** и **iOS**.

---

## ✨ Функциональность

- Запрос **точной геолокации** при первом запуске.
- Получение списка смен по координатам через API.
- Экран **списка смен** (краткая информация).
- Экран **деталей смены**.
- Простая, минималистичная верстка.

---

## 🧱 Технологии и зависимости

Основные пакеты:

- `react`
- `react-native`
- `@react-navigation/*`
- `react-native-screens`, `react-native-safe-area-context`
- `axios`
- `react-native-permissions`
- `react-native-geolocation-service`

Инфраструктура:

- Архитектура: **FSD (Feature-Sliced Design)**
- Код-стайл: **ESLint**, **Prettier**
- Алиас `@` → `./src` через **Babel** (`babel-plugin-module-resolver`)

---

## ⚙️ Требования окружения

### Android

- **Android SDK**: ≥ 36
- **Android NDK**: ≥ 27.1
- **Kotlin**: ≥ 2.1.20

### iOS

- **Xcode**: ≥ 16.1
- **CocoaPods** ≥ 1.16.2
