
$(document).ready(function(){
 $('body').on ('submit', '#searchText' , function(e){
     let searchText=$('#searchText').val();
      getMovies(searchText);
      e.preventDefault();
     
    
 });
});



$('#submitBtn').click(function(){
    let searchText =$('#searchText').val();
     getMovies(searchText);
    
     

    
})

let url ='http://www.omdbapi.com/?apikey=c406bc33'
function getMovies(searchText){
    $.ajax({
        method:'GET',
        url: url + '&s=' + searchText
        
        
        
        
        })
       .done (function(data){
        console.log(data);
        let movies=data.Search;
        let output='';
        $.each(movies, function(index,movie){
            output +=`
            <li class="movie-card">
            <img src="${movie.Poster}">
            <h5>${movie.Title}</h5>
            <p>Release Year: ${movie.Year}<br>
               ${movie.Type}
              </p>
            </li>
            `;
            
       });

       $('#movies').html(output);
       
    });

}

    








