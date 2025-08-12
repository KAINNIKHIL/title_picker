const btn = document.querySelector('.pickTitle');
const tTl = document.querySelector('.tabTitle');

btn.addEventListener('click', async()=>{
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: takeTitle,
    }, async(injectionResults) =>{
        const [data] = injectionResults;
        if(data.result){
        tTl.innerText = data.result;
        }
    });
});

function takeTitle(){
    try{
    let pageTitle = document.title;
    return  pageTitle
    }catch(err){
        console.error(err);
    }
}