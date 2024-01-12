interface Contact {
    id: number;
    name: ContactName;
    birthdate?: Date;
}

let primaryContact: Contact = {
    birthdate: new Date("o1-01-1980"),
    id: 12345,
    name: 'Jamie Johnson',
}

type ContactName = string;

