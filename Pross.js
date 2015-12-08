	var isIE = window.XDomainRequest ? true : false;        
	var invocation = createCrossDomainRequest();        
	var url = 'http://172.16.10.3'; 
	
	// Préchargement des images pour le rollover
	
	
	var sun_0 = new Image(); sun_0.src = "images/sun.png";
    var sun_1 = new Image(); sun_1.src = "images/sun1.png";
	 
	var lune_0 = new Image(); lune_0.src = "images/lune.png";
    var lune_1 = new Image(); lune_1.src = "images/lune1.png";
	
	var home_0 = new Image(); home_0.src = "images/home.png";
    var home_1 = new Image(); home_1.src = "images/home1.png";
	
	var goutte_0 = new Image(); goutte_0.src = "images/goutte.png";
    var goutte_1 = new Image(); goutte_1.src = "images/goutte1.png";
	
	var legume_0 = new Image(); legume_0.src = "images/legume.png";
    var legume_1 = new Image(); legume_1.src = "images/legume1.png";
	
	
	
	setInterval(function(){cmdLed("vide");},500);	//requete Http toutes les 0,5s
	
	
	function createCrossDomainRequest(url, handler)        
	{            
		var request; 
		if (isIE) 
		{        
			if (window.ActiveXObject) 
			{            
				try 
				{                
					request = new ActiveXObject("Msxml2.XMLHTTP");
				} 
				catch(e) 
				{                
					request = new ActiveXObject("Microsoft.XMLHTTP");            
				}        
			}
		}				
		else            
		{                
			request = new XMLHttpRequest();            
		}            
		return request;        
	}
	
	
	function cmdLed(val)        
	{       
		if (invocation)            
		{                                   
			invocation.open('POST', url, true); 
			invocation.onreadystatechange = handler; 
			invocation.setRequestHeader("Content-type", "application/x-www-form-urlencoded");   //methode POST 
			invocation.send(val+"-motDePasse");				       
		}                  
		else            
		{                
			var text = "No Invocation TookPlace At All";                
			var textNode = document.createTextNode(text);                
			var textDiv = document.getElementById("textDiv");               
			textDiv.appendChild(textNode);            
		}   
	}
	
	function handler(evtXHR)        
	{            
		if (invocation.readyState == 4)            
		{               
			if (invocation.status == 200)                
			{                   
				outputResult();                
			}                
			else                
			{                    
				//alert("Le serveur ne veut pas répondre!!!");                
			}    
		}        
	}
	
	function change(nom,obj_im) 
	{   
		if (document.images) 
		{
			document.images[nom].src=obj_im.src;
		} 
	} 
	
	function outputResult()        
	{           
		var response = invocation.responseText; 
		
		if (response.indexOf("Led0",0)!=-1) 
		{
			change('ampo',ampo_0);
		}
		if (response.indexOf("Led1",0)!=-1) 
		{
			change('ampo',ampo_1);
		}	
	}
	
	
	