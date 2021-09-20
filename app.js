
// #region My test region
const message = "Hello world ! ";
var options = { weekday: "long" };
var date = new Date();
const dayOfWeek = new Intl.DateTimeFormat("fr-FR", options ).format(date);
// console.log(new Intl.DateTimeFormat("fr-FR", options ).format(date));
if (dayOfWeek !== "samedi" && dayOfWeek !== "dimanche") {
    console.log("It's a working day.");
} else {
    console.log("Today is a weekend!");
};

// // #endregion