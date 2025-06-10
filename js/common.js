// ヘッダーを読み込む関数
function loadHeader() {
    const header = document.createElement('header');
    header.innerHTML = `
        <div class="header-container">
            <a href="index.html">
                <img src="./images/logo.png" alt="アルフィオン" class="logo">
            </a>
            <ul class="nav-menu">
                <li><a href="index.html">ホーム</a></li>
                <li><a href="case.html">事例</a></li>
                <li><a href="media.html">メディア</a></li>
                <li><a href="recruit.html">採用情報</a></li>
            </ul>
            <div class="header-buttons">
                <a href="download.html" class="btn btn-outline">資料ダウンロード</a>
                <a href="contact.html" class="btn btn-primary">お問い合わせ</a>
            </div>
        </div>
    `;
    document.body.prepend(header);
}

// フッターを読み込む関数
function loadFooter() {
    const footer = document.createElement('footer');
    footer.innerHTML = `
        <div class="footer-container">
            <div class="footer-grid">
                <div>
                    <img src="./images/logo.png" alt="アルフィオン" class="footer-logo">
                    <p class="footer-about">
                        株式会社アルフィオンは、生成AIを用いた業務効率化に伴走する東大発DXベンチャー企業です。
                    </p>
                </div>
                <div>
                    <h3 class="footer-title">リンク</h3>
                    <ul class="footer-links">
                        <li><a href="index.html">ホーム</a></li>
                        <li><a href="case.html">事例</a></li>
                        <li><a href="media.html">メディア</a></li>
                        <li><a href="recruit.html">採用情報</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="footer-title">サービス</h3>
                    <ul class="footer-links">
                        <li><a href="index.html#ai-consulting">AIコンサルティング</a></li>
                        <li><a href="index.html#ai-development">AI開発</a></li>
                        <li><a href="index.html#workflow-automation">ワークフロー自動化</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="footer-title">お問い合わせ</h3>
                    <ul class="footer-links">
                        <li><a href="contact.html">お問い合わせフォーム</a></li>
                        <li><a href="download.html">資料ダウンロード</a></li>
                    </ul>
                </div>
            </div>
            <div class="copyright">
                &copy; 2023 株式会社アルフィオン All Rights Reserved.
            </div>
        </div>
    `;
    document.body.appendChild(footer);
}

// ページの読み込みが完了したら実行
document.addEventListener('DOMContentLoaded', function() {
    loadHeader();
    loadFooter();
}); 