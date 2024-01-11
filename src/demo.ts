interface Contact extends Address{
    id: number;
    name: string;
    birthdate?: Date;
}

interface Address {
    line1: string;
    line2: string;
    province: string;
    region: string;
    postalCode: string;
}

let primaryContact: Contact = {
    birthdate: new Date("o1-01-1980"),
    id: 12345,
    name: 'Jamie Johnson',
    postalCode: '1234',
    
}
