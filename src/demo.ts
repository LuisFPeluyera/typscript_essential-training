interface Contact {
    id: number;
    name: ContactName;
    birthdate?: Date;
    status: ContactStatus;
}

enum ContactStatus {
    Active = 'active', 
    Inactive = 'inactive',
    New = 'new'
}

let primaryContact: Contact = {
    birthdate: new Date("o1-01-1980"),
    id: 12345,
    name: 'Jamie Johnson',
    status:ContactStatus.Active
}

type ContactName = string;

