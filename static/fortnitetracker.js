$(function(){
    var submitBtn = $('#submit');
    var name = $('#name');
    var results = $('#results');


    //default values
    var platform = "psn";

    submitBtn.click(function(){
        var data = {};
        data.name = name.val().toLowerCase();
        data.platform = platform;
        $.ajax({
            type: "POST",
            url: '/',
            dataType: 'json',
            data : data,
            success: function(data) {
                
                data = JSON.parse(data);
                console.log(data);
                displayData(data);
            }
        });
        resetResult();
    });
    function resetResult(){
        results.html('');
        name.val('');
    }

    function displayData(data) {
        var userhandle = data.epicUserHandle;
        var list = '<ul class="list-group">' + 
                '<li class="list-group-item">' + 'Solo Wins ' + data.stats.p2.top1.value + '</li>' +
                '<li class="list-group-item">' + 'Duo Wins ' + data.stats.p10.top1.value + '</li>' +
                '<li class="list-group-item">'+ 'Squad Wins ' + data.stats.p9.top1.value + '</li>' +
                '</ul>';
        var template = '<div class="card">' +
                        '<div class="card-header">' +
                        '<h5 class = "card-header">' + userhandle + '</h5>' +
                        '</div>' +
                        '<div class="card-body">' +
                        '<h5 class="card-title">' + 'wins' + '</h5>' +
                        '<p class="card-text">' + list + '</p>' +
                    
                        '</div>' +
                '</div>';
                results.html(template);
    }
    //could update function here to change platform
});
