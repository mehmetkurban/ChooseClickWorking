$(document).ready(function(){
    
    var Kategoriler = [
    {
        KategoriAdi: "Ayakkabilar",
        Urunler: [
            {
                UrunId: 0,
                UrunAdi:"Ayakkabi1",
                UrunLinki:"https://img-morhipo.mncdn.com/productimages/44211663272/[img][4][1][313x429].jpg?0"
            },
            {
                UrunId: 1,
                UrunAdi:"Ayakkabi2",
                UrunLinki:"https://img-morhipo.mncdn.com/productimages/8432561378656/[img][4][1][313x429].jpg?0"
            },
            {
                UrunId: 2,
                UrunAdi:"Ayakkabi3",
                UrunLinki:"https://img-morhipo.mncdn.com/productimages/8432561378571/[img][4][2][313x429].jpg?0"
            }
        ]
    },
    {
        KategoriAdi: "Kiyafetler",
        Urunler: [
            {
                UrunId: 0,
                UrunAdi:"Kiyafet1",
                UrunLinki:"https://img-morhipo.mncdn.com/productimages/886829634103/[img][4][2][313x429].jpg?0"
            },
            {
                UrunId: 1,
                UrunAdi:"Kiyafet2",
                UrunLinki:"https://img-morhipo.mncdn.com/productimages/i/8681288845907/[img][4][2].jpg?1826"
            },
            {
                UrunId: 2,
                UrunAdi:"Kiyafet3",
                UrunLinki:"https://img-morhipo.mncdn.com/productimages/i/8681288223811/[img][4][2].jpg?1825"
            }
        ]
    },
    {
        KategoriAdi: "Cantalar",
        Urunler: [
            {
                UrunId: 0,
                UrunAdi:"Canta1",
                UrunLinki:"https://img-morhipo.mncdn.com/productimages/i/2110061695706/[img][4][3].jpg?1731"
            },
            {
                UrunId: 1,
                UrunAdi:"Canta2",
                UrunLinki:"https://img-morhipo.mncdn.com/productimages/i/2110061695546/[img][4][3].jpg?1731"
            },
            {
                UrunId: 2,
                UrunAdi:"Canta3",
                UrunLinki:"https://img-morhipo.mncdn.com/productimages/i/2110061695539/[img][4][3].jpg?1731"
            }
        ]
    }
];
    var Sepet = [];
    
    function listedoldur(){
        
        $(".navlistesi").empty(); 
        
        for(i = 0; i < Kategoriler.length; i++){
            
            var li = "<li>"+ "<a class='deleteCategory'>" + "x" + "</a>" +
                        "<a href='#' id='"+i+"' class='Katlar'>"+ Kategoriler[i].KategoriAdi+"</a>"+ 
                    "</li>";
            
            $(li).appendTo(".navlistesi");
        }
    }
    listedoldur();
    /*for(i = 0; i < Kategoriler.length; i++){
        var div = document.createElement("div");
        $(div).addClass("row");
        for(j = 0; j < Kategoriler[i].Urunler.length; j++){
            var div2 = document.createElement("div");
            $(div2).addClass("col-md-4");
            var div3 = document.createElement("div");
            $(div3).addClass("thumbnail");
            var img = document.createElement("img");
            $(img).attr("src", Kategoriler[i].Urunler[j].UrunLinki);
            $(img).attr("alt","resimdenemesi");
            var div4 = document.createElement("div");
            $(div4).addClass("caption");
            var h3 = document.createElement("h3");
            h3.innerHTML = Kategoriler[i].Urunler[j].UrunAdi;
            var a = document.createElement("a");
            $(a).attr= ("href","#");
            $(a).attr= ("role","button");
            $(a).addClass("btn btn-primary");
            $(a).text("Bitmeden Al!");
            var p = document.createElement("p");
            $(p).append(a);
            $(div4).append(h3).append(p);
            $(div3).append(img).append(div4);
            $(div2).append(div3);
            $(div).append(div2);
        }
        $(".den").append(div); KISA HALİ AŞAGIDA!
    }*/
    var index = 0;
    $(document).on('click','.Katlar',function(){
        
        index = $(this).attr('id');
        
        var item = Kategoriler[index];
        
        sifirla();
        
        ekraniDoldur(item);
        
    });

    function ekraniDoldur(itm){
        
        var div = document.createElement("div");
        
        $(div).addClass("row");
        
        for(j = 0; j < itm.Urunler.length; j++){
            var div2 = "<div class='col-md-4'>" + "<div class='thumbnail " + itm.KategoriAdi + "' id='"+j+"'>" + "<a class='delete'>" + "x" + "</a>" + "<img src="+ itm.Urunler[j].UrunLinki + " alt='resimdenemesi'>" +"<div class='caption'>"+"<h3>" + itm.Urunler[j].UrunAdi + "</h3>"+ "<p><a href='#' role='button' class='btn btn-primary sepeteAt'>Bitmeden Al!</a></p>" + "</div>" + "</div>" + "</div>";
            $(div).append(div2);
        }
        $(".den").append(div);
    }
    
    function sifirla(){
        $(".den > .row").fadeOut(0);  ///$(".den > .row") şurası mühim. .den > row degil Dikkat et.
    }
    
    $("#onayla").click(function(){
        
        Kategoriler.push({"KategoriAdi": $("#KategoriAdi").val(),"Urunler": []});
        
        console.log(Kategoriler);
        
        listedoldur();
    })
    
    var option;
    
    $("#deneme").click(function(){
        
        option = '';
        
        for (i=0;i < Kategoriler.length; i++){
            option += '<option value="'+i+'">' + Kategoriler[i].KategoriAdi + '</option>';
        }
        
        $('#KategoriSec').append(option);
    });
    
    $('#KategoriSec').change(function(){
        index = $("#KategoriSec option:selected").val();
        console.log(index);
    });
    
    $("#urunonayla").click(function (){
       
       Kategoriler[$("#KategoriSec option:selected").val()].Urunler.push({"UrunAdi": $("#UrunAdi1").val(), "UrunLinki": $("#UrunLinki1").val(), "UrunId": Kategoriler[index].Urunler.length});
       
       console.log(Kategoriler);
       
       kategoriGoster(Kategoriler[$("#KategoriSec option:selected").val()]);
       
    });
    
    function kategoriGoster(index){
        
        sifirla();
        
        ekraniDoldur(index);
        
    }
   
    
    sepetIconuOlustur();
    /*<li><a href="#" id="sepet">Sepet <span class="badge">42</span></a></li>*/
    function sepetIconuOlustur(){
        
        $("#sepeticonu").parent().remove();
        
        var sepeticonu = "<li><a href='#' id='sepeticonu'>Sepet <span class='badge'>" + Sepet.length + "</span></a></li>"
        
        $(".navbar-right").append(sepeticonu);
        
    };
    
var urunindex;
    $(document).on('click', '.sepeteAt', function(){
        
        urunindex = $(this).parents(".thumbnail").attr("id");
        
        var sad = Kategoriler[index].Urunler[urunindex];
        
        sad["Kategorisi"] = Kategoriler[index].KategoriAdi;///////////////////***********
        
        Sepet.push(sad);
        
        console.log(Sepet);
        
        sepetIconuOlustur();
    });
    
    function sepetDoldur(){
        
        var div = document.createElement("div");
        
        $(div).addClass("row");
        
        for(j = 0; j < Sepet.length; j++){
            var div2 = "<div class='col-md-4'>" + "<div class='thumbnail' id='"+j+"'>" + "<a class='sepettencikarma'>" + "x" + "</a>" + "<img src="+ Sepet[j].UrunLinki + " alt='resimdenemesi'>" +"<div class='caption'>"+"<h3>" + Sepet[j].UrunAdi + "</h3>" + "</div>" + "</div>" + "</div>";
            $(div).append(div2);
        }
        $(".den").append(div);
    }
    
    $(document).on('click','#sepeticonu', function(){
        
        sifirla();
        
        sepetDoldur();
    });
    
     
    $(document).on('click','.delete',function(){
        
        var p = $(this).parent().attr("id");
        
        for(i = 0; i < Sepet.length; i++){
            if(Sepet[i].UrunId === Kategoriler[index].Urunler[p].UrunId && Sepet[i].Kategorisi === Kategoriler[index].KategoriAdi){
                Sepet.splice(i, 1);
                sepetIconuOlustur();
                i--;
            }
        }
        
        Kategoriler[index].Urunler.splice(p, 1);
        
        $(this).parents(".col-md-4").remove();
        
        sifirla();
        
        ekraniDoldur(Kategoriler[index]);
        
    });
        
    $(document).on('click', '.deleteCategory', function(){
        
        var l = $(this).next().attr("id");
        
        index = l;
        
        var Kadi = Kategoriler[index].KategoriAdi;
         
        for(i = 0; i < Sepet.length; i++){//////////////////////***************** foreach gibi birşey olacak
            if(Sepet[i].Kategorisi === Kadi){
                Sepet.splice(i, 1);
                sepetDoldur();
                sepetIconuOlustur();
                i--; //Sorunu çözen kısım, Sepet yenilendiginden bir tane degeri atlıyordu,sepet yenilenince index i bir düşürdü.
            }
        }
        
        Kategoriler[index].Urunler.splice(0);
        
        Kategoriler.splice(index,1);
        
        listedoldur();
        
        sifirla();
        
        sepetDoldur();
        
        $(this).parent().remove();
    });
    
    $(document).on('click', '.sepettencikarma', function(){
        
        var k = $(this).parent().attr("id");
        
        Sepet.splice(k, 1);
        
        console.log(Sepet);
        
        $(this).parents(".col-md-4").remove();
        
        sepetIconuOlustur();
        
        sifirla();
        
        sepetDoldur();
    });
});
