$(document).ready(function () {
    // Add smooth scrolling to all links

    // var pathname = $(location).attr("href")
    // var split = pathname.split("/")
    // var lastText = split[split.length - 1]
    // if (lastText == "index.html" || lastText == "") {
    //     $(".nav-link").removeClass("active")
    //     console.log($(".nav-link").eq(0).addClass("active"));
    // } else {
    //     $(".nav-link").removeClass("active")
    //     $(".nav-link").each(function (i, e) {
    //         if(e.href == pathname){
    //             $(this).addClass("active")
    //         }
    //     });
    // }

    $("a").on('click', function (event) {
        console.log(this.hash);
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            // event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 50
            }, 1000, 'swing', function () {
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    $(".card").each(function (index, element) {
        // element == this
        // Ketika card yang di pilih di click
        $(this).click(function (e) {
            // mencegah event bawaan dom
            e.preventDefault();
            $(".img-thumbnail").attr("src", $(this).children(".card-img-top")[0].src);
            $(".detail-modal").html($(this).children(".card-body")[0].innerText)
            // Menampilkan modal
            $("#myModal").modal();
        });
    });

    // $(".nav-link").each(function (i, e) {
    //     // Click salah satu dari nav-link tersebut
    //     $(this).click(function (i, e) {
    //         // Semua nav-link akan menghapus yaitu class "active" (mereset)
    //         $(".nav-link").removeClass("active");
    //         // Menambahkan class active pada nav-link yang di click
    //         $(this).addClass("active");
    //     })
    // });
});