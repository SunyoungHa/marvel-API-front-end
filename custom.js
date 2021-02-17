// async await
$(document).ready(function() {
            async function searchMarvel(event) {
                try {
                    event.preventDefault();
                    var name = $('#name').val();
                    let response = await fetch(`http://gateway.marvel.com:80/v1/public/characters?nameStartsWith=${name}&&limit=12&ts=1&apikey=c94587992d8338a43dea5874e3228f95&hash=843970bfcb95eb9fd92e94f4162165ae`);
                    let data = await response.json();
                    // console.log(data)
                    for (var i = 0; i < data.data.results.length; i++) {
                        var innerDivs = `<article class="card"><p>${`<img src = ${data.data.results[i].thumbnail.path}.${data.data.results[i].thumbnail.extension}>`}</p><h3>${data.data.results[i].name}</h3><p>${data.data.results[i].description}</p></article>`;
                $('#searchResult').append(innerDivs);
            }
            } catch(err) {
                alert(err)
            }
        }
    
        $("#name").on("keypress", function(event){
            if(event.which == 13){
                searchMarvel(event);
                $( "#searchResult" ).empty();
            }
        });

        
        $('#button').click(function(event) {
        searchMarvel(event);
        $( "#searchResult" ).empty();
        });

});




// .then 

// $(document).ready(function() {
//             function searchMarvel(event) {

//                 event.preventDefault(event);
//                 var name = $('#name').val();

//                 fetch(`http://gateway.marvel.com:80/v1/public/characters?nameStartsWith=${name}&&limit=12&ts=1&apikey=c94587992d8338a43dea5874e3228f95&hash=843970bfcb95eb9fd92e94f4162165ae`)
//                     .then(res => res.json())

//                 .then(data => {

//                             for (var i = 0; i < data.data.results.length; i++) {
//                                 var innerDivs = `<article class="card"><p>${`<img src = ${data.data.results[i].thumbnail.path}.${data.data.results[i].thumbnail.extension}>`}</p><h3>${data.data.results[i].name}</h3><p>${data.data.results[i].description}</p></article>`;

//                 $('#searchResult').append(innerDivs);

//             }
//         });
//     }
//     $('.btn').click(function(event) {
//         searchMarvel(event);
//     });


// });