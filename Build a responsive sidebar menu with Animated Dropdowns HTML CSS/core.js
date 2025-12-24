/* ------------ CORE SIDEBAR / SUBMENU LOGIC ------------ */
const cliBn = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sidebar');

function clickSidebar() {
  if (!sidebar || !cliBn) return;
  sidebar.classList.toggle('close');
  cliBn.classList.toggle('rotate');
}

/**
 * Find the relevant .sub-menu for a dropdown button.
 * Handles three DOM shapes:
 * 1) <button> ... </button><ul class="sub-menu">  (button is sibling)
 * 2) <div class="menu-item-container"> <button> </button> </div><ul class="sub-menu"> (button in wrapper)
 * 3) nested/li cases - fallback using closest('li')
 */
function findSubMenu(button) {
  if (!button || !(button instanceof Element)) return null;

  // 1) direct sibling
  const next = button.nextElementSibling;
  if (next && next.classList.contains('sub-menu')) return next;

  // 2) parent's next sibling (button inside a wrapper)
  if (button.parentElement) {
    const parentNext = button.parentElement.nextElementSibling;
    if (parentNext && parentNext.classList.contains('sub-menu')) return parentNext;
  }

  // 3) fallback: find nearest <li> and check for a direct child .sub-menu
  const li = button.closest('li');
  if (li) {
    // :scope is preferable (direct child). If browser doesn't support, fallback.
    try {
      const scoped = li.querySelector(':scope > .sub-menu');
      if (scoped) return scoped;
    } catch (e) {
      // ignore and fallback
    }
    return li.querySelector('.sub-menu'); // may return nested submenu (acceptable fallback)
  }

  return null;
}

function clickSubMenu(button) {
  const submenu = findSubMenu(button);
  if (submenu) submenu.classList.toggle('show');
  // toggle rotation class on the button so the chevron can animate
  button.classList.toggle('rotate');
}
