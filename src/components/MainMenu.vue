<template>
<nav class="menu">
    <ul class="menu__list">
        <li class="menu-item" v-for="topItem in mainMenu" :key="topItem.id">
            <a href="#" class="menu-item__link">
                {{topItem.name}}
                <i class="menu-item__icon material-icons">expand_more</i>
            </a>
            <ul class="menu-item__dropdown">
                <li class="dropdown-item" v-for="subItem in topItem.submenu" :key="subItem.id">
                    <a href="#" class="dropdown-item__link">
                        {{subItem.name}}
                    </a>
                    <hr class="dropdown-item_separator" v-if="subItem.description.toLowerCase().includes('разделитель после категории')">
                </li>
            </ul>
        </li>
        <!--
        <li class="menu-item">
        <a href="#" class="menu-item__link">
            Готовые комплекты
            <i class="menu-item__icon material-icons">expand_more</i>
        </a>
        <ul class="menu-item__dropdown">
            <li class="dropdown-item">
            <a href="#" class="dropdown-item__link">Для стоматологии</a>
            </li>
            <li class="dropdown-item">
            <a href="#" class="dropdown-item__link">Для образования</a>
            </li>
        </ul>
        </li>
        <li class="menu-item menu-item_hot">
        <a href="#" class="menu-item__link">
            <i class="menu-item__icon material-icons">cake</i>
            Акции
            <i class="menu-item__icon material-icons">expand_more</i>
        </a>
        <ul class="menu-item__dropdown">
            <li class="dropdown-item">
            <a href="#" class="dropdown-item__link">Акция №1</a>
            </li>
            <li class="dropdown-item">
            <a href="#" class="dropdown-item__link">Акция №2</a>
            </li>
            <li class="dropdown-item">
            <a href="#" class="dropdown-item__link">Акция №3</a>
            </li>
        </ul>
        </li>
        <li class="menu-item">
        <a href="#" class="menu-item__link">
            Контакты
            <i class="menu-item__icon material-icons">expand_more</i>
        </a>
        <ul class="menu-item__dropdown">
            <li class="dropdown-item">
            <a href="mailto:maketirovanie@gmail.com" class="dropdown-item__link">
                <i class="menu-item__icon material-icons">email</i>
                Электропочта
            </a>
            </li>
            <li class="dropdown-item">
            <a href="#" class="dropdown-item__link">Акция №2</a>
            </li>
            <li class="dropdown-item">
            <a href="#" class="dropdown-item__link">Акция №3</a>
            </li>
        </ul>
        </li>-->
        <li class="menu-item">
        <a href="tel:+79193236020" class="menu-item__link">
            +7 (919) 323-60-20
            <i class="menu-item__icon material-icons">phone</i>
        </a>
        </li>
    </ul>
</nav>
</template>

<script>
export default {
  name: 'MainMenu',
  data () {
    return {
      mainMenu: []
    }
  },
  methods: {
    fetchData: function () {
      let self = this
      const myRequest = new Request('http://maketir.ru/dev/wp-json/wp/v2/categories')

      function sorting (a, b) { // Сортировка по номеру, уазанному в description категории
        if (a.description > b.description) {
          return 1
        }
        if (a.description < b.description) {
          return -1
        }
        return 0
      }

      fetch(myRequest)
        .then((response) => { return response.json() })
        .then((data) => {
          const mainMenuID = data.find(el => el.slug === 'main-menu').id
          self.mainMenu = data
            .filter(el => el.parent === mainMenuID)
            .sort(sorting)

          for (let item of self.mainMenu) {
            item.submenu = data
              .filter(el => el.parent === item.id)
              .sort(sorting)
          }
        })
        .catch(error => { console.log(error) })
    }
  },

  mounted () {
    this.fetchData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu {
  order: 3;
}
.menu__list {
  display: flex;
  justify-content: center;
  list-style-type: none;
  background-color: #7D8FA0;
  padding: 0;
}
.menu-item {
  display: flex;
  padding: 10px 15px;
  color: white;
  font-size: 18px;
  position: relative;
  white-space: nowrap;
}
.menu-item__link {
  color: white;
  text-decoration: none;
}
.menu-item:hover {
  background-color: #738393;
}
.menu-item__icon {
  font-size: 18px;
}
.menu-item_hot {
  background-color: #FFAE00;
}
.menu-item_hot:hover {
  background-color: orange;
}
.menu-item__dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  list-style-type: none;
  transform: scaleY(0);
  transform-origin: top;
  transition: .3s;
  width: 220px;
  color: black;
  background: white;
  padding: 0;
}
.dropdown-item {
  padding: 15px 20px;
}
.dropdown-item__link {
  color: black;
  text-decoration: none;
  transition: .15s;
  font-size: 98%;
}
.dropdown-item__link:hover {
  color: #008bd6;
  text-decoration: none;
  font-size: 100%;
}
.dropdown-item_separator {
  height: 1px;
  background: rgb(220, 220, 220);
  margin-top: 15px;
  margin-bottom: -15px;
}
.menu-item:hover > .menu-item__dropdown {
  transform: scaleY(1);
}
@media (max-width: 600px) {
  .menu {
    position: fixed;
    bottom: 0;
  }

  .menu__list::after {
    content: 'Меню'
  }
  /*.menu__list {
    position: absolute;
    bottom: 0;
    transform: scaleY(0);
    transform-origin: top;
    transition: .3s;
    list-style-type: none;
    background-color: #7D8FA0;
    padding: 0;
  }
  .menu-item {
    display: flex;
    padding: 10px 15px;
    color: white;
    font-size: 18px;
  }
  .menu-item__link {
    color: white;
    text-decoration: none;
  }
  .menu-item:hover {
    background-color: #738393;
  }
  .menu-item__icon {
    font-size: 18px;
  }
  .menu-item_hot {
    background-color: #FFAE00;
  }
  .menu-item_hot:hover {
    background-color: orange;
  }
  .menu-item__dropdown {
    list-style-type: none;
    width: 220px;
    color: black;
    background: white;
    padding: 0;
  }
  .dropdown-item {
    padding: 15px 20px;
  }
  .dropdown-item__link {
    color: black;
    text-decoration: none;
    transition: .15s;
    font-size: 98%;
  }
  .dropdown-item__link:hover {
    color: #008bd6;
    text-decoration: none;
    font-size: 100%;
  }
  .dropdown-item_separator {
    height: 1px;
    background: rgb(220, 220, 220);
    margin-left: 20px;
    margin-right: 20px;
  }
  .menu-item:hover > .menu-item__dropdown {
    transform: scaleY(1);
  }*/
}
</style>
