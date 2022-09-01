<template>
  <button class="btn">save</button>
</template>

<script>
export default {
    props: {
        value: {
            default: "Submit",
            type: String,
        },
        style: {
            type: String,
        }
    },

    methods: {
        doSomething() {
            this.$emit('clicked')
        }
    }
}
</script>

<style scoped>
    .btn {
        border: none;
        border-radius: 4px;
        color: #424242;
        cursor: pointer;
        padding: 7px 20px;
    }
</style>