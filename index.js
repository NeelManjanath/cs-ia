let input = document.getElementById('input')
input.addEventListener('change', function() {
    readXlsxFile(input.files[0]).then(function(data){
        console.log(data)
    });
})
console.log("hellO!")