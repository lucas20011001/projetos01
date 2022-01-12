var elementos = document.querySelectorAll('.player-options div > img');
var enemyOptions = document.querySelectorAll('.inimigo-options div');
var playerOpt = "";
var InimigoOpt = "";
var meuScore = document.getElementById('score-my');
var advScore = document.getElementById('score-adv');
var scoreMy = parseInt(meuScore);
var scoreadv = parseInt(advScore);
scoreMy = 0;
scoreadv = 0;

        function validarVitoria(){
            let vencedor = document.querySelector('.vencedor');
            vencedor.innerHTML = "";

            if(playerOpt == 'pedra'){
                if(InimigoOpt == 'pedra'){
                    vencedor.innerHTML = "Empate";

                }else if(InimigoOpt == 'papel'){
                    vencedor.innerHTML = "Inimigo ganhou";
                    advScore.innerHTML = `${scoreadv + 1}`;
                    scoreadv++;
                    
                }else if(InimigoOpt == 'tesoura'){
                    vencedor.innerHTML = "Player ganhou";
                    meuScore.innerHTML = `${scoreMy + 1}`
                    scoreMy++;
                }
            }

            if(playerOpt == 'papel'){

                if(InimigoOpt == 'pedra'){
                    vencedor.innerHTML = "Player ganhou";
                    meuScore.innerHTML = `${scoreMy + 1}`
                    scoreMy++;

                }else if(InimigoOpt == 'papel'){
                    vencedor.innerHTML = "Empate";

                }else if(InimigoOpt == 'tesoura'){
                    vencedor.innerHTML = "Inimigo ganhou";
                    advScore.innerHTML = `${scoreadv + 1}`;
                    scoreadv++;
                }
            }

            if(playerOpt == 'tesoura'){

                if(InimigoOpt == 'pedra'){
                    vencedor.innerHTML = "Inimigo ganhou";
                    advScore.innerHTML = `${scoreadv + 1}`;
                    scoreadv++;

                }else if(InimigoOpt == 'papel'){
                    vencedor.innerHTML = "Player ganhou";
                    meuScore.innerHTML = `${scoreMy + 1}`
                    scoreMy++;

                }else if(InimigoOpt == 'tesoura'){
                    vencedor.innerHTML = "Empate";
                }

                }
        }
            
        
        function resetOpacityPlayer(){
            for( let i = 0; i < elementos.length; i++){
                elementos[i].style.opacity = 0.3;  
            }
        }

        function resetInimigo(){
            for(var i = 0; i < enemyOptions.length; i++){
                enemyOptions[i].childNodes[0].style.opacity = 0.3;
            }
        }

        function inimigoJogar(){
            let randon = Math.floor(Math.random()*3);
            const enemyOptions = document.querySelectorAll('.inimigo-options div');
            resetInimigo();
            for( let i = 0; i < enemyOptions.length; i++){
                if(i == randon){
                    enemyOptions[i].childNodes[0].style.opacity = 1;
                    InimigoOpt = enemyOptions[i].childNodes[0].getAttribute('opt');
                }
            }
        }

        for( let i = 0; i < elementos.length; i++){
            elementos[i].addEventListener('click', function(t){
                resetOpacityPlayer();
                t.target.style.opacity = 1;
                playerOpt = t.target.getAttribute('opt');
                inimigoJogar();
                validarVitoria();
            })
        }
        