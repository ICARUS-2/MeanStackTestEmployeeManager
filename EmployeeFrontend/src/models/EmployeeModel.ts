export default class EmployeeModel
{
    _id: string = "";
    name: string = "";
    email: string = "";
    dateOfBirth: Date | null = null;
    hiringDate: Date | null = null;
    terminationDate: Date | null = null;
    status: string = "";
    info: string = "";

    constructor(id: string, name: string, email: string, dateOfBirth: Date | null, hiringDate: Date | null, terminationDate: Date | null, status: string, info: string)
    {
        this._id = id;
        this.name = name;
        this.email = email;

        if (dateOfBirth != null)
            this.dateOfBirth = new Date(dateOfBirth);
        else 
            this.dateOfBirth = null;

        if (hiringDate != null)
            this.hiringDate = new Date(hiringDate);
        else
            this.hiringDate = null;
        
        if (terminationDate != null)
            this.terminationDate = new Date(terminationDate);
        else
            this.terminationDate = null;
        
        this.status = status;
        this.info = info;
    }
}