let msg_container = document.querySelectorAll('.msg-user-container');

msg_container.forEach(container =>{
    container.addEventListener('click', () => {
        let device_width = window.innerWidth; // asign the width of the device here so that you can do check ups in the future in terms of routing though php does not route
        if(device_width > 767) { // check if the device is qualified to access a media query of a sm device
            // if not please make a function for the right side chats of each person
            console.log('restricted for mobile view'); 

        } else {
            window.location.href = "./ayoba/src/assets/pages/mobile-chat.html"; // if it is a suitable device, then it will route to the mobile view chats
        };
    })
});

