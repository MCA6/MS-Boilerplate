$('#obf').html(function(){
    var e = "hello";
    var a = "@";
    var d = "palms";
    var c = ".school";
    var h = 'mailto:' + e + a + d + c;
    $(this).parent('a').attr('href', h);
    return e + a + d + c;
});