    const users = [
        {
        name: "Niky",
        hometown: "Dallas",
        },
        {
        name: "Tracy",
        hometown: "LA",
        },
        {
        name: "Josh",
        hometown: "Chicago",
        },
        {
        name: "Kate",
        hometown: "Orlando",
        },
        {
        name: "Avidor",
        hometown: "Philadelphia",
        },
        {
        name: "Drew",
        hometown: "Miami",
        },
    ];

function findMatching(drivers, string){
    return drivers.filter(function(driver) {
        // Convert both driver and searchString to lowercase for case-insensitive comparison
        return driver.toLowerCase() === string.toLowerCase();
    });
}

function fuzzyMatch(drivers, string){
    return drivers.filter(function(driver) {
        // Ouputs matching first initial
        return driver.startsWith(string);
    });
}


function matchName(drivers, string){
    return drivers.filter(function(driver) {
        return driver.name === string;
})
}