# Базовый образ Node
FROM node:18-alpine

# Рабочая директория внутри контейнера
WORKDIR /srv/app

# Копируем package.json и lock-файлы для установки зависимостей
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install --production

# Копируем весь проект
COPY . .

# Собираем Strapi (для prod)
RUN npm run build

# Экспонируем порт Strapi
EXPOSE 1337

# Запускаем Strapi
CMD ["npm", "start"]
