console.log("Hello World");
        //alert("me");
        //document.write("This is document write");
        
        //2.javascript console api
        //console.error("this is an error");
        ///console.warn("this is warning");

        //3. javascript variables
        

        function clicked(){
                console.log('the button was clicked');
        }
        window.onload=function(){
                console.log('the document was loaded');
        }
        
        
        // firstContainer.addEventListener('click',function(){
        //         document.querySelectorAll('.container')[1].innerHTML="<b>We have clicked</b>"
        //         console.log("clicked on container"); 
        //  }
        //  )
         
        // firstContainer.addEventListener('mouseover',function(){
        //         console.log(" Mouse on container"); 
        //  }
        //  )
        //  firstContainer.addEventListener('mouseout',function(){
        //         console.log("mouse out of container"); 
        //  }
        //  )
        // let prevHTML=document.querySelectorAll('.container')[1].innerHTML;
        //  firstContainer.addEventListener('mouseup',function(){
        //         document.querySelectorAll('.container')[1].innerHTML=prevHTML;
        //         console.log(" mouse up when clicked on container"); 
        //  }
        //  )
        //  firstContainer.addEventListener('mousedown',function(){
        //         document.querySelectorAll('.container')[1].innerHTML="<b>We have clicked</b>"
        //         console.log("mouse down when clicked on container"); 
        //  }
        //  )
         
        // function sum(a,b){
        //         return a+b;
        // }
        // sum = (a,b)=>{
        //         return a+b;
        // }
        //  logKaro=()=>{
        //         document.querySelectorAll('.container')[1].innerHTML="<b>Set interval fired</b>" 
        //         console.log("I am your log");
        //  }
         // setTimeout(logKaro,2000);
        // setInterval(logKaro,2000);

        obj={name:"pijus",length:1 ,a:{this:"that"}}
        jso=JSON.stringify(obj);
        console.log(jso);
        parsed = JSON.parse(`{"name":"pijus","length":1,"a":{"this":"that"}}`)
        console.log(parsed);


         
