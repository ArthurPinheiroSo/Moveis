var banners = [
 "A",
 "-A",
 "--A",
 "----A",
 "-------A",
 "------------A",
 "---------------------A",
 "---------------------------------A",
 "---------------------A",
 "-------------A",
 "--------A",
 "-----A",
 "--A",
 "-A",
 "A"
 ];
var bannerAtual=0;

function TrocaBanner(){
	bannerAtual = (bannerAtual + 1) % banners.length;
	document.querySelector('h2#mensagem').textContent = banners[bannerAtual];
	}
	
setInterval(TrocaBanner , 100);