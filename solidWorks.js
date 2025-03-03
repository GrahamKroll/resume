document.addEventListener("DOMContentLoaded", function () {
    const slideshows = ["boxMover", "quadcopter", "solidworks"];

    slideshows.forEach(id => {
        let slideIndex = 0;
        showSlides(id, slideIndex);

        function showSlides(slideshowId, n) {
            let slides = document.querySelectorAll(`#${slideshowId} .slide`);
            let dotsContainer = document.querySelector(`#${slideshowId} .dots`);
            
            slides.forEach(slide => slide.style.display = "none");
            
            if (n >= slides.length) { slideIndex = 0; }
            if (n < 0) { slideIndex = slides.length - 1; }

            slides[slideIndex].style.display = "block";

            dotsContainer.innerHTML = "";
            slides.forEach((_, index) => {
                let dot = document.createElement("span");
                dot.classList.add("dot");
                if (index === slideIndex) dot.classList.add("active");
                dot.onclick = () => {
                    slideIndex = index;
                    showSlides(slideshowId, slideIndex);
                };
                dotsContainer.appendChild(dot);
            });
        }

        document.querySelector(`#${id} .prev`).onclick = () => {
            slideIndex--;
            showSlides(id, slideIndex);
        };

        document.querySelector(`#${id} .next`).onclick = () => {
            slideIndex++;
            showSlides(id, slideIndex);
        };

        setInterval(() => {
            slideIndex++;
            showSlides(id, slideIndex);
        }, 5000); // Auto-slide every 5 seconds
    });
});
