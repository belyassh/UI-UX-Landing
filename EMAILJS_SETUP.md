# Настройка EmailJS

Форма в этом проекте сначала пытается отправить заявку через EmailJS.
Если сервис недоступен или не настроен, скрипт автоматически откроет почтовый клиент через mailto.

## 1. Создай аккаунт EmailJS

1. Перейди на https://www.emailjs.com.
2. Создай аккаунт и подтверди почту.

## 2. Добавь Email Service

1. В панели EmailJS открой Email Services.
2. Создай сервис (Gmail, Outlook и т.д.).
3. Скопируй Service ID.

## 3. Создай Email Template

1. Открой Email Templates.
2. Создай новый шаблон.
3. Используй переменные:

- from_name
- from_email
- message
- to_email

4. Скопируй Template ID.

## 4. Возьми Public Key

1. Открой Account -> General.
2. Скопируй Public Key.

## 5. Обнови конфиг в script.js

Вверху файла есть объект emailConfig:

```js
const emailConfig = {
    publicKey: '...'
    serviceId: '...'
    templateId: '...'
    toEmail: '...'
};
```

Поставь свои значения.

## 6. Проверка

1. Запусти проект локально.
2. Заполни форму в блоке Связаться.
3. Проверь входящее письмо.

Если EmailJS не настроен корректно, откроется письмо в почтовом клиенте с уже заполненными полями.
