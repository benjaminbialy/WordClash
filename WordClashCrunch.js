// listens until the button is clicked, then calls the function to call the API
document.getElementById("WordClashButton").addEventListener("click", callDictionariesAPI);
function callDictionariesAPI(){
// for loop to fetch first word, then second 
for(let i=1;i<3;i++){
    // gets the input from each field
    var input = document.getElementById("Word"+i).value;
    // gets the relevant words API response
    var api_url = "https://api.dictionaryapi.dev/api/v2/entries/en/"+input;
    // async function declaration
    async function getAPIdata(url){
        // stores the response
        var response = await fetch(url);
        // stores data in form of JSON
        var data = await response.json();
        // finds the respective paragraph, then pushes the JSON file data in
        var p = document.getElementById("Definition"+i)
        p.innerHTML=JSON.stringify(data);
        }
// makes the API call for the i word
getAPIdata(api_url);
}
;}