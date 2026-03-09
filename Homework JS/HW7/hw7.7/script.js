class Car {

    constructor(mode, producer, year, maxSpeed, engineVolume) {
        this.mode = mode;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    info() {
        for (const key in this) {
            console.log(key, this[key]);
        }
    }

    increaseMaxSpeed(speedToAdd) {
        if (speedToAdd > 0) this.maxSpeed = this.maxSpeed + speedToAdd;
    }

    changeYear(year) {
        if (year > 1815) this.year = year;
    }

    addDriver(driver) {
        if (driver) this.driver = driver;
    }

}



