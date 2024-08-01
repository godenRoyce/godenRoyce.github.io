const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

document.addEventListener('DOMContentLoaded', function() {
    // Get the elements
    const beforeBar1 = document.querySelector('.milestone-1__beforeBar');
    const afterBar1 = document.querySelector('.milestone-1__afterBar');
    const beforeBar2 = document.querySelector('.milestone-2__beforeBar');
    const afterBar2 = document.querySelector('.milestone-2__afterBar');
    const beforeBar3 = document.querySelector('.milestone-6__beforeBar');
    const afterBar3 = document.querySelector('.milestone-6__afterBar');

    // Define the target widths
    const beforeWidth1 = 25; // 25%
    const afterWidth1 = 83; // 83%

    const beforeWidth2 = 15; // 15%
    const afterWidth2 = 40; // 40%

    const beforeWidth3 = 30; // 30%
    const afterWidth3 = 70; // 70%

    // Create the Intersection Observer
    const observer1 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Start the animation when the bar graph comes into view
                animateBars();
                // Disconnect the observer since we only need to trigger the animation once
                observer1.disconnect();
            }
        });
    });

    const observer2 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Start the animation when the bar graph comes into view
                animateBars2();
                // Disconnect the observer since we only need to trigger the animation once
                observer2.disconnect();
            }
        });
    });

    const observer3 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Start the animation when the bar graph comes into view
                animateBars3();
                // Disconnect the observer since we only need to trigger the animation once
                observer3.disconnect();
            }
        });
    });

    // Observe the bar graph element
    observer1.observe(document.querySelector('#milestone-1'));

    observer2.observe(document.querySelector('#milestone-2'));

    observer3.observe(document.querySelector('#milestone-6'));

    // Animate the bars
    function animateBars() {
        let beforeWidthValue = 0;
        let afterWidthValue = 0;
        const interval = 10; // Interval for animation in milliseconds

        const beforeInterval = setInterval(function() {
            beforeWidthValue++;
            beforeBar1.style.width = beforeWidthValue + '%';
            if (beforeWidthValue >= beforeWidth1) {
                clearInterval(beforeInterval);
            }
        }, interval);

        const afterInterval = setInterval(function() {
            afterWidthValue++;
            afterBar1.style.width = afterWidthValue + '%';
            if (afterWidthValue >= afterWidth1) {
                clearInterval(afterInterval);
            }
        }, interval);
    }

    function animateBars2() {
        let beforeWidthValue = 0;
        let afterWidthValue = 0;
        const interval = 10; // Interval for animation in milliseconds

        const beforeInterval = setInterval(function() {
            beforeWidthValue++;
            beforeBar2.style.width = beforeWidthValue + '%';
            if (beforeWidthValue >= beforeWidth2) {
                clearInterval(beforeInterval);
            }
        }, interval);

        const afterInterval = setInterval(function() {
            afterWidthValue++;
            afterBar2.style.width = afterWidthValue + '%';
            if (afterWidthValue >= afterWidth2) {
                clearInterval(afterInterval);
            }
        }, interval);
    }

    function animateBars3() {
        let beforeWidthValue = 0;
        let afterWidthValue = 0;
        const interval = 10; // Interval for animation in milliseconds

        const beforeInterval = setInterval(function() {
            beforeWidthValue++;
            beforeBar3.style.width = beforeWidthValue + '%';
            if (beforeWidthValue >= beforeWidth3) {
                clearInterval(beforeInterval);
            }
        }, interval);

        const afterInterval = setInterval(function() {
            afterWidthValue++;
            afterBar3.style.width = afterWidthValue + '%';
            if (afterWidthValue >= afterWidth3) {
                clearInterval(afterInterval);
            }
        }, interval);
    }
});

const container1 = document.querySelector('.image-box-wrapper-1');
const container2 = document.querySelector('.image-box-wrapper-2');
const container3 = document.querySelector('.image-box-wrapper-3');


document.querySelector('.image-box-slider-1').addEventListener('input', (e) => {
  container1.style.setProperty('--position', `${e.target.value}%`);
})

document.querySelector('.image-box-slider-2').addEventListener('input', (e) => {
    container2.style.setProperty('--position', `${e.target.value}%`);
  })

document.querySelector('.image-box-slider-3').addEventListener('input', (e) => {
container3.style.setProperty('--position', `${e.target.value}%`);
})

function createPieChart() {
    new Chart(document.getElementById('pie-chart'), {
        type: 'pie',
        data: {
            labels: ["V3", "V2", "Industry", "Connector", "Comparison"],
            datasets: [{
            backgroundColor: ["#38ddb4", "#129e7b",
                "#35f5d2", "#6ffce2", "#b7fff2" 
            ],
            data: [16, 56, 24, 4, 3]
            }]
        },
        options: {
            title: {
            display: true,
            text: 'Pie Chart for admin panel'
            },
            reponsive: true
        }
    });
}

// Function to observe the pie chart's visibility
function observePieChart() {
    const chartElement = document.getElementById('pie-chart');

    // Intersection Observer callback
    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                createPieChart();
                observer.unobserve(chartElement); // Stop observing after the chart is created
            }
        });
    };

    // Intersection Observer options
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Trigger when at least 10% of the chart is visible
    };

    // Create the Intersection Observer
    const observer = new IntersectionObserver(callback, options);
    observer.observe(chartElement);
}

// Call the function to observe the pie chart
observePieChart();

var acc = document.getElementsByClassName("accordion");

for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");

        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            panel.style.padding = "0 18px 0px 18px";
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            panel.style.padding = "18px";
        } 
    });
}

document.querySelectorAll('.reports-gallery-buttons input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', () => {
        document.querySelectorAll('.reports-gallery img').forEach(img => {
            img.classList.remove('active');
        });
        const activeImgId = radio.id.replace('-btn', '');
        document.getElementById(activeImgId).classList.add('active');
    });
});

// Initially display the first image as active
document.getElementById('report-6').classList.add('active');