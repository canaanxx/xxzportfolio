/**
 * global-nav.js — Miller.S 全站导航渲染器
 * ─────────────────────────────────────────
 * 在每个 HTML 页面底部、页面专属 <script> 之前引入：
 *   <script src="global-nav.js"></script>
 *
 * 依赖：页面中必须存在以下元素（由 global.css 配套）
 *   #g-logo    — 品牌名 <a>
 *   #g-nav     — 导航 <nav>
 *   #g-contact — Contact 按钮 <a>
 *
 * 依赖：页面顶部的 PAGE_CONFIG JSON 中包含 SITE 字段
 */
(function () {
  const cfg = JSON.parse(document.getElementById('PAGE_CONFIG').textContent);
  const site = cfg.SITE;

  // Logo
  const logo = document.getElementById('g-logo');
  if (logo) { logo.textContent = site.logo; logo.href = 'index.html'; }

  // Nav links
  const nav = document.getElementById('g-nav');
  if (nav) {
    site.nav.forEach(({ label, href, active }) => {
      const a = document.createElement('a');
      a.href        = href;
      a.textContent = label;
      if (active) a.classList.add('is-active');
      nav.appendChild(a);
    });
  }

  // Contact button
  const contact = document.getElementById('g-contact');
  if (contact) { contact.href = site.contactHref; }
})();
