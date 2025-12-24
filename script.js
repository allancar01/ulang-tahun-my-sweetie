function goToHallway() {
    document.getElementById('landing-page').style.opacity = '0';
    
    const music = document.getElementById('bg-music');
    music.play().catch(error => {
        console.log("Autoplay dicegah browser, user harus interaksi dulu.");
    });

    setTimeout(() => {
        document.getElementById('landing-page').classList.add('hidden');
        document.getElementById('landing-page').classList.remove('active');
        
        const hallway = document.getElementById('hallway');
        hallway.classList.remove('hidden');
        hallway.classList.add('active');
    }, 800); 
}

function openRoom(roomId) {
    const hallway = document.getElementById('hallway');
    
    hallway.style.transform = "scale(1.5)";
    hallway.style.opacity = "0";
    
    setTimeout(() => {
        hallway.classList.add('hidden');
        hallway.classList.remove('active');
        hallway.style.transform = "scale(1)"; 
        
        const room = document.getElementById(roomId);
        room.classList.remove('hidden');
        setTimeout(() => {
            room.classList.add('active');
            room.style.opacity = "1";
        }, 100);
    }, 600);
}

function backToHallway() {
    const activeRoom = document.querySelector('.room.active'); 
    if(activeRoom) {
        activeRoom.style.opacity = "0";
        setTimeout(() => {
            activeRoom.classList.remove('active');
            activeRoom.classList.add('hidden');
            
            const hallway = document.getElementById('hallway');
            hallway.classList.remove('hidden');
            setTimeout(() => {
                hallway.classList.add('active');
                hallway.style.opacity = "1";
            }, 100);
        }, 500);
    }
}

const acc = document.getElementsByClassName("accordion");
for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active-acc");
        const panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        } 
    });
}

function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    
    petal.style.left = Math.random() * 100 + 'vw';
    
    petal.style.animationDuration = Math.random() * 3 + 2 + 's';
    
 
    const colors = ['#ffcdd2', '#f8bbd0', '#f48fb1', '#ff80ab'];
    petal.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    
    document.body.appendChild(petal);
    
    setTimeout(() => {
        petal.remove();
    }, 5000);
}

setInterval(createPetal, 300);