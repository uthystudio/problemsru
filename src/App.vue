<template>
  <v-app>
    <v-card flat tile>
        <v-toolbar>
          <v-toolbar-title>Problems.ru - Задачи</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn color="primary" class="menu_button computer">
            <v-icon>search</v-icon>
          </v-btn>
          <v-btn color="primary" class="menu_button computer">
            Решать задачи!
          </v-btn>
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn color="primary" class="menu_button computer" v-on="on">
                Каталог
              </v-btn>
            </template>
            <v-list>
                <v-list-item class="cursor_pointer">
                  <v-list-item-title>Каталог по темам</v-list-item-title>
                </v-list-item>
                <v-list-item class="cursor_pointer">
                  <v-list-item-title>Каталог по источникам </v-list-item-title>
                </v-list-item>
                <v-list-item class="cursor_pointer">
                  <v-list-item-title>Каталог по авторам </v-list-item-title>
                </v-list-item>
                
            </v-list>
          </v-menu>
          <v-btn color="primary" class="menu_button computer">
            Справочник
          </v-btn>


        </v-toolbar>
    </v-card>
    <v-content>
      <Main/>
    </v-content>
    <v-footer
  >
    <v-card
      class="text-center"
    >
    <div class="about_block">
    <a>О проекте</a>
    <a>Об авторах</a>
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
import Main from './components/Main'

export default {
  name: 'App',

  components: {
    Main,
  },

  data: () => ({
    item: 1,
    //
  }),
};
</script>
