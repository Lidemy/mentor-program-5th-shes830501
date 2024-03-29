## 請解釋後端與前端的差異。
網站的「**前端**」是與用戶直接交互的部分，包括在瀏覽網頁時接觸的所有視覺內容。這些視覺內容，都是由瀏覽器解析、處理、渲染相關**HTML**、**CSS**、**Javascript** 文件後呈現而來。  
而HTML呈現網站架構、內容；CSS則是樣式的裝飾和排版；JS負責功能層面，檢查網頁和與使用者互動與溝通等。
 
 
**後端**開發者處理使用者的指令，構建並維護**服務器**、**應用**還有**數據庫**等組件，為網站提供多方面支持。  
開發者還必須使用多種程式工具編寫**乾淨**、**可移植**、具有**良好文檔支持**的代碼來創建或更新 Web 應用。  
建構網站之前，他們需要與客戶、UI/UX和前端工程師**溝通**，了解其實際需求並轉化為技術目標，制定最**有效**且**精簡**的方案來進行實現。


## 假設我今天去 Google 首頁搜尋框打上：JavaScript 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情。
1. 使用者發出 **搜尋JavaScript** 的指令給**瀏覽器**
2. 瀏覽器底端的 **Hardware** 將指令經由上層的 **Operating System** ，再傳送至最頂端的**Web Browser**
3. Web Browser 透過 **Network Interface Controller(NIC)**，傳送 *HTTP* 形式的 **Request** 到 **Google Server**，再存在 **Google Database** 
4. Google Server 確認成功存取至 Database 後，即回傳 *HTML* 格式的 **Response**，這個回應即**搜尋結果**
 


## 請列舉出 3 個「課程沒有提到」的 command line 指令並且說明功用
1. ```whoami```: 顯示使用者名稱
2. ```exit```: 關閉視窗
3. ```date```: 顯示或設定日期。