const typingName = document.getElementById('typingName');
        const text = "maha here.";

        let index = 0;
        let colors = ['var(--vivid-orange)', 'var(--light-grayish)']; 
        let currentColor = 0;

        function type() {
            if (index < text.length) {

                let charSpan = document.createElement('span');
                charSpan.textContent = text.charAt(index);
                charSpan.style.color = colors[currentColor]; 
                typingName.appendChild(charSpan);
                index++;
                if (text.charAt(index) === ' ') {
                    currentColor++; 
                }
                setTimeout(type, 200); 
            }
        }

        type();