export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root);
    this.favorites = [];
  }
}

export class FavoritesView extends Favorites {
  constructor(root) {
    super(root);
  }

  update() {
    this.removeAllTr();
  }

  removeAllTr() {
    const tbody = this.root.querySelector("table tbody");
    tbody.querySelectorAll("tr").forEach(tr => tr.remove());
  }
}