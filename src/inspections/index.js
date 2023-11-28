'use strict';

const functions = require('@google-cloud/functions-framework');
const pathToRegexp = require("path-to-regexp");

// const {MongoClient} = require("mongodb");
// const config = require("./collection.json");

// const url = "mongodb+srv://boukhenanerachid:VhBMrPdkgQDuXRZ7@test-gcf.pd6fpms.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(url);

// Reference the database to use
// const dbName = "sample_training";

//For cloud function
functions.http('fetchByRef', async (req, res) => {
    try {
        const col = require('./collection.json');

        var keys = [];
        const re = pathToRegexp("/inspections/:ref", keys);
        var pathVars = re.exec(req.path);
        if (pathVars) {
            // console.log(JSON.stringify(pathVars));
            const ref = pathVars[1];
            console.log("ref : " + ref)

            // Find and return the document
            const document = await col.find((inspection) => Number(inspection.ref) === Number(ref));
            console.log("Document found:\n" + JSON.stringify(document));

            res.status(200).send(await document);
        } else {
            res.status(404).send("Url not correctly set please use this format : \"/inspections/:ref\" ");
        }
    } catch (err) {
        console.log(err.stack);
    }
});