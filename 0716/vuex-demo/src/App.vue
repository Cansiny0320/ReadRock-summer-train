<template>
    <div id="app">
        {{ $store.getters.getterTitle }}
        <button @click="changeTitle">changeTitle</button>
        <button @click="actionChangeTitle">actionChangeTitle</button>
    </div>
</template>

<script>
export default {
    name: 'app',
    methods: {
        changeTitle() {
            this.$store.commit("changeTitle", "mutation changed title")
        },
        actionChangeTitle() {
            this.$store.dispatch('actionChange')
        }
    }
}
</script>

<style lang="scss">
</style>
