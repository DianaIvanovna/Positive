# Сайт Позитив https://pozitivtour74.ru/

Данный сайт про горнолыжные поездки в городе Челябинск. Верстка сделана по макету в Figme, сайт адаптивен.

## Разделы сайта:
- главная страница с выбором сезона 
- зимние поездки и летние поездки
- зимний прокат снаряжения и летний
- страницы с дополнительной информацией о поездках

## Из интересного: 
- добавлена админка в Wordpress, которая соединяется с сайтом по Rest-Api.
- поработала над оптимизацией сайта: 
  - картинки webp с нужными размерами
  - оптимизация шрифтов
  - ленивая загрузка некоторых картинок + видео с ютуба с помощью Intersection Observer и замены атрибутов data-srcset в srcset
- сайт реализован как SPA-приложение
- реализована  возможность отправлять сообщения на почту при регистрации поездки и в чат telegram при отправки формы обратной связи;
- В разделе «Фотогалерея» при нажатии на фото открывается большая версии фотографии с описанием.


## Технологический стек:
-	HTML, SCSS
-	JS, TS
-	Фреймворк Angular
- Wordpress админка как Rest-Api
-	Немного php (для отправки сообщений о регистрации на почту и в telegram)
Сайт размещен на хостинге Timeweb

## Инструкция как развернуть проект
- Клонируйте или скачайте репозиторий: https://github.com/DianaIvanovna/positive 
- Предварительно установите node.js
- Установите необходимые пакеты командой: npm i
- Запустите сервер командой: npm run start
Или сайт можно посмотреть по ссылке https://pozitivtour74.ru/
