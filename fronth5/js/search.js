function newOptions(carTypeList){
    var listArr = [];
    for(var i=0;i<carTypeList.length;i++){
        if(carTypeList[i].value_1.indexOf($('#intention_model').val()) > -1){
            listArr.push(carTypeList[i]);
        }
    }
    var options = '';
    for(var i = 0; i < listArr.length; i++) {
        opt = '<li class="li-select" data-newMachineId="' + listArr[i].code + '">' + listArr[i].value_1 + '</li>';
        options += opt;
    }
    if(options == ''){
        $('#search_select').hide();
    }else{
        $('#search_select').show();
        $('#select_ul').html('').append(options);
    }
}
function searchInput(carTypeList){
    $('select-content .sanjiao').on('click',function(){
        $('#intention_model').focus();
    });
    $('#intention_model').on('keyup',function(){
        newOptions(carTypeList);
    });
    $('#intention_model').on('focus',function(){
        $('#search_select').show();
        newOptions(carTypeList);
    });
    $('#select_ul .li-disabled').on('click',function(){
        $('#search_select').show();
    });
    $('#search_select').on('mouseover',function(){
        $(this).addClass('ul-hover');
    });
    $('#search_select').on('mouseout',function(){
        $(this).removeClass('ul-hover');
    });
    $('#intention_model').on('blur',function(){
        if($('#search_select').hasClass('ul-hover')){
            $('#search_select').show();
        }else{
            $('#search_select').hide();
        }
    });
    $('#select_ul').delegate('.li-select', 'click',function(){
        $('#select_ul .li-select').removeClass('li-hover');
        var selectText = $(this).html();
        var newMachineIdVal = $($(this)[0]).attr("data-newMachineId");
        $('#intention_model').val(selectText);
        $('#search_select').hide();
        $("input[name='newMachineId']").val(newMachineIdVal);
//          console.log($("input[name='newMachineId']").val())
    });
    $('#select_ul').delegate('.li-select', 'mouseover',function(){
        $('#select_ul .li-select').removeClass('li-hover');
        $(this).addClass('li-hover');
    });
}