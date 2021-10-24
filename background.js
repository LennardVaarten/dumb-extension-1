chrome.runtime.onInstalled.addListener(() => {
    console.log('Background running');
});



chrome.action.onClicked.addListener(buttonClicked);


function buttonClicked(tab) {
    let msg = {
        txt: "Hello"
    }
    chrome.tabs.sendMessage(tab.id, msg);
    console.log('Message sent');
    console.log(tab);
}

