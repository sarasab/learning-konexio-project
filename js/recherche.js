$(document).ready(function(){
    $.ajax({
        url:"https://api.themoviedb.org/3/search/movie?query=step-up&api_key=b8e16ff25f44004fe2ab5dedc9e0453e",
        success:function(data){
            console.log(data);

        }
    })

})