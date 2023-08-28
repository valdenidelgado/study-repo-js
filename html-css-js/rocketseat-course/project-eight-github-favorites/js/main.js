class GithubUser {

  static async search(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    return ({
      login: data.login,
      name: data.name,
      public_repos: data.public_repos,
      followers: data.followers,
    });
  }
}

class Favorites {
  constructor(root) {
    this.root = document.querySelector(root);
    this.load();
  }

  load() {
    this.entries = JSON.parse(localStorage.getItem("@github-favorites:")) || [];
  }

  save() {
    localStorage.setItem("@github-favorites:", JSON.stringify(this.entries));
  }

  async add(username) {
    try {
      const userExists = this.entries.find(entry => entry.login === username);
      if(userExists) {
        throw new Error("Usuário já existe");
      }

      const user = await GithubUser.search(username)
      if(user.login === undefined) {
        throw new Error("Usuário não encontrado");
      }

      this.entries = [user, ...this.entries];
      this.save();
      this.update();

    } catch (error) {
      alert(error.message);
    }
  }

  delete(user) {
    const filteredEntries = this.entries.find(entry => entry.login !== user.login);
    this.entries = filteredEntries;
    this.update();
    this.save();
  }
}

class FavoritesView extends Favorites {
  constructor(root) {
    super(root);

    this.tbody = this.root.querySelector("table tbody");
    this.update();
    this.onAdd();
  }

  onAdd() {
    const addButton = this.root.querySelector(".search button");
    addButton.onclick = () => {
      const { value } = this.root.querySelector(".search input");
      this.add(value);
    }
  }

  update() {
    this.removeAllTr();


    this.entries.forEach( user => {
      const row = this.createRow();
      row.querySelector(".user img").src = `
      https://github.com/${user.login}.png`;
      row.querySelector(".user img").alt = `Imagem profile ${user.name}`;
      row.querySelector(".user p").textContent = user.name;
      row.querySelector(".user a").href = `https://github.com/${user.login}`;
      row.querySelector(".user span").textContent = user.login;
      row.querySelector(".repositories").textContent = user.public_repos;
      row.querySelector(".followers").textContent = user.followers;
      row.querySelector(".remove").onclick = () => {
        const isOk = confirm(`Deseja remover essa linha?`); 
        if (isOk) {
          this.delete(user);
        }
      };
      this.tbody.append(row);
    })
  }

  createRow() {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="user">
        <img src="https://github.com/valdenidelgado.png" alt="imagem profile Valdeni">
        <a href="https://github.com/valdenidelgado" target="_blank">
          <p>Valdeni Delgado</p>
          <span>valdenidelgado</span>
        </a>
      </td>
      <td class="repositories">76</td>
      <td class="followers">10000</td>
      <td>
        <button class="remove">&times;</button>
      </td>
    `
    return tr;
  }

  removeAllTr() {
    this.tbody.querySelectorAll("tr").forEach(tr => tr.remove());
  }
}

new FavoritesView("#app");