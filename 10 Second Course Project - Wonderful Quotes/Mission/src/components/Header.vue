<template>
    <div>
        <div class="progress">
            <div class="progress-bar" role="progressbar" :style="{width: (quoteCount / maxQuotes) * 100 +'%'}" aria-valuenow="25" aria-valuemin="0"
                aria-valuemax="100">{{ quoteCount }} / {{ maxQuotes }}</div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['quoteCount', 'maxQuotes'],
    }
</script>