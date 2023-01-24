class Client {
    constructor(clientID, 
        firstname, 
        lastname, 
        cpfid, 
        phone, 
        address, 
        state) {
            this.clientID = clientID;
            this.firstname = firstname;
            this.lastname = lastname;
            this.cpfid = cpfid;
            this.phone = phone;
            this.address = address;
            this.state = state;
        }
}

module.exports = Client;