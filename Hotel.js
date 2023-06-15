
        function showForm() {
            var formContainer = document.querySelector('.form-container');
            formContainer.classList.add('show');
        }

        function validateForm() {
            var firstName = document.forms["reservationForm"]["firstName"].value;
            var lastName = document.forms["reservationForm"]["lastName"].value;
            var email = document.forms["reservationForm"]["email"].value;
            var phoneNumber = document.forms["reservationForm"]["phoneNumber"].value;
            var departureDate = document.forms["reservationForm"]["departureDate"].value;
            var returnDate = document.forms["reservationForm"]["returnDate"].value;

            if (firstName === "" || lastName === "" || email === "" || phoneNumber === "" || departureDate === "" || returnDate === "") {
                alert("Please fill in all the required fields.");
                return false;
            }
        }