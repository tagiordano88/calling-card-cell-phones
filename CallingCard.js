class CallingCard {
    constructor(centPerMinute) {
        this.centPerMinute = centPerMinute;
        this.money = 0;
        this.minutes = 0;
    }

    addDollars(money) {
        this.money += money;
        let cents = 100 * money;
        let time = Math.floor(cents / this.centPerMinute);
        this.minutes += time;
    }

    getRemainingMinutes() {
        if(this.minutes <= 0){
            this.minutes = 0;
        } 
        return this.minutes;
    }

    useMinutes(minutes) {
        this.minutes -= minutes;
    }

}

module.exports = CallingCard;