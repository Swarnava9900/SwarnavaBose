var typed = new Typed(".auto-type", {
    strings: ["Swarnava Bose", "Programmer", "Gamer"],
    typeSpeed: 80,
    backSpeed: 80,
    loop: true
});

function copyToClipboard(text, event) {
    event.preventDefault();

    navigator.clipboard.writeText(text).then(() => {
        alert('Phone number copied to clipboard: ' + text);
    }, (err) => {
        alert('Failed to copy text: ' + err);
    });
}

async function handleFormSubmit(event)
{
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const contactno = document.getElementById('contactno').value;
    const message = document.getElementById('message').value;
 
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Contact Number:', contactno);
    console.log('Message:', message);

    const scriptURL = "APPS_SCRIPT_KEY";
    console.log("scripturl : ",scriptURL);
    try {
        await fetch(scriptURL, {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                email,
                contactno,
                message
            }),
        });
    
        showPopup("Your data has been submitted successfully!");
        console.log("Request sent successfully!");
        clear();
    } catch (error) {
        showPopup("An error occurred while submitting your data. Please try again.");
        console.error("Error:", error);
    }
    
}

function clear(){
    document.getElementById('name').value = null;
    document.getElementById('email').value = null;
    document.getElementById('contactno').value = null;
    document.getElementById('message').value = null;
}

function showPopup(message) {
    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.textContent = message;

    document.body.appendChild(popup);

    setTimeout(() => {
        popup.remove();
    }, 3000);
}