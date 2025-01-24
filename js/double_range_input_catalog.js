document.addEventListener('DOMContentLoaded', function () {
    const rangeMin = document.getElementById("id-min-range");
    const rangeMax = document.getElementById("id-max-range");
    const minValueEl = document.getElementById("min-value");
    const maxValueEl = document.getElementById("max-value");
    const track = document.querySelector(".side-filters__form-range-track");

    const updateValues = () => {
        let minValue = parseInt(rangeMin.value);
        let maxValue = parseInt(rangeMax.value);

        if (minValue >= maxValue) {
            rangeMin.value = maxValue - 1;
            minValue = maxValue - 1;
        }

        minValueEl.textContent = minValue;
        maxValueEl.textContent = maxValue;

        const percentMin = (minValue / rangeMin.max) * 100;
        const percentMax = (maxValue / rangeMax.max) * 100;

        track.style.background = `linear-gradient(to right, rgba(29, 54, 83, 0.17) ${percentMin}%, rgb(2, 101, 220) ${percentMin}%, rgb(2, 101, 220) ${percentMax}%, rgba(29, 54, 83, 0.17) ${percentMax}%)`;
    };

    rangeMin.addEventListener("input", updateValues);
    rangeMax.addEventListener("input", updateValues);

    updateValues();
});