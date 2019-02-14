
function button() {
    //bengal katten
    if(document.getElementById('cat1').checked) {

        
        //ändra tema
        document.getElementById('stylesheet').href="bengal.css";
        
       
        //font
        if(document.getElementById("font1").checked) {
            document.getElementById("googlefont").style="font-family: 'Indie Flower', cursive;";
            
            //filen
            document.getElementById("link").href = "bengalflower.pdf";
            document.getElementById("link").innerHTML = "Ladda ner koden!";

            

        }
        else if (document.getElementById("font2").checked){
            document.getElementById("googlefont").style="font-family: 'Great Vibes', cursive;";
            document.getElementById("link").href = "bengalvibes.pdf";
            document.getElementById("link").innerHTML = "Ladda ner koden!";
            
        }
        else if (document.getElementById("font3").checked){
            document.getElementById("googlefont").style="font-family: 'Permanent Marker', cursive;";
            document.getElementById("link").innerHTML = "Ladda ner koden!";
            document.getElementById("link").href = "bengalperm.pdf";
            
        } }

    //russian katt
    else if(document.getElementById('cat2').checked) {
        //css
        document.getElementById('stylesheet').href="russian.css";
        

        

        //font
        if(document.getElementById("font1").checked) {
            document.getElementById("googlefont").style="font-family: 'Indie Flower', cursive;";
            document.getElementById("link").href = "russianflower.pdf";
            

        }
        else if (document.getElementById("font2").checked){
            document.getElementById("googlefont").style="font-family: 'Great Vibes', cursive;";
            document.getElementById("link").href = "russianvibes.pdf";
            document.getElementById("link").innerHTML = "Ladda ner koden!";
            
        }
        else if (document.getElementById("font3").checked){
            document.getElementById("googlefont").style="font-family: 'Permanent Marker', cursive;";
            document.getElementById("link").href = "russianperm.pdf";
            document.getElementById("link").innerHTML = "Ladda ner koden!";
            
        }  }
        //sphynx katt
        else if(document.getElementById('cat3').checked) {
        
        //css
        document.getElementById('stylesheet').href="sphynx.css";

    

        //font
        if(document.getElementById("font1").checked) {
            document.getElementById("googlefont").style="font-family: 'Indie Flower', cursive;";
            document.getElementById("link").href = "sphynxflower.pdf";
            document.getElementById("link").innerHTML = "Ladda ner koden!";
            

        }
        else if (document.getElementById("font2").checked){
            document.getElementById("googlefont").style="font-family: 'Great Vibes', cursive;";
            document.getElementById("link").href = "sphynxvibes.pdf";
            document.getElementById("link").innerHTML = "Ladda ner koden!";
            
        }
        else if (document.getElementById("font3").checked){
            document.getElementById("googlefont").style="font-family: 'Permanent Marker', cursive;";
            document.getElementById("link").href = "sphynxperm.pdf";
            document.getElementById("link").innerHTML = "Ladda ner koden!";
            
        } 
    }
}




        
   



