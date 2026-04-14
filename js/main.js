// Yorkshire Wildlife Park replica — shared JS

// Mobile nav toggle
document.addEventListener('click', (e) => {
  if (e.target.closest('.mobile-toggle')) {
    document.querySelector('.main-nav')?.classList.toggle('open');
  }
});

// Price tabs
document.addEventListener('click', (e) => {
  const tab = e.target.closest('.price-tab');
  if (!tab) return;
  const group = tab.closest('.price-tabs');
  group.querySelectorAll('.price-tab').forEach(t => t.classList.remove('active'));
  tab.classList.add('active');
  const target = tab.dataset.target;
  if (target) {
    document.querySelectorAll('.price-panel').forEach(p => p.hidden = true);
    document.querySelector(target).hidden = false;
  }
});

// Quantity controls + basket
const basket = {
  items: {},
  add(id, name, price, delta) {
    if (!this.items[id]) this.items[id] = { name, price, qty: 0 };
    this.items[id].qty = Math.max(0, this.items[id].qty + delta);
    if (this.items[id].qty === 0) delete this.items[id];
    this.render();
  },
  render() {
    const el = document.querySelector('#basket-summary');
    if (!el) return;
    const entries = Object.values(this.items);
    if (!entries.length) {
      el.innerHTML = '<div class="empty">Your basket is empty.<br>Select tickets to get started.</div>';
      return;
    }
    let total = 0;
    let html = '';
    entries.forEach(it => {
      const sub = it.price * it.qty;
      total += sub;
      html += `<div class="line"><span>${it.qty} × ${it.name}</span><span>£${sub.toFixed(2)}</span></div>`;
    });
    html += `<div class="line total"><span>Total</span><span>£${total.toFixed(2)}</span></div>`;
    html += `<button class="btn btn-primary checkout-btn">Continue to checkout</button>`;
    el.innerHTML = html;
  }
};

document.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-ticket-action]');
  if (!btn) return;
  const row = btn.closest('.ticket-row');
  const id = row.dataset.id;
  const name = row.dataset.name;
  const price = parseFloat(row.dataset.price);
  const delta = btn.dataset.ticketAction === 'add' ? 1 : -1;
  basket.add(id, name, price, delta);
  const qtyEl = row.querySelector('.qty');
  const current = basket.items[id]?.qty || 0;
  qtyEl.textContent = current;
});
