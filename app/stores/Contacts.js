import {observable, action} from 'mobx';


class Contacts {
  @observable all = [

     {id:1, name: 'Kenneth Woanyah', email:'ken@email.com'},
     {id:2, name: 'Kofi Amoah', email:'kofi@email.com'},
     {id:3, name: 'Barack Obama', email:'obama@email.com'},
     {id:4, name: 'Suzan Obeng', email:'suzan@email.com'},

  ];

  @action add(data) {
    const existing = this.all;
    this.all = existing.concat(data);
  }

  @action find(contactId){
    return (
      this.all.slice().filter(
        c => c.id === parseInt(contactId, 10)
      )[0]
    );
  }

  @action remove(contactId) {
    const existing = this.all;
    this.all = existing.filter(
      c => c.id !== contactId
    );

  }


}


export default new Contacts();
