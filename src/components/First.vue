<template lang="pug">
    div
        div {{one}}
        div {{three}}
        button(@click="inc") inc
        button(@click="send") send
</template>

<script>
export default {
    props: {},
    data(){
        return {}
    },
    computed: {
        one() {
            return this.$store.getters.one;
        },
        sum() {
            return this.$store.getters.sum;
        },
        three() {
            return this.$store.getters.three;
        }
    },
    methods: {
        inc() {
            this.$store.commit('inc', 1);
        },
        send() {
            this.$store.dispatch('send');
        }
    },
    components: {}
}
</script>
