// Get the modal
const modal = document.getElementById("myEvtsModal");

// Get the button that opens the modal
// const btn = document.getElementById("upcomingEvtsModalBtn");

// get all the upcoming evt buttons
const allEvtBtns = document.querySelectorAll('.evtsModalBtn');

for (const oneBtn of allEvtBtns) {
    oneBtn.addEventListener('click', getModal)
    // const oneBtnId = oneBtn.attr('id');
};

function getModal(event) {
    // Get the <span> element that closes the modal
    const span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    oneBtn.onclick = function() {
    modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    }
};
