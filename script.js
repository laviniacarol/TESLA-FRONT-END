
document.addEventListener('DOMContentLoaded', function() {
    const flipContainer = document.getElementById('flipContainer');
    const audioPlayer = document.getElementById('audioPlayer');

    flipContainer.addEventListener('click', function() {
        flipContainer.classList.add('shake');

        if (audioPlayer.paused) {
            audioPlayer.play()
                .then(() => {
                    console.log('Áudio reproduzido com sucesso.');
                })
                .catch(error => {
                    console.error('Não foi possível reproduzir o áudio:', error);
                });
        } else {
            audioPlayer.pause();
            audioPlayer.currentTime = 0; // Reinicia o áudio
            console.log('Áudio pausado e reiniciado.');
        }

        setTimeout(function() {
            flipContainer.classList.remove('shake');
        }, 400); 
    });
});
