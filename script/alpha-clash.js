// function play (){
//     // show the home section
//     const homeSection = document.getElementById('Home-screen');
//     // console.log(homeSection.classList);
//     homeSection.classList.add('hidden');

//     // show the playground
//     const playgroundSection = document.getElementById('playground');
//     // console.log(playgroundSection.classList)
//     playgroundSection.classList.remove('hidden');

// }

function play(){
    hideElementById('Home-screen');
    showElementById('play-ground');
}
