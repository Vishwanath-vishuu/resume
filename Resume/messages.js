const scripturl = "https://script.google.com/macros/s/AKfycbxtrHXQA05XIogjn5jWNuQ_Y_x6rwEDCYGRuHs_0Vf5HoVcBF2eF4L19OrI6O3Otytvzg/exec";

const form = document.forms['messageForm']
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scripturl, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})
    
