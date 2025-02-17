let countdownTime = 600360;

        function startCountdown() {
            let timerDisplayDays = document.getElementById("TimerDays");
            let timerDisplayHours = document.getElementById("TimerHours");
            let timerDisplayMinutes = document.getElementById("TimerMinutes");
            let timerDisplaySeconds = document.getElementById("TimerSeconds");

            let countdownInterval = setInterval(function() {
                if (countdownTime <= 0) {
                    clearInterval(countdownInterval);
                    timerDisplayDays.innerHTML = "Time's up!";
                    timerDisplayHours.innerHTML = "";
                    timerDisplayMinutes.innerHTML = "";
                    timerDisplaySeconds.innerHTML = "";
                } else {
                    days = Math.floor(((countdownTime/60)/60)/24);
                    hours = Math.floor((countdownTime/60)/60) % 24;
                    minutes = Math.floor(countdownTime/60) % 60;
                    seconds = countdownTime % 60;
                    timerDisplayDays.innerHTML = days;
                    timerDisplayHours.innerHTML = hours;
                    timerDisplayMinutes.innerHTML = minutes;
                    timerDisplaySeconds.innerHTML = seconds;
                    countdownTime--;
                }
            }, 1000);
        }
        window.onload = startCountdown;
