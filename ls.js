const fs = require("fs");

let lsFunction = process.stdin.on("data", data => {
  const cmd = data.toString().trim(); // removes the newline
  if (cmd === "ls") {
    fs.readdir("./", "utf8", (err, files) => {
      if (err) {
        throw err;
      } else {
        process.stdout.write(files.join("\n"));
        process.stdout.write("prompt > ");
      }
    });
  }
});

module.exports = lsFunction;
