//scrollbar js
var pro = document.getElementById('prog');
var p = document.getElementById('per');
var total = document.body.scrollHeight - window.innerHeight;
window.onscroll = function () {
    var progr = (window.pageYOffset / total) * 100;
    pro.style.height = progr + "%";
}

// functions   
function ingo() {
    document.getElementById('botin').style.opacity = "0.6";
    document.getElementById('botin').style.borderColor = "red";
}
function ok() {
    alert("Going.....");
}

// jquery
$(document).ready(function () {
    $('section').hide(-3000);
    $('header').hide(-3000);
    $('#bhag').hide(-3000);
    $('.para').hide(-3000);
    $('.box').hide(-3000);
    $('#bot').hide(-3000);
    $('.loader').show();
    $('.loader').hide(4000);
    $('header').show(4000);
    $('section').show(4000);
    $('.box').show(4000);
    $('#bot').show(4000);
    $('.para').show(4000);
    $('#bhag').show(4000);
    // $('#okhi').click(function(){
    //   document.getElementById('upar').style.zIndex="2";
    // })
});

// bot jquery

var name = ["samsung", "apple", "mi", "realme", "oppo", "lava", "lg", "huawei"];
var count = 0;

$("#botin").keypress(function go() {
    if (event.keyCode === 13) {
        var a = document.getElementById('botin').value;
        var d = a.toString();
    }
    var c = a.split(" ");
    var l = c.length;

    count++;

    for (var i = 0; i < l; i++) {
        if (c[i].toLowerCase() == 'samsung') {// company name ayiya muki devanu samsung ni jagya
            if (c[i + 1] == 'note') {// ayiya model nu first word foe example note, galaxy etc.
                if(c[i+2]=='7'){// ayiya model number avse.
                    alert("samsung note 7 found");// jya jya alert che tya apde e page open kar daisu name pramane.
                    break;
                }
                else{
                    alert("not found try again with correct name");
                    break;
                }
            }
            else if(c[i+1]==null){
                alert("samsung");
            }
            else {
                alert(a + " not found");
                break;
            }
        }
        else if (c[i].toLowerCase() == 'iphone') {
            alert('apple found');
            break;
        }
        else if (c[i].toLowerCase() == 'mi') {
            alert('mi found');
            break;
        }
        else if (c[i].toLowerCase() == 'realme') {
            alert('realme found');
            break;
        }
        else if (c[i].toLowerCase() == 'oppe') {
            alert('oppo found');
            break;
        }
        else if (c[i].toLowerCase() == 'lava') {
            alert('lava found');
            break;
        }
        else if (c[i].toLowerCase() == 'lg') {
            alert('lg found');
            break;
        }
        else if (c[i].toLowerCase() == 'huawei') {
            alert('huaweu found');
            break;
        }
        else {
            alert("404 page not found");
            document.getElementById('botin').style.opacity = "0";
            break;
        }
    }
    document.getElementById('botin').value = "";
    document.getElementById('botin').style.opacity = "0";

});
$('#bot').click(function () {
    $('#botin').toggle(ingo());
});

