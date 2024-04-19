gsap.from (".resultAnimation", {opacity: 0, duration: 3, delay: 5})

const input = document.querySelector ('#inputField');
const btn = document.querySelector ('#inputBtn');
const answer = Math.floor (Math.random ()*20) + 1;

input.select ();

input.addEventListener ('keypress', function (e) {
    if (e.keyCode === 13) play ()
})

btn.addEventListener ('click', play);

function play () {

    const userNumber = input.value;
    input.select ();

    let difference = Math.abs (userNumber - answer);

    if (userNumber < 1 || userNumber > 20) {
        Swal.fire({
            icon: 'error',
            title: 'ЙОЙ!',
            text: 'Введи число від 1 до 20!'
        })
        input.value = "";
    }

    else if (isNaN (userNumber)) {
        Swal.fire({
            icon: 'error',
            title: 'ЙОЙ!',
            text: 'Треба вводити число!'
        })
        input.value = "";
    }

    else {
        
        if  (difference >= 15) {
            Swal.fire({
                title: 'Холодно!',
                icon: 'error',
                showCancelButton: true,
                cancelButtonText: 'Граємо далі!',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Підказка'
            }).then((result) => {
                if (result.isConfirmed) {
                    if  (userNumber < answer) {
                        Swal.fire('Спробуй число повище!');
                        input.value = "";
                    }
                    else if (userNumber > answer) {
                        Swal.fire('Cпробуй число понижче!');
                        input.value = "";
                    }
                }
            })
        }

        else if  (difference >= 10) {
            Swal.fire({
                title: 'Прохолодно..',
                icon: 'error',
                showCancelButton: true,
                cancelButtonText: 'Граємо далі!',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Підказка'
            }).then((result) => {
                if (result.isConfirmed) {
                    if  (userNumber < answer) {
                        Swal.fire('Спробуй число повище!');
                        input.value = "";
                    }
                    else if (userNumber > answer) {
                        Swal.fire('Cпробуй число понижче!');
                        input.value = "";
                    }
                }
            })
        }

        else if  (difference >= 5) {
            Swal.fire({
                title: 'Тепло..',
                icon: 'warning',
                showCancelButton: true,
                cancelButtonText: 'Граємо далі!',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Підказка'
            }).then((result) => {
                if (result.isConfirmed) {
                    if  (userNumber < answer) {
                        Swal.fire('Спробуй число повище!');
                        input.value = "";
                    }
                    else if (userNumber > answer) {
                        Swal.fire('Cпробуй число понижче!');
                        input.value = "";
                    }
                }
            })
        }

        else if  (difference >= 1) {
            Swal.fire({
                title: 'Гаряче!',
                icon: 'warning',
                showCancelButton: true,
                cancelButtonText: 'Граємо далі!',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Підказка'
            }).then((result) => {
                if (result.isConfirmed) {
                    if  (userNumber < answer) {
                        Swal.fire('Спробуй число повище!');
                        input.value = "";
                    }
                    else if (userNumber > answer) {
                        Swal.fire('Cпробуй число понижче!');
                        input.value = "";
                    }
                }
            })
        }

        else {
            Swal.fire({
                title: 'ПЕРЕМОГА!',
                imageUrl: 'https://images.unsplash.com/photo-1527269534026-c86f4009eace?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80',
                imageWidth: 600,
                imageHeight: 400,
                imageAlt: 'Victory',
            })
              input.value = "";
        }

    }

}

const resultBtn1 = document.querySelector ('#resultBtn1');
resultBtn1.addEventListener ('click', () => {
    Swal.fire({
        title: 'В тобі точно тече кров Майя!',
        imageUrl: 'https://images.unsplash.com/photo-1625851823323-ca66790f56ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        imageWidth: 600,
        imageHeight: 400,
        imageAlt: 'Mayan',
      })
})

const resultBtn2 = document.querySelector ('#resultBtn2');
resultBtn2.addEventListener ('click', () => {
    Swal.fire({
        title: 'В складній ситуації ти точно можешь спиратися на свою інтуіцію!',
        imageUrl: 'https://images.unsplash.com/photo-1527705730232-75439d0f1657?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        imageWidth: 600,
        imageHeight: 400,
        imageAlt: 'Intuition',
      })
})

const resultBtn3 = document.querySelector ('#resultBtn3');
resultBtn3.addEventListener ('click', () => {
    Swal.fire({
        title: 'Напевне, логіка та аналіз тобі кращі друзі, аніж інтуіція!',
        imageUrl: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        imageWidth: 600,
        imageHeight: 400,
        imageAlt: 'Logic',
      })
})

const resultBtn4 = document.querySelector ('#resultBtn4');
resultBtn4.addEventListener ('click', () => {
    Swal.fire({
        title: 'Друже, сьогодні просто не твій день..',
        imageUrl: 'https://images.unsplash.com/photo-1602880938195-c5aa0ebb1cba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
        imageWidth: 600,
        imageHeight: 400,
        imageAlt: 'Bad day',
      })
})



particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area": 2000
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 4
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.7,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 20,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 4,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });