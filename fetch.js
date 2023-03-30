fetch('https://api.covid19api.com/summary').then( ( apidata ) => {
    //console.log(apidata);
    return apidata.json();
}).then( ( actualdata ) =>{
    //console.log(actualdata);
    console.log(actualdata[191]);
}).catch ( (err) => {
    console.log(err)
});

