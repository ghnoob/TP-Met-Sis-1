export class Rate {
    private _id: number
    private _technology_id: number
    private _seniority: string
    private _language: string
    private _average_salary: string
    private _gross_margin: string
    private _currency: string

    constructor(idConstructor:number, technology_idConstructor: number,
         seniorityConstructor: string, languageConstructor:string, 
         average_salaryConstructor: string, gross_marginConstructor: string, 
         currencyConstructor:string){
             this._id = idConstructor
             this._technology_id = technology_idConstructor
             this._seniority = seniorityConstructor
             this._language = languageConstructor
             this._average_salary = average_salaryConstructor
             this._gross_margin = gross_marginConstructor
             this._currency = currencyConstructor
         }
    //Id
    public get id(){
        return this._id
    }
    public set id(idParametro: number){
        this._id = idParametro
    }

    //Technology id
    public get technology_id(){
        return this._technology_id
    }
    public set technology_id(technology_idParametro: number){
        this._technology_id = technology_idParametro
    }

    //Seniority
    public get seniority(){
        return this._seniority
    }
    public set seniority(seniorityParametro: string){
        this._seniority = seniorityParametro
    }

    //Language
    public get language(){
        return this._language
    }
    public set language(languageParametro: string){
        this._language = languageParametro
    }

    //Average_salary
    public get average_salary(){
        return this._average_salary
    }
    public set average_salary(average_salaryParametro: string){
        this._average_salary = average_salaryParametro
    }

    //Gross_margin
    public get gross_margin(){
        return this._gross_margin
    }
    public set gross_margin(gross_marginParametro: string){
        this._gross_margin = gross_marginParametro
    }

    //Currency
    public get currency(){
        return this._currency
    }
    public set currency(currencyParametro: string){
        this._currency = currencyParametro
    }

}