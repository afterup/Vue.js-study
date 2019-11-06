<template>
    <div>
        <div class="col-md-6">
            First Name: <input type="text" class="form-control" v-model="order.firstName">
        </div>
        <div class="col-md-6">
            Last Name: <input type="text" class="form-control" v-model="order.lastName">
        </div>
        <div class="form-group">
        <div class="col-md-12"><strong>주소:</strong></div>
        <div class="col-md-12">
            <input v-model="order.address"
            class="form-control" />
        </div>
        </div>
        <div class="form-group">
        <div class="col-md-12"><strong>도시:</strong></div>
        <div class="col-md-12">
            <input v-model="order.city"
            class="form-control" />
        </div>
        </div>
        <div class="form-group">
        <div class="col-md-2">
        <strong>주:</strong>
            <select v-model="order.state"
            class="form-control">
            <option disabled value="">주</option>
            <option>AL</option>
            <option>AR</option>
            <option>CA</option>
            <option>NV</option>
            </select>
        </div>
        </div>
        <div class="form-group">
        <div class="col-md-6 col-md-offset-4">
        <strong>우편번호:</strong>
            <input v-model="order.zip"
            class="form-control"/>
        </div>
        </div>
        <div class="form-group">
            <label for="home">Home</label>
            <input type="radio" id="home" value="home" v-model="order.method" >
            <label for="company">Company</label>
            <input type="radio" id="company" value="company" v-model="order.method" >
        </div>
        <div class="form-group">
            <label for="gift">Gift</label>
            <input type="checkbox" id="gift" v-model="order.gift" :value="checkGift">
        </div>
        <div class="col-md-12 verify">
        <pre>
            이름: {{order.firstName}}
            성: {{order.lastName}}
            주소: {{order.address}}
            도시: {{order.city}}
            우편번호: {{order.zip}}
            주: {{order.state}}
            방법: {{ order.method }}
            선물: {{ checkGift }}
        </pre>
        </div>

    </div>
</template>

<script>
export default {
    data(){
        return {
            order: {
                firstName: '',
                lastName: '',
                adress:'',
                city:'',
                zip:'',
                state:'',
                method:'home',
                gift: true,
            }
        }
    },
    computed: {
        checkGift(){
            return this.order.gift? '선물 안보내기' : '선물 보내기';
        }
    }

}
</script>

<style>

</style>