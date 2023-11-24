class Vehicle {
    constructor(model) {
        this.model = model;
    }

    drive() {
        return `${this.model} drives`;
    }
}

class Sedan extends Vehicle {
    constructor(model, backupCamera) {
        super(model);
        this.backupCamera = backupCamera;
    }

    drive() {
        return `${this.model} drives`;
    }
}

class EVSedan extends Sedan {
    constructor(model, backupCamera, rechargeCapability) {
        super(model, backupCamera);
        this.rechargeCapability = rechargeCapability;
    }

    drive() {
        return `${this.model} drives`;
    }

    recharge() {
        return `${this.model} recharges`;
    }
}

class Suv extends Vehicle {
    constructor(model, offroadPackage) {
        super(model);
        this.offroadPackage = offroadPackage;
    }

    drive() {
        return `${this.model} drives`;
    }
}

class Truck extends Vehicle {
    constructor(model, towingCapacity) {
        super(model);
        this.towingCapacity = towingCapacity;
    }

    drive() {
        return `${this.model} drives`;
    }
}
