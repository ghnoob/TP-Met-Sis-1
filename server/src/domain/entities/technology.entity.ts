export class Technology {
    private _id: number;
    private _name: string;

    constructor (idConstruct: number, nameConstruct: string) {
        this._id = idConstruct;
        this._name = nameConstruct;
    }

    public get id() {
        return this._id;
    }
    public set id(idParam: number) {
        this._id = idParam;
    }

    public get name() {
        return this._name;
    }
    public set name(nameParam: string) {
        this._name = nameParam;
    }
}
