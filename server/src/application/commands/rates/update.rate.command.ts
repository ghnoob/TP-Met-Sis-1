export default class UpdateRateCommand {
    private id: string;
    private averageSalary: string;
    private grossMargin: string;

    constructor(
        id: string,
        averageSalary: string,
        grossMargin: string,
    ) {
        this.id = id;
        this.averageSalary = averageSalary;
        this.grossMargin = grossMargin;
    }

    public getId() {
        return this.id;
    }

    public getAverageSalary(){
        return this.averageSalary;
    }

    public getGrossMargin(){
        return this.grossMargin;
    }
}