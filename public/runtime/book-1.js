

        let selectedDate = null;
        let selectedTime = null;
        let selectedServices = [];
        let currentDisplayDate = new Date();

        const daysContainer = document.getElementById('calendarDays');
        const timeSlotsContainer = document.getElementById('timeSlots');
        const monthHeader = document.getElementById('monthText');
        const proceedBtn = document.getElementById('proceedBtn');
        const step1 = document.getElementById('step1');
        const step2 = document.getElementById('step2');

        function renderCalendar(date) {
            const year = date.getFullYear();
            const month = date.getMonth();
            const monthNames = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
            monthHeader.innerText = `${monthNames[month]} ${year}`;
            const firstDay = new Date(year, month, 1).getDay();
            const daysInMonth = new Date(year, month + 1, 0).getDate();
            const startDay = firstDay === 0 ? 6 : firstDay - 1;
            daysContainer.innerHTML = '';
            for (let i = 0; i < startDay; i++) daysContainer.appendChild(document.createElement('div'));
            const now = new Date(); now.setHours(0,0,0,0);
            for (let d = 1; d <= daysInMonth; d++) {
                const dayEl = document.createElement('div');
                const checkDate = new Date(year, month, d);
                dayEl.className = 'calendar-day';
                dayEl.innerText = d;
                if (checkDate < now) dayEl.classList.add('disabled');
                else {
                    if (selectedDate === `${d} ${monthNames[month]} ${year}`) dayEl.classList.add('selected');
                    dayEl.onclick = () => {
                        document.querySelectorAll('.calendar-day').forEach(cd => cd.classList.remove('selected'));
                        dayEl.classList.add('selected');
                        selectedDate = `${d} ${monthNames[month]} ${year}`;
                        document.getElementById('finalDateInput').value = selectedDate;
                        generateTimeSlots();
                        validateStep1();
                        
                        if (window.innerWidth <= 768) {
                            document.querySelector('.mobile-step1-slider').scrollLeft = window.innerWidth;
                        }
                    };
                }
                daysContainer.appendChild(dayEl);
            }
        }

        function generateTimeSlots() {
            timeSlotsContainer.innerHTML = '';
            const hours = ["11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"];
            hours.forEach(h => {
                const slot = document.createElement('div');
                slot.className = 'time-slot';
                slot.innerText = h;
                if (selectedTime === h) slot.classList.add('selected');
                slot.onclick = () => {
                    document.querySelectorAll('.time-slot').forEach(s => s.classList.remove('selected'));
                    slot.classList.add('selected');
                    selectedTime = h;
                    document.getElementById('finalTimeInput').value = selectedTime;
                    validateStep1();
                };
                timeSlotsContainer.appendChild(slot);
            });
        }

        function validateStep1() {
            if (selectedDate && selectedTime) {
                proceedBtn.disabled = false;
                proceedBtn.classList.remove('opacity-30', 'cursor-not-allowed');
            }
        }

        window.changeMonth = (delta) => {
            currentDisplayDate.setMonth(currentDisplayDate.getMonth() + delta);
            renderCalendar(currentDisplayDate);
        };

        window.proceedStep = () => {
            if (selectedDate && selectedTime) {
                step1.classList.add('hidden');
                step2.classList.remove('hidden');
            }
        };

        proceedBtn.addEventListener('click', window.proceedStep);

        window.goBack = () => {
            step1.classList.remove('hidden');
            step2.classList.add('hidden');
        };

        document.querySelectorAll('#durationSelection .option-chip').forEach(chip => {
            chip.onclick = () => {
                document.querySelectorAll('#durationSelection .option-chip').forEach(c => c.classList.remove('active'));
                chip.classList.add('active');
                document.getElementById('durationInput').value = chip.getAttribute('data-val');
            };
        });

        const budgetSlider = document.getElementById('budgetSlider');
        const budgetVal = document.getElementById('budgetVal');
        budgetSlider.oninput = function() { budgetVal.innerText = `$${parseInt(this.value).toLocaleString()}`; };

        const timeSlider = document.getElementById('timeSlider');
        const timeVal = document.getElementById('timeVal');
        timeSlider.oninput = function() {
            const weeks = parseInt(this.value);
            if (weeks <= 4) timeVal.innerText = `${weeks} Week${weeks > 1 ? 's' : ''}`;
            else {
                const months = Math.floor(weeks / 4);
                const remain = weeks % 4;
                timeVal.innerText = `${months} Month${months > 1 ? 's' : ''} ${remain > 0 ? remain + ' Week' : ''}`;
            }
        };

        document.querySelectorAll('#serviceSelection .service-chip').forEach(chip => {
            chip.onclick = () => {
                const val = chip.getAttribute('data-val');
                if (selectedServices.includes(val)) {
                    selectedServices = selectedServices.filter(s => s !== val);
                    chip.classList.remove('active');
                } else {
                    selectedServices.push(val);
                    chip.classList.add('active');
                }
                document.getElementById('servicesInput').value = selectedServices.join(', ');
            };
        });

        document.getElementById('bookingForm').onsubmit = (e) => {
          e.preventDefault();
          try {
            window.saveLocalDraft('booking',Object.fromEntries(new FormData(e.target)));
            document.getElementById('successOverlay').classList.remove('hidden');
            document.querySelector('#successOverlay h2').textContent = 'DRAFT SAVED';
            document.querySelector('#successOverlay p').textContent = 'Saved on this device and downloaded. No meeting has been booked.';
          } catch(error) { alert('Could not save this draft. Please try again.'); }
        };
        renderCalendar(currentDisplayDate);
    