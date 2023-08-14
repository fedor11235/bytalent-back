# переходим в проект обновляем данные
cd /home/ubuntu/test/bytalent-back
git pull
ls
if ! [ -d './dist' ]; then
  rm -R dist
fi
npm run build

# перезапускаем службу, после перезапуска не забыть поменять имя
pm2 delete bytalent
pm2 start dist/main.js --name bytalent-back
pm2 startup systemd
pm2 save
