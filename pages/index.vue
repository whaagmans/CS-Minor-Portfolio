<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        router
        exact
        class="d-flex justify-space-between ma-5"
      >
        <v-card-title>{{ item.title }}</v-card-title>
        <v-card-text>{{ item.text }}</v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'title',
          text: 'text',
          to: 'page1',
          background: '',
        },
        {
          title: 'title2',
          text: 'text2',
          to: 'page2',
          background: '',
        },
        {
          title: 'title3',
          text: 'text3',
          to: 'page3',
          background: '',
        },
      ],
    }
  },
}
</script>