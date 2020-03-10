<template>
    <v-content>
      <v-hover
        v-slot:default="{ hover }"
      >
        <v-card
        class="card"
          :elevation="hover ? 20: 2"
        >
        <v-card-title>Быстрый поиск</v-card-title>
        <v-card-text>
          <v-text-field
            
            placeholder="Введите номер задачи"
          ></v-text-field>
          <v-btn color="primary">Искать</v-btn>

        </v-card-text>
        </v-card>
      </v-hover>
      <v-hover
        v-slot:default="{ hover }"
      >
        <v-card
        class="card"
          :elevation="hover ? 20: 2"
        >
        <v-card-title>Поиск по словам</v-card-title>
        <v-card-text>
          <v-text-field
            placeholder="Введите слово"
          ></v-text-field>
          <v-checkbox
            :label="'Словоформы'"
          ></v-checkbox>
          <v-radio-group v-model="radioGroup">
            <v-radio
              v-for="n in ['Везде', 'В условиях', 'В подсказках', 'В решениях', 'В ответах', 'В названиях']"
              :key="n"
              :label="n"
            ></v-radio>
          </v-radio-group>
          <v-select
            :items="['Все слова', 'Одно из слов', 'Boolean mode']"
            label="Режим поиска">
          </v-select>
          <v-btn color="primary">Искать</v-btn>
        </v-card-text>
        </v-card>
      </v-hover>
            <v-hover
        v-slot:default="{ hover }"
      >
        <v-card
        class="card"
          :elevation="hover ? 20: 2"
        >
        <v-card-title>Поиск по нескольким темам и источникам</v-card-title>
        <v-card-text>
          <p
            v-for="(item, i) in chosenThemes"
            :key="item"
            >
            <b>Тема {{i+1}}:</b> {{item}}
            <v-btn
            color="primary"
            icon
            @click="chosenThemes.splice(i, 1)"
            >
            <v-icon>clear</v-icon>
            </v-btn>
          </p>
          <v-select
            placeholder="Выберите тему"
            v-model="newTheme"
            v-on:change="chosenThemes.length < 5 && chosenThemes.push(newTheme)"
            :items="['Логика и теория множеств', 'Алгебра и арифметика', 'Геометрия']"
            :hint="chosenThemes.length < 5 || 'Maximum length!'"
          >
          </v-select>
          <v-range-slider
          min="1"
          max="10"
          label="Сложность"
          thumb-label="hover"
          >
          </v-range-slider>
          <v-range-slider
          min="1"
          max="11"
          label="Классы"
          thumb-label="hover"
          >
          </v-range-slider>
          <v-checkbox
            :label="'Только задачи дня'"
          ></v-checkbox>
          <p>Будут найдены все задачи, у которых есть хотя бы одна из указанных тем (если вы укажете хотя бы одну тему) и при этом упомянутые хотя бы в одном из указанных источников (если вы укажете хотя бы один источник).</p>
          <v-btn color="primary">Искать</v-btn>
        </v-card-text>
        </v-card>
      </v-hover>
    </v-content>
</template>
<style>
  .card { width: 90%; margin-left: 20px; }

</style>
<script>

  export default {
    name: 'Search',
    newTheme: '',

    data: () => ({
      chosenThemes: [],
      chosenPlaces: [],
    }),
  }
</script>
