<template>
    <div>
        <div class="title">
            <slot name="title"></slot>
            <slot name="subtitle">subtitle</slot>
        </div>
        <hr>
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    div {
        border: 1px solid #ccc;
        box-shadow: 1px 1px 2px black;
        padding: 30px;
        margin: 30px auto;
        text-align: center;
    }

    .title {
        color: rgb(252, 95, 95);
    }
</style>