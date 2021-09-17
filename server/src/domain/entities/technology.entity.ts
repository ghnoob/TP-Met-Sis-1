export class Technology {
    private id: number;
    private name: string;

    constructor (nameConstruct: string) {
        this.name = nameConstruct;
    }

    public get Id() {
        return this.id;
    }
   
    public get Name() {
        return this.name;
    }
    public set Name(nameParam: string) {
        this.name = nameParam;
    }
}
