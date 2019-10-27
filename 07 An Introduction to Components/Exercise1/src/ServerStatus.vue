<template>
    <div>
        <p>Server status: {{ status }}</p>
        <button @click="changeStatus">change</button>
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            status:'critical',
        }
    },    
    methods: {
        changeStatus() {
            this.status = 'change';
        }
    },
}
</script>