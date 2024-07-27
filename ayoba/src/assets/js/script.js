let msg_container = document.querySelectorAll('.msg-user-container');

msg_container.forEach(container =>{
    container.addEventListener('click', () => {
        let device_width = window.innerWidth; // asign the width of the device here so that you can do check ups in the future in terms of routing though php does not route
        if(device_width > 1024) { // check if the device is qualified to access a media query of a sm device
            // if not please make a function for the right side chats of each person
            console.log('restricted for mobile view', device_width); 

        } else {
            window.location.href = "./ayoba/src/assets/pages/mobile-chat.html"; // if it is a suitable device, then it will route to the mobile view chats
        };
    })
});

const ctx = document.getElementById('myChart').getContext('2d');

// Create gradient
const gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, 'rgba(69, 123, 157, 0.2)'); // Start with color #457b9d at 20% opacity
gradient.addColorStop(1, 'rgba(69, 123, 157, 0)');   // End with transparent

const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'],
        datasets: [{
            label: 'Sample Data',
            data: [10, 5, 30, 40, 30],
            borderColor: '#457b9d', // Line color
            borderWidth: 2,
            fill: true, // Enables the background fill under the line
            backgroundColor: gradient, // Sets the gradient as the background color
            tension: 0.4 // Smooth curve for the line
        }]
    },
    options: {
        scales: {
            x: {
                grid: {
                    display: false // Hides X-axis grid lines
                }
            },
            y: {
                beginAtZero: true,
                grid: {
                    display: false // Hides Y-axis grid lines
                }
            }
        }
    }
});



