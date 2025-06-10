// 目次の生成とスムーススクロール
document.addEventListener('DOMContentLoaded', function () {
    const tocContainer = document.querySelector('.toc ul');
    
    // 目次コンテナが存在する場合のみ実行
    if (tocContainer) {
        const headings = document.querySelectorAll('.content h2, .content h3');
        
        headings.forEach(heading => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            
            // IDの生成（より安全な形式に）
            let id = heading.textContent.trim().toLowerCase()
                        .replace(/\s+/g, '-')
                        .replace(/[^\w-]+/g, '');
            let i = 1;
            let uniqueId = id;
            while (document.getElementById(uniqueId)) {
                uniqueId = `${id}-${i}`;
                i++;
            }
            heading.id = uniqueId;
            
            a.href = '#' + uniqueId;
            a.textContent = heading.textContent;
            
            if (heading.tagName === 'H3') {
                li.classList.add('sub-menu');
            }
            
            li.appendChild(a);
            tocContainer.appendChild(li);
        });

        // スムーススクロール
        document.querySelectorAll('.toc a').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}); 