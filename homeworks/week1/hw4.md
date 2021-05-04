## 跟你朋友介紹 Git

### Git
**Git 是一種「分散式版本的版本控制系統**」。  
假設有個資料夾存放多個分組報告的檔案，隨著時間的變化，起初內部只存放 5 個檔案，過兩天增加到 8 個。不久之後，其中的 2 個被修改了，過了三個月後又增加到 10 個，爾後又刪掉了 1 個，變成 9 個。  

每一個「**檔案的狀態變化**」，不論新增或刪除檔案，亦或是修改檔案內容，都稱之為一個「**版本**」。而所謂的「**版本控制系統**」，即是**記錄所有的狀態變化**，隨時切換到過去某個「版本」時候的狀態。

#### 為什麼要學習Git？
**Git 是目前業界最流行的版本控制系統，沒有之一。**  
使用 Git 備份檔案，可以清楚地記錄每個檔案是誰在何時加進來、何時被修改或刪除。
將不會有跟其它人一起共同管理資料夾，檔案卻被他人覆蓋掉了，完全不知道該怎麼處理的情況。

#### 使用Github做版本控制
1. 下載 [Git](https://git-scm.com/)、[GitHub](https://github.com/)
2. **建立** GitHub 的**帳號**
3. 進入自己的 **GitHub** 頁面，點選 **Repositories**，再點右上角的綠色按鈕 **New**，建立一個新的 Repository
4. 輸入 **Repository name**，假設為 joke，其他設定皆為 default
5. 將 **…or create a new repository on the command line** 欄位的指令**全部複製**
```
echo "# joke" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/shes830501/joke.git
git push -u origin main
```
6. 開啟 **Git Bash**
7. 切換路徑至笑話所存放之資料夾 : ```cd joke(資料夾名稱)```
8. 將上述指令**全部貼上執行**
9. 進入 Github 此 repository 的頁面後，會看到一個 README.md 的檔案，可將其下載下來進行此專案補述或在網路上直接修改。
10. 將資料夾的檔案**上傳（git 3 步驟）**
* 開啟 **Git Bash**，以 ```git add``` 加入版本控制
* 再輸入 ```git commit -m "first joke(版本名)"```
* 最後 ```git push origin main(branch name)```
11. 若之後笑話有修改，照著上述 **git 3 步驟**操作即可
12. 如果看到 GitHub上 有好笑的笑話，可以在別人的 respository 頁面右上角點選**綠色按鈕** ```↓Code```，將網址複製後，打開 Git Bash 輸入```git clone (網址)```，便完成下載了

#### Git 指令說明
* ```git init```：將資料夾初始化，git才能得知我們要對此資料夾進行後續的版本控制，並下達更多的git指令
* ```git add```：決定是否被git做版本控制
* ```git commit```：建立一個新的版本 (-m 的 m 為 message)
* ```git push```：將電腦中的最新版本的檔案上傳到 GitHub
* ```git clone```：將 GitHub 的 repository 下載下來（colone 本就有複製之意)