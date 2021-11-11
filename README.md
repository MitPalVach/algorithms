git branch    // показывает ветки
git branch task1    // создает ветку task1
git checkout task    // переключает на ветку task1
git checkout -b task1    // создает ветку и переключает на нее (заменяет git branch task1 & git checkout task)
git status    // показывает состояние проекта

git add index.js    // добавляет в коммит index.js
git commit    // коммитит выбранные файлы
git commit -m "some descr"    // коммитит выбранные файлы с описание коммита
git push --set-upstream origin task1    // подключает ветку task1 к origin и пушит коммит из task1

git fetch main   // притянуть изменения с репозитория ветки main
git merge main   // заменить свой код на притянутый ветки main
git pull    // берет код с репозитория и заменяет мой код на взятый (заменяет git fetch & git merge)
git merge --abort    // вернет все до мерджа 

git cherry-pick {commit-hash}   // копирует код некого файла
git checkout {commit-hash}    // для возврата к некому предыдущему коммиту
git reset --hard origin/main    // синхронизирует все с main веткой
git reset --hard {commit-hash}    // откат на ветке до конкретного коммита 

git rebase -i HEAD~N    // возможность редактировать N коммитов назад 

git rm --cached index.js    // убирает из индекса index.js
git rm --f index.js    // удалит index.js (нужно чтобы файл был проиндексирован)

git log --pretty=oneline -- graph    // показывает всю историю коммитов с графами


aliases:
git config --global user.name "Your Name"
git config --global user.email "your email"
git config --global alias.co checkout
git config --global alias.ci commit
git config --global alias.st status
git config --global alias.br branch
