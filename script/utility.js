function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

// show playground section

function showElementById (elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}