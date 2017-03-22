// JavaScript Document
var building = {
    b_list: [],
    b_link: [],
    
    init: function(){
        this.b_list[0] = $("#build_resume");
        this.b_link[0] = "file/RESUME_YUXINZHANG_0316_software.pdf";
        
        this.b_list[1] = $("#build_project");
        this.b_link[1] = "project/project.html";
        
        this.b_list[2] = $("#build_game");
        this.b_link[2] = "https://taylorzhangyx.github.io/Leetcodes/";
        
        
    },
    
    react: function(pos){
        for(i = 0; i < this.b_list.length; i++){
           if(iscollide(pos, this.b_list[i])){
               controller.timerclean();
               window.open(this.b_link[i]);
               return true;
           }
        }
        return false;
    }
};