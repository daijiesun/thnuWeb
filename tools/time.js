function date() {
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var Time =
    year +
    "-" +
    (month = month >= 10 ? month : "0" + month) +
    "-" +
    (day = day >= 10 ? day : "0" + day) +
    " " +
    (hours = hours >= 10 ? hours : "0" + hours) +
    ":" +
    (minutes = minutes >= 10 ? minutes : "0" + minutes);
    return Time
}
module.exports = date
