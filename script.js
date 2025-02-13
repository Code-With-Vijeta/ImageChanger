function toggleContent(id) {
    const selectedContent = document.getElementById(id);
    const allContents = document.querySelectorAll('.content');
    
    if (selectedContent.style.display === 'flex') {
        selectedContent.style.display = 'none';
        selectedContent.style.opacity = 0;
    } else {
        allContents.forEach(content => {
            content.style.display = 'none';
            content.style.opacity = 0;
        });

        selectedContent.style.display = 'flex';
        setTimeout(() => {
            selectedContent.style.opacity = 1; 
        }, 10);
    }
}


document.getElementById('btn1').addEventListener('click', () => toggleContent('content1'));
document.getElementById('btn2').addEventListener('click', () => toggleContent('content2'));
document.getElementById('btn3').addEventListener('click', () => toggleContent('content3'));
