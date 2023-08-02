var $slider = $("#slider");
var $fill = $(".bar .fill");

function setBar() {
	$fill.css("width", $slider.val() + "%");
}

$slider.on("input", setBar);

setBar();


// 2nd slider

const slider = document.getElementById('slider');
    const minInput = document.getElementById('minInput');
    const maxInput = document.getElementById('maxInput');

    const minRangeValue = 0;
    const maxRangeValue = 100;
    let minValue = 20;
    let maxValue = 80;

    // Function to update the slider positions based on the current min and max values
    function updateSlider() {
      const range = maxRangeValue - minRangeValue;
      const thumb1Position = ((minValue - minRangeValue) / range) * 100;
      const thumb2Position = ((maxValue - minRangeValue) / range) * 100;

      slider.style.background = `linear-gradient(to right, #007bff 0%, #007bff ${thumb1Position}%, #ddd ${thumb1Position}%, #ddd ${thumb2Position}%, #007bff ${thumb2Position}%, #007bff 100%)`;

      minInput.value = minValue;
      maxInput.value = maxValue;
    }

    // Event listeners for min and max inputs
    minInput.addEventListener('input', () => {
      minValue = Math.min(parseInt(minInput.value), maxValue);
      updateSlider();
    });

    maxInput.addEventListener('input', () => {
      maxValue = Math.max(parseInt(maxInput.value), minValue);
      updateSlider();
    });

    // Initial setup
    updateSlider();