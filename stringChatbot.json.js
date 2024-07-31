let People = [];

fetch('people.json.js')
    .then(response => response.json())
    .then(data => {
        // process the data here
        People.push(data);
        

        console.log("People " + People);
        console.log("Data " + data);

        console.log("Data " + data[0].name);
        console.log("People " + People[0][0].name);
        console.log("People " + People[0][1].name);

        console.log(JSON.stringify(data));
        console.log(JSON.parse(JSON.stringify(data)));

        console.log(data);
        console.log(People);

    })
    .catch(error => {
        // console.error("Error", error);
    });
