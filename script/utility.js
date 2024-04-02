function hideHomeSectionById (elementbyID){
    const getHomeSection = document.getElementById(elementbyID);
    getHomeSection.classList.add('hidden');

}

function showThePlayGroundSection (elementbyID){
    const getPlayGroundSEction = document.getElementById(elementbyID);
    getPlayGroundSEction.classList.remove('hidden');
    
}