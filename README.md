# Crystal Oscillator Lab

晶體振盪互動教學：起振、匹配與溫度補償。

**線上網址：https://crystal-oscillator-lab.vercel.app/**

## 內容

| 區塊 | 可以做什麼 |
|---|---|
| 起振怎麼發生 | Pierce 振盪電路圖（IC 內外、兩段 −180°、晶體 BVD 等效電路 Rm/Lm/Cm/C0）與起振三階段說明 |
| 調整周邊元件 | 切換 32.768 kHz／12 MHz 晶體，調 CL、ESR、gm、C1、C2、Cstray、Rs、Rf；看示波器起振動畫、頻率偏差、起振裕度、Drive Level、晶體電抗圖、負阻 vs gm 圖與診斷 |
| ppm 換算時間誤差 | 輸入 ppm 看每天／週／月／年誤差；反推每月誤差目標需要的 ppm；可帶入溫度區塊的結果 |
| 溫度與補償 | 32.768 kHz 拋物線溫漂，比較不補償、室溫校正、軟體溫度補償、TCXO RTC |
| 改用 TCXO | XTAL 與 TCXO 接法對照（TCXO 接 XIN、XOUT 懸空），CMOS／Clipped sine 輸出接法與改板檢查 |

頁面使用簡化教學模型（Pierce 負阻公式；Rs、Rf 以一階近似處理），數值僅供教學參考，實際設計請以晶片與晶體規格書和實測為準。

## 檔案

- `crystal-lab.html`：正本（Claude Artifact 格式，不含 `<html>`／`<head>`）
- `scripts/build.js`：包成完整網頁，輸出 `site/index.html`
- `vercel.json`：Vercel 部署時執行 `node scripts/build.js`，發佈 `site/`
- `.claude/`：本機預覽設定（`node .claude/preview-server.js`，http://localhost:4173）

## 部署

push 到 `main` 後，Vercel（TedHQ 團隊，專案 `crystal-oscillator-lab`）會自動建置並部署。

本機建置：

```bash
node scripts/build.js
```
