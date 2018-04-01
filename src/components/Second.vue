<template lang="pug">
    div
        div {{one}}
        div {{sum}}
        button(@click="send") send
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
// import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
const { mapState, mapGetters, mapMutations, mapActions } = createNamespacedHelpers('asdsad');

export default {
    props: {},
    data(){
        return {}
    },
    computed: {
        ...mapGetters(['one', 'sum', 'three'])
    },
    methods: {
        ...mapMutations(['inc']),
        ...mapActions(['send'])
    },
    components: {}
}
</script>

