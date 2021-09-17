export class Rate {
    private id: number
    private technologyId: number
    private seniority: string
    private language: string
    private averageSalary: string
    private grossMargin: string
    private currency: string

    constructor(technologyIdConstructor: number,
         seniorityConstructor: string, languageConstructor:string, 
         averageSalaryConstructor: string, grossMarginConstructor: string, 
         currencyConstructor:string){
             this.technologyId = technologyIdConstructor
             this.seniority = seniorityConstructor
             this.language = languageConstructor
             this.averageSalary = averageSalaryConstructor
             this.grossMargin = grossMarginConstructor
             this.currency = currencyConstructor
         }

    //Id
    public get Id(){
        return this.id
    }

    //Technology id
    public get TechnologyId(){
        return this.technologyId
    }
    public set TechnologyId(technologyIdParametro: number){
        this.technologyId = technologyIdParametro
    }

    //Seniority
    public get Seniority(){
        return this.seniority
    }
    public set Seniority(seniorityParametro: string){
        this.seniority = seniorityParametro
    }

    //Language
    public get Language(){
        return this.language
    }
    public set Language(languageParametro: string){
        this.language = languageParametro
    }

    //Average_salary
    public get AverageSalary(){
        return this.averageSalary
    }
    public set Average_salary(averageSalaryParametro: string){
        this.averageSalary = averageSalaryParametro
    }

    //Gross_margin
    public get GrossMargin(){
        return this.grossMargin
    }
    public set GrossMargin(grossMarginParametro: string){
        this.grossMargin = grossMarginParametro
    }

    //Currency
    public get Currency(){
        return this.currency
    }
    public set Currency(currencyParametro: string){
        this.currency = currencyParametro
    }

}