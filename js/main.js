var commandText = function(text){
    return "[[g;#EEEEEE;]" + text + "]";
}

var titleText = function(text){
    return "[[u;inherit;]" + text + "]";
}

var App = {

    motd: function(ret){
        if (typeof ret === 'undefined') ret = false;
        var greetText = 
            "####################################################################################\n"+
            "|[[b;#00DE12;]\t                       _                                                  ]\t|\n"+
            "|[[b;#00DE12;]\t _ __ ___  _ __  _ __ (_) ___ _ __  _   _ _ __   ___   ___ ___  _ __ ___  ]\t|\n"+
            "|[[b;#00DE12;]\t| '__/ _ \\| '_ \\| '_ \\| |/ _ \\ '_ \\| | | | '_ \\ / _ \\ / __/ _ \\| '_ ` _ \\ ]\t|\n"+
            "|[[b;#00DE12;]\t| | ( (_) ) | | | | | | |  __/ (_) | |_| | | | |  __/( (_| (_) | | | | | |]\t|\n"+
            "|[[b;#00DE12;]\t|_|  \\___/|_| |_|_| |_|_|\\___| .__/ \\__. |_| |_|\\___( )___\\___/|_| |_| |_|]\t|\n"+
            "|[[b;#00DE12;]\t                             |_|    |___/                                 ]\t|\n"+
            "|\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  |\n"+
            "|\tHi, I'm " + commandText('Toan Nguyen') + " - Backend Web Developer in Hanoi, Vietnam. \t\t\t|\n"+
            "|\tPlease type " + commandText('menu') + " for a list of commands.  \t\t\t\t\t\t\t\t\t|\n"+
            "|\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  |\n"+
            "####################################################################################\n";

        if (!ret) {
            this.echo("\n" + greetText);
        } else {
            return greetText;
        }
    },

    menu: function(){
        this.echo();
        this.echo("|  " + commandText("motd") + "               - Display Message of the Day");
        this.echo();
        this.echo("|  " + commandText("about") + "              - Summary of me");
        this.echo("|  " + commandText("projects") + "           - Recent projects of mine");
        this.echo("|  " + commandText("skills") + "             - What I can do");
        this.echo("|  " + commandText("awards") + "             - Awards and features for my work");
        this.echo();
        this.echo("|  " + commandText("github") + "             - Das github");
        this.echo("|  " + commandText("linkedin") + "           - How I connect for work things");
        this.echo("|  " + commandText("facebook") + "           - My personal social area");
        this.echo("|  " + commandText("twitter") + "            - When 140 characters is enough");
        this.echo();
        this.echo("|  " + commandText("contact") + "            - Contact me")
        this.echo("|  " + commandText("credits") + "            - Credits for this website");
        this.echo();
        this.echo("|  " + commandText("all") + "                - Run all commands");
        this.echo();
    },

    github: function(){
        this.echo();
        this.echo("|  http://www.github.com/nntoan");
        this.echo();
    },

    facebook: function(){
        this.echo();
        this.echo("|  http://www.facebook.com/nntoan");
        this.echo();
    },

    linkedin: function(){
        this.echo();
        this.echo("|  https://www.linkedin.com/profile/view?id=313532622");
        this.echo();
    },

    twitter: function(){
        this.echo();
        this.echo("|  http://www.twitter.com/nntoans");
        this.echo();
    },

    about: function(){
        this.echo();
        this.echo("|  Name:         " + commandText('Toan Nguyen'));
        this.echo("|  DOB:          23/09/1993 (" + commandText('22') + " y.o)");
        this.echo("|  Location:     " + commandText('Kim Ma, Ba Dinh'));
        this.echo();
        this.echo("|  Vocation:     I am a Backend Web Developer (primarily " + commandText('PHP') + ", " + commandText('Node.js') + ") and DevOps (Linux, AWS) specialist.");
        this.echo("|                I have been coding in a commercial environment for " + commandText('over 5 years.'));
        this.echo("|                I also do my fair share of front end development using technologies such as " + commandText('Angular.js') + " and " + commandText('jQuery'));
        this.echo();
        this.echo("|  Employment:   I am currently " + commandText("freelancing") + " in the " + commandText("Hanoi") + " area. Get in touch if you'd like to discuss a proposal!");
        this.echo();
    },

    projects: function(){
        this.echo();
        this.echo("|  " + commandText('HDA Design') + "            http://hdadesign.vn     // Backend Lead");
        this.echo("|  " + commandText('Mặt Phố') + "               https://www.matpho.vn      // Backend Lead");
        this.echo("|  " + commandText('Glam It!') + "              http://www.glamit.com             // Backend Developer");
        this.echo("|  " + commandText('Renca') + "                 http://renca.jp   // Backend Developer");
        this.echo();
    },

    skills: function(){
        this.echo();
        this.echo("|  " + commandText('Languages'));
        this.echo();
        this.echo("|  " + commandText('PHP') + "                    ##[[g;#00DE12;]#################################################]  ##");
        this.echo("|  " + commandText('Linux') + "                  ##[[g;#42D100;]###############################################]    ##");
        this.echo("|  " + commandText('Node.js') + "                ##[[g;#5BD100;]############################################]       ##");
        this.echo("|  " + commandText('Javascript') + "             ##[[g;#5BD100;]############################################]       ##");
        this.echo("|  " + commandText('CSS') + "                    ##[[g;#99D100;]#########################################]          ##");
        this.echo("|  " + commandText('HTML5') + "                  ##[[g;#B2D100;]#######################################]            ##");
        this.echo("|  " + commandText('MongoDB') + "                ##[[g;#D1B900;]############################]                       ##");
        this.echo("|  " + commandText('.NET MVC (C#)') + "          ##[[g;#D16200;]###########]                                        ##");
        this.echo();
        this.echo("|  " + commandText("Frameworks and CMS"));
        this.echo();
        this.echo("|  " + commandText('Laravel') + "                ##[[g;#42D100;]###############################################]    ##");
        this.echo("|  " + commandText('Silverstripe') + "           ##[[g;#5BD100;]#############################################]      ##");
        this.echo("|  " + commandText('Sails.js') + "               ##[[g;#99D100;]#########################################]          ##");
        this.echo("|  " + commandText('Express') + "                ##[[g;#B2D100;]########################################]           ##");
        this.echo("|  " + commandText('Symfony') + "                ##[[g;#D1B900;]##############################]                     ##");
        this.echo("|  " + commandText('Zend Framework') + "         ##[[g;#D1B900;]############################]                       ##");
        this.echo();
        this.echo("|  " + commandText("Other"));
        this.echo();
        this.echo("|  " + commandText('AWS') + "                    ##[[g;#5BD100;]############################################]       ##");
        this.echo("|  " + commandText('Grunt/Gulp') + "             ##[[g;#B2D100;]#######################################]            ##");
        this.echo("|  " + commandText('Virtualbox') + "             ##[[g;#B2D100;]#######################################]            ##");
        this.echo("|  " + commandText('Vagrant') + "                ##[[g;#D13F00;]#########]                                          ##");
        this.echo();
    },

    contact: function(){
        this.echo();
        this.echo("|  " + commandText("Email") + ":         nntoan@protonmail.com");
        this.echo("|  " + commandText("LinkedIn") + ":      http://www.linkedin.com/profile/view?id=298500285");
        this.echo();
    },

    credits: function(){
        this.echo();
        this.echo("|  Site built by " + commandText('Toan Nguyen'));
        this.echo("|  Using " + commandText('Jquery Terminal Emulator') + " by " + commandText('Jakub Jankiewicz') + ": http://terminal.jcubic.pl");
        this.echo();
    },

    awards: function(){
        this.echo();
        this.echo("|  " + commandText('FWA Site of the Day') + ", 24th September    | Audi - Land of Quattro                http://www.thefwa.com/site/audi-australia-land-of-quattro");
        this.echo("|  " + commandText('Google Sandbox') + "                         | Audi - Land of Quattro                http://www.thinkwithgoogle.com/campaigns/audi-australia-land-of-quattro.html");
        this.echo();
    },

    all: function(){
        this.clear();
        this.exec('motd');
        this.exec('about');
        this.exec('projects');
        this.exec('skills');
        //this.exec('awards');
        this.exec('github');
        this.exec('linkedin');
        this.exec('facebook');
        this.exec('twitter');
        this.exec('contact');
        this.exec('credits');
    }
}

jQuery(document).ready(function($) {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        window.location.href = "https://www.linkedin.com/profile/view?id=313532622";
    } else {
        $('body').terminal(App, {
            greetings: function(cb){
                cb(App.motd(true));
            },

            onBlur: function() {
                // prevent loosing focus
                return false;
            },
            completion: true,
            checkArity: false
        });
    }
});
