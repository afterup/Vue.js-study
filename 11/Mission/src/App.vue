<template>
    <div class="container">
        <form>
            <div class="row" v-if="isSubmit === false">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <app-full-name v-model="userData.fullName"></app-full-name>
                    <!-- Mail -->
                    <div class="form-group">
                        <label>Mail</label>
                        <input type="email" v-model="userData.mail">
                    </div>
                    <!-- Password -->
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" v-model="userData.password">
                    </div>
                    <!-- Store Data? Yes/No -->
                    <div class="form-group">
                        <label>Store Data?</label>
                        <input type="checkbox" value="store" v-model="store">
                    </div>

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->
                    <button class="btn btn-primary" @click.prevent="submitted">Submit</button>

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isSubmit === true">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ userData.fullName }}</p>
                        <p>Mail: {{ userData.mail }}</p>
                        <p>Password: {{ userData.password }}</p>
                        <p>Store in Database?: {{ store }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FullName from './FullName.vue';

    export default {
        data: function(){
            return {
                userData :{
                    fullName:'ahyoung ss',
                    mail:'',
                    password:'',
                },
                store:false,
                isSubmit : false,
            }
        },
        methods: {
            submitted(){
                this.isSubmit = true;
            }
        },
        components: {
            appFullName:FullName,
        }

    }
</script>

<style>
</style>
