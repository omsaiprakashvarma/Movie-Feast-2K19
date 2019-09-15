import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Options} from 'src/app/options.model';


@Injectable({
  providedIn: 'root'
})
export class MyserviceService { 
  list:Options[];
  visible:boolean;

  constructor(private firestore:AngularFirestore ) { }

  //Connectes to firebase database collection[options]
  getoptions(){
    return this.firestore.collection('options').snapshotChanges();
  }

  //recieves the database from options[collection] and store it in a {list} array !!!!!!!!!!!!CURRENTLY NOT WORKING!!!!!!!!!!!!!!
  recieve_op(){
    this.getoptions().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Options;
      })
    });
    return this.list;
  }

  updateoptions(obj:any[],total_bid:number){
    // this.firestore.doc('options/'+options).update(options);
   
    // for (const iterator of obj) {
      
    //   this.firestore.doc('options/' + iterator.id).delete();
    //   console.log("deleted");
    // }
    for (const a of obj) {
      
      // let op = Object.assign({},a);
      // this.firestore.collection('options/').add(op);

      // console.log("op:",op);
      
      if (a.id == null){
      let op = Object.assign({},a);
      this.firestore.collection('options/').add(op);
      console.log("op:",op,"if block");
      }
      
      // else{
      //   console.log("a.id:",a.id)
      //   this.firestore.doc('options/' + a.id).delete();
      //   let op = Object.assign({},a);
      //   this.firestore.collection('options/' + 'test').add(op);
      //   console.log("op after delete:",op);
      // }
    }
    let bid = Object.assign({},total_bid);
    this.firestore.doc('bid/' + '8mFiXHAILrMx3bXbc0R1').update(bid);
  }
    // let op = Object.assign({},options);
    // this.firestore.collection('options').add(op);

}
