number1=Number(prompt("1.sayıyı giriniz"));
 number2=Number(prompt("2.sayıyı giriniz"));



 document.write(Math.max(number1,number2)+"<br/>");
 document.write(Math.min(number1,number2)+"<br/>");
 document.write(Math.sqrt(Math.max(number1,number2))+"<br/>");
 document.write (Math.ceil(Math.sqrt(Math.max(number1,number2)))+"<br/>")
 document.write(Math.abs(Math.min(number1,number2))+"<br/>");
document.write  (Math.pow(Math.abs(Math.min(number1,number2)), Math.abs(Math.max(number1,number2))));