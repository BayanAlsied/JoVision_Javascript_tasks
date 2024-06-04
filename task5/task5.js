function mod(a, b) {
    console.log(a % b);
    return a % b;
  }
  function createtion(s,e){
    var mylist=[];
    var sum=0;
     for (i=s;i<=e;i++)
         {mylist.push(i);
             console.log(mylist[i]);
             if(mod(mylist[i],2)==0)
                sum=sum+mylist[i]; 
 
          console.log(':'+sum);
         }
        console.log('the sum of numbers betwen 0 and 100 is:'+sum);
        alert('the sum of numbers betwen 0 and 100 is:'+sum);
 }