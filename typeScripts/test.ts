interface IEmailable {
    name: string,
    email: string
}


function SendEmail(contact:IEmailable) {
    console.log(`${contact.name} <${contact.email}>`);

}

SendEmail({
    name: 'bladicito',
    email: 'bladicito@yahoo.com'
});

class Company implements IEmailable {
    name: string;
    email: string;
    constructor(companyName:string, companyEmail:string){
        this.name = companyName;
        this.email = companyEmail;
    }

}