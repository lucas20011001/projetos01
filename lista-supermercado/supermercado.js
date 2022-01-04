var itens = [];

document.querySelector('input[type=submit]').addEventListener('click', ()=>{
    var nomeProduto = document.querySelector('input[name= nome_produto');
    var precoProduto = document.querySelector('input[name= valor_produto');


    if (nomeProduto.value != "" && precoProduto.value != ""){

        itens.push({
            nome : nomeProduto.value,
            valor : precoProduto.value
        });
    }

   

   let listaProdutos =document.querySelector('.lista-produtos');
   let soma = 0;

   listaProdutos.innerHTML="";

   itens.map(function(val){
       soma+=parseFloat(val.valor);
       listaProdutos.innerHTML+= `
        <div class="produtos-single">
            <h3>`+val.nome+`</h3>
            <h3 class="price"> <span>R$ `+val.valor+`</span>  </h3>
        </div>
   
   `

   })
   soma = soma.toFixed(2);
   nomeProduto.value='';
   precoProduto.value='';

   let elementoSoma = document.querySelector('.total-produtos h1');
   elementoSoma.innerHTML = `<img src="money-icon.png"></img> Total: R$ ` +soma;

});


document.querySelector('button[name=limpar]').addEventListener('click', function(){
    document.querySelector('.lista-produtos').innerHTML= "";
    itens = [];
    document.querySelector('.total-produtos h1').innerHTML= `<img src="money-icon.png"></img> Total: R$ 0.00`;

})






