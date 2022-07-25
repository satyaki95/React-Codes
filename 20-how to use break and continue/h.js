for(var i=1;i<=100;i++){
    if(i==10){
        break;
    }
    document.write(" "+i);
    document.write("<br/>");
}
for(var i=1;i<=100;i++){
    if(i%2==0){
       continue;
    }
    document.write(" "+i);
}