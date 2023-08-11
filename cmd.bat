@rem начальные настройки
chcp 65001
@echo off

@rem заливаем изменения в гит
git push

@rem подключаемся по ssh и отправляем команду на обновление сервера
ssh -i C:\Users\exferd\.ssh\id_rsa ubuntu@185.86.144.134 "cd /home/ubuntu/test/bytalent-back; chmod ugo+x ./cmd.sh; ./cmd.sh;"

pause