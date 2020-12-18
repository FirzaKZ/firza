let kata = ["rumah","saya","makan","nasi","bila","jika","tidur","laper","macan","tikus","kucing","singa"]
let buttonStart = document.getElementById("start")
let temp = ''
let random = Math.floor((Math.random() * 12))
let jawaban = document.getElementById("jawaban")
let soal = document.getElementById('soal')
let hasil = 0

jawaban.oninput = function cek(){
    if (jawaban.value === soal.value ){
        soal.value = kata[Math.floor((Math.random() * 12))]
        jawaban.value = ''
        
        document.getElementById('skor').innerHTML = ++hasil
    }
}


buttonStart.onclick = function start(){

    timer()
    let acak = random
    document.getElementById("soal").value = kata[acak]
}

function timer() { 
    var seconds = 30;
    var x = setInterval(function() {  
      seconds--  
      document.getElementById("demo").innerHTML = seconds + "s";
      if (seconds === 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "Time's Up";
        document.getElementById("jawaban").disabled = true

        if (hasil <= 20){
          alert('Cupu Sekali Anda(refresh untuk memulai kembali :v)')
        } else if (hasil > 20 && hasil < 27){
          alert('Good Job(refresh untuk memulai kembali :v)')
        } else {
          alert('Pro Sekali Anda(refresh untuk memulai kembali :v)')
        }
        
      }
    }, 1000);
   }

      
    



