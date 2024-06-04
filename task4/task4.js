function createtion(s,e){
   var mylist=[];
   var sum=0;
    for (i=s;i<=e;i++)
        {mylist.push(i);
            console.log(mylist[i]);
         sum=sum+mylist[i]; 

         console.log(':'+sum);
        }
       console.log('the sum of numbers betwen 0 and 100 is:'+sum);
       alert('the sum of numbers betwen 0 and 100 is:'+sum);
}
function sumtion(mylist)
{var the_sum_of_mylist=0;
for(i=0;i<=mylist.length;i++)
   {the_sum_of_mylist=the_sum_of_mylist+mylist[i];

   }
console.log('the sum of numbers betwen 0 and 100 is:'+the_sum_of_mylist);
}
