const express = require("express");

const app = express();
app.use(express.json());
app.post("/:abcd", async function (req, res, next) {
  const { array, sum } = req.body;
  let result = [];
  let obj = {};

  for (let i = 0; i < array.length; i++) {
    if (obj[array[i]]) {
      result.push([obj[array[i]], array[i]]);
    } else {
      obj[sum - array[i]] = array[i];
    }
  }
  res.send(result);
});
const port = 3000;

app.listen(port, () => {
  console.log(`app started on ${port} port`);
});
