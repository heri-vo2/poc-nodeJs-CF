// const {MongoClient} = require("mongodb");

// const url = "mongodb+srv://boukhenanerachid:VhBMrPdkgQDuXRZ7@test-gcf.pd6fpms.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(url);

// Reference the database to use
// const dbName = "sample_training";

exports.fetchByRef = async function (ref) {
// async function run() {
    try {
        // Connect to the Atlas cluster
        // await client.connect();
        // const db = client.db(dbName);
        //
        // const col = db.collection("inspections");
        // const filter = {"ref": +ref};

        const col = require('../collection.json');

        console.log("fetch by ref : " + ref);

        // Find and return the document
        const document = await col.find((inspection) => Number(inspection.ref) === Number(ref));
        console.log("Document found:\n" + JSON.stringify(document));

        return await document;
    } catch (err) {
        console.log(err.stack);
    } finally {
        await client.close();
    }
}

// run().catch(console.dir);
