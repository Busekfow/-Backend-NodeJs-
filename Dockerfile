# Використовуємо базовий образ Nginx
FROM nginx:latest

# Копіюємо файл сайту до контейнера
COPY index.html /usr/share/nginx/html/index.html

# Відкриваємо порт 80
EXPOSE 80
