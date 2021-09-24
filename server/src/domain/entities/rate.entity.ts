import shortid from "shortid";
import { LanguageEnum } from "../enums/languaje.enum";
import { SeniorityEnum } from "../enums/seniority.enum";
import { Technology } from "./technology.entity";

export class Rate {
    private id: string;
    private technology: Technology;
    private seniority: SeniorityEnum;
    private language: LanguageEnum;
    private averageSalary: string;
    private grossMargin: string;
    private currency: string;

    constructor(
        technology: Technology,
         seniority: SeniorityEnum, 
         language:LanguageEnum, 
         averageSalary: string, 
         grossMargin: string, 
         currency:string
         ){
             this.id = shortid.generate();
             this.technology = technology;
             this.seniority = seniority;
             this.language = language;
             this.averageSalary = averageSalary;
             this.grossMargin = grossMargin;
             this.currency = currency;
         }

    public get Id(){
        return this.id;
    }

    public get Technology(){
        return this.technology;
    }
    public set Technology(technology: Technology){
        this.technology = technology;
    }

    public get Seniority(){
        return this.seniority;
    }
    public set Seniority(seniority: SeniorityEnum){
        this.seniority = seniority;
    }

    public get Language(){
        return this.language;
    }
    public set Language(language: LanguageEnum){
        this.language = language;
    }

    public get AverageSalary(){
        return this.averageSalary;
    }
    public set AverageSalary(averageSalary: string){
        this.averageSalary = averageSalary;
    }

    public get GrossMargin(){
        return this.grossMargin;
    }
    public set GrossMargin(grossMargin: string){
        this.grossMargin = grossMargin;
    }

    public get Currency(){
        return this.currency;
    }
    public set Currency(currency: string){
        this.currency = currency;
    }

}