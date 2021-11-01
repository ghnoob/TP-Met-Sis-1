export default class UpdateTechnologyCommand {

    private id: string;
    private name: string;

    constructor(
        id: string, 
        name: string
    ) {
        this.id = id;
        this.name = name?.toLowerCase();
    }

    public getId() {
        return this.id;
    }

    public getName() {
        return this.name;
    }
}