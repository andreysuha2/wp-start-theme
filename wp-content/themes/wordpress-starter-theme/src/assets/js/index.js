dl.logInProduction('%cRun in "production" environment', "font-weight: bold");
dl.notify("Welcome to F5-studio start theme!");
dl.warning("Using jQuery is danger for your brain!");
dl.error("Change git user name, user email, and repo!");
dl.handler(() => {
    console.log('%cThis notifications show you who use DevLogger))', "font-size: 18px;font-weight: bold");
});
console.clear();

let footer = dom.$('.page-footer');
footer.css({"border-top": "1px solid #000", "background-color": "red"});
console.log(footer);
