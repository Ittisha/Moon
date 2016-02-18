function searchword(){
    var text_field = document.getElementById("text_field");
    var word_field = document.getElementById("word_field");
    var searchresult = document.getElementById("searchresult");
    var text = text_field.value;
    var word = word_field.value;
    searchresult.innerHTML = text.match(new RegExp(word,"g"));
}