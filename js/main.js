var commandText = function (text) {
    return '[[g;#EEEEEE;]' + text + ']'
};

var titleText = function (text) {
    return '[[u;inherit;]' + text + ']'
};

var App = {
    allSection: false,
    motd: function (firstLoad) {
        if (typeof firstLoad === 'undefined') {
            firstLoad = false;
        }

        var basicMsg = '####################################################################################\n' +
            '|                                                                                  |\n' +
            '|    Hi, I\'m ' + commandText('Toan Nguyen') + ' - Backend Web Developer in Hanoi, Vietnam.                |\n' +
            '|    Please type ' + commandText('menu') + ' for a list of commands.                                      |\n' +
            '|                                                                                  |\n' +
            '####################################################################################\n';

        var advMsg = '###############################################################################################################\n' +
            '|                                                                                                             |\n' +
            "|[[b;#00DE12;]   $$$$$$$$\\                                  $$\\   $$\\                                                      ]|\n" +
            "|[[b;#00DE12;]   \\__$$  __|                                 $$$\\  $$ |                                                     ]|\n" +
            "|[[b;#00DE12;]      $$ | $$$$$$\\   $$$$$$\\  $$$$$$$\\        $$$$\\ $$ | $$$$$$\\  $$\\   $$\\ $$\\   $$\\  $$$$$$\\  $$$$$$$\\     ]|\n" +
            "|[[b;#00DE12;]      $$ |$$  __$$\\  \\____$$\\ $$  __$$\\       $$ $$\\$$ |$$  __$$\\ $$ |  $$ |$$ |  $$ |$$  __$$\\ $$  __$$\\    ]|\n" +
            "|[[b;#00DE12;]      $$ |$$ /  $$ | $$$$$$$ |$$ |  $$ |      $$ \\$$$$ |$$ /  $$ |$$ |  $$ |$$ |  $$ |$$$$$$$$ |$$ |  $$ |   ]|\n" +
            "|[[b;#00DE12;]      $$ |$$ |  $$ |$$  __$$ |$$ |  $$ |      $$ |\\$$$ |$$ |  $$ |$$ |  $$ |$$ |  $$ |$$   ____|$$ |  $$ |   ]|\n" +
            "|[[b;#00DE12;]      $$ |\\$$$$$$  |\\$$$$$$$ |$$ |  $$ |      $$ | \\$$ |\\$$$$$$$ |\\$$$$$$  |\\$$$$$$$ |\\$$$$$$$\\ $$ |  $$ |   ]|\n" +
            "|[[b;#00DE12;]      \\__| \\______/  \\_______|\\__|  \\__|      \\__|  \\__| \\____$$ | \\______/  \\____$$ | \\_______|\\__|  \\__|   ]|\n" +
            "|[[b;#00DE12;]                                                        $$\\   $$ |          $$\\   $$ |                       ]|\n" +
            "|[[b;#00DE12;]                                                        \\$$$$$$  |          \\$$$$$$  |                       ]|\n" +
            "|[[b;#00DE12;]                                                         \\______/            \\______/                        ]|\n" +
            '|                                                                                                             |\n' +
            '|                                                                                                             |\n' +
            '|      Hi, I\'m ' + commandText('Toan Nguyen') + ' - Backend Web Developer in Hanoi, Vietnam.                                         |\n' +
            '|      Please type ' + commandText('menu') + ' for a list of commands.                                                               |\n' +
            '|                                                                                                             |\n' +
            '###############################################################################################################\n';

        if (!firstLoad) {
            this.echo("\n" + basicMsg);
        } else {
            return advMsg;
        }
    },
    menu: function () {
        this.echo();
        this.echo('|  ' + commandText('motd') + '               - Display Message of the Day');
        this.echo();
        this.echo('|  ' + commandText('about') + '              - Summary of me');
        this.echo('|  ' + commandText('projects') + '           - Recent projects of mine');
        this.echo('|  ' + commandText('skills') + '             - What I can do');
        this.echo();
        this.echo('|  ' + commandText('github') + '             - Das github');
        this.echo('|  ' + commandText('linkedin') + '           - How I connect for work things');
        this.echo('|  ' + commandText('facebook') + '           - My personal social area');
        this.echo('|  ' + commandText('twitter') + '            - When 140 characters is enough');
        this.echo();
        this.echo('|  ' + commandText('contact') + '            - Contact me');
        this.echo('|  ' + commandText('credits') + '            - Credits for this website');
        this.echo();
        this.echo('|  ' + commandText('all') + '                - Run all commands');
        this.echo();
    },
    github: function () {
        this.echo();
        this.echo('|  http://www.github.com/nntoan');
        this.echo();
    },
    facebook: function () {
        this.echo();
        this.echo('|  http://www.facebook.com/nntoan');
        this.echo();
    },
    linkedin: function () {
        this.echo();
        this.echo('|  https://linkedin.com/in/nntoan');
        this.echo();
    },
    twitter: function () {
        this.echo();
        this.echo('|  http://www.twitter.com/nntoans');
        this.echo();
    },
    about: function () {
        var currentYear = new Date().getFullYear();
        this.echo();
        this.echo('|  Name:         ' + commandText('Toan Nguyen a.k.a Nguy&#7877;n Ng&#7885;c To&#7843;n'));
        this.echo('|  DOB:          23/09/1993 (' + commandText((currentYear - 1993)) + ' y.o)');
        this.echo('|  Location:     ' + commandText('Hanoi, Vietnam'));
        this.echo();
        this.echo('|  Vocation:     I am a Backend Web Developer (primarily ' + commandText('PHP') + ') and DevOps (Linux, AWS) specialist.');
        this.echo('|                I have been programming in a enterprise environment for ' + commandText('over 5 years.'));
        this.echo('|                I also do my fair share of front end development using technologies such as ' + commandText('Angular.js') + ' and ' + commandText('jQuery'));
        this.echo();
        this.echo('|  Employment:   I am currently ' + commandText('freelancing') + ' in the ' + commandText('Hanoi') + ' area. Get in touch if you\'d like to discuss a proposal!');
        this.echo();
    },
    projects: function () {
        this.echo();
        this.echo('|  ' + commandText('Goldsun') + '        http://goldsun.vn              // OpenCart  -- Main Developer');
        this.echo('|  ' + commandText('ThuDoGroup') + '     http://thudogroup.vn           // Joomla    -- Main Developer');
        this.echo('|  ' + commandText('NoiThatThuDo') + '   N/A                            // OpenCart  -- Main Developer');
        this.echo('|  ' + commandText('MatPho') + '         N/A                            // Magento   -- Backend Lead');
        this.echo('|  ' + commandText('LuyenCong') + '      http://www.luyencong.net       // MyBB      -- Main Developer');
        this.echo('|  ' + commandText('Glam It!') + '       http://www.glamit.com          // OpenCart  -- Backend Developer');
        this.echo('|  ' + commandText('CC-Stores') + '      http://cc-stores.com           // .NET MVC  -- Backend Developer');
        this.echo('|  ' + commandText('UpLink') + '         http://uplinkenglish.com       // AngularJS -- Backend Developer');
        this.echo();
    },
    skills: function () {
        this.echo();
        this.echo('|  ' + commandText('Languages'));
        this.echo();
        this.echo('|  ' + commandText('PHP') + '                    ##[[g;#00DE12;]#################################################]  ##');
        this.echo('|  ' + commandText('Linux') + '                  ##[[g;#42D100;]################################################]   ##');
        this.echo('|  ' + commandText('HTML5') + '                  ##[[g;#5BD100;]############################################]       ##');
        this.echo('|  ' + commandText('Javascript') + '             ##[[g;#5BD100;]############################################]       ##');
        this.echo('|  ' + commandText('CSS') + '                    ##[[g;#99D100;]############################################]       ##');
        this.echo('|  ' + commandText('.NET (C#)') + '              ##[[g;#B2D100;]###############################]                    ##');
        this.echo('|  ' + commandText('Java') + '                   ##[[g;#D1B900;]####################]                               ##');
        this.echo('|  ' + commandText('.NET MVC (C#)') + '          ##[[g;#D16200;]##############]                                     ##');
        this.echo();
        this.echo('|  ' + commandText('Frameworks and CMS'));
        this.echo();
        this.echo('|  ' + commandText('Magento') + '                ##[[g;#42D100;]###############################################]    ##');
        this.echo('|  ' + commandText('Open Cart') + '              ##[[g;#5BD100;]#############################################]      ##');
        this.echo('|  ' + commandText('MyBB') + '                   ##[[g;#99D100;]############################################]       ##');
        this.echo('|  ' + commandText('XenForo') + '                ##[[g;#99D100;]#########################################]          ##');
        this.echo('|  ' + commandText('AngularJS') + '              ##[[g;#B2D100;]########################################]           ##');
        this.echo('|  ' + commandText('Cake PHP') + '               ##[[g;#D16200;]##############]                                     ##');
        this.echo('|  ' + commandText('Symfony 2') + '              ##[[g;#D13F00;]#########]                                          ##');
        this.echo('|  ' + commandText('Laravel') + '                ##[[g;#D13F00;]#########]                                          ##');
        this.echo();
        this.echo('|  ' + commandText('Other'));
        this.echo();
        this.echo('|  ' + commandText('AWS') + '                    ##[[g;#5BD100;]############################################]       ##');
        this.echo('|  ' + commandText('Grunt/Gulp') + '             ##[[g;#B2D100;]#######################################]            ##');
        this.echo('|  ' + commandText('Virtualbox') + '             ##[[g;#B2D100;]#######################################]            ##');
        this.echo('|  ' + commandText('Vagrant') + '                ##[[g;#B2D100;]#######################################]            ##');
        this.echo();
    },
    contact: function () {
        this.echo();
        this.echo('|  ' + commandText('Email') + ':         nntoan@protonmail.com');
        this.echo('|  ' + commandText('LinkedIn') + ':      https://linkedin.com/in/nntoan');
        this.echo();
    },
    credits: function () {
        this.echo();
        this.echo('|  Site built by ' + commandText('Toan Nguyen'));
        this.echo('|  Using ' + commandText('Jquery Terminal Emulator') + ' by ' + commandText('Jakub Jankiewicz') + ': http://terminal.jcubic.pl');
        this.echo();
    },
    awards: function () {
        this.echo();
        this.echo('|  ' + commandText('Magento Developer Certificate'));
        this.echo('|  ' + commandText('Magento Developer Certificate Plus'));
        this.echo();
    },
    all: function () {
        App.allSection = true;
        this.clear();
        this.exec('motd');
        this.exec('about');
        this.exec('projects');
        this.exec('skills');
        this.exec('github');
        this.exec('linkedin');
        this.exec('facebook');
        this.exec('twitter');
        this.exec('contact');
        this.exec('credits');
        App.allSection = false;
    }
};

jQuery(document).ready(function ($) {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        window.location.href = 'https://linkedin.com/in/nntoan';
    } else {
        $('body').terminal(App, {
            greetings: function (cb) {
                cb(App.motd(true));
            },
            onBlur: function () {
                return false
            },
            onClear: function(terminal) {
                if (App.allSection !== true) {
                    terminal.echo(App.motd(true));
                }
            },
            completion: true,
            checkArity: false
        })
    }
});
