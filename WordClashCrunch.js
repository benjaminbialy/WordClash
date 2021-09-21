document.getElementById("WordClashButton").addEventListener("click", callDictionariesAPI);
function callDictionariesAPI(){
// for loop to fetch first word, then second 
for(let i=1;i<3;i++){
    var input = document.getElementById("Word"+i).value;
    // gets the relevant words API response
    var api_url = "https://api.dictionaryapi.dev/api/v2/entries/en/"+input;
    // async function declaration
    async function getAPIdata(url){
        // stores the response
        var response = await fetch(url);
        // stores data in form of JSON
        var data = await response.json();
        console.log(JSON.stringify(data));
        }
getAPIdata(api_url);
}
;}