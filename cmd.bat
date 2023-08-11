@rem начальные настройки
chcp 65001
@echo off

@rem заливаем изменения в гит
git push

@rem подключаемся по ssh к серверу
ssh -i C:\Users\exferd\.ssh\id_rsa ubuntu@185.86.144.134

pause