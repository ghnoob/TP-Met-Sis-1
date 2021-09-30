import { Technology } from "../../domain/entities/technology.entity";
import { SeniorityEnum } from "../../domain/enums/seniority.enum";
import { Request, Response } from "express";
import { LanguageEnum } from "../../domain/enums/languaje.enum";


export default class CreateCommandRates {
    
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
                 this.technology = technology;
                 this.seniority = seniority;
                 this.language = language;
                 this.averageSalary = averageSalary;
                 this.grossMargin = grossMargin;
                 this.currency = currency;
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


            //status example
            async run(req: Request, res: Response) {
                const seniorityEnum: SeniorityEnum = req.body;
                if(!seniorityEnum){
                    return res.status(400).json({message: "Invalid Seniority"});
                }

                const languageEnum: LanguageEnum = req.body;
                if(!languageEnum){
                    return res.status(400).json({message: "Invalid Seniority"});
                }
                
             }

        if (! LanguageEnum::isValid(language)) {
            throw new InvalidArgumentException('Invalid language');
        }

        try {
            Number::fromString($averageSalaryInCents);
        } catch (Exception $e) {
            throw new InvalidArgumentException(
                'Invalid average salary: "' . $e->getMessage() . '"'
            );
        }

        try {
            Number::fromString($grossMarginInCents);
        } catch (Exception $e) {
            throw new InvalidArgumentException(
                'Invalid gross margin: "' . $e->getMessage() . '"'
            );
        }

        if (! Number::fromString($averageSalaryInCents)->isInteger()) {
            throw new InvalidArgumentException(
                'Invalid average salary: "Number is not an integer"'
            );
        }

        if (! Number::fromString($grossMarginInCents)->isInteger()) {
            throw new InvalidArgumentException(
                'Invalid gross margin: "Number is not an integer"'
            );
        }

        if (! SupportedCurrencyEnum::isValid($currency)) {
            throw new InvalidArgumentException('Not supported currency');
        }
        
        public function getTechnologyId(): number
        {
            return this.technologyId;
        }
        
        public function getSeniority(): string
        {
            return $this->seniority;
        }
        
        public function getLanguage(): string
        {
            return $this->language;
        }
        
        public function getAverageSalaryInCents(): string
        {
            return $this->averageSalaryInCents;
        }
        
        public function getGrossMarginInCents(): string
        {
            return $this->grossMarginInCents;
        }
        
        public function getCurrency(): string
        {
            return $this->currency;
        }
        
    }