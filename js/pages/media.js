// 表示切り替え機能
document.addEventListener('DOMContentLoaded', function() {
    const gridViewBtn = document.querySelector('.grid-view-btn');
    const listViewBtn = document.querySelector('.list-view-btn');
    const articlesGrid = document.querySelector('.articles-grid');
    const articlesList = document.querySelector('.articles-list');
    
    if (gridViewBtn && listViewBtn && articlesGrid && articlesList) {
        gridViewBtn.addEventListener('click', function() {
            gridViewBtn.classList.add('active');
            listViewBtn.classList.remove('active');
            articlesGrid.style.display = 'grid';
            articlesList.style.display = 'none';
        });
        
        listViewBtn.addEventListener('click', function() {
            listViewBtn.classList.add('active');
            gridViewBtn.classList.remove('active');
            articlesGrid.style.display = 'none';
            articlesList.style.display = 'block';
        });
    }
    
    // タグ選択機能
    const tags = document.querySelectorAll('.tag');
    tags.forEach(tag => {
        tag.addEventListener('click', function(e) {
            e.preventDefault();
            tags.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            // ここで実際に記事をフィルタリングするロジックを実装
        });
    });
    
    // 検索機能のローディング表示サンプル
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchContainer = document.querySelector('.search-container');
            searchContainer.classList.add('loading');
            
            // 実際には非同期でAPIを呼び出し、結果を表示する処理を実装
            setTimeout(() => {
                searchContainer.classList.remove('loading');
            }, 1000);
        });
    }
}); 