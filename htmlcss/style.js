'use strict';
var root = {
    dispcount: 0,
    poscount: 0,
    ddlHeight: '',
    hyperLinks: ['bbbbb', 'ccccc'],
    exclude: ['height', 'width'],
    dyn_elements: [
        { Type: 'div', htmlText: '<div class=""></div>', attrs: [{ key: '', val: '' }], class: [''] },
        { Type: 'p', htmlText: '<p></p>', attrs: [{ key: '', val: '' }], class: [''] }
    ],
    constants: {
        stat_div: '<div class="col-1.5 headSel"></div>',
    },
    elementStyles: [
        {
            Type: 'display',
            Values: ['inline', 'block', 'contents', 'flex', 'grid', 'inline-block',
                'inline-flex', 'inline-grid', 'inline-table', 'list-item', 'run-in',
                'table', 'table-caption', 'table-column-group', 'table-header-group', 'table-footer-group',
                'table-row-group', 'table-cell', 'table-column', 'table-row', 'none', 'initial', 'inherit']
        },
        {
            Type: 'position',
            Values: ['static', 'absolute', 'fixed', 'relative', 'sticky', 'initial', 'inherit']
        },
        { Type: 'height', Values: ['height', 'min-height', 'max-height'], numbers: ['1%', '5%', '10%', '25%', '50%', '75%', '100%'] },
        { Type: 'width', Values: ['width', 'min-width', 'max-width'], numbers: ['1%', '5%', '10%', '25%', '50%', '75%', '100%'] }
    ]
};

function fnCreateSelect(ele) {
    var result = { sel1: '', sel2: '' };
    var _type = ele.Type;
    result.sel1 = $('<select data-type=' + _type + '></select>')
        .attr('id', 'ddl' + _type)

    result.sel1.append('<option value="">Select ' + _type + '</option>');

    for (var j = 0; j < ele.Values.length; j++) {
        var opt = $('<option></option>').html(ele.Values[j]).attr('value', ele.Values[j]);
        $(result.sel1).append(opt);
    }
    result.sel1.on('change', function () {
        var _val = $(this).val();
        var dataType = $(this).data('type');
        if (ele.numbers != undefined && ele.numbers.length > 0) {
            fnReset(ele);
            ele.prevType = $(this).val();
            dataType = ele.prevType;
            $('#ddl' + ele.Type + '_numbers').attr('data-type', _val);
            $('#ddl' + ele.Type).attr('data-type', _val);

            _val = $('#ddl' + ele.Type + '_numbers').val();
        }
        if (dataType != '') {
            $('#A1').css(dataType, _val);
            $('#A2').css(dataType, _val);
            $('#A3').css(dataType, _val);
            $('#B1').css(dataType, _val);
            $('#B2').css(dataType, _val);
            $('#B3').css(dataType, _val);
        }
    });
    if (ele.numbers != undefined && ele.numbers.length > 0) {
        result.sel2 = $('<select data-type=' + _type + '></select>')
            .attr('id', 'ddl' + _type + '_numbers')

        result.sel2.append('<option value="">Select</option>');
        for (var kk = 0; kk < ele.numbers.length; kk++) {
            var opt = $('<option></option>').html(ele.numbers[kk]).attr('value', ele.numbers[kk]);
            $(result.sel2).append(opt);
        }


        result.sel2.on('change', function () {
            var _val = $(this).val();
            var dataType =  $('#ddl' + ele.Type).attr('data-type');

            //if (ele.numbers != undefined && ele.numbers.length > 0) {
            //    fnReset(ele);
            //    ele.prevType = dataType;
            //    dataType = ele.prevType;
            //    $('#ddl' + ele.Type + '_numbers').attr('data-type', ele.prevType);
            //    $('#ddl' + ele.Type).attr('data-type', ele.prevType);
            //    _val = $('#ddl' + ele.Type + '_numbers').val();
            //};

            if (dataType != '') {
                $('#A1').css(dataType, _val);
                $('#A2').css(dataType, _val);
                $('#A3').css(dataType, _val);
                $('#B1').css(dataType, _val);
                $('#B2').css(dataType, _val);
                $('#B3').css(dataType, _val);
            }
        });
    }

    return result;
}

