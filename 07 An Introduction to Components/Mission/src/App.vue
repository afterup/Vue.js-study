<template>
    <!-- <div class="container">
        <Header></Header>
        <hr>
        <div class="row">
            <Servers></Servers>
            <ServerDetail></ServerDetail>
        </div>
        <hr>
        <Footer></Footer>
    </div> -->
    <div class="container">
        <app-header></app-header>
        <hr>
        <div class="row">
            <app-servers></app-servers>
            <app-server-detail></app-server-detail>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Header from './components/Shared/Header.vue';
    import Footer from './components/Shared/Footer.vue';
    import ServerDetail from './components/Server/ServerDetail.vue';
    import Servers from './components/Server/Servers.vue';

    export default {
        components: {
            'app-header':Header,
            'app-footer':Footer,
            'app-server-detail':ServerDetail,
            'app-servers':Servers,
        }
    }

</script>

<style>

</style>
