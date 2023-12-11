function showContent(contentId) {
    // Semua elemen konten diatur menjadi tersembunyi
    document.getElementById('birthday-wishes').style.display = 'none';
    document.getElementById('about').style.display = 'none';
    document.getElementById('gallery').style.display = 'none';
    document.getElementById('more').style.display = 'none';
  
    // Hanya elemen konten yang dipilih yang ditampilkan
    document.getElementById(contentId).style.display = 'block';
  }
  