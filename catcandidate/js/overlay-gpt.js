function openPopup() {
    var popupOverlay = document.getElementById('popupOverlay');
    popupOverlay.style.display = 'flex';
    var secondPopupOverlay = document.getElementById('secondPopupOverlay');
    secondPopupOverlay.style.display = 'none';
}

function closePopup() {
    var popupOverlay = document.getElementById('popupOverlay');
    popupOverlay.style.display = 'none';
}

function openSecondPopup() {
    var popupOverlay = document.getElementById('popupOverlay');
    popupOverlay.style.display = 'none';

    var secondPopupOverlay = document.getElementById('secondPopupOverlay');
    secondPopupOverlay.style.display = 'flex';
}

function closeSecondPopup() {
    var secondPopupOverlay = document.getElementById('secondPopupOverlay');
    secondPopupOverlay.style.display = 'none';
}