// get rid of the nav buttons or make them do different things 



//background getter
url = "https://api.nasa.gov/planetary/apod?api_key=xipF3UVvYjtR5E3oMJfyoCaeLXNCl2Ena7MdqVge"

$.ajax({
    url: url,
    method: "get"
}
)
    .then(function (results) {
        var image = results.hdurl
        $("body").css("background-image", "url('" + image + "'")
    }
)

// init buttons that do stuff 
$("#main").on("click", function () {
    // $("#mainBody").text("")
    $("#mainBody").text($(this).val())
    //ideally youd make the text n such like the original 
})
$("#port").on("click", function () {
    $("#mainBody").text($(this).val())
    //ideally youd make the text n such like the original 
})
$("#contact").on("click", function () {
    $("#mainBody").text($(this).val())
    //ideally youd make the text n such like the original 
})

