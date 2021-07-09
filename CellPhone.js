class CellPhone {
    constructor (card){
        this.card = card;
        this.phoneNumber = "";
        this.talking = false;
        this.minutesUsed = 0;
        this.callHistory = "";  
        this.terminated = false;      

    }

    call(phoneNumber){
        this.talking = true;
        this.phoneNumber = phoneNumber;
    }

    isTalking() {
        return this.talking;
    }

    tick() {    
        this.minutesUsed ++;
        if (this.card.minutes <= 1){
          this.card.minutes --;
          this.terminated = true;
          this.endCall();
        } else {
        this.card.minutes --;    
        }
    }

    endCall() {
        this.talking = false;
        let minutes = "";
        if(this.minutesUsed <= 1){
            minutes = "minute";
        } else {
            minutes = "minutes";
        }
        let terminateMessage = '';
        if (this.terminated){
           terminateMessage = 'cut off at '
        }
        
        if(this.callHistory.length > 1){
            this.callHistory += ", " + this.phoneNumber + " (" + terminateMessage + this.minutesUsed + " " + minutes +")";
        } 
        else {
            this.callHistory += this.phoneNumber + " (" + terminateMessage + this.minutesUsed + " " + minutes +")";
        }
        this.minutesUsed = 0;
       
    }

    getHistory() {        
       return this.callHistory;
    }

}

module.exports = CellPhone;