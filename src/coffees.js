import dbConnect from "./dbConnect.js";

export function createCoffee(req, res) {
    //Connect to Firestore
    const db = dbConnect();
    //Add a new doc to coffees collection
    db.collection('coffees').add(req.body)
        //Send back a response (err/ no)
        .then(doc => res
            .status(201)
            .send({ success: true, message: 'Created coffee: ' + doc.id }))
        .catch(err => res
            .status(500)
            .send({ success: false, message: err }))
}

export function getAllCoffees(req, res) {
    const db = dbConnect();
    db.collection('coffees').get()
    .then(collection => {
        const coffeeList = collection.docs.map(doc => doc.data())
        res
        .status(201)
        .send(coffeeList)
    }
    )
    .catch(err => res
        .status(500)
        .send({ success: false, message: err }))
}