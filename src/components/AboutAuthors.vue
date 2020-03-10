<template>
    <v-content>
      <v-hover
        v-slot:default="{ hover }"
      >
        <v-card
          :elevation="hover ? 20: 2"
          class="card"
        >
        <v-card-title>Авторы проекта</v-card-title>
        <v-card-text>
          <v-list>
            <v-list-item
              v-for="item in authors"
              :key="item.title"
            >
              <v-list-item-avatar>
                <v-img :src="item.src"></v-img>
              </v-list-item-avatar>
            <v-list-item-content>
                <v-list-item-title v-html="item.name"></v-list-item-title>
                <v-list-item-subtitle v-html="item.about"></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-text>
        </v-card>
      </v-hover>
    </v-content>
</template>
<script>

  export default {
    name: 'AboutAuthors',
    data: () => ({
      authors: [
        {src: 'http://problems.ru/images/photoes/t_big_boss.jpg', name: 'Ященко Иван Валерьевич', about: 'Директор МЦНМО, зав. кафедрой математики МИОО, руководитель проекта'},
        {src: 'http://problems.ru/images/photoes/t_othello.jpg', name: 'Сергеев Пётр Валентинович', about: 'Зав. кафедрой математики школы 57 г. Москвы, зам. руководителя проекта, главный редактор (2004–2010 г.)'},
        {src: 'http://problems.ru/images/photoes/allena.jpg', name: 'Горская Елена Сергеевна', about: 'Учитель программирования ЦО 218 г. Москвы, главный редактор проекта (с января 2011 года)'},
        {src: 'http://problems.ru/images/photoes/mednikov.jpg', name: 'Медников Леонид Эммануилович', about: 'г. Хайфа, на данный момент ведущий редактор проекта и автор решений'},
        {src: 'http://problems.ru/images/photoes/t_programmer.jpg', name: 'Митричев Пётр', about: 'Механико-математический факультет МГУ им. М.В. Ломоносова'},
      ]
    }),
  }
</script>
