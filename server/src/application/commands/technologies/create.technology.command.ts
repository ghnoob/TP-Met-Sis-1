export default class CreateTechnologyCommand {

    private name: string;

    constructor(name: string) {
        this.name = name?.toString().toLowerCase();
    }

    public getName() {
        return this.name
    }
    public setName(name: string) {
        this.name = name;
    }
}