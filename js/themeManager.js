// Theme Manager Semplice - Toggle tra tema normale e Halloween
document.addEventListener('DOMContentLoaded', () => {
    const storageKey = 'halloween_mode';
    const mainLayoutCSS = './css/mainLayout.css';
    const halloweenCSS = './css/halloween.css';
    
    // Trova il link CSS principale
    const cssLink = document.querySelector('link[href*="mainLayout.css"], link[href*="halloween.css"]');

    
    // Applica il tema salvato
    const isHalloween = localStorage.getItem(storageKey) === 'true';
    if (isHalloween && cssLink) {
        cssLink.href = halloweenCSS;
    }
    
    // Toggle function
    function toggleTheme() {
        if (!cssLink) return;
        
        const currentlyHalloween = cssLink.href.includes('halloween.css');
        
        if (currentlyHalloween) {
            // Passa al tema normale
            cssLink.href = mainLayoutCSS;
            localStorage.setItem(storageKey, 'false');
        } else {
            // Passa al tema Halloween
            cssLink.href = halloweenCSS;
            localStorage.setItem(storageKey, 'true');
        }
        
        updateButton();
    }
    
    // Aggiorna il bottone
    function updateButton() {
        const button = document.querySelector('.halloween-toggle');
        const icon = button?.querySelector('i');
        const text = button?.querySelector('.toggle-text');
        
        if (!button) return;
        
        const isHalloween = cssLink.href.includes('halloween.css');
        
        if (isHalloween) {
            if (icon) icon.className = 'bi bi-brightness-high me-2';
            if (text) text.textContent = 'Modalità Normale';
            button.style.backgroundColor = '#ff6f00';
            
            // Aggiungi ragnatele negli angoli
            addWebCorners();
        } else {
            if (icon) icon.className = 'bi bi-moon-stars me-2';
            if (text) text.textContent = 'Modalità Halloween';
            button.style.backgroundColor = '#ea914d';
            
            // Rimuovi ragnatele
            removeWebCorners();
        }
    }
    
    // Aggiungi classi per ragnatele
    function addWebCorners() {
        const nav = document.querySelector('nav');
        const footer = document.querySelector('footer');
        const body = document.body;
        
        if (nav) {
            nav.classList.add('web-corner-top-left');
            nav.classList.add('web-corner-top-right');
        }
        
        if (footer) {
            footer.classList.add('web-corner-bottom-left');
            footer.classList.add('web-corner-bottom-right');
        }
        
        // Ragnatele che pendono
        const hangingWeb1 = document.createElement('div');
        hangingWeb1.className = 'hanging-web-1';
        hangingWeb1.id = 'hanging-web-1';
        body.appendChild(hangingWeb1);
        
        const hangingWeb2 = document.createElement('div');
        hangingWeb2.className = 'hanging-web-2';
        hangingWeb2.id = 'hanging-web-2';
        body.appendChild(hangingWeb2);
        
        // Ragni che scendono
        const spider1 = document.createElement('div');
        spider1.className = 'spider-descending-1';
        spider1.id = 'spider-1';
        spider1.innerHTML = '🕷️';
        body.appendChild(spider1);
        
        const spider2 = document.createElement('div');
        spider2.className = 'spider-descending-2';
        spider2.id = 'spider-2';
        spider2.innerHTML = '🕷️';
        body.appendChild(spider2);
        
        const spider3 = document.createElement('div');
        spider3.className = 'spider-descending-3';
        spider3.id = 'spider-3';
        spider3.innerHTML = '🕷️';
        body.appendChild(spider3);
        
        // Fili dei ragni
        const thread1 = document.createElement('div');
        thread1.className = 'spider-thread-1';
        thread1.id = 'spider-thread-1';
        body.appendChild(thread1);
        
        const thread2 = document.createElement('div');
        thread2.className = 'spider-thread-2';
        thread2.id = 'spider-thread-2';
        body.appendChild(thread2);
        
        const thread3 = document.createElement('div');
        thread3.className = 'spider-thread-3';
        thread3.id = 'spider-thread-3';
        body.appendChild(thread3);
    }
    
    // Rimuovi classi per ragnatele
    function removeWebCorners() {
        const nav = document.querySelector('nav');
        const footer = document.querySelector('footer');
        
        if (nav) {
            nav.classList.remove('web-corner-top-left');
            nav.classList.remove('web-corner-top-right');
        }
        
        if (footer) {
            footer.classList.remove('web-corner-bottom-left');
            footer.classList.remove('web-corner-bottom-right');
        }
        
        // Rimuovi elementi di ragnatele e ragni
        const elementsToRemove = [
            'hanging-web-1', 'hanging-web-2',
            'spider-1', 'spider-2', 'spider-3',
            'spider-thread-1', 'spider-thread-2', 'spider-thread-3'
        ];
        
        elementsToRemove.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.remove();
            }
        });
    }
    
    // Event listener per il click
    document.addEventListener('click', (e) => {
        if (e.target.closest('.halloween-toggle')) {
            e.preventDefault();
            toggleTheme();
        }
    });
    
    // Aggiorna il bottone inizialmente
    updateButton();
});