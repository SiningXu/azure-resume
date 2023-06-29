window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount()
})

const functionApiUrl = 'https://getresumecounter00.azurewebsites.net/api/GetResumeCounter?code=tk2PS33i4UV0fkkxxCw_qmB4Ejw0YL5edtkVzOHu1qBtAzFumFKtJA==';
const localFunctionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response => {
        console.log("website called function Api.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}