fnInit();
function fnInit() {
    var res = {};
    for (var i = 0; i < root.elementStyles.length; i++) {
        var _type = root.elementStyles[i].Type;
        var div = $(root.constants.stat_div);
        res = {};
        res = fnCreateSelect(root.elementStyles[i]);
        //sel.attr('class', 'form-control');
        //if ($.inArray(_type, root.exclude) == -1) {
        //    sel.on('change', function () {
        //        var dataType = $(this).data('type');
        //        if ($(this).data('type') == 'height_numbers') {
        //            if ($('#ddlheight').val() == '' || $('#ddlheight').val() == undefined) {
        //                return;
        //            }
        //            dataType = $('#ddlheight').val();
        //        }
        //        if ($(this).data('type') == 'width_numbers') {
        //            if ($('#ddlwidth').val() == '' || $('#ddlwidth').val() == undefined) {
        //                return;
        //            }
        //            dataType = $('#ddlwidth').val();
        //        }

        //        $('#A1').css(dataType, $(this).val());
        //        $('#A2').css(dataType, $(this).val());
        //        $('#A3').css(dataType, $(this).val());
        //        $('#B1').css(dataType, $(this).val());
        //        $('#B2').css(dataType, $(this).val());
        //        $('#B3').css(dataType, $(this).val());
        //    });
        //} else {
        //    sel.on('change', function () {
        //        var param = $(this).val();
        //        var dataType = $(this).data('type');
        //        $('#A1').css(param, $('#ddl' + dataType + '_numbers').val());
        //        $('#A2').css(param, $('#ddl' + dataType + '_numbers').val());
        //        $('#A3').css(param, $('#ddl' + dataType + '_numbers').val());
        //        $('#B1').css(param, $('#ddl' + dataType + '_numbers').val());
        //        $('#B2').css(param, $('#ddl' + dataType + '_numbers').val());
        //        $('#B3').css(param, $('#ddl' + dataType + '_numbers').val());
        //    });
        //}
        if (res.sel1 != undefined && res.sel1 != '') {
            div.append(res.sel1);
            $('#divTest').append(div);
        }
        if (res.sel2 != undefined && res.sel2 != '') {
            div.append(res.sel2);
            $('#divTest').append(div);
        }
    }
}
fnAppndHeader();
$(document).ready(function () {

    $(document).on("change", "#ddlDisplay", function () {
        $('#A1').css('display', $(this).val());
        $('#A2').css('display', $(this).val());
        $('#A3').css('display', $(this).val());
        $('#B1').css('display', $(this).val());
        $('#B2').css('display', $(this).val());
        $('#B3').css('display', $(this).val());
    });

    $(document).on("change", "#ddlPosition", function () {
        $('#A1').css('position', $(this).val());
        $('#A2').css('position', $(this).val());
        $('#A3').css('position', $(this).val());
        $('#B1').css('position', $(this).val());
        $('#B2').css('position', $(this).val());
        $('#B3').css('position', $(this).val());
    });

    $(document).on("click", "#btnTest", function () {
        root.dispcount = 0;
        root.poscount = 0;
        fnTest();
    });
});

function fnReset(ele) {
    if (ele.prevType != '' && ele.prevType != undefined) {
        $('#A1').css('' + ele.prevType + '', '')
        $('#A2').css('' + ele.prevType + '', '')
        $('#A3').css('' + ele.prevType + '', '')
        $('#B1').css('' + ele.prevType + '', '')
        $('#B2').css('' + ele.prevType + '', '')
        $('#B3').css('' + ele.prevType + '', '')
    }
}
function fnAppndHeader() {
    for (var i = 0; i < root.hyperLinks.length; i++) {
        var li = $('<li></li>');

        var text = root.hyperLinks[i];

        var aa = $('<a></a>').attr('class', 'dropdown-item')
            .attr('href', 'D:/Projects/htmlcss/' + text + '.html')
            .html(text);

        $(li).append(aa);
        $(li).append(aa);

        $('#appendheader').append(li);
    }
}


function fnTest() {
    var aa = setInterval(function () {
        if (root.dispcount <= $('#ddlDisplay option').length) {
            var val = $($('#ddlDisplay option')[root.dispcount]).val();
            console.log(val);
            $('#ddlDisplay').val(val).change();
            $('#A1').css('display', val);
            $('#A2').css('display', val);
            $('#A3').css('display', val);
            $('#B1').css('display', val);
            $('#B2').css('display', val);
            $('#B3').css('display', val);
            ++root.dispcount;
        } else {
            if (root.poscount <= $('#ddlPosition option').length) {
                if (root.poscount == 0) {
                    alert('Position Started...');
                }
                var val = $($('#ddlPosition option')[root.poscount]).val();
                console.log(val);
                $('#ddlPosition').val(val).change();
                $('#A1').css('position', val);
                $('#A2').css('position', val);
                $('#A3').css('position', val);
                $('#B1').css('position', val);
                $('#B2').css('position', val);
                $('#B3').css('position', val);
                ++root.poscount;
            } else {
                clearInterval(aa);
                alert('aa Interval Cleared...');
                //if (confirm('Start Display Again ???')) {
                //    root.dispcount = 0;
                //    root.poscount = 0;
                //    fnTest();
                //} else {
                //    clearInterval(aa);
                //    alert('aa Interval Cleared...')
                //}
            }
        };
    }, 1000);
}