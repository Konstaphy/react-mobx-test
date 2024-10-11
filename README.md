# Тестовое задание

## Технологии

- Vite
- React (Функциональные компоненты предпочтительнее)
- MobX (Он используется на проекте) или Redux Toolkit
- SCSS

## Задание

> Реализовать простой список постов блога с возможностью детального просмотра. Дизайн и доп. функционал на свой вкус.
>

### Главная страница

- Сверстать список постов
    - Изображение
    - Название поста
    - Имя автора поста
    - Ссылку на детальную страницу
    - Пагинация (10 постов на страницу)
- Подключить API
    - Получение списка постов: GET [https://jsonplaceholder.typicode.com/posts](https://jsonplaceholder.typicode.com/posts)
    - Получение списка пользователей: GET [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)
    - Получение случайного изображения: SRC [https://picsum.photos/1500/1500.jpg](https://picsum.photos/1500/1500.jpg)

### Детальная страница

- Сверстать пост
    - Изображение
    - Название поста
    - Имя автора поста
    - Текст поста
- Подключить API
    - Получение поста: GET [https://jsonplaceholder.typicode.com/posts/<id>](https://jsonplaceholder.typicode.com/posts/ID)
    - Получение одного пользователя: GET [https://jsonplaceholder.typicode.com/users/<id>](https://jsonplaceholder.typicode.com/users/ID)
    - Получение случайного изображения: SRC [https://picsum.photos/1500/1500.jpg](https://picsum.photos/1500/1500.jpg)

### Плюсом будет

- Реализовать
    - С использованием Axios
    - Добавление нового поста, сделать в модальном окне.
        - Результат запроса вывести в консоль. Возможно, потребуется дополнительный заголовок: `'CONTENT-TYPE': 'APPLICATION/JSON; CHARSET=UTF-8'`.
- Подключение API
    - Реализация с использованием FormData: POST [https://jsonplaceholder.typicode.com/posts](https://jsonplaceholder.typicode.com/posts)

## Полезные материалы

- [React](https://reactjs.org/)
- [MobX](https://mobx.js.org/README.html)
- [Книга по MobX](https://mobx-cookbook.github.io/)