<template>
  <main>
    <section class="main">
      <div class="row">
        <h1 v-if="error.statusCode === 404">
          Страница не найдена
        </h1>
        <h1 v-else>
          Произошла ошибка
        </h1>
        <NuxtLink to="/">
          Вернуться на главную
        </NuxtLink>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'ErrorLayout',

  props: {
    error: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
