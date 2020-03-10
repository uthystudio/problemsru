<template>
    <v-content>
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
        >
        <v-card-title>Каталог задач по авторам</v-card-title>
        <v-card-text>
        <a v-for="item in authorsTasksList" :key="item.title">{{item.title}}<br></a>
        </v-card-text>
        </v-card>
      </v-hover>
    </v-content>
</template>
<script>

  export default {
    name: 'Catalogs',
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
      authorsTasksList: [
        {title: 'Августинович С.'},
        {title: 'Готман Э.Г.'},
        {title: 'Грибок С.'},
        {title: 'Августинович С.'},
        {title: 'Готман Э.Г.'},
        {title: 'Грибок С.'},
        {title: 'Августинович С.'},
        {title: 'Готман Э.Г.'},
        {title: 'Грибок С.'},
        {title: 'Августинович С.'},
        {title: 'Готман Э.Г.'},
        {title: 'Грибок С.'},
        {title: 'Августинович С.'},
        {title: 'Готман Э.Г.'},
        {title: 'Грибок С.'},
      ],
    }),
  }
</script>
