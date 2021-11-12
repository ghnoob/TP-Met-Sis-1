import shortid from "shortid";
import { LanguageEnum } from "../enums/language.enum";
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

    public getId(){
        return this.id;
    }

    public getTechnology(){
        return this.technology;
    }
    public setTechnology(technology: Technology){
        this.technology = technology;
    }

    public getSeniority(){
        return this.seniority;
    }
    public setSeniority(seniority: SeniorityEnum){
        this.seniority = seniority;
    }

    public getLanguage(){
        return this.language;
    }
    public setLanguage(language: LanguageEnum){
        this.language = language;
    }

    public getAverageSalary(){
        return this.averageSalary;
    }
    public setAverageSalary(averageSalary: string){
        this.averageSalary = averageSalary;
    }

    public getGrossMargin(){
        return this.grossMargin;
    }
    public setGrossMargin(grossMargin: string){
        this.grossMargin = grossMargin;
    }

    public getCurrency(){
        return this.currency;
    }
    public setCurrency(currency: string){
        this.currency = currency;
    }

}