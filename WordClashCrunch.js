function callDictionariesAPI(){
// for loop to fetch first word, then second 
for(let i=1;i<3;i++){
    // gets the relevant words API response
    var api_url = "https://api.dictionaryapi.dev/api/v2/entries/en/"+Word+i.toString();
    // async function declaration
    async function getAPIdata(url){
        // stores the response
        var response = await fetch(url);
         // stores data in form of JSON
        var data = await response.json();
        }
    getAPIdata(api_url);
}
;}