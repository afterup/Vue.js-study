new Vue({
    el:'#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: [],
    },
    methods: {
        startGame: function(){
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        attack: function(){
            let damage = this.calDamage(3,10);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster for'+damage,
            })
            if(this.checkWin()){
                return;
            }
            this.monsterAttack();
        },
        specialAttack: function(){
            damage = this.calDamage(10,20);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster Hard for'+damage,
            })
            if(this.checkWin()){
                return;
            }
            this.monsterAttack();
        },
        heal: function(){
            if(this.playerHealth <= 90){
                this.playerHealth += 10;
            }else {
                this.playerHealth = 100;
            }
            this.turns.unshift({
                isPlayer: true,
                text: 'Player heal Monster for'+10,
            })
            this.monsterAttack();
        },
        giveup: function(){
            this.gameIsRunning = false;
        },
        monsterAttack: function(){
            damage = this.calDamage(5,13);
            this.playerHealth -= damage;
            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hits Player for'+damage,
            })
            this.checkWin();
        },
        calDamage: function(min,max){
            return Math.max(Math.floor((Math.random()*max)+1),min);
        },
        checkWin: function(){
            if(this.monsterHealth <=0){
                if(confirm('You Win! Again?')){
                    this.startGame();
                }else{
                    this.gameIsRunning = false;
                }
                return true;
            }
            if(this.playerHealth <= 0){
                if(confirm('You lose. Again?')){
                    this.startGame();
                }else{
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false;
        }

    }
})