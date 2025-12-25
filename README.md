# 履歷網站（靜態單頁）

## 本機預覽
### 方式 A：用 VS Code Live Server
1. 開啟資料夾
2. 對 index.html 右鍵 → Open with Live Server

### 方式 B：Python 簡易伺服器
在此資料夾執行：
```bash
python -m http.server 8000
```
然後開瀏覽器到：
http://localhost:8000

## 部署（最簡單）
### GitHub Pages
1. 建一個 repo（例如 `tine-resume`）
2. 把 index.html / styles.css / script.js / assets/resume.pdf 推上去
3. Settings → Pages → Deploy from a branch → main / root

### Vercel / Netlify
直接把資料夾丟上去也可以（Static Site）。
