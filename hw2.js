function billingFunction(){
	if(document.getElementById('same').checked){
		var str=document.getElementById('shippingName').value;
		document.getElementById('billingName').value= str;
		var val = document.getElementById('shippingZip').value
		document.getElementById('billingZip').value= val;
	}
	else{
		document.getElementById('billingName').value= null;
		document.getElementById('billingZip').value= null;
	}
}