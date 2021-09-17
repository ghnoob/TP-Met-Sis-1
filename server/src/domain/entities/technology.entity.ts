import shortid from "shortid";

export class Technology {
    private id: string;
    private name: string;

    constructor (name: string) {
        this.id = shortid.generate();
        this.name = name;
    }

    public get Id() {
        return this.id;
    }
   
    public get Name() {
        return this.name;
    }
    public set Name(name: string) {
        this.name = name;
    }
}
