var sayi = Number(prompt("Lütfen Sayı Giriniz"));
function TotalNumber() {
  var numberCount=0;
  var totalNumber=0;
  for (var i = 1; i <=sayi; i++) {
    if(i==7)
    {continue}
    if(i>=100)
    {break}
    numberCount++;
    totalNumber+=i; 
  }
  document.write(numberCount+" adet sayı var <br>")
  document.write("Sayıların toplamı: "+totalNumber+"<br>")
}
function Odd() {
  var numberOdd=0;
  var totalOdds=0;
  document.write("Tek Sayılar: ")
  for (var i = 1; i <=sayi; i++) {
    if(i==7){continue}
    if(i>=100){break}
    if(i%2==1){
    document.write(i+" ")
    numberOdd++;
    totalOdds+=i
    }
  }
  document.write("<br>"+numberOdd+" tane tek sayı var <br>")
  document.write("Tek Sayıların toplamı: "+totalOdds+"<br>")
}
function Even() {
  var numberEven=0;
  var totalEvens=0;
  document.write("Çift Sayılar: ")
  for (var i = 1; i <=sayi; i++) {
    if(i>=100){break}
    if(i%2==0){
    document.write(i+" ")
    numberEven++;
    totalEvens+=i
    }
  }
  document.write("<br>"+numberEven+" tane tek sayı var <br>")
  document.write("Çift Sayıların toplamı: "+totalEvens+"<br>")
}
function Homework(){
  TotalNumber();
  Odd();
  Even();
}
Homework()