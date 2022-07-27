function playtrack (idAudioElement){

   const element = document.querySelector(idAudioElement);

    if (idAudioElement && element.localName === 'audio'){
        
        element.play();

    }

    else{
        
        console.log('Elemento não encontrado ou seletor inválido.');

    }

}

const keyslist =  document.querySelectorAll('.tecla');

for (let counter = 0;counter < keyslist.length;counter++){

    const key = keyslist[counter];

    const instrument = key.classList[1];

    const audioID = `#som_${instrument}`;

    key.onclick = function (){

        playtrack(audioID);

    }

    key.onkeydown = function(evento){

        if(evento.code === 'Space' || evento.code === 'Enter'){

            key.classList.add('ativa');

        }

    }

    key.onkeyup = function(){

        key.classList.remove('ativa');

    }

}

