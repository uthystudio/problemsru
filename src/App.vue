<template>
  <v-app>
    <v-card flat tile>
        <v-toolbar>
          <v-toolbar-title><router-link style="text-decoration: none; color: black" to="/">Problems.ru - Задачи</router-link></v-toolbar-title>
          <v-spacer></v-spacer>
          <router-link to="/search">
            <v-btn color="primary" class="menu_button computer">
              <v-icon>search</v-icon>
            </v-btn>
          </router-link>

          <router-link to="/tasks">
          <v-btn color="primary" class="menu_button computer">
            Решать задачи!
          </v-btn>
          </router-link>
          <router-link to="catalogs">
          <v-btn color="primary" class="menu_button computer" v-on="on">
            Каталоги
          </v-btn>
          </router-link>
          <v-btn color="primary" class="menu_button computer">
            Справочник
          </v-btn>


        </v-toolbar>
    </v-card>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer
  >
    <v-card
      class="text-center"
    >
    <div class="about_block">
    <router-link style="text-decoration: none" to="/authors">О проекте</router-link>
    <router-link style="text-decoration: none" to="/authors">Об авторах</router-link>
    </div>
      <v-card-text >
        Интернет-проект «Задачи» предназначен для учителей и преподавателей, как помощь при подготовке уроков, кружков и факультативных занятий в школе. Система «Задачи» поможет и школьнику, заинтересовавшемуся какой-то задачей, найти и ее, и множество похожих примеров; поможет глубже понять данную тему и расширить свой кругозор. Хочется верить, что в нашей системе каждый сможет найти для себя интересную задачу.
      </v-card-text>
      <v-card-text>
        2020 — <strong>problems.ru</strong>
      </v-card-text>
    </v-card>
  </v-footer>
  </v-app>
</template>
<style>
.about_block * {
  margin: 0 10px;
}
.cursor_pointer {
  cursor: pointer;
}
.menu_button {
  margin-right: 10px;
}
@media (max-width: 1000px) {
  .computer { display: none!important; }
  .mobile { display: block; }
}
</style>

<script>
export default {
  name: 'App',

  data: () => ({
    item: 1,
    //
  }),
};
</script>
