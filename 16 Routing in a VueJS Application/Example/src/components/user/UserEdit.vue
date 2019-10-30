<template>
    <div>
       <h3>Edit the User</h3>
        <p> locale: {{ $route.query.locale }}</p>
        <p> key : {{ $route.query.key }}</p>
        <div style="height: 700px"></div>
        <p id="data">some</p>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                confirmed: false
            }
        },
        beforeRouteLeave (to, from, next) {
            if(this.confirmed){
                next();
            } else {
                confirm('Sure?')?next():next(false);
            }
        }
    }
</script>