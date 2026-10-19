# Crystal Oscillator Lab

晶體振盪互動教學：起振、匹配與溫度補償。

- Pierce 振盪器起振過程（示波器動畫）與電路圖（IC 內外、晶體 BVD 等效電路）
- 調整 CL、ESR、gm、C1、C2、Cstray、Rs、Rf，看頻率偏差、起振裕度、Drive Level
- ppm 換算時間誤差
- 32.768 kHz 溫度漂移與補償比較（室溫校正、軟體補償、TCXO）
- 改用 TCXO 的接法（接 XIN、XOUT 懸空）

## 檔案

- `crystal-lab.html`：正本（Claude Artifact 格式，不含 `<html>`／`<head>`）
- `scripts/build.js`：包成完整網頁，輸出 `site/index.html`
- `vercel.json`：Vercel 部署時執行 `node scripts/build.js`，發佈 `site/`

## 本機建置

```bash
node scripts/build.js
```

頁面使用簡化教學模型，數值僅供教學參考。
