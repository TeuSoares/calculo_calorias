var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'My App',
    // App id
    id: 'com.myapp.test',
    // Enable swipe panel
    panel: {
      swipe: 'left',
    },
    // Add default routes
    routes: [
      {
        path: '/home/',
        url: 'index.html',
      },
    ],
    // ... other parameters
  });
  var mainView = app.views.create('.view-main');

$(document).ready(function(){
    // Calcu-combustível
    // Verificar se todos os campos foram digitados
    $('.btn-calcular').click(function(){
      peso1 = $('#peso1').val();
      altura1 = $('#altura1').val();
      idade = $('#idade').val();
      sexo =  form1.sexo.value;
      masc = $('#masc').val();
      fem = $('#fem').val();
      atividade = $('#atividade').val();

      altura1 = parseFloat(altura1);

      if(peso1 == "" || altura1 == "" || idade == "" || sexo =="" ||  atividade == ""){
        app.dialog.alert('Preencha todos os campos','AVISO');
        return false;
      }

      if(sexo == "masc"){
        calcu1 = peso1 * 13.8;
        calcu2 = altura1 * 5;
        calcu3 = idade * 6.8;
        tmb = 66.5 + calcu1 + calcu2 - calcu3;
        // alert(calcu2);
        // var NumeroComVirgula = calcu2.toString().replace(".","");
        switch(atividade){
          case "Pouco ou nenhum exercício(sedentário)":
            resultado1 = tmb * 1.2;
            $('.calorias').html(resultado1.toFixed(2)+" calorias");
            // alert(NumeroComVirgula);
            break;
          case "Pouco exercício (1-3 dias por semana)":
            resultado1 = tmb * 1.375;
            $('.calorias').html(resultado1.toFixed(2)+" calorias");
            break;
          case "Exercício moderado (3-5 dias por semana)":
            resultado1 = tmb * 1.550;
            $('.calorias').html(resultado1.toFixed(2)+" calorias");
            break;
          case "Exercício intenso (6-7 dias por semana)":
            resultado1 = tmb * 1.725;
            $('.calorias').html(resultado1.toFixed(2)+" calorias");
            break;
        }
        
      }else{
        
          calcu1 = peso1 * 9.5;
          calcu2 = altura1 * 1.8;
          calcu3 = idade * 4.7;
          tmb = 655.1 + calcu1 + calcu2 - calcu3;
          // alert(calcu2);
          switch(atividade){
            case "Pouco ou nenhum exercício(sedentário)":
              resultado1 = tmb * 1.2;
              $('.calorias').html(resultado1.toFixed(2)+" calorias");
              break;
            case "Pouco exercício (1-3 dias por semana)":
              resultado1 = tmb * 1.375;
              $('.calorias').html(resultado1.toFixed(2)+" calorias");
              break;
            case "Exercício moderado (3-5 dias por semana)":
              resultado1 = tmb * 1.550;
              $('.calorias').html(resultado1.toFixed(2)+" calorias");
              break;
            case "Exercício intenso (6-7 dias por semana)":
              resultado1 = tmb * 1.725;
              $('.calorias').html(resultado1.toFixed(2)+" calorias");
              break;
          }
        
      }
  

  });
    $('.escuro').click(function(){
      if($('.page').hasClass('addEscuro')){        // has = se existe
          $('.page').removeClass('addEscuro');
          $('p a').text('Modo Noturno');
          $('.font').css('color','#000');
          $('.font2').css('color','#000');
          $('#form1,input').css('color','#000');
          $('.espaço').css('color','#000');
      }else{
          $('.page').addClass('addEscuro');
          $('p a').text('Modo Claro');
          $('.font').css('color','#fff');
          $('.font2').css('color','#fff');
          $('#form1,input').css('color','#fff');
          $('.espaço').css('color','#fff');
      };         
  });
});