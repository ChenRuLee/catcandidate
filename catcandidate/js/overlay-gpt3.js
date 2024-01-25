function openPopup3() {
    var popupOverlay2 = document.getElementById('popupOverlay3');
    popupOverlay3.style.display = 'flex';
    var secondPopupOverlay3 = document.getElementById('secondPopupOverlay3');
    secondPopupOverlay3.style.display = 'none';
}

function closePopup3() {
    var popupOverlay3 = document.getElementById('popupOverlay3');
    popupOverlay3.style.display = 'none';
}

function openSecondPopup3() {
    var popupOverlay3 = document.getElementById('popupOverlay3');
    popupOverlay3.style.display = 'none';

    var secondPopupOverlay3 = document.getElementById('secondPopupOverlay3');
    secondPopupOverlay3.style.display = 'flex';
}

function closeSecondPopup3() {
    var secondPopupOverlay3 = document.getElementById('secondPopupOverlay3');
    secondPopupOverlay3.style.display = 'none';
}