document.addEventListener("DOMContentLoaded", () => {
    const roomTypeSelect = document.getElementById("roomType");
    const nightsInput = document.getElementById("nights");
    const totalPriceDisplay = document.getElementById("totalPrice");

    function calculateTotal() {
        const ratePerNight = parseFloat(roomTypeSelect.value);
        let nights = parseInt(nightsInput.value);

        if (isNaN(nights) || nights < 1) {
            nights = 1;
        }

        const total = ratePerNight * nights;
        
        totalPriceDisplay.textContent = `KES ${total.toLocaleString('en-KE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }

    roomTypeSelect.addEventListener("change", calculateTotal);
    nightsInput.addEventListener("input", calculateTotal);
});
