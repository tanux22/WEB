const login = async (username, passw) => {
    if (!username || !passw)
        throw new Error("ERROR");
    if (passw === "hello")
        return "SUCCESS";
    throw new Error("inavalid password");
}

login("afsfs")
    .then(msg => {
        console.log("logged in");
        console.log(msg);
    })
    .catch((err) => {
        console.log("error");
        console.log(err);
    })