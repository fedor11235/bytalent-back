# переходим в проект обновляем данные
cd /home/ubuntu/test/bytalent-back
git pull
rm -R dist
npm run build

# перезапускаем службу
pm2 delete bytalent
pm2 start dist/main.js --name bytalent
pm2 startup systemd
pm2 save
