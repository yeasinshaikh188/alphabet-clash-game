// function play(){
//     // hide the home section
//    const homeSection = document.getElementById('Home-screen');
//    homeSection.classList.add('hidden');

//     // show the play ground section

//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden');
    
// }

function play(){
    const homeSection = hideHomeSectionById('Home-screen');
    const playGround = showThePlayGroundSection('play-ground');
}