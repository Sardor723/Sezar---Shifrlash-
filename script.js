function shifrlash() {
    let matn = document.getElementById('matn').value;
    let kalit = parseInt(document.getElementById('kalit').value);
    let shifrlangan = '';

    for (let i = 0; i < matn.length; i++) {
        let char = matn.charCodeAt(i);
        
        // Katta harflar (A-Z)
        if (char >= 65 && char <= 90) {
            shifrlangan += String.fromCharCode((char - 65 + kalit) % 26 + 65);
        }
        // Kichik harflar (a-z)
        else if (char >= 97 && char <= 122) {
            shifrlangan += String.fromCharCode((char - 97 + kalit) % 26 + 97);
        }
        // Boshqa belgilar
        else {
            shifrlangan += matn.charAt(i);
        }
    }
    document.getElementById('natija').value = shifrlangan;
}
