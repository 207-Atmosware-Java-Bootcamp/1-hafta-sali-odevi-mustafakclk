//ÖDEV // kullanıcı tarafından girilen bir kelimenin 
//S-1) Kaç karakterlidir ?ok
//S-2) boşluklar alınarak Kaç karakterlidir ? ok
//S-3) bütün kelimeyi küçük harfle göstermek ?  ok
//S-4) bütün kelimeyi büyük harfle göstermek ? ok
//S-5) ilk harf nedir ? 
//S-6) girdiğiniz kelime java ile başlıyor mu ?
//S-7) girdiğiniz kelimenin sonuna "-ben js öğreniyorum" girdiğiniz 0 ile 4 arasındaki indexi ekranda gösterin ?
//S-9) Kullanıcıdan alınan başka bir kelimeyle birinci olan kelimeyle yer değiştirmek ?

var isim = window.prompt("Lütfen kelimenizi giriniz.");

document.write("karakter sayısı: "+isim.length+"<br>");
document.write("boşlukları alınmış:"+isim.trim()+"<br/>");
document.write("kelimeyi küçk harfle göster:"+isim.toLowerCase()+"<br/>");
document.write("kelimeyi büyük harfle göster:"+isim.toUpperCase()+"<br/>");
document.write("kelime java ile başlıyormu?:"+isim.startsWith("java")+"<br/>");
document.write("kelimenin ilk harfi :"+isim.substring(0,1)+"<br/>");
document.write("0 ile 4 arasındaki index:"+ isim.substring(0,4)+"<br/>")
var isim2=String(prompt("Lütfen 2. kelimenizi yazınz."))
document.write("Girdiğiniz ilk kelime: " +isim +"<br>"+ "İkinci Kelimeniz: "+ isim2+"<br>")