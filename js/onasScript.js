function validateForm() {
  var name =  document.getElementById('name').value;
    let x = 0;
    
setTimeout(function(){    
  if (name == "") {
      document.querySelector('.status').innerHTML = `<div class="alert alert-warning animated bounceInRight " role="alert">Pole z imieniem nie może być puste</div>`;
      return false;
  }
  var email =  document.getElementById('email').value;
  if (email == "") {
      document.querySelector('.status').innerHTML = `<div class="alert alert-warning animated bounceInRight" role="alert">E-mail nie może być pusty</div>`;
      return false;
  } else {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(!re.test(email)){
          document.querySelector('.status').innerHTML = `<div class="alert alert-warning animated bounceInRight" role="alert">Adres e-mail tak nie wygląda :p Proszę podać prawdziwy e-mail</div>`;
          return false;
      }
  }
  var subject =  document.getElementById('subject').value;
  if (subject == "") {
      document.querySelector('.status').innerHTML = `<div class="alert alert-warning animated bounceInRight" role="alert">Poprosiłbym tytuł wiadomości</div>`;
      return false;
  }
  var message =  document.getElementById('message').value;
  if (message == "") {
      document.querySelector('.status').innerHTML = `<div class="alert alert-warning animated bounceInRight" role="alert">Wiadomość musi zawierać treść, nie zapomnij być miłym:)</div>`;
      return false;
  }
  document.querySelector('.status').innerHTML = `<div class="alert alert-success animated bounceInRight" role="alert">
  Bardzo dziękujemy za wiadomość, postaramy się odpowiedzieć na nią jak najszybciej! Życzymy wyśmienitego dnia i spokojnego wypoczynku:)
</div>`;
    setTimeout(function(){ document.querySelector('.alert').classList.add('flipOutX'); }, 30000);
},600);
    
}
function flipOut(){
    document.querySelector('.alert').classList.add('flipOutX');
}
