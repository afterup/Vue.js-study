<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button @click="selectedComponent = 'appQuote'">Quote</button>
                <button @click="selectedComponent = 'appAuthor'">Author</button>
                <button @click="selectedComponent = 'appNew'">New</button>
                <hr>
                <keep-alive>
                    <component :is="selectedComponent">
                        <p>Default</p>
                    </component>
                </keep-alive>
            <!--
                <app-quote>
                    <h1 slot="title">How to ...</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex architecto at, unde ea laboriosam quasi enim sunt eveniet beatae et, aperiam dolores molestias nulla deleniti voluptatum deserunt assumenda neque possimus!</p>
                </app-quote>
            -->
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue';
    import New from './components/New.vue';
    import Author from './components/Author.vue';

    export default {
        data:function(){
            return {
                quoteTitle: "The Quote",
                selectedComponent: 'appQuote',
            }
        },
        components: {
            appQuote:Quote,
            appNew: New,
            appAuthor: Author,
        },
    }
</script>

<style>
</style>
