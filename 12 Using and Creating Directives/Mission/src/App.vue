<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <button class="btn btn-primary" v-myon:click="clicked">Click</button>
                <div style="width:50px; height:50px; background-color:gray;"
                     v-myon:mouseenter="mouseEnter"
                     v-myon:mouseleave="mouseLeave"></div> 
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            'myon': {
                bind(el, binding){
                    const type = binding.arg;
                    const fn = binding.value;
                    el.addEventListener(type,fn);
                }
            }
        },
        methods: {
            clicked(){
                alert('Click');
            },
            mouseEnter(){
                console.log('Enter');
            },
            mouseLeave(){
                console.log('Leave');
            }
        }
    }
</script>

<style>
</style>
