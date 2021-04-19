<template>
  <div>
    <h1>N.A.S.A Search</h1>
    <p>Search the N.A.S.A video and image archive!</p>

    <form @submit.prevent="handleSearch">
      <input
        type="text"
        :value="query"
        @input="handleInput"
        class="border-2 border-gray-200"
      />
      <button type="submit" class="uppercase">Search</button>
    </form>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      query: '',
      items: [],
      prevPage: '',
      nextPage: '',
    }
  },
  methods: {
    handleInput(e: { target: { value: string | null } }) {
      this.query = e.target.value || ''
    },
    async handleSearch() {
      const search = await this.$axios(`/api/search/${this.query}`)
      console.log(search)
    },
  },
})
</script>

<style lang="scss">
</style>
