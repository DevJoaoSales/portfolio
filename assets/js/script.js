// ############### OBJETOS ################ 


// ################ EVENTS ################
$(document).ready(function(){

            // ############ THEME MODE. ##############
            $("#btnThemeMode").on("click", function(){

                let check = $(this).find("span.icon-sun").css("display");
                
                if( check == "none" ){
                    $(this).find("span.icon-moon").hide(500);
                    $(this).find("span.icon-sun").show(500);
                    $("body").css({
                        background:"#e4e4e4",
                        color:"#000",
                    });

                    $("body").addClass("light")
                    //setTimeout( ()=>{ $("body").addClass("light") } ,1500);    

                }else{
                    $(this).find("span.icon-sun").hide(500);
                    $(this).find("span.icon-moon").show(500);
                    $("body").css({
                        background:"#2a2a2a",
                        color:"#fff",
                    });

                    $("body").removeClass("light")
                    //setTimeout( ()=>{ $("body").removeClass("light") } ,1500); 
                    
                }
                
            });  // ##### END THEME MODE. ######



});

// ############### FUNCTIONS ###############
