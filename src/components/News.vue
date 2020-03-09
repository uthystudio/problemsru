<template>
  <v-container>
      <v-hover
        v-slot:default="{ hover }"
      >
        <v-card
          :elevation="hover ? 20: 2"
          class="card"
        >
        <v-card-title>Новости</v-card-title>
        <v-card-text>
          <p v-for="item in news" :key="item.title"><b>{{item.date}}</b>, {{item.title}}</p>
        </v-card-text>
        </v-card>
      </v-hover>
  </v-container>
</template>
<style>
.card {
  width: 100%;
}
@media (max-width: 700px) {
  .card { width: 100%; display: block; margin-left: 0; margin-right: 0}
}
</style>
<script>
  export default {
    name: 'News',

    data: () => ({
      news: [
        { date: '16.11.2019', title: 'Опубликованы задачи Математического праздника 2019 года (вместе с решениями).' },
        { date: '16.11.2019', title: 'Опубликованы задачи (с решениями) Московской математической регаты для 8 классов, 2017/2018г.' },
        { date: '16.11.2019', title: 'Опубликованы задачи (с решениями) XVШ Московской устной олимпиады по геометрии (2018 г.)' },
        { date: '16.11.2019', title: 'Опубликованы задачи (с решениями) Московской математической регаты для 7 классов, 2017/2018г.' },
        { date: '16.11.2019', title: 'Опубликованы задачи (с решениями) Московской устной олимпиады для 6-7 классов, 2017/2018 г.' },
      ]
    }),
  }
</script>
