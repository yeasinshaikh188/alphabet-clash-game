function hideHomeSectionById (elementbyID){
    const getHomeSection = document.getElementById(elementbyID);
    getHomeSection.classList.add('hidden');

}

function showThePlayGroundSection (elementbyID){
    const getPlayGroundSEction = document.getElementById(elementbyID);
    getPlayGroundSEction.classList.remove('hidden');

}


// function continune (){
//     const alphabets =  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//      const random = Math.random()*25;
//      const index = Math.round(random);
//      const alphabet = alphabets[index];

//     //  return index;
//      console.log(index, alphabet);
// }
function setBackgrounColor(elementbyID){
    const setColor = document.getElementById(elementbyID);
    setColor.classList.add('bg-orange-400');
}



function continune (){
    const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const random = Math.random()*25;
    const index = Math.round(random);

    const alphabet = alphabets[index];
    return alphabet;
}