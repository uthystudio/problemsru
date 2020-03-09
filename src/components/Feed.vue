<template>
  <v-container>
    <v-hover
        v-slot:default="{ hover }"
      >
        <v-card
          :elevation="hover ? 20: 2"
          class="card"
        >
        <v-card-title>Каталог задач по темам</v-card-title>
        <v-card-text>
        <a v-for="item in themeTasksList" :key="item.title">{{item.title}}<br></a>
        </v-card-text>
        </v-card>
      </v-hover>
      <v-hover
        v-slot:default="{ hover }"
      >
        <v-card
          :elevation="hover ? 20: 2"
          class="card"
        >
        <v-card-title>Каталог задач по источникам</v-card-title>
        <v-card-text>
        <a v-for="item in placeTasksList" :key="item.title">{{item.title}}<br></a>
        </v-card-text>
        </v-card>
      </v-hover>
      <v-hover
        v-slot:default="{ hover }"
      >
        <v-card
          :elevation="hover ? 20: 2"
          class="card"
          style="width: 100%"
        >
        <v-card-title>Поиск</v-card-title>
        <v-card-text>
          <div>
            <v-text-field placeholder="Искать задачи со словами" ></v-text-field>
          </div>
        </v-card-text>
        </v-card>
      </v-hover>
      <v-hover
        v-slot:default="{ hover }"
      >
                <v-card
          :elevation="hover ? 20: 2"
          class="card"
          style="width: 100%"
          show="true"
        >
        <v-btn style="float: right; margin: 10px;" icon color="primary" @click="todayTask.showDecision = !todayTask.showDecision">
          <v-icon v-if="todayTask.showDecision">visibility_off</v-icon><v-icon v-if="!todayTask.showDecision">visibility</v-icon>
        </v-btn>
        <v-card-title>Задача №{{todayTask.number}}</v-card-title>
        <v-card-text>
            <span v-html="todayTask.content">
            </span>
          <span v-if="todayTask.showDecision">
            <br>
            <strong>Решение</strong>
            <br>
            <span v-html="todayTask.decision">
            </span>
          </span>
        </v-card-text>
        
        </v-card>
      </v-hover>
  </v-container>
</template>
<style>
  .card { width: 100%; display: block; margin: 20px;}

@media (max-width: 700px) {
  .card { margin-left: 0; margin-right: 0}
}
</style>
<script>
  export default {
    name: 'feed',

    data: () => ({
      themeTasksList: [
        {title: 'Логика и теория множеств' },
        {title: 'Алгебра и арифметика' },
        {title: 'Геометрия' },
        {title: 'Комбинаторика' },
        {title: 'Вероятность и статистика' },
        {title: 'Математический анализ' },
        {title: 'Методы' },
        {title: 'Информатика' },
      ],
      placeTasksList: [
        {title: 'Книги, журналы'},
        {title: 'Олимпиады и турниры'},
        {title: 'Интернет-ресурсы'},
        {title: 'Кружки, факультативы, спецкурсы'},
        {title: 'Фольклор'},
        {title: 'Из писем в редакцию'},
      ],
      todayTask: {
        number: 43232,
        content: 'Докажите, что если точка M лежит внутри треугольника ABC, то MB + MC AB + AC.',
        decision: 'Пусть ABC – данный треугольник. На продолжении стороны BC за точку C отложим отрезок CA1 , равный AC . Поскольку треугольник ACA1 равнобедренный, а луч AC лежит между сторонами угла BAA1 (луч AC пересекает отрезок A1B с концами на сторонах этого угла).',
        showDecision: false,
      },
    }),
  }
</script>


