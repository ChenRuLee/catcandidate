function openPopup2() {
    var popupOverlay2 = document.getElementById('popupOverlay2');
    popupOverlay2.style.display = 'flex';
    var secondPopupOverlay2 = document.getElementById('secondPopupOverlay2');
    secondPopupOverlay2.style.display = 'none';
}

function closePopup2() {
    var popupOverlay2 = document.getElementById('popupOverlay2');
    popupOverlay2.style.display = 'none';
}

function openSecondPopup2() {
    var popupOverlay2 = document.getElementById('popupOverlay2');
    popupOverlay2.style.display = 'none';

    var secondPopupOverlay2 = document.getElementById('secondPopupOverlay2');
    secondPopupOverlay2.style.display = 'flex';
}

function closeSecondPopup2() {
    var secondPopupOverlay2 = document.getElementById('secondPopupOverlay2');
    secondPopupOverlay2.style.display = 'none';
}