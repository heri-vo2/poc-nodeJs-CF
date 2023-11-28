const express = require("express");
const {fetchByRef} = require("./service/inspectionsService");
const app = express();

app.use(express.json()); // parses incoming requests with JSON payloads

app.get("/inspections/:ref", async function (req, res) {
    const ref = req.params.ref;
    const result = await fetchByRef(ref);

    if (!result) {
        return res.status(404).send('No inspection with ref = ' + ref);
    }

    res.status(200).json(result);
});

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('App is listening on port ' + listener.address().port)
})